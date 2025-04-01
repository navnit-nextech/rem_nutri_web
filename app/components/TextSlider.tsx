import React from 'react';
import { motion } from 'framer-motion';

const TextSlider = () => {
  const textItems = [
    "Nutritionally Balanced",
    "Deliciously Healthy",
    "Minimally Processed",
    "100% Plant-Based",
    "Created by experts",
    "Holistic approach",
    "Yoga and exercise sessions",
    "Delicious, custom meal plans",
    "Knowledge and skills for you",
    "130 recipes to choose from",
    "Balance your hormones",
    "Choice of Desi and contemporary",
    "Freshly prepared everyday",
    "Evidence-based programmes",
    "Optimising gut health",
    "One-to-one consultations",
    "Remission programmes",
    "Supportive community"
  ];

  return (
    <div className="w-full overflow-hidden relative ">
      {/* Wave pattern on top */}
      {/* <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0 48H1440V0C1440 0 1320 20 1200 20C1080 20 960 0 840 0C720 0 600 20 480 20C360 20 240 0 120 0C60 0 0 10 0 10V48Z" 
            fill="#FAF9F6"
            className="drop-shadow-sm"
          />
        </svg>
      </div> */}

      {/* Wave pattern on bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full rotate-180">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0 48H1440V0C1440 0 1320 20 1200 20C1080 20 960 0 840 0C720 0 600 20 480 20C360 20 240 0 120 0C60 0 0 10 0 10V48Z" 
            fill="#FAF9F6"
            className="drop-shadow-sm"
          />
        </svg>
      </div> */}

      <div className="py-[2%] relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -50 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Double the items to create seamless loop */}
          {[...textItems, ...textItems].map((text, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-10"
            >
              <motion.span 
                className="text-[var(--text-color-dark)] text-lg font-medium font-['DM_Sans', 'sans-serif'] tracking-wide hover:text-[#E8D4B9] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {text}
              </motion.span>
              <span className="mx-6 text-[#E8D4B9] text-xl opacity-80">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      {/* <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#436A4E] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#436A4E] to-transparent pointer-events-none" /> */}
    </div>
  );
};

export default TextSlider; 