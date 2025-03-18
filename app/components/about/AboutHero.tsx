"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../ScrollAnimation";

// Image data for galleries
const imageCol1 = [
  "/images/about/11.avif",
  "/images/about/12.avif",
  "/images/about/13.avif",
  "/images/about/11.avif",
  "/images/about/12.avif",
  "/images/about/13.avif",
  "/images/about/11.avif",
  "/images/about/12.avif",
  "/images/about/13.avif",
];
const imageCol2 = [
  "/images/about/21.avif",
  "/images/about/22.avif",
  "/images/about/23.avif",
  "/images/about/21.avif",
  "/images/about/22.avif",
  "/images/about/23.avif",
  "/images/about/21.avif",
  "/images/about/22.avif",
  "/images/about/23.avif",
];

const AboutHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ScrollAnimation onlyFade>
      <div className="w-full bg-[var(--background-color-dark)] text-[var(--text-color-plain)] pt-6 sm:pt-10 pb-10 sm:pb-20 relative overflow-hidden min-h-[100dvh] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left mt-16 sm:mt-24 lg:mt-48">
            <h1 className="font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] text-2xl sm:text-3xl md:text-[40px] mb-4 sm:mb-6 px-2 sm:px-0">
              OUR{" "}
              <span className="text-[var(--text-color-light)]">STORY</span>
            </h1>

            {/* Scrollable Content Section */}
            <div
              className={`max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 px-2 sm:px-0 transition-all duration-500 ${
                isExpanded ? "h-auto max-h-[500px] overflow-y-auto" : "h-[250px] sm:h-[300px] overflow-y-auto"
              }`}
            >
              <p className="font-['DM_Sans', 'sans-serif'] text-[var(--text-color-plain)] text-base sm:text-lg md:text-xl">
                {isExpanded
                  ? `This is the story of two best friends that began some 38 years ago at Padmavathi University when Sri & Hithasri were doing their postgraduate studies in Nutrition & Dietetics. It was here that they were both first exposed to the transformative wonders of nutrition in disease management while pursuing their Postgraduate Diploma in Nutrition & Dietetics. This pivotal period marked the beginning of their journey into healthcare, fuelled by a deep understanding of the transformative power of nutrition & education in managing chronic illnesses. While Hithasri pursued her career as Chief Dietitian at NIIMS, Hyderabad, India, Sri pursued her career as Clinical Lead for Nutrition & Dietetics in the United Kingdom at Rotherham NHS Foundation Trust..  
                
                Sri's illustrious career in Nutrition and Dietetic services spans over 30 years both here in India in the early stages of her career and then in the UK for 26yrs. Her PGDip in Dietetics was complemented by her Master's in Diabetes care from York University. Hithasri on the other hand has gained experience and expertise in the Indian setting working at the World famous Nizams Institute of Medical Sciences. The genesis of RemDi is a testament to their collective experience with healthcare mavericks from across India and the world, and the support of their friends and family over the years. Over the years of their practice they have seen how little people understood the value of food for their health.

                With RemDi, Sri and Hithasri aspire to empower countless Indians to take control of their chronic illnesses and reclaim their lives. This pioneering endeavour is a culmination of her unwavering dedication, expertise, and passion for making a meaningful difference in the lives of others. They are passionate about giving people the skills and knowledge to eat well for themselves and their families. Making people realise the truth of the age old adage- “Food is the best medicine.”`
                  : `This is the story of two best friends that began some 38 years ago at Padmavathi University when Sri & Hithasri were doing their postgraduate studies in Nutrition & Dietetics. It was here that they were both first exposed to the transformative wonders of nutrition in disease management while pursuing their Postgraduate Diploma in Nutrition & Dietetics. This pivotal period marked the beginning of their journey into healthcare, fuelled by a deep understanding of the transformative power of nutrition & education in managing chronic illnesses.`}
              </p>
            </div>

            <button
              className="w-[90%] sm:w-auto bg-[var(--background-color-light)] font-['DM_Sans', 'sans-serif'] text-[16px] text-black font-semibold py-3 sm:py-4 md:py-3 px-6 rounded-lg shadow-md hover:bg-[#5ee079] transition-colors"
              onClick={toggleText}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Image Galleries */}
          <div className="flex-1 sm:mt-10 relative">
            <div className="w-full h-16 sm:h-20 relative -bottom-16 sm:-bottom-20 z-10 bg-gradient-to-b from-[#024027] to-[#02402700]"></div>
            <div className="absolute max-sm:hidden top-10 sm:top-40 right-[35%] transform -translate-x-1/2 sm:-right-20 w-16 sm:w-20 h-16 sm:h-20 z-10 scale-110 sm:scale-125">
              <HeroSvg2 />
            </div>
            <div className="flex gap-3 sm:gap-4 h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
              {/* Left Gallery - Scrolling Down */}
              <motion.div
                className="flex-1"
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {imageCol1.map((src, index) => (
                  <div
                    key={`left-${index}`}
                    className="w-full h-[350px] sm:h-[400px] lg:h-[450px] bg-[#EBE5DA] rounded-lg my-3"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              </motion.div>

              {/* Right Gallery - Scrolling Up */}
              <motion.div
                className="flex-1"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                {imageCol2.map((src, index) => (
                  <div
                    key={`right-${index}`}
                    className="w-full h-[350px] sm:h-[400px] lg:h-[450px] bg-[#EBE5DA] rounded-lg mt-3"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              </motion.div>
            </div>
            <div className="absolute bottom-10 sm:bottom-40 left-1/2 transform -translate-x-1/2 sm:left-0 w-16 sm:w-20 h-16 sm:h-20 z-20 scale-110 sm:scale-125 rotate-[75deg]">
              <HeroSvg1 />
            </div>
            <div className="w-full h-16 sm:h-20 relative -top-16 sm:-top-20 z-10 bg-gradient-to-t from-[#024027] to-[#02402700]"></div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default AboutHero;


const HeroSvg1 = () => (
  <svg viewBox="0 0 88 88" id="svg12565848380">
    <path
      d="M 0.242 87.863 C 24.431 87.863 44.039 68.2 44.039 43.944 L 0.242 43.944 Z M 44.039 43.944 C 44.039 19.687 63.648 0.024 87.837 0.024 L 87.837 43.943 L 44.039 43.943 Z"
      fill='var(--token-6eccbfc0-24c3-4d06-965b-664dfdb012df,#8FC2AB) /* {"name":"Primary 3 - Accent"} */'
    ></path>
    <path
      d="M 44.039 43.944 C 19.851 43.944 0.242 24.28 0.242 0.024 L 44.039 0.024 L 44.039 43.944 Z"
      fill='var(--token-bce35ccc-4509-475f-94ff-b8639c97ef88, #F2E1D3) /* {"name":"Tertiary 2 - Light"} */'
    ></path>
    <path
      d="M 87.836 87.863 C 87.836 63.607 68.227 43.944 44.039 43.944 L 44.039 87.863 Z"
      fill='var(--token-bce35ccc-4509-475f-94ff-b8639c97ef88, #F2E1D3) /* {"name":"Tertiary 2 - Light"} */'
    ></path>
  </svg>
);

const HeroSvg2 = () => (
  <svg viewBox="0 0 106 102" id="svg9894454252">
    <path
      d="M 34.665 61.558 L 17.416 91.309 L 35.794 101.875 L 53.043 72.124 L 70.291 101.875 L 88.669 91.309 L 71.42 61.558 L 105.918 61.558 L 105.918 40.425 L 71.42 40.425 L 88.669 10.674 L 70.291 0.108 L 53.043 29.859 L 35.794 0.108 L 17.416 10.674 L 34.665 40.425 L 0.167 40.425 L 0.167 61.558 Z"
      fill='var(--token-6eccbfc0-24c3-4d06-965b-664dfdb012df, rgb(143, 194, 171)) /* {"name":"Primary 3 - Accent"} */'
    ></path>
  </svg>
);
