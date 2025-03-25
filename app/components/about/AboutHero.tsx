"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../ScrollAnimation";

// Image data for galleries
const imageCol1 = [
  "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664640733870-15cb6a5b6ee6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664640733870-15cb6a5b6ee6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664640733870-15cb6a5b6ee6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const imageCol2 = [
  "https://plus.unsplash.com/premium_photo-1675237626334-5cf9d9d8b30c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664551734602-49640bd82eba?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://plus.unsplash.com/premium_photo-1675237626334-5cf9d9d8b30c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664551734602-49640bd82eba?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 "https://plus.unsplash.com/premium_photo-1675237626334-5cf9d9d8b30c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664551734602-49640bd82eba?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const AboutHero = () => {
  const [activeStory, setActiveStory] = useState(0);

  const storyContent = [
    {
      title: "The Beginning",
      content: "This is the story of two best friends that began some 38 years ago at Padmavathi University when Sri & Hithasri were doing their postgraduate studies in Nutrition & Dietetics. It was here that they were both first exposed to the transformative wonders of nutrition in disease management while pursuing their Postgraduate Diploma in Nutrition & Dietetics.",
      highlight: "A friendship that transformed into a mission"
    },
    {
      title: "The Journey",
      content: "While Hithasri pursued her career as Chief Dietitian at NIIMS, Hyderabad, India, Sri pursued her career as Clinical Lead for Nutrition & Dietetics in the United Kingdom at Rotherham NHS Foundation Trust. Sri's illustrious career spans over 30 years across India and the UK, complemented by her Master's in Diabetes care from York University. Hithasri gained expertise working at the World famous Nizams Institute of Medical Sciences.",
      highlight: "Decades of combined expertise"
    },
    // {
    //   title: "The Vision",
    //   content: "With RemDi, Sri and Hithasri aspire to empower countless Indians to take control of their chronic illnesses and reclaim their lives. This pioneering endeavour is a culmination of their unwavering dedication, expertise, and passion for making a meaningful difference in the lives of others.",
    //   highlight: "Food is the best medicine"
    // }
  ];

  return (
    <ScrollAnimation onlyFade>
      <div className="w-full bg-[var(--background-color-dark)] text-[var(--text-color-plain)] pt-6 sm:pt-10 pb-10 sm:pb-20 relative overflow-hidden min-h-[100dvh] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left mt-4 sm:mt-20 lg:mt-36">
            <h1 className="font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] text-2xl sm:text-3xl md:text-[40px] mb-3 sm:mb-6 px-2 sm:px-0">
              OUR{" "}
              <span className="text-[var(--text-color-light)]">STORY</span>
            </h1>

            {/* Story Navigation */}
            <div className="flex justify-center lg:justify-start gap-4 mb-4 sm:mb-8">
              {storyContent.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`relative px-4 py-2 transition-all cursor-pointer ${
                    activeStory === index
                      ? 'text-[var(--text-color-light)]'
                      : 'text-[var(--text-color-plain)]/70 hover:text-[var(--text-color-plain)]'
                  }`}
                >
                  {section.title}
                  {activeStory === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--text-color-light)]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Story Content */}
            <div className="relative">
              <motion.div
                key={activeStory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto lg:mx-0 mb-4 sm:mb-8"
              >
                <div className="bg-[var(--background-color-light)]/5 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <p className="text-[var(--text-color-light)] text-lg mb-2 font-['Libre_Baskerville',serif]">
                    {storyContent[activeStory].highlight}
                  </p>
                  <p className="font-['DM_Sans', 'sans-serif'] text-[var(--text-color-plain)] text-base sm:text-lg leading-relaxed">
                    {storyContent[activeStory].content}
                  </p>
                </div>

                {/* Navigation Dots */}
                
              </motion.div>
            </div>
          </div>

          {/* Image Galleries */}
          <div className="flex-1 md:mt-12 lg:mt-20 relative">
            <div className="w-full h-12 sm:h-20 relative -bottom-12 sm:-bottom-20 z-10 bg-gradient-to-b from-[var(--background-color-dark)] to-[var(--background-color-dark)]/0"></div>
            <div className="absolute max-sm:hidden top-10 sm:top-40 right-[35%] transform -translate-x-1/2 sm:-right-20 w-16 sm:w-20 h-16 sm:h-20 z-10 scale-110 sm:scale-125">
              <HeroSvg2 />
            </div>
            <div className="flex gap-3 sm:gap-4 h-[400px] sm:h-[600px] lg:h-[800px] overflow-hidden">
              {/* Left Gallery - Scrolling Down */}
              <motion.div
                className="flex-1"
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                }}
              >
                {imageCol1.map((src, index) => (
                  <div
                    key={`left-${index}`}
                    className="w-full h-[300px] sm:h-[350px] lg:h-[400px] bg-[#EBE5DA] rounded-lg my-3"
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
                  duration: 40,
                  ease: "linear",
                }}
              >
                {imageCol2.map((src, index) => (
                  <div
                    key={`right-${index}`}
                    className="w-full h-[300px] sm:h-[350px] lg:h-[400px] bg-[#EBE5DA] rounded-lg mt-3"
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
            <div className="w-full h-16 sm:h-20 relative -top-16 sm:-top-20 z-10 bg-gradient-to-t from-[var(--background-color-dark)] to-[var(--background-color-dark)]/0"></div>
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