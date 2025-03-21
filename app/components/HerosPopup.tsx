"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AlternativeAnimation() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

  // Memoize the positions calculation
  const positionsCache = useRef<Record<string, { x: number, y: number }>>({});

  // Pre-calculate positions for better performance
  const getRandomPosition = (index: number) => {
    const key = `${index}-${dimensions.width}-${dimensions.height}`;
    
    // Return cached position if available
    if (positionsCache.current[key]) {
      return positionsCache.current[key];
    }
    
    // Create a deterministic position based on the index
    const angle = (index * 137.5) % 360; // Golden angle
    
    // Determine if mobile based on actual container dimensions rather than window
    const isMobile = dimensions.width < 768;
    const baseDistance = isMobile ? 23 : 30;
    const increment = isMobile ? 13 : 17;
    
    const distance = baseDistance + (index % 3) * increment;

    // Calculate positions
    let x = Math.cos((angle * Math.PI) / 180) * distance;
    let y = Math.sin((angle * Math.PI) / 180) * distance * 5;

    // Bounds for horizontal and vertical spread
    const maxOffsetX = isMobile ? 20 : 28;
    const maxOffsetY = isMobile ? 198 : 264;
    
    // Clamp the values
    x = Math.max(Math.min(x, maxOffsetX), -maxOffsetX);
    y = Math.max(Math.min(y, maxOffsetY), -maxOffsetY);

    // Adjust vertical position
    const upwardBias = isMobile ? -66 : -99;
    y += upwardBias;

    // Avoid bottom area
    const bottomSafeZone = isMobile ? 99 : 132;
    if (y > bottomSafeZone) {
        y = bottomSafeZone;
    }

    // Cache the result
    positionsCache.current[key] = { x, y };
    return { x, y };
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
    
    // Add items at a reasonable interval
    intervalRef.current = setInterval(() => {
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

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLoaded, textItems]);

  // Pre-calculate all positions on dimension change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    // Clear position cache when dimensions change
    positionsCache.current = {};
    
    // Pre-calculate positions for all indices
    textItems.forEach((_, index) => {
      getRandomPosition(index);
    });
  }, [dimensions, textItems]);

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
              scale: [1, 1.05, 1],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 8,
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
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                               bg-white/90 dark:bg-[var(--background-color-light)] backdrop-blur-sm rounded-xl px-3.5 py-2.5
                               shadow-lg border border-white/20 z-10 will-change-transform"
                  >
                    <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-[var(--text-color-dark)] whitespace-nowrap">
                      {textItems[index]}
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
