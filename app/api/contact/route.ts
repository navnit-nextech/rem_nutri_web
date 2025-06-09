import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { getGoogleSheetsClient } from '@/app/utils/googleSheets';

// Google Sheets setup
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'ContactSubmissions';

// Fallback local storage setup - only enabled in development
const DATA_DIR = path.join(process.cwd(), 'data');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

// Initialize local storage if needed (only in development)
if (process.env.NODE_ENV !== 'production') {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(CONTACTS_FILE)) {
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify([], null, 2));
  }
}

// Function to store contact information in Google Sheets
const storeContactInGoogleSheets = async (contactData: any, timestamp: string) => {
  try {
    const { firstName, lastName, email, service, message } = contactData;
    const sheets = await getGoogleSheetsClient();
    
    // First, get the existing sheets in the spreadsheet
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });
    
    // Check if the ContactSubmissions sheet exists
    const contactSheet = spreadsheet.data.sheets?.find(
      sheet => sheet.properties?.title === SHEET_NAME
    );
    
    // If the ContactSubmissions sheet doesn't exist, create it
    if (!contactSheet) {
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
        range: `${SHEET_NAME}!A1:F1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [['First Name', 'Last Name', 'Email', 'Service', 'Message', 'Timestamp']],
        },
      });
    }
    
    // Append new contact data
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[firstName, lastName, email, service, message, timestamp]],
      },
    });
    
    console.log(`Contact from ${email} stored in Google Sheets at ${timestamp}`);
    return true;
  } catch (error: any) {
    console.error('Google Sheets error:', error);
    return false;
  }
};

// Function to store contact information locally
const storeContactLocally = async (contactData: any, timestamp: string) => {
  try {
    // Read current contacts
    const contactsRaw = fs.readFileSync(CONTACTS_FILE, 'utf8');
    const contacts = JSON.parse(contactsRaw || '[]');
    
    // Add new contact with timestamp
    contacts.push({ ...contactData, timestamp });
    
    // Write back to file
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
    
    console.log(`Contact from ${contactData.email} stored locally at ${timestamp}`);
    return true;
  } catch (error) {
    console.error('Error storing contact locally:', error);
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
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
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

const validServices = [
  'rembliss',
  'remprotein',
  'remfit',
  'rembalance',
  'remmeta',
  'remdi2'
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, service, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate service
    if (!validServices.includes(service)) {
      return NextResponse.json(
        { message: 'Invalid service selected' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Add timestamp
    const timestamp = new Date().toISOString();
    let storedSuccessfully = false;
    let emailSentSuccessfully = false;
    
    // 1. Try to store in Google Sheets
    const googleSheetsSuccess = await storeContactInGoogleSheets(body, timestamp);
    
    // 2. If Google Sheets fails or as a backup, store locally
    if (!googleSheetsSuccess) {
      console.log('Falling back to local storage for contact data');
      storedSuccessfully = await storeContactLocally(body, timestamp);
    } else {
      storedSuccessfully = true;
    }
    
    // 3. Try to send notification email to admin and confirmation to user
    try {
      // Check for placeholder email credentials
      if (process.env.EMAIL_USER === 'your_actual_email@gmail.com' || 
          process.env.EMAIL_PASSWORD === 'your_16_character_app_password') {
        console.error('Email not configured: You need to replace the placeholder email credentials in .env.local file');
        throw new Error('Email credentials are still set to placeholder values');
      }

      const transporter = createTransporter();
      
      // Send notification to admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself/admin
        subject: 'New Contact Form Submission',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333333;">
            <h1 style="color: #004d40;">New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="padding: 15px; background-color: #f7f7f7; border-radius: 5px;">${message}</p>
            <p><strong>Submitted at:</strong> ${new Date(timestamp).toLocaleString()}</p>
          </div>
        `,
      });
      
      // Send confirmation to user
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'We received your message - RemNutri',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333333;">
            <h1 style="color: #004d40;">Thank You for Contacting Us!</h1>
            <p>Hello ${firstName},</p>
            <p>Thank you for reaching out to RemNutri. We have received your message and will get back to you as soon as possible.</p>
            <p>Here's a summary of your inquiry:</p>
            <div style="margin: 30px 0; padding: 15px; background-color: #f7f7f7; border-radius: 5px;">
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>
            <p>If you have any urgent questions, please contact us directly at <a href="tel:8450 9087" style="color: #004d40; text-decoration: none;">8450 9087</a></p>
            <p>Best regards,<br>The RemNutri Team</p>
            <hr style="border: 1px solid #eeeeee; margin: 20px 0;">
            <p style="font-size: 12px; color: #777777;">
              RemNutri Health Private Limited<br>
              <a href="https://rem-nutri-web.vercel.app/" style="color: #004d40; text-decoration: none;">www.remnutri.com</a>
            </p>
          </div>
        `,
      });
      
      console.log('Contact emails sent successfully');
      emailSentSuccessfully = true;
    } catch (error: any) {
      let errorMessage = 'Email sending error';
      
      if (error.code === 'EAUTH') {
        errorMessage = 'Authentication failed with the email provider. Please double-check your email credentials in the .env.local file.';
      } else if (error.message && error.message.includes('placeholder')) {
        errorMessage = 'Email credentials still using placeholder values in .env.local file';
      }
      
      console.error(`${errorMessage}:`, error);
      // Email failed, but we'll still acknowledge the submission if storage worked
    }
    
    // 4. Return appropriate response
    if (storedSuccessfully && emailSentSuccessfully) {
      return NextResponse.json(
        { 
          message: 'Thank you for your message! We will get back to you soon.',
          data: {
            firstName,
            lastName,
            email,
            service,
            message
          }
        },
        { status: 200 }
      );
    } else if (storedSuccessfully) {
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your message! We have received your inquiry, but could not send a confirmation email.' 
      });
    } else {
      // Critical error - couldn't store contact information
      return NextResponse.json({ 
        success: false, 
        message: 'We could not process your request. Please try again later or contact us directly.' 
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'An error occurred while processing your request' 
    }, { status: 500 });
  }
} 