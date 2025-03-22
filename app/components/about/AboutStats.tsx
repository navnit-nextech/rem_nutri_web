"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../ScrollAnimation";

// SVG Components
const StatIcon = () => (
  <svg viewBox="0 0 88 88" className="w-full h-full">
    <path
      d="M 0.242 87.863 C 24.431 87.863 44.039 68.2 44.039 43.944 L 0.242 43.944 Z M 44.039 43.944 C 44.039 19.687 63.648 0.024 87.837 0.024 L 87.837 43.943 L 44.039 43.943 Z"
      fill="currentColor"
    />
    <path
      d="M 44.039 43.944 C 19.851 43.944 0.242 24.28 0.242 0.024 L 44.039 0.024 L 44.039 43.944 Z"
      fill="currentColor"
      className="opacity-50"
    />
  </svg>
);

const PillarIcon = () => (
  <svg viewBox="0 0 106 102" className="w-full h-full">
    <path
      d="M 34.665 61.558 L 17.416 91.309 L 35.794 101.875 L 53.043 72.124 L 70.291 101.875 L 88.669 91.309 L 71.42 61.558 L 105.918 61.558 L 105.918 40.425 L 71.42 40.425 L 88.669 10.674 L 70.291 0.108 L 53.043 29.859 L 35.794 0.108 L 17.416 10.674 L 34.665 40.425 L 0.167 40.425 L 0.167 61.558 Z"
      fill="currentColor"
    />
  </svg>
);

const AboutStats = () => {
  const stats = [
    {
      title: "Vision",
      description: "We envision a world where chronic health conditions no longer limit your potential- a future where individuals are equipped with the knowledge and skills to manage their health and live fulfilling lives, free from the burden of medications and complications."
    },
    {
      title: "Mission",
      description: "Our mission is to empower individuals to take back control of their health. We achieve this by providing evidence-based knowledge, personalised support, and the tools you need to thrive, not just manage your condition."
    }
  ];

  const pillars = [
    {
      title: "Education",
      description: "Our multidisciplinary team of specialists has developed a comprehensive education program packed with the knowledge and skills you need to manage your condition, achieve remission and return to a healthier lifestyle."
    },
    {
      title: "Motivation & Support",
      description: "We create personalised care plans that consider your unique needs and goals. This support comes in the form of one-on-one consultations and group sessions that foster a sense of community and belonging."
    },
    {
      title: "Enablement",
      description: "We understand the challenges of making lifestyle changes. Our team of chefs creates delicious, balanced meals that are close to traditional dishes, making healthy eating sustainable."
    }
  ];

  return (
    <ScrollAnimation>
      <div className="w-full bg-[var(--background-color-plain)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Vision & Mission */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="font-['Libre_Baskerville',serif] text-[var(--text-color-dark)] text-3xl sm:text-4xl mb-6">
                Our Foundation
              </h2>
              <div className="w-20 h-1 bg-[var(--text-color-light)] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-[var(--background-color-dark)] rounded-2xl p-8 h-full relative overflow-hidden group">
                    <div className="absolute top-4 right-4 w-12 h-12 text-[var(--text-color-light)]/20">
                      <StatIcon />
                    </div>
                    <h3 className="font-['Libre_Baskerville',serif] text-[var(--text-color-light)] text-2xl mb-4">
                      Our {stat.title}
                    </h3>
                    <p className="text-[var(--text-color-plain)]/80 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-[var(--background-color-dark)] rounded-3xl p-12 relative">
            <div className="text-center mb-12">
              <h2 className="font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] text-3xl sm:text-4xl mb-6">
                Our <span className="text-[var(--text-color-light)]">Approach</span>
              </h2>
              <p className="text-[var(--text-color-plain)]/80 text-lg max-w-3xl mx-auto">
                Three key pillars to empower lasting health improvements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="h-full"
                >
                  <div className="relative group h-full">
                    <div className="absolute -top-2 -left-2 w-12 h-12 text-[var(--text-color-light)]/20">
                      <PillarIcon />
                    </div>
                    <div className="bg-[var(--background-color-light)]/5 rounded-xl p-8 border border-[var(--text-color-light)]/10 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--text-color-light)]/10 text-[var(--text-color-light)] font-['Libre_Baskerville',serif]">
                          {index + 1}
                        </span>
                        <h3 className="font-['Libre_Baskerville',serif] text-[var(--text-color-light)] text-xl">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-[var(--text-color-plain)]/80 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default AboutStats;
