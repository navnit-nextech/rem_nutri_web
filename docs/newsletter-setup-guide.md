# Newsletter Subscription Setup Guide

This guide explains how to set up the newsletter subscription feature for the RemNutri website, which stores emails in a Google Sheet and sends confirmation emails to subscribers.

## 1. Google Sheets API Setup

### Create a Google Cloud Project
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Enable the Google Sheets API for your project.

### Create a Service Account
1. In your Google Cloud project, go to "IAM & Admin" > "Service Accounts".
2. Click "Create Service Account".
3. Give it a name (e.g., "remnutri-newsletter").
4. Grant this service account the "Editor" role.
5. Click "Continue" and then "Done".

### Generate Service Account Key
1. Click on the newly created service account.
2. Go to the "Keys" tab.
3. Click "Add Key" > "Create New Key".
4. Choose "JSON" format and click "Create".
5. The key file will be downloaded to your computer. Keep it secure!

### Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com/) and create a new spreadsheet.
2. Name the spreadsheet (e.g., "RemNutri Newsletter Subscribers").
3. Note the spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`.
4. Share the spreadsheet with your service account email (give it "Editor" access).

### Update Environment Variables
Update the `.env.local` file with your Google Cloud credentials:
```
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_CLIENT_EMAIL=service-account-email@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_private_key_here\n-----END PRIVATE KEY-----\n"
```

Make sure to:
1. Replace newlines in the private key with `\n`.
2. Keep the quotes around the private key.

## 2. Email Setup (Gmail)

### Create App Password for Gmail
1. Go to your [Google Account](https://myaccount.google.com/).
2. Select "Security".
3. Under "Signing in to Google," select "App passwords". (You may need to enable 2-Step Verification first).
4. At the bottom, select "Select app" and choose "Other (Custom name)".
5. Enter "RemNutri Newsletter" and click "Generate".
6. Google will display an app password. Copy this password.

### Update Environment Variables
Update the `.env.local` file with your email credentials:
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

## 3. Testing the Setup

1. After completing the setup, deploy or run your application.
2. Test the subscription form in the footer.
3. Verify that:
   - The email address gets stored in your Google Sheet.
   - The subscriber receives a confirmation email.
   - Success/error messages display appropriately.

## Troubleshooting

### Google Sheets Error: "DECODER routines::unsupported"

This error typically happens when the private key is not properly formatted. To fix it:

1. Open your service account key JSON file
2. Copy the private_key value 
3. In your `.env.local` file, format the GOOGLE_PRIVATE_KEY like this:
   ```
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
   MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3FjidgYmw0Rna
   VIcrSDnnKS0hBa+ICuA13V+XLsn6RI0UJ9nBiUAMQqVK/BqUZm2HSQCB7j96TYzb
   ... (rest of your key) ...
   2L+IWYF6FHfFYbzLIM1QQyxXdJ1krT0uJANISeVvD/bTvQ==
   -----END PRIVATE KEY-----"
   ```
   
   Note: The key should have actual newlines, not `\n` characters.

### Email Error: "Username and Password not accepted"

This error happens when using Gmail and either:

1. You're using your regular password instead of an App Password
2. Your App Password is incorrect or expired

To fix:

1. Make sure 2-factor authentication is enabled on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Other (Custom name)" and enter "RemNutri Newsletter"
4. Click "Generate"
5. Copy the generated password (16 characters with no spaces)
6. Update your `.env.local` file:
   ```
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=yourgeneratedapppassword
   ```

### Testing the API Directly

You can test the API endpoint directly using tools like Postman or curl:

```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

This can help diagnose issues without going through the frontend form.

## Security Considerations

- Never commit `.env.local` or any files containing API keys to version control.
- Consider using a more secure method for storing secrets in production.
- Limit the permissions of your service account to only what's needed.
- Implement rate limiting to prevent abuse of the subscription form.

# Verifying Your Setup

We've included a special endpoint to help verify if your Google Sheets and Email credentials are working correctly.

Visit the following URL in your browser (only works in development mode):
```
http://localhost:3000/api/test-credentials
```

This will return a JSON response showing if your credentials are configured and working:
```json
{
  "success": true,
  "message": "Credential test completed",
  "results": {
    "googleSheets": {
      "configured": true,
      "working": true,
      "error": null
    },
    "email": {
      "configured": true,
      "working": true,
      "error": null
    }
  }
}
```

If there are any issues, the `error` field will contain the specific error message that can help you troubleshoot.

## Common Issues and Solutions

# Important: Fixing Google Sheets Permission Error

If you encounter the error: **"The caller does not have permission"**, it's because your service account doesn't have access to the spreadsheet.

## Steps to Fix:

1. Go to your Google Spreadsheet (`1HH9pUXPawtxXzgS_QGbHEielUFSAstNgVGzD9E8NfA8`)
2. Click the "Share" button in the top-right corner
3. Add your service account email: `remnutri@remnutri.iam.gserviceaccount.com`
4. Give it "Editor" access
5. Make sure to uncheck "Notify people" option
6. Click "Share"

This will give your service account the necessary permission to access and modify the spreadsheet.

# Testing & Debugging Tools

We've added special testing tools to help you configure and debug the newsletter system:

## 1. Test Admin Page

Visit this page in your browser to test email sending and Google Sheets integration:
```
http://localhost:3000/admin/newsletter-test
```

This page provides a user-friendly interface to:
- Test email sending (using your configured Gmail credentials)
- Test Google Sheets integration (using your service account)
- Test the full subscription flow

## 2. API Test Endpoints

You can also directly test the individual components via these API endpoints:

- Email Test: `POST /api/email-test` (with body `{"email": "test@example.com"}`)  
- Sheets Test: `POST /api/sheets-test`
- Full Subscribe: `POST /api/subscribe` (with body `{"email": "test@example.com"}`)

These endpoints provide detailed error messages to help troubleshoot configuration issues. 