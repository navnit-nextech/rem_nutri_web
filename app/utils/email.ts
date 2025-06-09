import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

// Remove OAuth2 client setup as we will use SMTP
// const oauth2Client = new OAuth2Client(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
//   process.env.GOOGLE_REDIRECT_URI
// );

// Remove set credentials
// oauth2Client.setCredentials({
//   refresh_token: process.env.GOOGLE_REFRESH_TOKEN
// });

// Function to create and return a Nodemailer transporter for Zoho
const createZohoTransporter = () => {
  try {
    // Validate required env vars for email
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing EMAIL_USER or EMAIL_PASSWORD environment variables.');
      throw new Error('Email credentials not configured.');
    }

    // Create transporter using Zoho SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in', // Or 'smtp.zoho.com' depending on your Zoho region
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log(`Zoho transporter created for ${process.env.EMAIL_USER}`);
    return transporter;
  } catch (error) {
    console.error('Error creating Zoho email transporter:', error);
    throw new Error('Failed to create email transporter.');
  }
};

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  try {
    // Use the Zoho transporter
    const transporter = createZohoTransporter();

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address (your Zoho email)
      to: to, // List of recipients
      subject: subject, // Subject line
      text: text, // Plain text body
      html: html, // HTML body (optional)
    });

    console.log('Email sent successfully:', info.messageId);
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); // Uncomment if using Ethereal
    return info;
  } catch (error) {
    console.error('Error sending email via Zoho SMTP:', error);
    throw error;
  }
} 