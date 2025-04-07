"use client";

import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";
import FeatureGrid from "./FeatureGrid";
import { motion, AnimatePresence } from "framer-motion";

// Memoized FeatureGrid to prevent re-renders
const MemoizedFeatureGrid = memo(FeatureGrid);

const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1000", // RemDi2 - Brighter healthy meal with berries
    "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // RemFit - Super vibrant fitness scene
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1000", // RemMeta - Vibrant fruits and vegetables
    "https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // RemBliss - Vibrant wellness scene
    "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=1000", // RemBalance - Bright balanced food
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=1000", // RemProtein - High-protein foods
  ];

  // Use refs to minimize re-renders
  const currentImageRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const [, forceUpdate] = useState({});
  const animating = useRef(false);

  // Function to change image without causing full re-renders
  const changeImage = useCallback(() => {
    if (animating.current) return;
    
    const nextImage = (currentImageRef.current + 1) % images.length;
    currentImageRef.current = nextImage;
    
    // Only force re-render for the image carousel, not the whole component
    requestAnimationFrame(() => {
      if (!animating.current) {
        animating.current = true;
        forceUpdate({});
        
        // Reset animation flag after transition completes (match with transition duration)
        setTimeout(() => {
          animating.current = false;
        }, 1000); // Match with transition duration
      }
    });
  }, [images.length]);

  // Set up timer with cleanup
  useEffect(() => {
    const timerDuration = 3000; // 3 seconds (reduced from 5000)
    
    const startTimer = () => {
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current);
      }
      
      let startTime = performance.now();
      
      const tick = () => {
        const now = performance.now();
        const elapsed = now - startTime;
        
        if (elapsed >= timerDuration) {
          startTime = now;
          changeImage();
        }
        
        timerRef.current = requestAnimationFrame(tick);
      };
      
      timerRef.current = requestAnimationFrame(tick);
    };
    
    startTimer();
    
    return () => {
      if (timerRef.current) {
        cancelAnimationFrame(timerRef.current);
      }
    };
  }, [changeImage]);

  return (
    <section className="relative">
      <div
        className="relative w-full min-h-screen pt-28 pb-10 sm:pt-42 sm:pb-20 flex items-center justify-center 
        bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat px-4 sm:px-0"
      >
        <div className="max-w-7xl w-full relative">
          <div
            className="relative bg-[var(--background-color-dark)] w-[95%] mx-auto flex flex-col sm:flex-row items-center justify-between overflow-hidden 
                       sm:rounded-[0px_24px_0px_24px] rounded-3xl min-h-[420px] sm:min-h-[475px]"
          >
            {/* Content - Increased height by increasing padding */}
            <div className="relative z-10 w-full sm:w-[55%] text-center sm:text-left p-6 pt-8 pb-8 sm:p-10">
              <ScrollAnimation>
                <h1 className="text-[32px] sm:text-[56px] font-normal text-[var(--text-color-plain)] leading-tight font-['Libre_Baskerville',serif]">
                  Remission through{" "} <span className="hidden sm:block"></span>
                  <span className="text-[var(--text-color-light)] ">Nutrition</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <p className="mt-4 sm:mt-6 text-[16px] sm:text-[20px] text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] sm:px-0">
                  Discover the power of nutrition and education to achieve your health goals.
                </p>
              </ScrollAnimation>

              {/* Buttons - Added more space above button */}
              <ScrollAnimation delay={0.4}>
                <div className="mt-6 sm:mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href="https://www.youtube.com/watch?v=c06dTj0v0sM&ab_channel=AllianceforAgingResearch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[var(--background-color-light)] font-['DM_Sans', 'sans-serif'] text-[16px] text-black font-semibold py-4 sm:py-3 px-6 rounded-lg shadow-md text-center hover:opacity-80 transition-opacity"
                  >
                    Start Your Journey
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            {/* Hero Image with Animation - Kept shorter than desktop for overall balance */}
            <div className="relative w-full sm:w-[550px] h-[320px] sm:h-[528px] overflow-hidden rounded-2xl">
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={currentImageRef.current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[currentImageRef.current]}
                    alt={`Wellness image ${currentImageRef.current + 1}`}
                    fill
                    className="object-cover"
                    priority={true}
                    sizes="(max-width: 640px) 100vw, 550px"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Preload next image */}
              <div className="hidden">
                <Image
                  src={images[(currentImageRef.current + 1) % images.length]}
                  alt="Preload next image"
                  width={1}
                  height={1}
                  priority={true}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
              
              {/* Improved circular progress indicator with larger text */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative">
                  {/* Larger SVG for better visibility */}
                  <svg 
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    viewBox="0 0 40 40" 
                    key={`timer-${currentImageRef.current}`}
                  >
                    {/* Background circle */}
                    <circle 
                      cx="20" 
                      cy="20" 
                      r="18" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2"
                      strokeOpacity="0.3" 
                    />
                    
                    {/* Progress circle */}
                    <circle 
                      cx="20" 
                      cy="20" 
                      r="18" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="3" 
                      strokeDasharray={2 * Math.PI * 18}
                      style={{
                        animation: "countdown 3s linear forwards",
                        transformOrigin: "center",
                        transform: "rotate(-90deg)"
                      }}
                    />
                    
                    {/* Much larger text size for better visibility */}
                    <text
                      x="20"
                      y="20"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="white"
                      fontSize="12"
                      fontWeight="bold"
                      fontFamily="Arial, sans-serif"
                    >
                      {currentImageRef.current + 1}/{images.length}
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator - Repositioned higher for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-13 sm:bottom-3 left-1/2 -translate-x-1/2 flex flex-row items-center gap-1 sm:gap-4"
        >
          <div className="text-[var(--text-color-dark)] text-[14px] sm:text-[20px] font-bold">
            Scroll down
            <span className="hidden sm:inline"> for more</span>
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.0, repeat: Infinity }}
            className="w-4 h-7 sm:w-8 sm:h-14 border-2 sm:border-3 border-[var(--text-color-dark)] rounded-full flex items-start justify-center p-1 sm:p-1"
          >
            <div className="w-1 h-3 sm:w-2 sm:h-6 bg-[var(--text-color-dark)] rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Feature Grid Section - Memoized to prevent re-renders */}
      <MemoizedFeatureGrid />
    </section>
  );
};

export default HeroSection;