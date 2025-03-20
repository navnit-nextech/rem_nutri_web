"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AlternativeAnimation() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const textItems = [
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
    "Supportive community",
  ];

  useEffect(() => {
    // Start with no visible items
    setVisibleItems([]);

    // Add a new item every 800ms
    const interval = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev.length >= textItems.length) {
          return [];
        }

        // Get a random index that's not already visible
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * textItems.length);
        } while (prev.includes(newIndex));

        return [...prev, newIndex];
      });
    }, 800);

    return () => clearInterval(interval);
  }, [textItems.length]);

  const getRandomPosition = (index: number) => {
    // Create a deterministic but seemingly random position based on the index
    const angle = (index * 137.5) % 360; // Golden angle
    
    // Adjust distances for better vertical spread
    const isMobile = window.innerWidth < 768;
    const baseDistance = isMobile ? 23 : 30; // Increased by 10%
    const increment = isMobile ? 13 : 17; // Increased by 10%
    
    const distance = baseDistance + (index % 3) * increment;

    // Calculate raw positions
    let x = Math.cos((angle * Math.PI) / 180) * distance;
    let y = Math.sin((angle * Math.PI) / 180) * distance * 5;

    // Bounds for horizontal and vertical spread
    const maxOffsetX = isMobile ? 20 : 28; // Increased by 10%
    const maxOffsetY = isMobile ? 198 : 264; // Increased by 10%
    
    // Clamp the values
    x = Math.max(Math.min(x, maxOffsetX), -maxOffsetX);
    y = Math.max(Math.min(y, maxOffsetY), -maxOffsetY);

    // Shift everything upward to avoid Key Benefits area
    const upwardBias = isMobile ? -66 : -99; // Increased by 10%
    y += upwardBias;

    // Additional check to avoid bottom area where Key Benefits circle is
    const bottomSafeZone = isMobile ? 99 : 132; // Increased by 10%
    if (y > bottomSafeZone) {
        y = bottomSafeZone;
    }

    return { x, y };
  };

  // Add window resize handler to update positions when screen size changes
  useEffect(() => {
    const handleResize = () => {
      // Force re-render of visible items to recalculate positions
      setVisibleItems(prev => [...prev]);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full md:w-[500px] lg:w-[550px] h-[396px] md:h-[462px] lg:h-[528px] overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Image
          src=""
          alt="Wellness background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Key Benefits circle with higher z-index */}
          <motion.div
            className="absolute bottom-7 left-1/2 transform -translate-x-1/2
                       w-22 h-22 md:w-26 md:h-26 lg:w-31 lg:h-31 rounded-full bg-primary/80 backdrop-blur-md
                       flex items-center justify-center shadow-xl border-2 border-white/30 z-50"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <p className="text-white text-center text-sm md:text-base lg:text-lg font-bold">
              Key Benefits
            </p>
          </motion.div>

          <AnimatePresence>
            {visibleItems.map((index) => {
              const position = getRandomPosition(index);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: position.x + "%",
                    y: position.y + "%",
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             bg-white/90 dark:bg-[var(--background-color-light)] backdrop-blur-sm rounded-xl px-3.5 py-2.5
                             shadow-lg border border-white/20 z-10"
                >
                  <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-[var(--text-color-dark)] whitespace-nowrap">
                    {textItems[index]}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
