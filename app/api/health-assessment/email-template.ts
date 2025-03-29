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
  
  // Map program IDs to their full names, descriptions, and route IDs
  const programMap = {
    "rem-di-2": {
      name: "RemDi 2 - Type 2 and Pre Diabetes Reversal Programme",
      description: "RemDi utilises the power of nutrition to help individuals achieve remission and get their lives back on track.",
      route: "remdi2"
    },
    "rem-bliss": {
      name: "Rem Bliss - Women's Health Programme",
      description: "Women's Health Programme tackling PCOS/PCOD and Menopause. The programme utilises the power of nutrition and education to manage menopause & PCOS symptoms.",
      route: "rembliss"
    },
    "rem-meta": {
      name: "Rem Meta - Metabolic Health Programme",
      description: "Tackling Metabolic issues such as High Blood Pressure, Cardiac Risk, Fatty Liver and more. This program focuses on identifying the root cause of your metabolic disorder and developing a personalised plan to manage it.",
      route: "remmeta"
    },
    "rem-fit": {
      name: "Rem Fit - Weight Management Programme",
      description: "To achieve intense weight loss @4-5kg/month or simply stay fit. Learn healthy habits and achieve your weight loss goals with our sustainable program, going beyond just calorie counting!",
      route: "remfit"
    }
  };

  // Generate program links with email-safe styles and clickable program links
  const recommendedPrograms = data.recommendedProgram?.map((programId: string) => {
    const program = programMap[programId as keyof typeof programMap];
    if (program) {
      return `
        <a href="https://rem-nutri-web.vercel.app/programs/${program.route}" style="text-decoration: none; display: block; margin-bottom: 20px;">
          <div style="padding: 15px; background-color: #EBF5FF; border-left: 4px solid #3B82F6; border-radius: 4px; transition: transform 0.2s;">
            <h3 style="margin: 0 0 10px 0; color: #1E40AF; font-size: 16px;">${program.name}</h3>
            <p style="margin: 0; color: #3B82F6; font-size: 14px;">${program.description}</p>
            <div style="margin-top: 10px;">
              <span style="color: #2563EB; font-size: 14px; font-weight: 500;">Learn more →</span>
            </div>
          </div>
        </a>`;
    }
    return `<div style="color: #4B5563;">${programId}</div>`;
  }).join("") || "<div style='color: #4B5563;'>None recommended</div>";

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Assessment Report</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #F3F4F6; font-family: Arial, sans-serif; line-height: 1.5;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(to right, #3B82F6, #10B981); padding: 24px; color: #FFFFFF;">
            <h1 style="margin: 0 0 8px 0; font-size: 24px;">Your Personalized Health Snapshot</h1>
            <p style="margin: 0; opacity: 0.8;">Comprehensive insights into your wellness journey</p>
        </div>

        <div style="padding: 24px;">
            <div style="margin-bottom: 24px; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px;">
                <h2 style="margin: 0 0 16px 0; color: #374151; font-size: 18px;">Personal Details</h2>
                <div style="border-bottom: 1px solid #E5E7EB; padding-bottom: 8px; margin-bottom: 8px;">
                    <span style="color: #6B7280;">Name:</span>
                    <span style="float: right; color: #111827; font-weight: 500;">${data.name}</span>
                </div>
                <div style="border-bottom: 1px solid #E5E7EB; padding-bottom: 8px; margin-bottom: 8px;">
                    <span style="color: #6B7280;">Email:</span>
                    <span style="float: right; color: #111827; font-weight: 500;">${data.email}</span>
                </div>
                <div style="border-bottom: 1px solid #E5E7EB; padding-bottom: 8px; margin-bottom: 8px;">
                    <span style="color: #6B7280;">Phone:</span>
                    <span style="float: right; color: #111827; font-weight: 500;">${data.phone}</span>
                </div>
                <div style="border-bottom: 1px solid #E5E7EB; padding-bottom: 8px; margin-bottom: 8px;">
                    <span style="color: #6B7280;">Age:</span>
                    <span style="float: right; color: #111827; font-weight: 500;">${data.age}</span>
                </div>
                <div>
                    <span style="color: #6B7280;">Gender:</span>
                    <span style="float: right; color: #111827; font-weight: 500;">${data.gender}</span>
                </div>
            </div>

            <div style="margin-bottom: 24px; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px;">
                <h2 style="margin: 0 0 16px 0; color: #374151; font-size: 18px;">Physical Metrics</h2>
                <div style="margin-bottom: 12px;">
                    <span style="color: #6B7280;">Height:</span>
                    <span style="float: right; background: #3B82F6; color: #FFFFFF; padding: 4px 12px; border-radius: 9999px; font-size: 14px;">${data.height} cm</span>
                </div>
                <div style="margin-bottom: 12px;">
                    <span style="color: #6B7280;">Weight:</span>
                    <span style="float: right; background: #3B82F6; color: #FFFFFF; padding: 4px 12px; border-radius: 9999px; font-size: 14px;">${data.weight} kg</span>
                </div>
                <div style="margin-bottom: 12px;">
                    <span style="color: #6B7280;">BMI:</span>
                    <span style="float: right; background: ${
                      bmi < 18.5 ? '#EAB308' : 
                      bmi < 25 ? '#22C55E' : 
                      bmi < 30 ? '#F97316' : 
                      '#EF4444'
                    }; color: #FFFFFF; padding: 4px 12px; border-radius: 9999px; font-size: 14px;">${bmi} (${bmiCategory})</span>
                </div>
                <div>
                    <span style="color: #6B7280;">Blood Sugar:</span>
                    <span style="float: right; background: ${
                      data.bloodSugar === 'normal' ? '#22C55E' : 
                      data.bloodSugar === 'prediabetic' ? '#EAB308' : 
                      '#EF4444'
                    }; color: #FFFFFF; padding: 4px 12px; border-radius: 9999px; font-size: 14px;">${data.bloodSugar}</span>
                </div>
            </div>

            <div style="margin-bottom: 24px; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px;">
                <h2 style="margin: 0 0 16px 0; color: #374151; font-size: 18px;">Health Conditions</h2>
                <div style="color: #4B5563;">${data.healthConditions.map((condition: string) => 
                  `<div style="margin-bottom: 8px;">• ${condition}</div>`
                ).join('')}</div>
            </div>

            <div style="margin-bottom: 24px; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px;">
                <h2 style="margin: 0 0 16px 0; color: #374151; font-size: 18px;">Lifestyle Factors</h2>
                <div style="color: #4B5563;">${data.lifestyleFactors.map((factor: string) => 
                  `<div style="margin-bottom: 8px;">• ${factor}</div>`
                ).join('')}</div>
            </div>

            <div style="margin-bottom: 24px; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px;">
                <h2 style="margin: 0 0 16px 0; color: #374151; font-size: 18px;">Recommended Programs</h2>
                ${recommendedPrograms}
            </div>

            ${data.allergies ? `
            <div style="margin-bottom: 24px; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px;">
                <h2 style="margin: 0 0 16px 0; color: #374151; font-size: 18px;">Allergies</h2>
                <div style="color: #4B5563;">${data.allergies}</div>
            </div>
            ` : ''}

            ${data.medications ? `
            <div style="margin-bottom: 24px; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px;">
                <h2 style="margin: 0 0 16px 0; color: #374151; font-size: 18px;">Current Medications</h2>
                <div style="color: #4B5563;">${data.medications}</div>
            </div>
            ` : ''}
        </div>

        <div style="background-color: #F3F4F6; padding: 24px; text-align: center;">
            <p style="margin: 0 0 16px 0; color: #6B7280;">Report generated on ${data.timestamp}</p>
            <a href="https://rem-nutri-web.vercel.app/programs" 
               style="display: inline-block; background-color: #3B82F6; color: #FFFFFF; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: 500;">
                Explore Wellness Programs
            </a>
        </div>
    </div>
</body>
</html>`;
}; 