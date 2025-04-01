"use client";

import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";
import FeatureGrid from "./FeatureGrid";

const HeroSection = () => {
  return (
    <section className="relative">
      <div
        className="relative w-full min-h-screen pt-36 pb-15 md:pt-42 md:pb-20 flex items-center justify-center 
        bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-0"
      >
        <div className="max-w-7xl w-full relative">
          <div
            className="relative bg-[var(--background-color-dark)] w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden 
                       sm:rounded-[0px_24px_0px_24px] rounded-3xl min-h-[422px] lg:min-h-[475px]"
          >
            {/* Content */}
            <div className="relative z-10 w-full lg:w-[55%] text-center lg:text-left p-5 pt-10 sm:pt-8 md:p-7 lg:p-9">
              <ScrollAnimation>
                <h1 className="text-[36px] lg:text-[56px] font-normal text-[var(--text-color-plain)] leading-tight font-['Libre_Baskerville',serif]">
                  Remission through{" "} <span className="hidden md:block"></span>
                  <span className="text-[var(--text-color-light)] ">Nutrition</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <p className="mt-4 lg:mt-6 text-[18px] lg:text-[20px] text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] lg:px-0">
                  Discover the power of nutrition and education to achieve your health goals.
                </p>
              </ScrollAnimation>

              {/* Buttons */}
              <ScrollAnimation delay={0.4}>
                <div className="mt-6 flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <a
                    href="https://www.youtube.com/watch?v=c06dTj0v0sM&ab_channel=AllianceforAgingResearch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto bg-[var(--background-color-light)] font-['DM_Sans', 'sans-serif'] text-[16px] text-black font-semibold py-4 md:py-3 px-6 rounded-lg shadow-md text-center hover:opacity-80 transition-opacity"
                  >
                    Know Yourself
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            {/* Hero Image */}
            <div className="relative w-full md:w-[500px] lg:w-[550px] h-[396px] md:h-[462px] lg:h-[528px] overflow-hidden rounded-2xl">
              <Image
                src="/images/rem_nutri_hero_Section.webp"
                alt="Wellness background"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Grid Section */}
      <FeatureGrid />
    </section>
  );
};

export default HeroSection;
