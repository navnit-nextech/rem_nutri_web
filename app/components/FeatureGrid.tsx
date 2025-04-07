import React from 'react';
import { motion } from 'framer-motion';

const FeatureGrid = () => {
  const topFeatures = [
    { title: "Nutritionally Balanced", icon: "🌱" },
    { title: "Deliciously Healthy", icon: "🥗" },
    { title: "Minimally Processed", icon: "🌿" },
    { title: "Protein Rich", icon: "🫘" },
    { title: "Created by Experts", icon: "👨‍⚕️" },
    { title: "Holistic Approach", icon: "⭐" },
    { title: "Yoga and Exercise Sessions", icon: "🧘‍♀️" },
    { title: "Custom Meal Plans", icon: "📋" },
    { title: "Knowledge and Skills", icon: "📚" },
  ];


  const bottomFeatures = [
    { title: "130+ Recipes", icon: "🥘" },
    { title: "Hormonal Balance", icon: "⚖️" },
    { title: "Desi & Contemporary", icon: "🍛" },
    { title: "Freshly Prepared Daily", icon: "🥗" },
    { title: "Evidence-Based", icon: "🔬" },
    { title: "Gut Health Focus", icon: "💪" },
    { title: "1:1 Consultations", icon: "👥" },
    { title: "Remission Programs", icon: "🎯" },
    { title: "Supportive Community", icon: "🤝" },
  ];

  const FeatureRow = ({ features, direction }) => {
    // Duplicating the features enough times to ensure a smooth loop
    const duplicatedFeatures = [...features, ...features, ...features, ...features]; // Increased duplication for seamless looping
    const isLeft = direction === "left";
    
    // Slowed down the animation duration
    const animationDuration = 120;
    
    return (
      <div className="relative h-[50px] md:h-[72px] overflow-hidden flex items-center">
        <motion.div
          className="flex items-center absolute"
          initial={{ x: isLeft ? 0 : "-100%" }}
          animate={{ x: isLeft ? "-100%" : 0 }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center shrink-0 gap-2 md:gap-4 px-3 md:px-8 py-2 md:py-4 bg-[var(--background-color-light)]/5 
                         rounded-full backdrop-blur-sm border border-[var(--text-color-plain)]/5 mx-2 md:mx-4"
              style={{ width: "fit-content" }}
            >
              <span className="text-lg md:text-2xl">{feature.icon}</span>
              <span className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] 
                             font-medium text-xs md:text-base whitespace-nowrap">{feature.title}</span>
              <span className="text-[var(--text-color-light)]/40 text-sm md:text-lg">•</span>
            </div>
          ))}
        </motion.div>
        
        {/* Duplicate container to create a seamless loop */}
        <motion.div
          className="flex items-center absolute"
          initial={{ x: isLeft ? "100%" : 0 }}
          animate={{ x: isLeft ? 0 : "100%" }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center shrink-0 gap-2 md:gap-4 px-3 md:px-8 py-2 md:py-4 bg-[var(--background-color-light)]/5 
                         rounded-full backdrop-blur-sm border border-[var(--text-color-plain)]/5 mx-2 md:mx-4"
              style={{ width: "fit-content" }}
            >
              <span className="text-lg md:text-2xl">{feature.icon}</span>
              <span className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] 
                             font-medium text-xs md:text-base whitespace-nowrap">{feature.title}</span>
              <span className="text-[var(--text-color-light)]/40 text-sm md:text-lg">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="w-full bg-[var(--background-color-dark)] py-4 md:py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-[10vw] md:w-[20vw] bg-gradient-to-r from-[var(--background-color-dark)] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-[10vw] md:w-[20vw] bg-gradient-to-l from-[var(--background-color-dark)] to-transparent z-10" />
        </div>
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col gap-3 md:gap-6">
            <FeatureRow features={topFeatures} direction="left" /> {/* First row moves left */}
            <FeatureRow features={bottomFeatures} direction="right" /> {/* Second row moves right */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;