import { NextResponse } from "next/server";
import { getGoogleSheetsClient } from "@/app/utils/googleSheets";
import nodemailer from 'nodemailer';
import { google } from "googleapis";
import { generateEmailContent } from "./email-template";


const SHEET_NAME = "Health Assessments";

export async function POST(request: Request) {
  try {
    console.log("Creating Google Sheets client...");
    const sheets = await getGoogleSheetsClient();
    const data = await request.json();

    // First, get the spreadsheet to check if our sheet exists
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    });

    // Check if our sheet exists
    const sheetExists = spreadsheet.data.sheets?.some(
      (sheet) => sheet.properties?.title === SHEET_NAME
    );

    if (!sheetExists) {
      // Create new sheet if it doesn't exist
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
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
      const headers = [
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Age",
        "Gender",
        "Weight (kg)",
        "Height (cm)",
        "BMI",
        "Health Conditions",
        "Blood Sugar Level",
        "Weight Goal",
        "Activity Level",
        "Current Diet",
        "Lifestyle Factors",
        "Allergies",
        "Medications",
        "Recommended Program",
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: `${SHEET_NAME}!A1:R1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [headers],
        },
      });
    }

    // Format the data for Google Sheets
    const rowData = [
      new Date().toISOString(),
      data.name,
      data.email,
      data.phone,
      data.age,
      data.gender,
      data.weight,
      data.height,
      data.bmi?.toFixed(1) || "",
      data.healthConditions.join(", "),
      data.bloodSugar,
      data.weightGoal,
      data.activityLevel,
      data.currentDiet,
      data.lifestyleFactors.join(", "),
      data.allergies || "",
      data.medications || "",
      data.recommendedProgram.join(", "),
    ];

    // Append data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${SHEET_NAME}!A:R`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    // 5. Send notification emails
    console.log('Step 5: Sending notification emails');
    let emailSuccess = false;

    try {
      // Check if email is configured
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || 
          process.env.EMAIL_USER === 'your_actual_email@gmail.com' || 
          process.env.EMAIL_PASSWORD === 'your_16_character_app_password') {
        console.log('Email not configured - skipping');
      } else {
        // Create email transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
        
        // Send admin notification
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to admin
          subject: 'New Health Assessment Submission',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333333;">
              <h1 style="color: #004d40;">New Health Assessment Submission</h1>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
              <p><strong>Program:</strong> ${data.recommendedProgram.join(', ')}</p>
              <p><strong>BMI:</strong> ${data.bmi?.toFixed(1) || 'Not provided'}</p>
              <p><strong>Health Conditions:</strong> ${data.healthConditions.join(', ')}</p>
              <p><strong>Lifestyle Factors:</strong> ${data.lifestyleFactors.join(', ')}</p>
              <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
            </div>
          `,
        });
        console.log('Admin notification email sent');
        
        // Generate the email content using the template
        const emailContent = generateEmailContent(data);

        // Send detailed report to user
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: data.email,
          subject: "Your Health Assessment Report - Rem Nutri",
          html: emailContent,
        });
        console.log('User report email sent');
        
        emailSuccess = true;
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Continue processing - email failure isn't critical
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in health assessment submission:", error);
    return NextResponse.json(
      { error: "Failed to process health assessment" },
      { status: 500 }
    );
  }
} 