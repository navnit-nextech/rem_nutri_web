"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const healthConditions = [
  "Diabetes",
  "PCOS/PCOD",
  "Thyroid",
  "Fatty Liver",
  "Other",
];

const programs = [
  {
    id: "weight-loss",
    name: "Weight Loss Program",
    description: "Personalized weight management and lifestyle transformation",
  },
  {
    id: "diabetes",
    name: "Diabetes Management",
    description: "Comprehensive diabetes care and blood sugar control",
  },
  {
    id: "hormonal",
    name: "Hormonal Balance",
    description: "Hormone optimization for better health and vitality",
  },
  {
    id: "general",
    name: "General Wellness",
    description: "Holistic health improvement and maintenance",
  },
];

const formSteps = [
  {
    title: "Personal Information",
    description: "Let's start with your basic details",
    fields: ["name", "email", "phone"],
  },
  {
    title: "Physical Details",
    description: "Help us understand your physical characteristics",
    fields: ["age", "gender", "weight", "height"],
  },
  {
    title: "Health Conditions",
    description: "Tell us about any health conditions you have",
    fields: ["conditions"],
  },
  {
    title: "Health & Lifestyle",
    description: "Share your health goals and current lifestyle",
    fields: ["goals", "currentDiet"],
  },
  {
    title: "Additional Information",
    description: "Any other important details we should know",
    fields: ["allergies", "medications"],
  },
];

const HealthAssessment = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    conditions: [] as string[],
    otherCondition: "",
    goals: "",
    currentDiet: "",
    allergies: "",
    medications: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [bmi, setBmi] = useState<number | null>(null);
  const [recommendedProgram, setRecommendedProgram] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const conditions = formData.conditions;

    if (conditions.includes("Diabetes")) {
      return "diabetes";
    } else if (conditions.includes("PCOS/PCOD") || conditions.includes("Thyroid")) {
      return "hormonal";
    } else if (bmiValue && bmiValue > 25) {
      return "weight-loss";
    } else {
      return "general";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const program = determineProgram();
    setRecommendedProgram(program);

    try {
      const response = await fetch("/api/health-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          bmi: calculateBMI(),
          recommendedProgram: program,
        }),
      });

      if (response.ok) {
        setCurrentStep(formSteps.length);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConditionToggle = (condition: string) => {
    setFormData((prev) => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions, condition],
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

  const renderFormStep = () => {
    const step = formSteps[currentStep];
    
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

        {step.fields.includes("name") && (
          <div className="space-y-4">
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        )}

        {step.fields.includes("age") && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Age
              </label>
              <input
                type="number"
                required
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                placeholder="Your age"
              />
            </div>
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Gender
              </label>
              <select
                required
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                required
                step="0.1"
                value={formData.weight}
                onChange={(e) =>
                  setFormData({ ...formData, weight: e.target.value })
                }
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                placeholder="Your weight in kg"
              />
            </div>
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                required
                value={formData.height}
                onChange={(e) =>
                  setFormData({ ...formData, height: e.target.value })
                }
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
                placeholder="Your height in cm"
              />
            </div>
          </div>
        )}

        {step.fields.includes("conditions") && (
          <div>
            <label className="block text-[var(--text-color-plain)] mb-4">
              Select your health conditions (if any)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {healthConditions.map((condition) => (
                <motion.button
                  key={condition}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleConditionToggle(condition)}
                  className={`px-6 py-4 rounded-xl border transition-all duration-200 ${
                    formData.conditions.includes(condition)
                      ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)]"
                      : "bg-white/5 backdrop-blur-sm text-[var(--text-color-plain)] border-white/10 hover:border-[var(--accent-color)]"
                  }`}
                >
                  {condition}
                </motion.button>
              ))}
            </div>
            {formData.conditions.includes("Other") && (
              <motion.input
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                type="text"
                value={formData.otherCondition}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    otherCondition: e.target.value,
                  })
                }
                placeholder="Please specify other condition"
                className="mt-4 w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)]"
              />
            )}
          </div>
        )}

        {step.fields.includes("goals") && (
          <div className="space-y-6">
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Health Goals
              </label>
              <textarea
                value={formData.goals}
                onChange={(e) =>
                  setFormData({ ...formData, goals: e.target.value })
                }
                placeholder="What are your main health goals?"
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)] h-32"
              />
            </div>
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Current Diet
              </label>
              <textarea
                value={formData.currentDiet}
                onChange={(e) =>
                  setFormData({ ...formData, currentDiet: e.target.value })
                }
                placeholder="Tell us about your current diet and eating habits"
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)] h-32"
              />
            </div>
          </div>
        )}

        {step.fields.includes("allergies") && (
          <div className="space-y-6">
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Allergies or Food Restrictions
              </label>
              <textarea
                value={formData.allergies}
                onChange={(e) =>
                  setFormData({ ...formData, allergies: e.target.value })
                }
                placeholder="List any allergies or food restrictions"
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)] h-32"
              />
            </div>
            <div>
              <label className="block text-[var(--text-color-plain)] mb-2">
                Current Medications
              </label>
              <textarea
                value={formData.medications}
                onChange={(e) =>
                  setFormData({ ...formData, medications: e.target.value })
                }
                placeholder="List any current medications"
                className="w-full px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[var(--accent-color)] focus:ring-2 focus:ring-[var(--accent-color)] outline-none text-[var(--text-color-plain)] h-32"
              />
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--background-color-dark)] to-[color-mix(in_srgb,var(--background-color-dark),var(--accent-color)_5%)] pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h1 className="text-[var(--text-color-plain)] font-['Libre_Baskerville',serif] text-3xl sm:text-4xl mb-4">
              Health Assessment
            </h1>
            <p className="text-[var(--text-color-light)] text-lg">
              Let's understand your health better to recommend the perfect program for you
            </p>
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
                    {Math.round(((currentStep + 1) / formSteps.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[var(--accent-color)]"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentStep + 1) / formSteps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {currentStep < formSteps.length ? (
                renderFormStep()
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <div className="mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 rounded-full bg-[var(--accent-color)] mx-auto flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--text-color-plain)] mb-4">
                    Your Personalized Program
                  </h2>
                  <div className="bg-[var(--background-color-dark)]/80 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-[var(--accent-color)] mb-2">
                      {programs.find((p) => p.id === recommendedProgram)?.name}
                    </h3>
                    <p className="text-[var(--text-color-light)] mb-4">
                      {programs.find((p) => p.id === recommendedProgram)?.description}
                    </p>
                    {bmi && (
                      <div className="text-sm text-[var(--text-color-light)]">
                        Your BMI: {bmi.toFixed(1)}
                      </div>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(`/programs/${recommendedProgram}`)}
                    className="bg-[var(--accent-color)] text-white py-4 px-8 rounded-xl hover:bg-[color-mix(in_srgb,var(--accent-color),black_10%)] transition-colors"
                  >
                    Learn More About This Program
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {currentStep < formSteps.length && (
              <div className="flex justify-between mt-8 pt-8 border-t border-white/10">
                <button
                  onClick={prevStep}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors ${
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
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent-color)] text-white hover:bg-[color-mix(in_srgb,var(--accent-color),black_10%)] transition-colors"
                >
                  <span>{currentStep === formSteps.length - 1 ? "Submit" : "Next"}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default HealthAssessment; 