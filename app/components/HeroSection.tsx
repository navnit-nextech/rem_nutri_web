import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const HeroSection = () => {
  return (
    <div
      className="relative w-full min-h-screen pt-32 flex items-center justify-center 
      bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-0"
    >
      <div className="max-w-7xl w-full relative">
        <div
          className="relative bg-[#043A22] text-white w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden 
          sm:rounded-[0px_24px_0px_24px] rounded-3xl"
        >
          {/* Content */}
          <div className="relative z-10 w-full lg:w-[55%] text-center lg:text-left sm:!py-26 p-8 md:p-12 lg:p-20">
            <ScrollAnimation>
              <h1 className="text-[36px] lg:text-[56px] font-normal leading-tight font-['Libre_Baskerville',serif]">
                Expert care for your{" "}
                <span className="text-[#76FB91] ">mobility</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <p className="mt-6 lg:mt-8 text-[18px] lg:text-[20px] font-['DM_Sans', 'sans-serif'] lg:px-0">
                Experience expert physiotherapy for enhanced mobility and a
                vibrant life.
              </p>
            </ScrollAnimation>

            {/* Buttons */}
            <ScrollAnimation delay={0.4}>
              <div className="mt-8 flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <button className="w-full md:w-auto bg-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[16px] text-black font-semibold py-4 md:py-3 px-6 rounded-lg shadow-md">
                  Book now
                </button>
                <button className="w-full md:w-auto border-2 border-[#6FE984] text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[16px] font-semibold py-4 md:py-3 px-6 rounded-lg shadow-md">
                  Contact us
                </button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Mobile Image */}
          <ScrollAnimation delay={0.3}>
            <div className="mt-3 lg:hidden w-full">
              <img
                src="https://framerusercontent.com/images/aNU3HkDM6E1ItviWon24xupCE.jpg?scale-down-to=4096"
                alt="Physiotherapist helping a client with mobility training"
                className="w-full h-[500px] object-cover sm:rounded-2xl shadow-lg"
              />
            </div>
          </ScrollAnimation>
        </div>

        {/* Desktop Image */}
        <ScrollAnimation delay={0.3} onlyFade>
          <div className="absolute top-[-25%] right-[-2.5%] w-[60%] h-[140%] hidden lg:flex items-center justify-center overflow-visible">
            <img
              src="https://framerusercontent.com/images/aNU3HkDM6E1ItviWon24xupCE.jpg?scale-down-to=4096"
              alt="Physiotherapist helping a client with mobility training"
              className="w-full max-w-[460px] h-[100%] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </ScrollAnimation>

        {/* Circle decoration */}
        <ScrollAnimation delay={0.6} onlyFade>
          <div className="absolute top-10 right-16 translate-x-7 w-20 md:w-28 h-20 md:h-28 flex items-center justify-center max-sm:top-[43%] max-sm:right-6">
            <div className="w-full h-full rounded-full border-[10px] md:border-[15px] border-[#A6C6B2] flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full flex items-center justify-center border-[10px] md:border-[15px] border-[#F4C6A5]"></div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Star decoration */}
        <ScrollAnimation delay={0.6}>
          <div className="absolute z-10 bottom-[-60px] sm:left-[54%] left-[50%] transform -translate-x-1/2 rotate-12 scale-75 md:scale-100">
            <svg
              width="120"
              height="120"
              viewBox="0 0 112 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 70.957 49.812 C 94.5 50.563 111.783 53.045 111.783 55.991 C 111.783 58.937 94.5 61.419 70.957 62.169 C 87.074 79.347 97.54 93.323 95.457 95.406 C 93.373 97.489 79.397 87.023 62.219 70.906 C 61.47 94.449 58.987 111.733 56.041 111.733 C 53.095 111.733 50.613 94.449 49.863 70.906 C 32.685 87.023 18.709 97.489 16.626 95.406 C 14.542 93.323 25.009 79.347 41.126 62.169 C 17.583 61.419 0.299 58.937 0.299 55.991 C 0.299 53.045 17.583 50.563 41.126 49.812 C 25.009 32.635 14.543 18.659 16.626 16.575 C 18.709 14.492 32.685 24.958 49.863 41.075 C 50.613 17.532 53.095 0.249 56.041 0.249 C 58.987 0.249 61.47 17.532 62.219 41.075 C 79.397 24.958 93.373 14.492 95.457 16.575 C 97.54 18.659 87.074 32.635 70.957 49.812 Z"
                fill="#A6C6B2"
              />
            </svg>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default HeroSection;
