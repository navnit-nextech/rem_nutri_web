"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AlternativeAnimation() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Detect mobile devices once at component mount
  useEffect(() => {
    // Check if we're on a mobile device based on screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Memoize text items to prevent unnecessary re-renders
  const textItems = useMemo(() => [
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
  ], []);

  // For mobile, limit the displayed items to improve performance
  const mobileTextItems = useMemo(() => {
    return textItems.slice(0, 8); // Only display 8 items on mobile
  }, [textItems]);

  // Memoize the positions calculation
  const positionsCache = useRef<Record<string, { x: number, y: number }>>({});

  // Pre-calculate positions for better performance
  const getRandomPosition = (index: number) => {
    const key = `${index}-${dimensions.width}-${dimensions.height}`;
    
    // Return cached position if available
    if (positionsCache.current[key]) {
      return positionsCache.current[key];
    }
    
    // Create a simpler position calculation for mobile
    if (isMobile) {
      // For mobile, use a simpler position calculation with fewer variations
      const positions = [
        { x: -18, y: -60 },
        { x: 18, y: -40 },
        { x: -15, y: 0 },
        { x: 15, y: 20 },
        { x: -18, y: 40 },
        { x: 18, y: 60 },
        { x: -15, y: 80 },
        { x: 15, y: -80 },
      ];
      
      // Use modulo to cycle through predefined positions
      const pos = positions[index % positions.length];
      
      // Add a small random variation but keep it minimal
      const xVar = (Math.random() - 0.5) * 5;
      const yVar = (Math.random() - 0.5) * 5;
      
      positionsCache.current[key] = { 
        x: pos.x + xVar, 
        y: pos.y + yVar 
      };
      
      return positionsCache.current[key];
    }
    
    // Desktop position calculation (original algorithm)
    const angle = (index * 137.5) % 360;
    const baseDistance = 30;
    const increment = 17;
    const distance = baseDistance + (index % 3) * increment;

    let x = Math.cos((angle * Math.PI) / 180) * distance;
    let y = Math.sin((angle * Math.PI) / 180) * distance * 5;

    const maxOffsetX = 28;
    const maxOffsetY = 264;
    
    x = Math.max(Math.min(x, maxOffsetX), -maxOffsetX);
    y = Math.max(Math.min(y, maxOffsetY), -maxOffsetY);
    y += -99;

    if (y > 132) {
        y = 132;
    }

    positionsCache.current[key] = { x, y };
    return positionsCache.current[key];
  };

  // Update dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    // Initial update
    updateDimensions();
    
    // Wait for image to load before starting animation
    setIsLoaded(false);
    
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Start animation only after component and image are loaded
  useEffect(() => {
    if (!isLoaded) return;
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Start with no visible items
    setVisibleItems([]);
    
    // Use different timing for mobile vs desktop
    const intervalTime = isMobile ? 1000 : 800; // Slower interval for mobile
    const maxItems = isMobile ? 4 : textItems.length; // Fewer items on mobile
    
    // Add items at a reasonable interval
    intervalRef.current = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev.length >= maxItems) {
          return [];
        }

        // Get a random index that's not already visible
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * (isMobile ? mobileTextItems.length : textItems.length));
        } while (prev.includes(newIndex));

        return [...prev, newIndex];
      });
    }, intervalTime);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLoaded, textItems, mobileTextItems, isMobile]);

  // Pre-calculate all positions on dimension change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    // Clear position cache when dimensions change
    positionsCache.current = {};
    
    // Pre-calculate positions for fewer indices on mobile
    const itemsToCalculate = isMobile ? mobileTextItems : textItems;
    itemsToCalculate.forEach((_, index) => {
      getRandomPosition(index);
    });
  }, [dimensions, textItems, mobileTextItems, isMobile]);

  // Simplified animation transitions for mobile
  const getTransition = () => {
    return isMobile 
      ? { duration: 0.3, ease: "easeOut" }  // Simpler, faster animation for mobile
      : { duration: 0.5, ease: "easeOut" }; // Original animation for desktop
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full md:w-[500px] lg:w-[550px] h-[396px] md:h-[462px] lg:h-[528px] overflow-hidden rounded-2xl"
    >
      <Image
        src="/images/rem_nutri_hero_Section.webp"
        alt="Wellness background"
        fill
        className="object-cover"
        priority
        onLoad={() => setIsLoaded(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Key Benefits circle with GPU acceleration */}
          <motion.div
            className="absolute bottom-7 left-1/2 transform -translate-x-1/2
                       w-22 h-22 md:w-26 md:h-26 lg:w-31 lg:h-31 rounded-full bg-primary/80 backdrop-blur-md
                       flex items-center justify-center shadow-xl border-2 border-white/30 z-20 will-change-transform"
            animate={{
              scale: isMobile ? [1, 1.03, 1] : [1, 1.05, 1], // Reduced scale animation for mobile
              rotate: isMobile ? [0, 2, -2, 0] : [0, 3, -3, 0], // Reduced rotation for mobile
            }}
            transition={{
              duration: isMobile ? 6 : 8, // Slower animation on mobile
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <p className="text-white text-center text-sm md:text-base lg:text-lg font-bold">
              Key Benefits
            </p>
          </motion.div>

          {isLoaded && (
            <AnimatePresence mode="sync">
              {visibleItems.map((index) => {
                const position = getRandomPosition(index);
                const items = isMobile ? mobileTextItems : textItems;

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
                    transition={getTransition()}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                               bg-white/90 dark:bg-[var(--background-color-light)] backdrop-blur-sm rounded-xl px-3.5 py-2.5
                               shadow-lg border border-white/20 z-10 will-change-transform"
                  >
                    <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-[var(--text-color-dark)] whitespace-nowrap">
                      {items[index]}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
