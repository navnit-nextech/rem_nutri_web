"use client";
import { on } from "events";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  onlyFade?: boolean;
  longFade?: boolean;
}

const ScrollAnimation = ({
  children,
  delay = 0,
  onlyFade,
  longFade,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: onlyFade ? 0 : longFade ? 100 : 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : longFade ? 100 : 50,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
