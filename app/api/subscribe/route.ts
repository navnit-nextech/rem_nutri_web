import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { getGoogleSheetsClient } from '@/app/utils/googleSheets';

// Google Sheets setup
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Subscribers';

// Fallback local storage setup - only enabled in development
const DATA_DIR = path.join(process.cwd(), 'data');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

// Initialize local storage if needed (only in development)
if (process.env.NODE_ENV !== 'production') {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([], null, 2));
  }
}

// Function to store email locally
const storeEmailLocally = async (email: string, timestamp: string) => {
  try {
    // Read current subscribers
    const subscribersRaw = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8');
    const subscribers = JSON.parse(subscribersRaw || '[]');
    
    // Add new subscriber
    subscribers.push({ email, timestamp });
    
    // Write back to file
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
    
    console.log(`Email ${email} stored locally at ${timestamp}`);
    return true;
  } catch (error) {
    console.error('Error storing email locally:', error);
    return false;
  }
};

// Email setup
const createTransporter = () => {
  try {
    // Validate required env vars
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error('Missing email credentials');
    }
    
    console.log(`Creating transporter with email: ${process.env.EMAIL_USER}`);
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    return transporter;
  } catch (error) {
    console.error('Error creating email transporter:', error);
    throw new Error('Failed to create email transporter');
  }
};

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Invalid email format' }, { status: 400 });
    }
    
    // Add timestamp
    const timestamp = new Date().toISOString();
    let storedSuccessfully = false;
    let emailSentSuccessfully = false;
    
    // 1. Try to store in Google Sheet
    try {
      const sheets = await getGoogleSheetsClient();
      
      // First, get the existing sheets in the spreadsheet
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID,
      });
      
      // Check if the Subscribers sheet exists
      const subscribersSheet = spreadsheet.data.sheets?.find(
        sheet => sheet.properties?.title === SHEET_NAME
      );
      
      // If the Subscribers sheet doesn't exist, create it
      if (!subscribersSheet) {
        console.log(`Creating new sheet named '${SHEET_NAME}'`);
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: SPREADSHEET_ID,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: SHEET_NAME,
                  },
                },
              },
            ],
          },
        });
        
        // Add headers to the new sheet
        await sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${SHEET_NAME}!A1:B1`,
          valueInputOption: 'RAW',
          requestBody: {
            values: [['Email', 'Timestamp']],
          },
        });
      }
      
      // Append new subscriber
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:B`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [[email, timestamp]],
        },
      });
      
      console.log(`Email ${email} stored in Google Sheets at ${timestamp}`);
      storedSuccessfully = true;
    } catch (error: any) {
      if (error.status === 403 || (error.message && error.message.includes('permission'))) {
        console.error('Permission error with Google Sheets:');
        console.error(`- Make sure to share the spreadsheet with: ${process.env.GOOGLE_CLIENT_EMAIL}`);
        console.error('- Give Editor access to the service account');
      } else {
        console.error('Google Sheets error:', error);
      }
      
      // Fallback to local storage
      console.log('Falling back to local storage');
      storedSuccessfully = await storeEmailLocally(email, timestamp);
    }
    
    // 2. Try to send confirmation email
    try {
      // Check for placeholder email credentials
      if (process.env.EMAIL_USER === 'your_actual_email@gmail.com' || 
          process.env.EMAIL_PASSWORD === 'your_16_character_app_password') {
        console.error('Email not configured: You need to replace the placeholder email credentials in .env.local file');
        throw new Error('Email credentials are still set to placeholder values');
      }

      console.log(`Creating transporter with email: ${process.env.EMAIL_USER}`);
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      
      console.log('Sending confirmation email...');
      
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to RemNutri Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333333;">
            <img src="https://your-website.com/images/rem_nutri_logo_.png" alt="RemNutri Logo" style="max-width: 150px; margin-bottom: 20px;">
            <h1 style="color: #004d40;">Thank You for Subscribing!</h1>
            <p>Hello,</p>
            <p>Thank you for subscribing to the RemNutri newsletter. We're excited to share updates, health tips, and special offers with you.</p>
            <p>You'll start receiving our newsletter soon. In the meantime, feel free to explore our website for more information about our services.</p>
            <div style="margin: 30px 0; padding: 15px; background-color: #f7f7f7; border-radius: 5px;">
              <p style="margin: 0; font-style: italic;">For any questions, please contact us at <a href="mailto:support@remnutri.com" style="color: #004d40; text-decoration: none;">support@remnutri.com</a></p>
            </div>
            <p>Best regards,<br>The RemNutri Team</p>
            <hr style="border: 1px solid #eeeeee; margin: 20px 0;">
            <p style="font-size: 12px; color: #777777;">
              RemNutri Health Private Limited<br>
              <a href="https://www.remnutri.com" style="color: #004d40; text-decoration: none;">www.remnutri.com</a>
            </p>
          </div>
        `,
      });
      
      console.log('Confirmation email sent successfully');
      emailSentSuccessfully = true;
    } catch (error: any) {
      let errorMessage = 'Email sending error';
      
      if (error.code === 'EAUTH') {
        errorMessage = 'Authentication failed with email provider. Make sure you\'re using an App Password for Gmail.';
      } else if (error.message && error.message.includes('placeholder')) {
        errorMessage = 'Email credentials still using placeholder values in .env.local file';
      }
      
      console.error(`${errorMessage}:`, error);
      // Email failed, but we'll still acknowledge the subscription if storage worked
    }
    
    // 3. Return appropriate response
    if (storedSuccessfully && emailSentSuccessfully) {
      return NextResponse.json({ 
        success: true, 
        message: 'Subscription successful! Check your email for confirmation.' 
      });
    } else if (storedSuccessfully) {
      return NextResponse.json({ 
        success: true, 
        message: 'Subscription successful! However, we could not send a confirmation email.' 
      });
    } else {
      // Critical error - couldn't store email anywhere
      return NextResponse.json({ 
        success: false, 
        message: 'We could not process your subscription. Please try again later.' 
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Internal server error' 
    }, { status: 500 });
  }
} 