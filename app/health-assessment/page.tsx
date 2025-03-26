"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2, Activity, Heart, Scale, Brain, Clock, Target, TrendingUp, AlertCircle, Loader2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";


const healthConditions = [
  "Diabetes",
  "PCOS/PCOD",
  "Thyroid",
  "Fatty Liver",
  "Other",
];

const programs = [
  {
    id: "rem-di-2",
    name: "RemDi 2",
    description: "Type 2 and Pre Diabetes Reversal Programme",
    icon: "🩺"
  },
  {
    id: "rem-bliss",
    name: "Rem Bliss",
    description: "Women's Health Programme tackling PCOS/PCOD and Menopause",
    icon: "🌸"
  },
  {
    id: "rem-meta",
    name: "Rem Meta",
    description: "Tackling Metabolic issues such as High Blood Pressure, Cardiac Risk, Fatty Liver and more",
    icon: "❤️"
  },
  {
    id: "rem-fit",
    name: "Rem Fit",
    description: "To achieve intense weight loss @4-5kg/month or simply stay fit",
    icon: "⚖️"
  }
];

const formSteps = [
  {
    title: "Personal Information",
    description: "Let's start with your basic details",
    fields: [
      {
        type: "text",
        name: "name",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
      },
      {
        type: "email",
        name: "email",
        label: "Email Address",
        placeholder: "Enter your email",
        required: true,
      },
      {
        type: "tel",
        name: "phone",
        label: "Phone Number",
        placeholder: "Enter your phone number",
        required: true,
      },
    ],
  },
  {
    title: "Physical Details",
    description: "Help us understand your physical characteristics",
    fields: [
      {
        type: "select",
        name: "gender",
        label: "Gender",
        options: [
          { value: "male", label: "Male", icon: "👨" },
          { value: "female", label: "Female", icon: "👩" },
          { value: "other", label: "Other", icon: "👤" },
        ],
        required: true,
      },
      {
        type: "number",
        name: "age",
        label: "Age",
        placeholder: "Enter your age",
        required: true,
      },
      {
        type: "number",
        name: "weight",
        label: "Weight (kg)",
        placeholder: "Enter your weight in kg",
        required: true,
      },
      {
        type: "number",
        name: "height",
        label: "Height (cm)",
        placeholder: "Enter your height in cm",
        required: true,
      },
    ],
  },
  {
    title: "Health Screening",
    description: "Let's check your key health indicators",
    fields: [
      {
        type: "multiselect",
        name: "healthConditions",
        label: "Do you have any of these conditions?",
        options: [
          { value: "diabetes", label: "Diabetes/Pre-Diabetes", icon: "🩺" },
          { value: "pcos", label: "PCOS/PCOD", icon: "🌸" },
          { value: "menopause", label: "Menopause", icon: "🌺" },
          { value: "hypertension", label: "High Blood Pressure", icon: "❤️" },
          { value: "cardiac", label: "Cardiac Issues", icon: "💓" },
          { value: "fattyLiver", label: "Fatty Liver", icon: "🫁" },
          { value: "thyroid", label: "Thyroid Issues", icon: "⚕️" },
        ],
        required: true,
      },
      {
        type: "select",
        name: "bloodSugar",
        label: "Blood Sugar Level",
        options: [
          { value: "normal", label: "Normal", icon: "✅" },
          { value: "prediabetic", label: "Pre-Diabetic", icon: "⚠️" },
          { value: "diabetic", label: "Diabetic", icon: "🩺" },
        ],
        required: true,
      },
    ],
  },
  {
    title: "Weight Goals",
    description: "Tell us about your weight management goals",
    fields: [
      {
        type: "select",
        name: "weightGoal",
        label: "What's your primary goal?",
        options: [
          { value: "intense", label: "Intense Weight Loss (4-5kg/month)", icon: "⚡" },
          { value: "moderate", label: "Moderate Weight Loss", icon: "⚖️" },
          { value: "maintain", label: "Maintain Weight", icon: "🎯" },
        ],
        required: true,
      },
      {
        type: "select",
        name: "activityLevel",
        label: "Current Activity Level",
        options: [
          { value: "sedentary", label: "Sedentary", icon: "🛋️" },
          { value: "moderate", label: "Moderate Exercise", icon: "🏃" },
          { value: "active", label: "Very Active", icon: "🏋️" },
        ],
        required: true,
      },
    ],
  },
  {
    title: "Lifestyle & Diet",
    description: "Tell us about your current lifestyle",
    fields: [
      {
        type: "select",
        name: "currentDiet",
        label: "Current Diet",
        options: [
          { value: "vegetarian", label: "Vegetarian", icon: "🥬" },
          { value: "vegan", label: "Vegan", icon: "🌱" },
          { value: "nonVegetarian", label: "Non-Vegetarian", icon: "🍖" },
        ],
        required: true,
      },
      {
        type: "multiselect",
        name: "lifestyleFactors",
        label: "Lifestyle Factors",
        options: [
          { value: "stress", label: "High Stress", icon: "😰" },
          { value: "sleep", label: "Poor Sleep", icon: "😴" },
          { value: "irregular", label: "Irregular Meals", icon: "⏰" },
          { value: "processed", label: "Processed Food", icon: "🍔" },
        ],
        required: true,
      },
    ],
  },
  {
    title: "Additional Information",
    description: "Any other relevant information",
    fields: [
      {
        type: "textarea",
        name: "allergies",
        label: "Allergies",
        placeholder: "List any allergies you have",
      },
      {
        type: "textarea",
        name: "medications",
        label: "Current Medications",
        placeholder: "List any medications you're currently taking",
      },
    ],
  },
];

type LifestyleFactor = 'stress' | 'sleep' | 'irregular' | 'processed';

const HealthAssessment = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(() => {
    // Try to get saved form data from localStorage
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('healthAssessmentData');
      if (savedData) {
        return JSON.parse(savedData);
      }
    }
    return {
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      weight: "",
      height: "",
      healthConditions: [] as string[],
      bloodSugar: "",
      weightGoal: "",
      activityLevel: "",
      currentDiet: "",
      lifestyleFactors: [] as LifestyleFactor[],
      allergies: "",
      medications: "",
    };
  });

  const [currentStep, setCurrentStep] = useState(() => {
    // Try to get saved step from localStorage
    if (typeof window !== 'undefined') {
      const savedStep = localStorage.getItem('healthAssessmentStep');
      return savedStep ? parseInt(savedStep) : 0;
    }
    return 0;
  });

  const [bmi, setBmi] = useState<number | null>(() => {
    // Try to get saved BMI from localStorage
    if (typeof window !== 'undefined') {
      const savedBmi = localStorage.getItem('healthAssessmentBMI');
      return savedBmi ? parseFloat(savedBmi) : null;
    }
    return null;
  });

  const [recommendedProgram, setRecommendedProgram] = useState<string[]>(() => {
    // Try to get saved recommended programs from localStorage
    if (typeof window !== 'undefined') {
      const savedPrograms = localStorage.getItem('healthAssessmentPrograms');
      return savedPrograms ? JSON.parse(savedPrograms) : [];
    }
    return [];
  });

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('healthAssessmentData', JSON.stringify(formData));
    }
  }, [formData]);

  // Save current step to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('healthAssessmentStep', currentStep.toString());
    }
  }, [currentStep]);

  // Save BMI to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && bmi !== null) {
      localStorage.setItem('healthAssessmentBMI', bmi.toString());
    }
  }, [bmi]);

  // Save recommended programs to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined' && recommendedProgram.length > 0) {
      localStorage.setItem('healthAssessmentPrograms', JSON.stringify(recommendedProgram));
    }
  }, [recommendedProgram]);

  // Clear localStorage when component unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('healthAssessmentData');
        localStorage.removeItem('healthAssessmentStep');
        localStorage.removeItem('healthAssessmentBMI');
        localStorage.removeItem('healthAssessmentPrograms');
      }
    };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const calculateBMI = () => {
    if (formData.weight && formData.height) {
      const heightInMeters = parseFloat(formData.height) / 100;
      const weightInKg = parseFloat(formData.weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue);
      return bmiValue;
    }
    return null;
  };

  const determineProgram = () => {
    const bmiValue = calculateBMI();
    const conditions = formData.healthConditions || [];
    const weightGoal = formData.weightGoal;
    const gender = formData.gender;
    const bloodSugar = formData.bloodSugar;
    const activityLevel = formData.activityLevel;
    const lifestyleFactors = formData.lifestyleFactors || [];

    // Initialize recommended programs array
    const recommendedPrograms: string[] = [];

    // Check for RemDi 2 (Diabetes)
    if (bloodSugar === 'diabetic' || bloodSugar === 'prediabetic') {
      recommendedPrograms.push('rem-di-2');
    }

    // Check for Rem Bliss (Women's Health)
    if (gender === 'female' && (conditions.includes('pcos') || conditions.includes('menopause'))) {
      recommendedPrograms.push('rem-bliss');
    }

    // Check for Rem Meta (Metabolic Issues)
    if (conditions.includes('hypertension') || 
        conditions.includes('cardiac') || 
        conditions.includes('fattyLiver') || 
        conditions.includes('thyroid')) {
      recommendedPrograms.push('rem-meta');
    }

    // Check for Rem Fit (Weight Management)
    if (bmiValue && bmiValue > 30) {
      recommendedPrograms.push('rem-fit');
    } else if (weightGoal === 'intense' || weightGoal === 'moderate') {
      recommendedPrograms.push('rem-fit');
    }

    // If no specific conditions match, recommend Rem Fit for general fitness
    if (recommendedPrograms.length === 0) {
      recommendedPrograms.push('rem-fit');
    }

    return recommendedPrograms;
  };

  const validateForm = () => {
    const requiredFields = [
      { name: "name", label: "Full Name" },
      { name: "email", label: "Email Address" },
      { name: "phone", label: "Phone Number" },
      { name: "age", label: "Age" },
      { name: "gender", label: "Gender" },
      { name: "weight", label: "Weight" },
      { name: "height", label: "Height" },
      { name: "bloodSugar", label: "Blood Sugar Level" },
    ];

    for (const field of requiredFields) {
      if (!formData[field.name as keyof typeof formData]) {
        setValidationError(`Please fill in ${field.label}`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const program = determineProgram();
    setRecommendedProgram(program);

    // Show the report immediately
    setCurrentStep(formSteps.length);

    // Handle data submission in the background
    const submitData = async () => {
      try {
        // Get current IST timestamp
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
        const istDate = new Date(now.getTime() + istOffset);
        const timestamp = istDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        const response = await fetch("/api/health-assessment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            bmi: calculateBMI(),
            recommendedProgram: program,
            timestamp: timestamp,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setValidationError("There was an issue saving your data. Your report is still available.");
      } finally {
        setIsSubmitting(false);
      }
    };

    // Start the background submission
    submitData();
  };

  const validateNumberInput = (value: string, fieldName: string) => {
    const numValue = parseFloat(value);
    if (numValue < 0) {
      return `${fieldName} cannot be negative`;
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const value = e.target.value;
    let error = "";
    
    if (["age", "weight", "height"].includes(fieldName)) {
      error = validateNumberInput(value, fieldName);
    }
    
    if (!error) {
      setFormData({ ...formData, [fieldName]: value });
    }
  };

  const handleConditionToggle = (condition: string) => {
    setFormData((prev) => ({
      ...prev,
      healthConditions: prev.healthConditions.includes(condition)
        ? prev.healthConditions.filter((c) => c !== condition)
        : [...prev.healthConditions, condition],
    }));
  };

  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(new Event('submit') as any);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateProgress = () => {
    return ((currentStep + 1) / formSteps.length) * 100;
  };

  const renderFormStep = () => {
    const step = formSteps[currentStep];
    
    // Filter health conditions based on gender
    const filteredFields = step.fields.map(field => {
      if (field.name === 'healthConditions') {
        return {
          ...field,
          options: field.options.filter(option => {
            // Only show PCOS and menopause for females
            if (formData.gender === 'female') {
              return ['pcos', 'menopause', 'hypertension', 'cardiac', 'fattyLiver', 'thyroid'].includes(option.value);
            }
            // For males and others, exclude PCOS and menopause
            return ['hypertension', 'cardiac', 'fattyLiver', 'thyroid'].includes(option.value);
          })
        };
      }
      return field;
    });
    
    return (
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] mb-2">
            {step.title}
          </h2>
          <p className="text-[var(--text-color-light)]">{step.description}</p>
        </div>

        {filteredFields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-6"
          >
            <label className="block text-sm font-medium text-[var(--text-color-plain)] mb-2">
              {field.label}
              {["name", "email", "phone", "age", "gender", "weight", "height", "bloodSugar"].includes(field.name) && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </label>
            {field.type === "select" ? (
              <div className={`grid gap-4 ${
                field.name === "weightGoal" || field.name === "activityLevel"
                  ? "grid-cols-2 md:grid-cols-3"
                  : "grid-cols-3"
              }`}>
                {field.options.map((option) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, [field.name]: option.value })}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center min-h-[120px] ${
                      formData[field.name] === option.value
                        ? "border-[var(--accent-color)] bg-[var(--accent-color)]/10"
                        : "border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--accent-color)]/50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-2xl mb-2">{option.icon}</div>
                    <div className="text-sm font-medium text-[var(--text-color-plain)] text-center">{option.label}</div>
                  </motion.button>
                ))}
              </div>
            ) : field.type === "multiselect" ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {field.options.map((option) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      const currentValue = formData[field.name] || [];
                      const newValue = currentValue.includes(option.value)
                        ? currentValue.filter((v) => v !== option.value)
                        : [...currentValue, option.value];
                      setFormData({ ...formData, [field.name]: newValue });
                    }}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center min-h-[120px] ${
                      (formData[field.name] || []).includes(option.value)
                        ? "border-[var(--accent-color)] bg-[var(--accent-color)]/10"
                        : "border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--accent-color)]/50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-2xl mb-2">{option.icon}</div>
                    <div className="text-sm font-medium text-[var(--text-color-plain)] text-center">{option.label}</div>
                  </motion.button>
                ))}
              </div>
            ) : field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name] || ""}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                placeholder={field.placeholder}
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                rows={4}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={(e) => handleInputChange(e, field.name)}
                placeholder={field.placeholder}
                required={field.name !== "allergies" && field.name !== "medications"}
                min={["age", "weight", "height"].includes(field.name) ? "0" : undefined}
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      weight: "",
      height: "",
      healthConditions: [],
      bloodSugar: "",
      weightGoal: "",
      activityLevel: "",
      currentDiet: "",
      lifestyleFactors: [],
      allergies: "",
      medications: "",
    });
    setCurrentStep(0);
    setBmi(null);
    setRecommendedProgram([]);
    setValidationError(null);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--background-color-dark)] to-[color-mix(in_srgb,var(--background-color-dark),var(--accent-color)_5%)]">
      <Navbar />
      <div className="pt-45 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h1 className="text-[var(--text-color-plain)] font-['Libre_Baskerville',serif] text-3xl sm:text-4xl mb-4">
                Health Assessment
              </h1>
              <p className="text-[var(--text-color-light)] text-lg mb-6">
                Let's understand your health better to recommend the perfect program for you
              </p>
              {currentStep === formSteps.length && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetForm}
                  className="bg-white/5 backdrop-blur-sm text-[var(--text-color-plain)] py-2 px-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 mx-auto"
                >
                  <Activity className="w-4 h-4" />
                  Start New Assessment
                </motion.button>
              )}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-[var(--background-color-dark)]/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
              {currentStep < formSteps.length && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[var(--text-color-light)] text-sm">
                      Step {currentStep + 1} of {formSteps.length}
                    </span>
                    <span className="text-[var(--text-color-light)] text-sm">
                      {Math.round(calculateProgress())}% Complete
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-green-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${calculateProgress()}%` }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              )}

              {validationError && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>{validationError}</span>
                  <button
                    onClick={() => setValidationError(null)}
                    className="ml-4 hover:text-white/80"
                  >
                    ×
                  </button>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {currentStep < formSteps.length ? (
                  renderFormStep()
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8"
                  >
                    {/* Header Section */}
                    <div className="text-center relative">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                      >
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--accent-color)] to-[color-mix(in_srgb,var(--accent-color),black_20%)] flex items-center justify-center shadow-lg">
                          <CheckCircle2 className="w-12 h-12 text-white" />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="pt-20"
                      >
                        <h2 className="text-3xl font-bold text-[var(--text-color-plain)] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-color)] to-[color-mix(in_srgb,var(--accent-color),white_50%)]">
                          Your Health Assessment Report
                        </h2>
                        <p className="text-[var(--text-color-light)] max-w-2xl mx-auto">
                          Based on your responses, we've analyzed your health profile and prepared personalized recommendations
                        </p>
                      </motion.div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* BMI Card */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-xl bg-[var(--accent-color)]/10">
                            <Scale className="w-6 h-6 text-[var(--accent-color)]" />
                          </div>
                          <h3 className="text-xl font-semibold text-[var(--text-color-plain)]">BMI Analysis</h3>
                        </div>
                        <div className="text-center mb-6">
                          <div className="relative inline-block">
                            <div className="text-5xl font-bold text-[var(--accent-color)] mb-2">
                              {bmi?.toFixed(1)}
                            </div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[var(--accent-color)] animate-pulse" />
                          </div>
                          <div className="text-lg text-[var(--text-color-light)]">
                            {bmi && (
                              <span className={`${
                                bmi < 18.5 ? "text-yellow-400" :
                                bmi < 25 ? "text-green-400" :
                                bmi < 30 ? "text-orange-400" :
                                "text-red-400"
                              }`}>
                                {bmi < 18.5 ? "Underweight" :
                                 bmi < 25 ? "Normal Weight" :
                                 bmi < 30 ? "Overweight" :
                                 "Obese"}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${
                              bmi && (
                                bmi < 18.5 ? "bg-yellow-400" :
                                bmi < 25 ? "bg-green-400" :
                                bmi < 30 ? "bg-orange-400" :
                                "bg-red-400"
                              )
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(100, (bmi || 0) * 2)}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>

                      {/* Health Conditions Card */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-xl bg-[var(--accent-color)]/10">
                            <Activity className="w-6 h-6 text-[var(--accent-color)]" />
                          </div>
                          <h3 className="text-xl font-semibold text-[var(--text-color-plain)]">Health Conditions</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {formData.healthConditions.map((condition, index) => (
                            <motion.div
                              key={condition}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                            >
                              <AlertCircle className="w-4 h-4 text-[var(--accent-color)]" />
                              <span className="text-[var(--text-color-light)]">{condition}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Lifestyle Factors Card */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-xl bg-[var(--accent-color)]/10">
                            <Brain className="w-6 h-6 text-[var(--accent-color)]" />
                          </div>
                          <h3 className="text-xl font-semibold text-[var(--text-color-plain)]">Lifestyle Factors</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {formData.lifestyleFactors.map((factor, index) => (
                            <motion.div
                              key={factor}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                            >
                              <Clock className="w-4 h-4 text-[var(--accent-color)]" />
                              <span className="text-[var(--text-color-light)]">{factor}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Activity Level Card */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-xl bg-[var(--accent-color)]/10">
                            <Heart className="w-6 h-6 text-[var(--accent-color)]" />
                          </div>
                          <h3 className="text-xl font-semibold text-[var(--text-color-plain)]">Activity Level</h3>
                        </div>
                        <div className="text-center">
                          <div className="relative inline-block">
                            <div className="text-3xl font-bold text-[var(--accent-color)] mb-2">
                              {formData.activityLevel.charAt(0).toUpperCase() + formData.activityLevel.slice(1)}
                            </div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[var(--accent-color)] animate-pulse" />
                          </div>
                          <div className="text-[var(--text-color-light)]">
                            Current Activity Status
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Recommended Programs Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                          <div className="p-3 rounded-xl bg-[var(--accent-color)]/10">
                            <Target className="w-6 h-6 text-[var(--accent-color)]" />
                          </div>
                          <h3 className="text-2xl font-semibold text-[var(--text-color-plain)]">
                            Recommended Programs
                          </h3>
                        </div>
                        <p className="text-[var(--text-color-light)] max-w-2xl mx-auto">
                          Based on your health profile, we recommend the following programs:
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {recommendedProgram.map((programId, index) => {
                          const program = programs.find((p) => p.id === programId);
                          return (
                            <motion.div
                              key={programId}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1 + index * 0.1 }}
                              className="bg-gradient-to-br from-[var(--background-color-dark)]/60 to-[var(--background-color-dark)]/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[var(--accent-color)]/30 transition-all duration-300"
                            >
                              <div className="text-center">
                                <div className="text-3xl mb-4">{program?.icon}</div>
                                <h4 className="text-xl font-semibold text-[var(--text-color-plain)] mb-3">
                                  {program?.name}
                                </h4>
                                <p className="text-sm text-[var(--text-color-light)] mb-6">
                                  {program?.description}
                                </p>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => router.push(`/programs/${programId}`)}
                                  className="bg-gradient-to-r from-[var(--accent-color)] to-[color-mix(in_srgb,var(--accent-color),black_20%)] text-white py-2 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
                                >
                                  <TrendingUp className="w-4 h-4" />
                                  Learn More
                                </motion.button>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {currentStep < formSteps.length && (
                <div className="flex justify-between mt-8 pt-8 border-t border-white/10">
                  <button
                    onClick={prevStep}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors cursor-pointer ${
                      currentStep === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-white/5"
                    }`}
                    disabled={currentStep === 0}
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={isSubmitting}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent-color)] text-white transition-colors cursor-pointer ${
                      isSubmitting 
                        ? "opacity-50 cursor-not-allowed" 
                        : "hover:bg-white/5"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Analyzing & Creating Report...</span>
                      </>
                    ) : (
                      <>
                        <span>{currentStep === formSteps.length - 1 ? "Submit" : "Next"}</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default HealthAssessment; 