"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollAnimation from "../../components/ScrollAnimation";
import Image from "next/image";
import Navbar from "../../components/Navbar";

const DecorativeCircle = () => (
  <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-[10px] md:border-[15px] border-[#A6C6B2] flex items-center justify-center">
    <div className="w-3/4 h-3/4 rounded-full flex items-center justify-center border-[10px] md:border-[15px] border-[#F4C6A5]"></div>
  </div>
);

const DecorativeStar = () => (
  <svg width="120" height="120" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12">
    <path d="M 70.957 49.812 C 94.5 50.563 111.783 53.045 111.783 55.991 C 111.783 58.937 94.5 61.419 70.957 62.169 C 87.074 79.347 97.54 93.323 95.457 95.406 C 93.373 97.489 79.397 87.023 62.219 70.906 C 61.47 94.449 58.987 111.733 56.041 111.733 C 53.095 111.733 50.613 94.449 49.863 70.906 C 32.685 87.023 18.709 97.489 16.626 95.406 C 14.542 93.323 25.009 79.347 41.126 62.169 C 17.583 61.419 0.299 58.937 0.299 55.991 C 0.299 53.045 17.583 50.563 41.126 49.812 C 25.009 32.635 14.543 18.659 16.626 16.575 C 18.709 14.492 32.685 24.958 49.863 41.075 C 50.613 17.532 53.095 0.249 56.041 0.249 C 58.987 0.249 61.47 17.532 62.219 41.075 C 79.397 24.958 93.373 14.492 95.457 16.575 C 97.54 18.659 87.074 32.635 70.957 49.812 Z" fill="#A6C6B2"/>
  </svg>
);

const programSteps = [
  {
    number: "01",
    title: "Personalised Consultations",
    subtitle: "One-on-one expert guidance",
    description: "Regular personalised, one-to-one consultations with a specialist dietitian and doctor ensure you receive focused attention and expert guidance throughout your journey to better metabolic health.",
  },
  {
    number: "02",
    title: "12-Week Education Program",
    subtitle: "Comprehensive learning for lasting change",
    description: "Engage in our 12-week online education program covering essential topics like what is fatty liver, high blood pressure, how to reduce risks of complications, guidance on nutrition and lifestyle changes, and more.",
  },
  {
    number: "03",
    title: "Gut Health Management",
    subtitle: "Foundation for metabolic wellness",
    description: "Learn how to manage your gut health effectively as a critical component of metabolic health. Our experts will guide you through proven techniques to improve gut function and overall wellbeing.",
  },
  {
    number: "04",
    title: "Meal Solutions",
    subtitle: "Practical nutrition support",
    description: "Access meal plans to prepare on your own or have delicious balanced meals delivered to your doorstep with ingredients curated to help manage your disorder and optimize your metabolism and gut health.",
  },
  {
    number: "05",
    title: "Metabolic Optimization",
    subtitle: "Comprehensive health improvement",
    description: "Optimise your metabolism and gut health and improve your overall health through our integrated approach combining nutrition, education, and personalized support throughout your wellness journey.",
  },
];

const RemMetaPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgHeight, setSvgHeight] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([true, false, false, false]);
  const [initialLoad, setInitialLoad] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const lineScaleFactor = useTransform(
    scrollYProgress,
    [0, 1],
    [1, svgHeight / 160]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (!contentRef.current) return;

      const totalHeight = contentRef.current.offsetHeight;
      const currentLineHeight = totalHeight * value;

      const stepPositions = stepRefs.current.map((ref) => ref?.offsetTop || 0);

      const newVisibleSteps = stepPositions.map((position, index) => {
        if (index === 0 && value < 0.1) return true;

        let threshold;
        if (index === 1) threshold = position - 400;
        else if (index === 2) threshold = position - 600;
        else if (index === 3) threshold = position - 800;
        else threshold = position - 300;

        return currentLineHeight >= threshold;
      });

      if (value > 0.3 && !newVisibleSteps[1]) newVisibleSteps[1] = true;
      if (value > 0.5 && !newVisibleSteps[2]) newVisibleSteps[2] = true;
      if (value > 0.7 && !newVisibleSteps[3]) newVisibleSteps[3] = true;

      setVisibleSteps(newVisibleSteps);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialLoad]);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <div className="relative min-h-screen bg-[var(--background-color-dark)] pt-28 md:pt-20" ref={heroRef}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('/images/rem_nutri_hero_Section.webp')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-color-dark)]/95 via-[var(--background-color-dark)]/90 to-[var(--background-color-dark)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-80px)]">
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-7 relative z-10 pt-4 md:pt-0"
              style={{ opacity, y }}
            >
              <ScrollAnimation>
                <div className="flex flex-col items-start">
                  {/* Program Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 bg-[var(--text-color-light)]/10 rounded-full px-4 py-2.5 mb-6 md:mb-8"
                  >
                    <span className="text-[var(--text-color-light)] text-sm md:text-base">Metabolic Health Program</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[48px] lg:text-[64px] font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] leading-tight mb-6"
                  >
                    Rem<span className="text-[var(--text-color-light)]">Meta</span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl lg:text-2xl text-[var(--text-color-plain)]/80 font-['DM_Sans', 'sans-serif'] leading-relaxed mb-8 max-w-2xl"
                  >
                    Tackling Metabolic Disorders such as High Blood Pressure, Fatty Liver, Cardiac Risk and more through our comprehensive, personalized approach to metabolic health.
                  </motion.p>

                  {/* Quick Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-3 gap-6 mb-12"
                  >
                    {[
                      { number: "90%", label: "Success Rate" },
                      { number: "12", label: "Week Program" },
                      { number: "24/7", label: "Expert Support" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-[var(--text-color-light)] text-3xl font-bold mb-1">{stat.number}</div>
                        <div className="text-[var(--text-color-plain)]/60 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href="#learn-more"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[var(--text-color-light)] text-black font-semibold rounded-xl hover:opacity-90 transition-all duration-300"
                    >
                      Start Your Journey
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-8 py-4 border border-[var(--text-color-plain)]/20 text-[var(--text-color-plain)] font-semibold rounded-xl hover:bg-[var(--text-color-plain)]/10 transition-all duration-300"
                    >
                      Book Consultation
                    </a>
                  </motion.div>
                </div>
              </ScrollAnimation>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div 
              className="lg:col-span-5 relative z-10"
              style={{ scale }}
            >
              <ScrollAnimation delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  {/* Main Image */}
                  <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/rem_nutri_hero_Section.webp"
                      alt="RemMeta Program"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-color-dark)] to-transparent"></div>
                  </div>

                  {/* Floating Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute -left-8 bottom-32 bg-[var(--background-color-dark)]/80 backdrop-blur-sm rounded-xl p-4 border border-[var(--text-color-plain)]/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[var(--text-color-light)]/10 flex items-center justify-center">
                        <span className="text-2xl">⭐</span>
                      </div>
                      <div>
                        <div className="text-[var(--text-color-plain)] font-semibold">Proven Results</div>
                        <div className="text-[var(--text-color-plain)]/70 text-sm">Join our success stories</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </ScrollAnimation>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="text-[var(--text-color-plain)]/60 text-sm">Scroll to explore</div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 border-2 border-[var(--text-color-plain)]/20 rounded-full flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 bg-[var(--text-color-light)] rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[var(--background-color-plain)] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-[40px] font-['Libre_Baskerville',serif] text-[var(--text-color-dark)] mb-4">
                About Metabolic Disorders
              </h2>
              <div className="w-16 h-[2px] bg-[var(--text-color-light)] mx-auto"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Understanding Metabolic Disorders */}
            <ScrollAnimation>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[var(--text-color-dark)]/10 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--text-color-light)]/5 hover:border-[var(--text-color-light)]/20 hover:transform hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--text-color-light)]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--text-color-dark)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[24px] font-['Libre_Baskerville',serif] text-[var(--text-color-dark)]">
                    Understanding the Condition
                  </h3>
                </div>
                <p className="text-[var(--text-color-dark)]/80 text-lg leading-relaxed font-['DM_Sans', 'sans-serif']">
                  Metabolic disorders are conditions that disrupt normal metabolic processes in the body, leading to an imbalance of chemicals and enzymes necessary for energy production. Examples include high blood pressure, fatty liver disease and more.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[var(--text-color-dark)]/60 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Affects multiple organ systems and metabolic functions</span>
                </div>
              </div>
            </ScrollAnimation>

            {/* The RemMeta Solution */}
            <ScrollAnimation delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[var(--text-color-dark)]/10 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--text-color-light)]/5 hover:border-[var(--text-color-light)]/20 hover:transform hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--text-color-light)]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--text-color-dark)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[24px] font-['Libre_Baskerville',serif] text-[var(--text-color-dark)]">
                    The RemMeta Solution
                  </h3>
                </div>
                <p className="text-[var(--text-color-dark)]/80 text-lg leading-relaxed font-['DM_Sans', 'sans-serif']">
                  This program focuses on identifying the root cause of your metabolic disorder and developing a personalised plan to manage it. Our approach helps optimize your metabolism and gut health to improve your overall health and wellbeing.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[var(--text-color-dark)]/60 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Focus on root cause analysis and natural healing</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Program Features Section */}
      <section className="bg-[var(--background-color-dark)] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <ScrollAnimation>
                <h2 className="text-5xl mb-8 font-['Libre_Baskerville',serif]">
                  <span className="text-[var(--text-color-light)]">Program Features</span> for
                  your metabolic health journey.
                </h2>
                <p className="text-lg mb-8 text-[var(--text-color-plain)]/80">
                  Our comprehensive program combines expert guidance, education, and practical solutions
                  to help you achieve lasting health improvements and manage metabolic disorders effectively.
                </p>
                <div>
                  <a
                    href="#contact"
                    className="inline-block bg-[var(--text-color-light)] text-black font-medium py-3 px-6 rounded-xl transition-colors hover:opacity-90"
                  >
                    Start Your Journey
                  </a>
                </div>
                <ScrollAnimation delay={0.6}>
                  <div className="relative mt-12">
                    <div className="absolute -bottom-3 -right-3 w-full h-full bg-[var(--text-color-light)]/20 rounded-2xl"></div>
                    <div className="rounded-2xl overflow-hidden relative z-10">
                      <Image
                        src="/images/rem_nutri_hero_Section.webp"
                        alt="RemMeta Program Features"
                        width={500}
                        height={300}
                        className="w-full h-[650px] object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </ScrollAnimation>
              </ScrollAnimation>
            </div>

            <motion.div
              className="lg:col-span-7 relative overflow-hidden sm:pl-20 pl-10"
              ref={containerRef}
            >
              <div className="space-y-48 relative" ref={contentRef}>
                <div className="absolute left-0 top-0 h-full z-0">
                  <div className="absolute left-0 top-0 w-[2px] h-full bg-[var(--text-color-plain)]/20"></div>
                  <div className="absolute left-0 top-0 h-full overflow-visible">
                    <motion.div
                      className="absolute left-0 top-0 w-[2px] bg-[var(--text-color-light)] origin-top"
                      style={{
                        height: initialLoad ? "250px" : "200px",
                        scaleY: lineScaleFactor,
                        transformOrigin: "top",
                        transition: "all 0.1s ease-out",
                      }}
                    ></motion.div>
                  </div>
                </div>

                {programSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-start sm:pl-16 pl-12"
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                  >
                    <div className="absolute left-0 -translate-x-1/2 bg-[var(--background-color-dark)] py-4 z-10">
                      <motion.div
                        className="relative text-7xl font-bold italic font-['Libre_Baskerville',serif]"
                        animate={{
                          color: visibleSteps[index] ? "#ffffff" : "#ffffff70",
                        }}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: visibleSteps[index] ? 1 : 0,
                        y: visibleSteps[index] ? 0 : 50,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                    >
                      <div className="pt-4 pl-5">
                        <div className="mb-2 text-[var(--text-color-light)] text-sm">
                          {step.subtitle}
                        </div>
                        <h3 className="text-4xl text-[var(--text-color-plain)] font-bold mb-4 font-['Libre_Baskerville',serif]">
                          {step.title}
                        </h3>
                        <p className="text-[var(--text-color-plain)]/80 max-w-2xl text-lg">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-[var(--background-color-plain2)] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="relative bg-[var(--background-color-dark)] rounded-2xl p-10 md:p-16 text-center overflow-hidden">
              {/* Subtle Gradient Border */}
              <div className="absolute inset-0 border border-[var(--text-color-light)]/10 rounded-2xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[40px] md:text-[48px] font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] mb-6"
                >
                  Transform Your Metabolic Health <span className="text-[var(--text-color-light)]">Today</span>
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[var(--text-color-plain)]/70 text-lg mb-8"
                >
                  Take the first step towards optimizing your metabolism with our expert guidance.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-[var(--text-color-light)] text-black font-semibold rounded-xl hover:opacity-90 transition-all duration-300 min-w-[200px]"
                  >
                    Book Consultation
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default RemMetaPage;
