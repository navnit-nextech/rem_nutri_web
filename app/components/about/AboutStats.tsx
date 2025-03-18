"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

const AboutStats = () => {
  // Stats data with extendedLabel for full content toggle
  const stats = [
    {
      value: "Our Vision",
      label:
        "We envision a world where chronic health conditions no longer limit your potential...",
      extendedLabel:
        "A future where individuals are equipped with the knowledge and skills to manage their health and live fulfilling lives, free from the burden of medications and complications.",
    },
    {
      value: "Our Mission",
      label:
        "Our mission is to empower individuals to take back control of their health...",
      extendedLabel:
        "We achieve this by providing evidence-based knowledge, personalized support, and the tools you need to thrive, not just manage your condition.",
    },
    {
      value: "Our Approach",
      label:
        "Our unique approach combines three key pillars to empower you to achieve lasting health improvements...",
      extendedLabel:
        "Our multidisciplinary team has developed a comprehensive education program, providing motivation, support, and holistic wellness plans including personalized care, chef-prepared meals, and online yoga/exercise plans.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleContent = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 md:py-38 overflow-hidden font-['Libre_Baskerville',serif]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/stats.avif"
          alt="Physiotherapy session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1c3328e8]/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-16 items-center max-sm:flex-col-reverse">
          {/* Stats Grid */}
          <div className="flex-1 w-full">
            <ScrollAnimation delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-[var(--background-color-plain3)]/15 p-6 text-center rounded-lg w-full 
                      ${index === 2 ? "col-span-1 sm:col-span-2" : ""}`}
                  >
                    <div className="text-[var(--text-color-light)] text-5xl md:text-6xl font-bold mb-3">
                      {stat.value}
                    </div>
                    <div className="text-[var(--text-color-plain)] text-xl md:text-2xl">
                      <p>
                        {expandedIndex === index
                          ? `${stat.label} ${stat.extendedLabel}`
                          : `${stat.label.slice(0, 150)}...`}
                      </p>
                      <button
                        className="text-blue-500 mt-4 cursor-pointer"
                        onClick={() => toggleContent(index)}
                      >
                        {expandedIndex === index ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
