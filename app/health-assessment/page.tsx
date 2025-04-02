"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2, Activity, Heart, Scale, Brain, Clock, Target, TrendingUp, AlertCircle, Loader2, Mail, RefreshCw } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import BMIGauge from "@/app/components/BMIGauge";


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
    icon: (
      <svg width="30" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
        <path d="M11.15 15.18L9.72999 13.77L11.15 12.35L12.56 13.77L13.97 12.35L12.56 10.94L13.97 9.53L15.39 10.94L16.8 9.53L13.97 6.7L6.89999 13.77L9.72999 16.6L11.15 15.18ZM3.07999 19L6.19999 15.89L4.07999 13.77L13.97 3.87L16.1 6L17.5 4.58L16.1 3.16L17.5 1.75L21.75 6L20.34 7.4L18.92 6L17.5 7.4L19.63 9.53L9.72999 19.42L7.60999 17.3L3.07999 21.84V19Z" fill="currentColor" />
      </svg>
    )
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
    description: "Tackling Metabolic issues such as High Blood Pressure",
    icon: "❤️"
  },
  {
    id: "rem-fit",
    name: "Rem Fit",
    description: "Program to achieve intense weight loss @4-5kg/month or simply stay fit",
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
        label: "Height",
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
          { value: "highstress", label: "High Stress", icon: "😰" },
          { value: "Poor Sleep", label: "Poor Sleep", icon: "😴" },
          { value: "Meals", label: "Irregular Meals", icon: "⏰" },
          { value: "Processed", label: "Processed Food", icon: "🍔" },
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

type LifestyleFactor = 'stress' | 'sleep' | 'meal' | 'processed food';

const HealthAssessment = () => {
  const router = useRouter();
  const [showInsights, setShowInsights] = useState(false);
  const [showBmiResult, setShowBmiResult] = useState(false);
  const [continueFullAssessment, setContinueFullAssessment] = useState(false);
  const [initialStepsCompleted, setInitialStepsCompleted] = useState(false);
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('ft');
  const [feet, setFeet] = useState<string>('');
  const [inches, setInches] = useState<string>('');
  
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

  // Check if we have a completed assessment when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('healthAssessmentData');
      const savedStep = localStorage.getItem('healthAssessmentStep');
      const savedBMI = localStorage.getItem('healthAssessmentBMI');
      const savedPrograms = localStorage.getItem('healthAssessmentPrograms');

      // If we have all the necessary data for a report, show it
      if (savedData && savedStep && savedBMI && savedPrograms) {
        const parsedData = JSON.parse(savedData);
        if (parsedData.name && parsedData.email) { // Check if we have at least some form data
          setCurrentStep(formSteps.length); // Show the report
        }
      }
    }
  }, []);

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [missingField, setMissingField] = useState<string | null>(null);

  // Add useEffect for auto-dismissing validation error
  useEffect(() => {
    if (validationError) {
      const timer = setTimeout(() => {
        setValidationError(null);
      }, 3000); // Auto dismiss after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [validationError]);

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

  const validateInitialSteps = () => {
    const requiredFields = [
      { name: "name", label: "Full Name" },
      { name: "email", label: "Email Address" },
      { name: "phone", label: "Phone Number" },
      { name: "age", label: "Age" },
      { name: "gender", label: "Gender" },
      { name: "weight", label: "Weight" },
      { name: "height", label: "Height" },
    ];

    for (const field of requiredFields) {
      if (!formData[field.name as keyof typeof formData]) {
        setValidationError(`Please fill in ${field.label}`);
        setMissingField(field.label);
        return false;
      }
    }

    setMissingField(null);
    return true;
  };

  const validateForm = () => {
    const requiredFields = [
      { name: "bloodSugar", label: "Blood Sugar Level" },
    ];

    for (const field of requiredFields) {
      if (!formData[field.name as keyof typeof formData]) {
        setValidationError(`Please fill in ${field.label}`);
        setMissingField(field.label);
        return false;
      }
    }

    setMissingField(null);
    return true;
  };

  const handleInitialSubmit = () => {
    if (!validateInitialSteps()) {
      return;
    }
    
    calculateBMI();
    setShowBmiResult(true);
    setInitialStepsCompleted(true);
    
    // Scroll to top of the screen
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const startFullAssessment = () => {
    setContinueFullAssessment(true);
    setCurrentStep(2); // Start from health screening
    setShowBmiResult(false);
    
    // Scroll to top of the screen
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

    // Scroll to top of the screen
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Handle data submission in the background
    const submitData = async () => {
      try {
        // Get current IST timestamp
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
        const istDate = new Date(now.getTime() + istOffset);
        
        // Format the date in IST with proper formatting
        const options: Intl.DateTimeFormatOptions = { 
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        
        const timestamp = istDate.toLocaleString('en-IN', options);

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
            timezone: 'Asia/Kolkata' // Add timezone information
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error("Error submitting form:", error);
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

  // Convert feet/inches to cm
  useEffect(() => {
    if (heightUnit === 'ft' && feet && inches) {
      const feetValue = parseFloat(feet);
      const inchesValue = parseFloat(inches);
      
      if (!isNaN(feetValue) && !isNaN(inchesValue)) {
        const heightInCm = Math.round((feetValue * 30.48) + (inchesValue * 2.54));
        setFormData(prev => ({ ...prev, height: heightInCm.toString() }));
      }
    }
  }, [heightUnit, feet, inches]);

  // Toggle height unit
  const toggleHeightUnit = () => {
    if (heightUnit === 'ft') {
      // Convert from feet/inches to cm
      if (feet && inches) {
        const feetValue = parseFloat(feet);
        const inchesValue = parseFloat(inches);
        if (!isNaN(feetValue) && !isNaN(inchesValue)) {
          const heightInCm = Math.round((feetValue * 30.48) + (inchesValue * 2.54));
          setFormData(prev => ({ ...prev, height: heightInCm.toString() }));
        }
      }
      setHeightUnit('cm');
    } else {
      // Convert from cm to feet/inches
      if (formData.height) {
        const heightInCm = parseFloat(formData.height);
        if (!isNaN(heightInCm)) {
          const totalInches = heightInCm / 2.54;
          const feetValue = Math.floor(totalInches / 12);
          const inchesValue = Math.round(totalInches % 12);
          
          setFeet(feetValue.toString());
          setInches(inchesValue.toString());
        }
      }
      setHeightUnit('ft');
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
    if (currentStep < 1) {
      // For the first two steps (personal info and physical details)
      if (currentStep === 1) {
        handleInitialSubmit();
        return;
      }
      setCurrentStep(currentStep + 1);
    } else if (currentStep < formSteps.length - 1 && continueFullAssessment) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(new Event('submit') as any);
    }
    
    // Scroll to top of the screen
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // Scroll to top of the screen
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Additional scroll to ensure it reaches the top
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
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
              <div className={`grid gap-4 ${field.name === "gender"
                  ? "grid-cols-3"
                  : "grid-cols-2"
                }`}>
                {field.name === "gender" ? (
                  field.options.map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, [field.name]: option.value })}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center min-h-[120px] ${formData[field.name] === option.value
                          ? "border-[var(--accent-color)] bg-[var(--accent-color)]/10"
                          : "border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--accent-color)]/50"
                        }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-2xl mb-2">{option.icon}</div>
                      <div className="text-sm font-medium text-[var(--text-color-plain)] text-center">{option.label}</div>
                    </motion.button>
                  ))
                ) : (
                  <>
                    {field.options.slice(0, 2).map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, [field.name]: option.value })}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center min-h-[120px] ${formData[field.name] === option.value
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
                    <motion.button
                      type="button"
                      onClick={() => setFormData({ ...formData, [field.name]: field.options[2].value })}
                      className={`col-span-2 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center min-h-[120px] ${formData[field.name] === field.options[2].value
                          ? "border-[var(--accent-color)] bg-[var(--accent-color)]/10"
                          : "border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--accent-color)]/50"
                        }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-2xl mb-2">{field.options[2].icon}</div>
                      <div className="text-sm font-medium text-[var(--text-color-plain)] text-center">{field.options[2].label}</div>
                    </motion.button>
                  </>
                )}
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
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center min-h-[120px] ${(formData[field.name] || []).includes(option.value)
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
            ) : field.name === "height" ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[var(--text-color-light)]">Unit:</span>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                    <button 
                      type="button"
                      onClick={() => heightUnit !== 'ft' && toggleHeightUnit()}
                      className={`px-3 py-1.5 rounded-md cursor-pointer text-sm ${heightUnit === 'ft' 
                        ? 'bg-white/5 text-white font-medium' 
                        : 'text-white '}`}
                    >
                      Feet/Inches
                    </button>
                    <button 
                      type="button"
                      onClick={() => heightUnit !== 'cm' && toggleHeightUnit()}
                      className={`px-3 py-1.5 rounded-md cursor-pointer text-sm ${heightUnit === 'cm' 
                        ? 'bg-white/5 text-white font-medium' 
                        : 'text-white '}`}
                    >
                      Centimeters
                    </button>
                  </div>
                </div>
                
                {heightUnit === 'ft' ? (
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <div className="relative">
                        <input
                          type="number"
                          value={feet}
                          onChange={(e) => setFeet(e.target.value)}
                          placeholder="Feet"
                          min="0"
                          className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-color-light)]">ft</span>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="relative">
                        <input
                          type="number"
                          value={inches}
                          onChange={(e) => setInches(e.target.value)}
                          placeholder="Inches"
                          min="0"
                          max="11"
                          className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-color-light)]">in</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <input
                    type="number"
                    name="height"
                    value={formData.height || ""}
                    onChange={(e) => handleInputChange(e, field.name)}
                    placeholder="Enter your height in cm"
                    min="0"
                    className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                  />
                )}
                
                {heightUnit === 'cm' && formData.height && (
                  <p className="text-xs text-[var(--text-color-light)] italic mt-1">
                    {Math.floor(parseInt(formData.height) / 30.48)}'{Math.round((parseInt(formData.height) / 2.54) % 12)}"
                  </p>
                )}
                
                {heightUnit === 'ft' && feet && inches && (
                  <p className="text-xs text-[var(--text-color-light)] italic mt-1">
                    {formData.height} cm
                  </p>
                )}
              </div>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={(e) => handleInputChange(e, field.name)}
                placeholder={field.placeholder}
                required={field.name !== "allergies" && field.name !== "medications"}
                min={["age", "weight"].includes(field.name) ? "0" : undefined}
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)] [&:-webkit-autofill]:bg-white/5 [&:-webkit-autofill]:text-[var(--text-color-plain)] [&:-webkit-autofill]:border-white/10 [&:-webkit-autofill]:shadow-[0_0_0_30px_rgba(255,255,255,0.05)_inset] [&:-webkit-autofill]:!bg-white/5 [&:-webkit-autofill]:!text-[var(--text-color-plain)] [&:-webkit-autofill]:!border-white/10 [&:-webkit-autofill]:!shadow-[0_0_0_30px_rgba(255,255,255,0.05)_inset] [&:-webkit-autofill]:!appearance-none [&:-webkit-autofill]:!background-color:rgba(255,255,255,0.05)"
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
    setShowBmiResult(false);
    setContinueFullAssessment(false);
    setInitialStepsCompleted(false);
    setHeightUnit('ft');
    setFeet('');
    setInches('');

    // Clear localStorage when starting a new assessment
    if (typeof window !== 'undefined') {
      localStorage.removeItem('healthAssessmentData');
      localStorage.removeItem('healthAssessmentStep');
      localStorage.removeItem('healthAssessmentBMI');
      localStorage.removeItem('healthAssessmentPrograms');
    }
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetForm}
                  className="bg-gradient-to-r from-[#A67BFF] to-[#BE9AFF] text-white py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium flex items-center gap-3 mx-auto relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#BE9AFF] to-[#A67BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#BE9AFF]/20 to-[#A67BFF]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Activity className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Start New Assessment</span>
                </motion.button>
              )}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-[var(--background-color-dark)]/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
              {!showBmiResult && currentStep < formSteps.length && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[var(--text-color-light)] text-sm">
                      Step {currentStep + 1} of {continueFullAssessment ? formSteps.length : 2}
                    </span>
                    <span className="text-[var(--text-color-light)] text-sm">
                      {continueFullAssessment 
                        ? Math.round(calculateProgress()) + "% Complete" 
                        : Math.round(((currentStep + 1) / 2) * 100) + "% Complete"}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-green-400"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: continueFullAssessment 
                          ? `${calculateProgress()}%` 
                          : `${((currentStep + 1) / 2) * 100}%`
                      }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2 w-[90%] max-w-[500px]"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="flex-grow text-center">{validationError}</span>
                  <button
                    onClick={() => setValidationError(null)}
                    className="ml-4 hover:text-white/80 flex-shrink-0"
                  >
                    ×
                  </button>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {showBmiResult ? (
                  // BMI Result Section
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center relative">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[var(--accent-color)] to-[color-mix(in_srgb,var(--accent-color),black_20%)] flex items-center justify-center shadow-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
                          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
                          <div className="absolute inset-0 bg-[var(--accent-color)] opacity-20 animate-ping"></div>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="pt-12 sm:pt-14"
                      >
                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-color)] mt-8 mb-3">
                          Your BMI Results
                        </h2>
                        <p className="text-[var(--text-color-light)] max-w-2xl mx-auto mb-6">
                          Based on your height and weight, we've calculated your Body Mass Index (BMI)
                        </p>
                      </motion.div>
                    </div>

                    {/* BMI Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group mx-auto max-w-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6 justify-center">
                          <div className="p-3 rounded-xl bg-[var(--accent-color)]/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
                            <Scale className="w-6 h-6 text-[var(--accent-color)] relative z-10" />
                          </div>
                          <h3 className="text-xl font-semibold text-[var(--text-color-plain)]">Your BMI</h3>
                        </div>
                        
                        <BMIGauge bmi={bmi} height={formData.height} />
                        
                        <div className="text-center text-[var(--text-color-light)] mb-8">
                          <p>BMI is one indicator of health, but it's not the complete picture.</p>
                          <p>Let's continue to understand your unique health needs better.</p>
                        </div>
                        
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
                          <p className="text-[var(--text-color-plain)] mb-4 text-center">
                            <span className="text-[var(--accent-color)] font-bold">Your data is secure with us.</span> We follow strict privacy protocols to protect your personal information.
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={resetForm}
                            className="bg-white/5 backdrop-blur-sm text-[var(--text-color-plain)] py-3 px-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:shadow-md order-2 sm:order-1"
                          >
                            <span>Start Over</span>
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={startFullAssessment}
                            className="bg-gradient-to-r from-[#A67BFF] to-[#BE9AFF] text-white py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 animate-bounce-subtle relative overflow-hidden group cursor-pointer order-1 sm:order-2"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#BE9AFF] to-[#A67BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#BE9AFF]/20 to-[#A67BFF]/20 rounded-xl blur-xl animate-pulse"></div>
                            <span className="text-lg font-medium relative z-10">Continue with Health Assessment</span>
                            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : currentStep < formSteps.length ? (
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
                        className="absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[var(--accent-color)] to-[color-mix(in_srgb,var(--accent-color),black_20%)] flex items-center justify-center shadow-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
                          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
                          <div className="absolute inset-0 bg-[var(--accent-color)] opacity-20 animate-ping"></div>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="pt-12 sm:pt-14"
                      >
                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-color)] mt-8 mb-3 ">
                          Your Health Assessment Report
                        </h2>
                        <p className="text-[var(--text-color-light)] max-w-2xl mx-auto mb-3">
                          Based on your responses, we've analyzed your health profile and prepared personalized recommendations
                        </p>

                        <p className="text-[var(--accent-color)] text-sm flex items-start justify-center gap-2">
                          <Mail className="w-4 h-4 mt-[2px]" />
                          A detailed report has been sent to your email address
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
                        className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-[var(--accent-color)]/10 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
                              <Scale className="w-6 h-6 text-[var(--accent-color)] relative z-10" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--text-color-plain)]">BMI Analysis</h3>
                          </div>
                          <div className="relative z-10">
                            <BMIGauge bmi={bmi} height={formData.height} />
                          </div>
                        </div>
                      </motion.div>

                      {/* Health Conditions Card */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-[var(--accent-color)]/10 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
                              <Activity className="w-6 h-6 text-[var(--accent-color)] relative z-10" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--text-color-plain)]">Health Conditions</h3>
                          </div>
                          {/* Health Conditions Grid - Mobile Responsive */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {formData.healthConditions.map((condition, index) => (
                              <motion.div
                                key={condition}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                className="flex items-center gap-2 py-3 px-4 rounded-xl bg-[var(--background-color-light)] transition-colors relative overflow-hidden group"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <AlertCircle className="w-4 h-4 text-black flex-shrink-0 relative z-10" />
                                <span className="text-black text-sm overflow-hidden overflow-ellipsis whitespace-nowrap relative z-10 max-w-[calc(100%-24px)]">{condition}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Lifestyle Factors Card */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-[var(--accent-color)]/10 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
                              <Brain className="w-6 h-6 text-[var(--accent-color)] relative z-10" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--text-color-plain)]">Lifestyle Factors</h3>
                          </div>
                          {/* Lifestyle Factors Grid - Mobile Responsive */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {formData.lifestyleFactors.map((factor, index) => (
                              <motion.div
                                key={factor}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="flex items-center gap-2 py-3 px-4 rounded-xl bg-[var(--background-color-light)] transition-colors relative overflow-hidden group"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Clock className="w-4 h-4 text-black flex-shrink-0 relative z-10" />
                                <span className="text-black text-sm overflow-hidden overflow-ellipsis whitespace-nowrap relative z-10 max-w-[calc(100%-24px)]">{factor}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Activity Level Card */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-[var(--accent-color)]/10 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
                              <Heart className="w-6 h-6 text-[var(--accent-color)] relative z-10" />
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
                        </div>
                      </motion.div>
                    </div>

                    {/* Recommended Programs Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="bg-gradient-to-br from-[var(--background-color-dark)]/80 to-[var(--background-color-dark)]/40 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="text-center mb-6 sm:mb-8">
                        <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
                          <div className="p-3 rounded-xl bg-[var(--accent-color)]/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
                            <Target className="w-6 h-6 text-[var(--accent-color)] relative z-10" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-color-plain)]">
                            Recommended Programs
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-[var(--text-color-light)] max-w-2xl mx-auto">
                          Based on your health profile, we recommend these personalized programs
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {recommendedProgram.map((programId, index) => {
                          const program = programs.find(p => p.id === programId);
                          if (!program) return null;

                          return (
                            <motion.div
                              key={programId}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1 + index * 0.1 }}
                              className="bg-gradient-to-br from-[var(--background-color-dark)]/60 to-[var(--background-color-dark)]/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[var(--accent-color)]/30 transition-all duration-300 relative overflow-hidden group"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="relative z-10">
                                <div className="text-center">
                                  <div className="text-3xl mb-4">{program.icon}</div>
                                  <h4 className="text-xl font-semibold text-[var(--text-color-plain)] mb-3">
                                    {program.name}
                                  </h4>
                                  <p className="text-sm text-[var(--text-color-light)] mb-6 line-clamp-2 sm:line-clamp-none">
                                    {program.description}
                                  </p>
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                      let routeId = programId;
                                      if (programId === "rem-di-2") routeId = "remdi2";
                                      else if (programId === "rem-bliss") routeId = "rembliss";
                                      else if (programId === "rem-fit") routeId = "remfit";
                                      else if (programId === "rem-meta") routeId = "remmeta";
                                      router.push(`/programs/${routeId}`);
                                    }}
                                    className="bg-[var(--background-color-light)] text-black py-2 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
                                  >
                                    <TrendingUp className="w-4 h-4" />
                                    Learn More
                                  </motion.button>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showBmiResult && currentStep < formSteps.length && (
                <div className="flex justify-between mt-8 pt-8 border-t border-white/10">
                  <button
                    onClick={prevStep}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer ${currentStep === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-white/10 hover:shadow-md"
                      }`}
                    disabled={currentStep === 0}
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>
                  <button
                    onClick={currentStep === 1 ? handleInitialSubmit : nextStep}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-[var(--accent-color)] transition-all duration-300 hover:bg-white/10 hover:shadow-md cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Analyzing & Creating Report...</span>
                      </>
                    ) : (
                      <>
                        <span>
                          {currentStep === 1 ? "Calculate BMI" : 
                            currentStep === formSteps.length - 1 ? "Submit" : "Next"}
                        </span>
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