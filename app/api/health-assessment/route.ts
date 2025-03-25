import { NextResponse } from "next/server";
import { getGoogleSheetsClient } from "@/app/utils/googleSheets";
import { sendEmail } from "@/app/utils/email";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const sheets = await getGoogleSheetsClient();

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
      data.conditions.join(", "),
      data.otherCondition,
      data.goals,
      data.currentDiet,
      data.allergies,
      data.medications,
      data.recommendedProgram,
    ];

    // Append data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Health Assessments!A:P",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    // Send email notification
    const emailContent = `
      Dear ${data.name},

      Thank you for completing your health assessment. Based on your responses, we recommend our ${data.recommendedProgram} program.

      Your Health Assessment Summary:
      - BMI: ${data.bmi?.toFixed(1) || "Not calculated"}
      - Health Conditions: ${data.conditions.join(", ")}${data.otherCondition ? `, ${data.otherCondition}` : ""}
      - Recommended Program: ${data.recommendedProgram}

      We'll be in touch shortly to discuss your personalized program in detail.

      Best regards,
      Rem Nutri Team
    `;

    await sendEmail({
      to: data.email,
      subject: "Your Health Assessment Results - Rem Nutri",
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing health assessment:", error);
    return NextResponse.json(
      { error: "Failed to process health assessment" },
      { status: 500 }
    );
  }
} 