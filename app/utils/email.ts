import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
}

// Initialize OAuth2 client
const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Set credentials
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

export async function sendEmail({ to, subject, text }: EmailOptions) {
  try {
    // @ts-ignore
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    // Create email in base64 format
    const email = [
      'Content-Type: text/plain; charset="UTF-8"\n',
      'MIME-Version: 1.0\n',
      `To: ${to}\n`,
      `Subject: ${subject}\n\n`,
      text,
    ].join('');

    const encodedEmail = Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });

    console.log('Email sent successfully:', res.data);
    return res.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
} 