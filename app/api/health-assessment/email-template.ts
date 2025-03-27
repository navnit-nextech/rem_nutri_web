





export const generateEmailContent = (data: any) => {
  const bmi = data.bmi?.toFixed(1);
  const bmiCategory = bmi ? (
    bmi < 18.5 ? "Underweight" :
    bmi < 25 ? "Normal Weight" :
    bmi < 30 ? "Overweight" :
    "Obese"
  ) : "Not calculated";

  const healthConditions = data.healthConditions?.join(", ") || "None reported";
  const lifestyleFactors = data.lifestyleFactors?.join(", ") || "None reported";
  
  // Map program IDs to their full names and route IDs
  const programMap = {
    "rem-di-2": {
      name: "RemDi 2 - Type 2 and Pre Diabetes Reversal Programme",
      route: "remdi2"
    },
    "rem-bliss": {
      name: "Rem Bliss - Women's Health Programme",
      route: "rembliss"
    },
    "rem-meta": {
      name: "Rem Meta - Metabolic Health Programme",
      route: "remmeta"
    },
    "rem-fit": {
      name: "Rem Fit - Weight Management Programme",
      route: "remfit"
    }
  };

  // Generate program links
  const recommendedPrograms = data.recommendedProgram?.map((programId: string) => {
    const program = programMap[programId as keyof typeof programMap];
    if (program) {
      return `<li><a href="https://rem-nutri-web.vercel.app/programs/${program.route}" style="color: #2c5282; text-decoration: none;">• ${program.name}</a></li>`;
    }
    return `<li>• ${programId}</li>`;
  }).join("") || "<li>None recommended</li>";

  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo {
      max-width: 150px;
      margin-bottom: 20px;
    }
    .section {
      margin-bottom: 25px;
      padding: 15px;
      background-color: #f9f9f9;
      border-radius: 8px;
    }
    .section-title {
      color: #2c5282;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .metric {
      margin-bottom: 10px;
    }
    .metric-label {
      font-weight: bold;
      color: #4a5568;
    }
    .programs {
      list-style-type: none;
      padding-left: 0;
    }
    .programs li {
      margin-bottom: 10px;
      padding: 10px;
      background-color: #e6f0ff;
      border-radius: 5px;
    }
    .programs a:hover {
      text-decoration: underline !important;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="header">
  

    <h1>Your Health Assessment Report</h1>
    <p>Thank you for completing your health assessment. Here's your personalized report.</p>
  </div>

  <div class="section">
    <div class="section-title">Personal Information</div>
    <div class="metric">
      <span class="metric-label">Name:</span> ${data.name}
    </div>
    <div class="metric">
      <span class="metric-label">Email:</span> ${data.email}
    </div>
    <div class="metric">
      <span class="metric-label">Phone:</span> ${data.phone}
    </div>
    <div class="metric">
      <span class="metric-label">Age:</span> ${data.age}
    </div>
    <div class="metric">
      <span class="metric-label">Gender:</span> ${data.gender}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Physical Metrics</div>
    <div class="metric">
      <span class="metric-label">Height:</span> ${data.height} cm
    </div>
    <div class="metric">
      <span class="metric-label">Weight:</span> ${data.weight} kg
    </div>
    <div class="metric">
      <span class="metric-label">BMI:</span> ${bmi} (${bmiCategory})
    </div>
    <div class="metric">
      <span class="metric-label">Blood Sugar Level:</span> ${data.bloodSugar}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Health Conditions</div>
    <p>${healthConditions}</p>
  </div>

  <div class="section">
    <div class="section-title">Lifestyle Factors</div>
    <p>${lifestyleFactors}</p>
  </div>

  <div class="section">
    <div class="section-title">Recommended Programs</div>
    <ul class="programs">
      ${recommendedPrograms}
    </ul>
  </div>

  ${data.allergies ? `
  <div class="section">
    <div class="section-title">Allergies</div>
    <p>${data.allergies}</p>
  </div>
  ` : ''}

  ${data.medications ? `
  <div class="section">
    <div class="section-title">Current Medications</div>
    <p>${data.medications}</p>
  </div>
  ` : ''}

  <div class="footer">
    <p><strong>Submitted at:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
    <p>For more information about our programs, visit <a href="https://rem-nutri-web.vercel.app/programs" style="color: #2c5282; text-decoration: none;">rem-nutri-web.vercel.app/programs</a></p>
  </div>
</body>
</html>
`;
}; 