"use client";

import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";
import FeatureGrid from "./FeatureGrid";

const HeroSection = () => {
  return (
    <section className="relative">
      <div
        className="relative w-full min-h-screen pt-36 pb-15 sm:pt-42 sm:pb-20 flex items-center justify-center 
        bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat px-4 sm:px-0"
      >
        <div className="max-w-7xl w-full relative">
          <div
            className="relative bg-[var(--background-color-dark)] w-[95%] mx-auto flex flex-col sm:flex-row items-center justify-between overflow-hidden 
                       sm:rounded-[0px_24px_0px_24px] rounded-3xl min-h-[422px] sm:min-h-[475px]"
          >
            {/* Content */}
            <div className="relative z-10 w-full sm:w-[55%] text-center sm:text-left p-5 pt-10 sm:p-9">
              <ScrollAnimation>
                <h1 className="text-[36px] sm:text-[56px] font-normal text-[var(--text-color-plain)] leading-tight font-['Libre_Baskerville',serif]">
                  Remission through{" "} <span className="hidden sm:block"></span>
                  <span className="text-[var(--text-color-light)] ">Nutrition</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <p className="mt-4 sm:mt-6 text-[18px] sm:text-[20px] text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] sm:px-0">
                  Discover the power of nutrition and education to achieve your health goals.
                </p>
              </ScrollAnimation>

              {/* Buttons */}
              <ScrollAnimation delay={0.4}>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="https://www.youtube.com/watch?v=c06dTj0v0sM&ab_channel=AllianceforAgingResearch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[var(--background-color-light)] font-['DM_Sans', 'sans-serif'] text-[16px] text-black font-semibold py-4 sm:py-3 px-6 rounded-lg shadow-md text-center hover:opacity-80 transition-opacity"
                  >
                    Know Yourself
                  </a>
                </div>
              </ScrollAnimation>
            </div>

            {/* Hero Image */}
            <div className="relative w-full sm:w-[550px] h-[396px] sm:h-[528px] overflow-hidden rounded-2xl">
              <Image
                src="/images/rem_nutri_hero_Section.webp"
                alt="Wellness background"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, 550px"
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
