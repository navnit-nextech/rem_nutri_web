"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BMIGaugeProps {
  bmi: number | null;
  height: string | number;
}

const BMIGauge = ({ bmi, height }: BMIGaugeProps) => {
  const [needleRotation, setNeedleRotation] = useState(-90);
  const [needleLength, setNeedleLength] = useState("48%");
  const [needleColor, setNeedleColor] = useState("bg-white");
  const [needleGlow, setNeedleGlow] = useState("shadow-[0_0_5px_rgba(255,255,255,0.5)]");
  const [tipPulse, setTipPulse] = useState(false);
  
  useEffect(() => {
    if (bmi !== null) {
      // Improved needle rotation calculation to better match the visual sections
      // We'll use a piecewise function to ensure each BMI category gets appropriate space
      let rotation;
      
      if (bmi <= 18.5) {
        // Underweight range (16-18.5): Maps to -90° to -45°
        rotation = -90 + ((bmi - 16) / (18.5 - 16)) * 45;
      } else if (bmi <= 25) {
        // Normal range (18.5-25): Maps to -45° to 0°
        rotation = -45 + ((bmi - 18.5) / (25 - 18.5)) * 45;
      } else if (bmi <= 30) {
        // Overweight range (25-30): Maps to 0° to 45°
        rotation = ((bmi - 25) / (30 - 25)) * 45;
      } else {
        // Obese range (30-40): Maps to 45° to 90°
        rotation = 45 + ((bmi - 30) / (40 - 30)) * 45;
      }
      
      // Ensure we stay within bounds
      rotation = Math.min(Math.max(rotation, -90), 90);
      setNeedleRotation(rotation);
      
      // Calculate optimal needle length to ensure it reaches the appropriate section
      // More extreme angles need longer needles due to the semicircle geometry
      // Use a cosine function to make the needle extend more at the edges
      const angleRadians = Math.abs(rotation) * (Math.PI / 180);
      const lengthFactor = 1 / Math.cos(angleRadians * 0.5); // Cosine adjustment for edge angles
      const baseLength = 52; // Base percentage for normal angles
      const dynamicLength = Math.min(baseLength * lengthFactor, 68); // Cap at 68% to avoid overflow
      const formattedLength = `${Math.round(dynamicLength)}%`;
      
      // Set needle characteristics based on BMI category
      if (bmi < 17) {
        // Very underweight
        setNeedleLength(formattedLength);
        setNeedleColor("bg-yellow-400");
        setNeedleGlow("shadow-[0_0_8px_rgba(250,204,21,0.7)]");
        setTipPulse(true);
      } else if (bmi > 35) {
        // Very obese
        setNeedleLength(formattedLength);
        setNeedleColor("bg-red-500");
        setNeedleGlow("shadow-[0_0_8px_rgba(239,68,68,0.7)]");
        setTipPulse(true);
      } else if (bmi < 18.5) {
        // Underweight
        setNeedleLength(formattedLength);
        setNeedleColor("bg-yellow-400");
        setNeedleGlow("shadow-[0_0_5px_rgba(250,204,21,0.5)]");
        setTipPulse(false);
      } else if (bmi >= 30) {
        // Obese
        setNeedleLength(formattedLength);
        setNeedleColor("bg-red-400");
        setNeedleGlow("shadow-[0_0_5px_rgba(239,68,68,0.5)]");
        setTipPulse(false);
      } else if (bmi >= 25) {
        // Overweight
        setNeedleLength(formattedLength);
        setNeedleColor("bg-orange-400");
        setNeedleGlow("shadow-[0_0_5px_rgba(249,115,22,0.5)]");
        setTipPulse(false);
      } else {
        // Normal range
        setNeedleLength(formattedLength);
        setNeedleColor("bg-green-400");
        setNeedleGlow("shadow-[0_0_5px_rgba(74,222,128,0.5)]");
        setTipPulse(false);
      }
    }
  }, [bmi]);
  
  // Calculate healthy weight range based on height
  const getHealthyWeightRange = () => {
    if (!height) return "N/A";
    
    const heightInMeters = parseFloat(height.toString()) / 100;
    const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
    const maxWeight = (25 * heightInMeters * heightInMeters).toFixed(1);
    
    return `${minWeight} kg - ${maxWeight} kg`;
  };
  
  // Function to get the tip color
  const getTipColor = () => {
    if (needleColor === "bg-yellow-400") return "bg-yellow-400";
    if (needleColor === "bg-red-500") return "bg-red-500";
    if (needleColor === "bg-red-400") return "bg-red-400";
    if (needleColor === "bg-orange-400") return "bg-orange-400";
    if (needleColor === "bg-green-400") return "bg-green-400";
    return "bg-white";
  };
  
  // Get BMI category and color
  const getBMICategory = () => {
    if (bmi === null) return { category: "N/A", color: "text-gray-400" };
    
    if (bmi < 18.5) return { category: "Underweight", color: "text-yellow-400" };
    if (bmi < 25) return { category: "Normal Weight", color: "text-green-400" };
    if (bmi < 30) return { category: "Overweight", color: "text-orange-400" };
    return { category: "Obese", color: "text-red-400" };
  };
  
  const { category, color } = getBMICategory();
  
  return (
    <div className="flex flex-col items-center">
      {/* Speedometer Container - Responsive sizing */}
      <div className="relative w-full max-w-md aspect-[2/1] mb-6 md:mb-4">
        {/* Semicircle Background */}
        <div className="absolute bottom-0  left-0 w-full h-[50%] overflow-hidden">
          {/* Gauge Background */}
          <div className="absolute bottom-0 left-0 w-full h-[200%] bg-gradient-to-b from-[rgba(30,20,50,0.5)] to-[rgba(30,20,50,0.2)] rounded-full">
            {/* Horizontal Color Bands */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] overflow-hidden rounded-t-full">
              {/* Color band container with shared styles */}
              <div className="absolute inset-0 shadow-inner">
                {/* Underweight: 16-18.5 (2.5 units) */}
                <div className="absolute bottom-0 left-[0%] w-[27.5%] h-full bg-gradient-to-r from-[#5d4a22] via-[#8e7230] to-[#a88435] rounded-tl-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-yellow-200/10"></div>
                </div>
                
                {/* Normal: 18.5-25 (6.5 units) */}
                <div className="absolute bottom-0 left-[27.5%] w-[22.5%] h-full bg-gradient-to-r from-[#1e4835] via-[#2a6349] to-[#347a5a] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-green-200/10"></div>
                </div>
                
                {/* Overweight: 25-30 (5 units) */}
                <div className="absolute bottom-0 left-[50%] w-[22.5%] h-full bg-gradient-to-r from-[#664226] via-[#8a5730] to-[#a66936] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-orange-200/10"></div>
                </div>
                
                {/* Obese: 30-40 (10 units) */}
                <div className="absolute bottom-0 left-[72.5%] w-[27.5%] h-full bg-gradient-to-r from-[#6b2830] via-[#8a3540] to-[#9e3e4a] rounded-tr-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-red-200/10"></div>
                </div>
              </div>
              
              {/* Highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent"></div>
              
              {/* Arc effect - subtle inner curve shadow */}
              <div className="absolute top-0 left-0 w-full h-full opacity-30 overflow-hidden">
                <div className="absolute bottom-[0%] left-[0%] w-[100%] h-[200%] rounded-full border-t-8 border-white/5"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[110%] h-[210%] rounded-full border-t-8 border-black/10"></div>
              </div>
            </div>
            
            {/* Division lines between sections */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* 18.5 divider line */}
              <div className="absolute top-0 left-[27.5%] h-[50%] w-[1px] bg-white/20"></div>
              {/* 25 divider line */}
              <div className="absolute top-0 left-[50%] h-[50%] w-[1px] bg-white/20"></div>
              {/* 30 divider line */}
              <div className="absolute top-0 left-[72.5%] h-[50%] w-[1px] bg-white/20"></div>
            </div>
            
            {/* Tick marks */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((position) => (
                <div 
                  key={position}
                  className="absolute w-[1px] h-[3%] bg-white/20"
                  style={{ 
                    left: `${position}%`,
                    top: '0%'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* BMI Values/Markers - Made responsive for mobile */}
        <div className="absolute bottom-[1%]  left-0 w-full">
          <span className="absolute bottom-1 left-[10%] transform -translate-x-1/2 text-xs sm:text-sm md:text-base text-white">16</span>
          <span className="absolute bottom-1 left-[27.5%] transform -translate-x-1/2 text-xs sm:text-sm md:text-base text-white">18.5</span>
          <span className="absolute bottom-1 left-[50%] transform -translate-x-1/2 text-xs sm:text-sm md:text-base text-white z-200">25</span>
          <span className="absolute bottom-1 left-[72.5%] transform -translate-x-1/2 text-xs sm:text-sm md:text-base text-white">30</span>
          <span className="absolute bottom-1 left-[90%] transform -translate-x-1/2 text-xs sm:text-sm md:text-base text-white">40</span>
        </div>
        
        {/* Category Labels - Made responsive for mobile */}
        <div className="absolute bottom-[55%] left-0 w-full">
          {/* Mobile view - alternating top/bottom pattern with smaller text */}
          <div className="sm:hidden">
            <span className="absolute -bottom-1 left-[10%] transform -translate-x-1/2 text-[10px] font-semibold text-yellow-400 rotate-[-10deg]">Underweight</span>
            <span className="absolute bottom-5 left-[38.5%] transform -translate-x-1/2 text-[10px] font-semibold text-green-400">Normal</span>
            <span className="absolute -bottom-1 left-[62%] transform -translate-x-1/2 text-[10px] font-semibold text-orange-400 rotate-[5deg]">Overweight</span>
            <span className="absolute bottom-0 left-[90%] transform -translate-x-1/2 text-[10px] font-semibold text-red-400 rotate-[10deg]">Obese</span>
          </div>
          
          {/* Tablet and desktop view */}
          <div className="hidden sm:block">
            <span className="absolute bottom-2 left-[15%] transform -translate-x-1/2 text-xs md:text-sm font-semibold text-yellow-400 rotate-[-20deg]">Underweight</span>
            <span className="absolute bottom-8 left-[38.5%] transform -translate-x-1/2 text-xs md:text-sm font-semibold text-green-400">Normal</span>
            <span className="absolute bottom-2 left-[62%] transform -translate-x-1/2 text-xs md:text-sm font-semibold text-orange-400 rotate-[15deg]">Overweight</span>
            <span className="absolute bottom-2 left-[85%] transform -translate-x-1/2 text-xs md:text-sm font-semibold text-red-400 rotate-[30deg]">Obese</span>
          </div>
        </div>
        
        {/* Needle */}
        <motion.div 
          className={`absolute bottom-0 left-1/2 w-[2.5px] rounded-t-full origin-bottom z-10 ${needleColor} ${needleGlow}`}
          style={{ height: needleLength }}
          initial={{ rotate: -90, width: "2px" }}
          animate={{ 
            rotate: needleRotation,
            height: needleLength,
            width: tipPulse ? "3.5px" : "2.5px"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 60, 
            damping: 12
          }}
        >
          <motion.div 
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${getTipColor()}`}
            animate={tipPulse ? {
              boxShadow: [
                '0 0 5px rgba(255, 255, 255, 0.7)',
                '0 0 15px rgba(255, 255, 255, 0.9)',
                '0 0 5px rgba(255, 255, 255, 0.7)'
              ],
              scale: [1, 1.2, 1]
            } : {
              boxShadow: needleGlow
            }}
            transition={tipPulse ? {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            } : {}}
          />
        </motion.div>
        
        {/* Center Hub */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-white/50 z-20"></div>
      </div>
      
      {/* BMI Value Display */}
      <motion.div 
        className="text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-5xl font-bold text-[var(--accent-color)] mb-1">
          {bmi?.toFixed(1)}
          <span className="text-2xl align-top ml-1">kg/m²</span>
        </div>
        <div className={`text-lg font-medium ${color}`}>
          {category}
        </div>
      </motion.div>
      
      {/* BMI Information */}
      <motion.div 
        className="w-full text-sm bg-white/5 rounded-xl p-4 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-[var(--text-color-light)]">Healthy BMI range:</span>
            <span className="font-medium text-green-400">18.5 - 25 kg/m²</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[var(--text-color-light)]">Healthy weight for your height:</span>
            <span className="font-medium text-green-400">{getHealthyWeightRange()}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BMIGauge; 
 