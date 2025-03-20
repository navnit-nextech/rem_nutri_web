import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import AlternativeAnimation from "./HerosPopup";

const HeroSection = () => {
  return (
    <div
      className="relative w-full min-h-screen pt-32 flex items-center justify-center 
      bg-[url('https://framerusercontent.com/images/o58voyKMKfklvmDAsffE229zIwE.png')] bg-cover bg-center bg-no-repeat px-4 md:px-0"
    >
      <div className="max-w-7xl w-full relative">
        <div
          className="relative bg-[var(--background-color-dark)] w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden 
  sm:rounded-[0px_24px_0px_24px] rounded-3xl min-h-[422px] lg:min-h-[475px]"

        >
          {/* Content */}
          <div className="relative z-10 w-full lg:w-[55%] text-center lg:text-left p-5 md:p-7 lg:p-9">
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
                  className="w-full md:w-auto bg-[var(--background-color-light)] font-['DM_Sans', 'sans-serif'] text-[16px] text-black font-semibold py-4 md:py-3 px-6 rounded-lg shadow-md text-center hover:opacity-80 "
                >
                  Know Yourself
                </a>
                {/* <button className="w-full md:w-auto border-2 border-[var(--background-color-light)] text-[var(--text-color-light)] font-['DM_Sans', 'sans-serif'] text-[16px] font-semibold py-4 md:py-3 px-6 rounded-lg shadow-md">
                  Contact us
                    </button> */}
              </div>
            </ScrollAnimation>

          </div>

          {/* Mobile Image */}
          {/* <ScrollAnimation delay={0.3}>
            <div className="mt-3 lg:hidden w-[100%] ">
              <img
                src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Physiotherapist helping a client with mobility training"
                className="w-full h-[500px] object-cover sm:rounded-2xl shadow-lg"
              />
            </div>
          </ScrollAnimation> */}
          <AlternativeAnimation/>
        </div>

        

        {/* Desktop Image */}
        {/* <ScrollAnimation delay={0.3} onlyFade>
          <div className="absolute top-[-15%] right-[-3.5%] w-[60%] h-[130%] hidden lg:flex items-center justify-center overflow-visible ">
            <img
              src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Physiotherapist helping a client with mobility training"
              className="w-full max-w-[460px] h-[100%] object-cover rounded-3xl shadow-lg z-10"
            />
          </div>
        </ScrollAnimation> */}

        {/* Circle decoration */}
        <ScrollAnimation delay={0.6} onlyFade>
          <div className="absolute top-10 right-9 translate-x-7 w-25 md:w-30 h-25 md:h-30 flex items-center justify-center max-sm:top-[43%] max-sm:right-6 ">
            <div className="w-full h-full rounded-full border-[10px] md:border-[15px] border-[#A6C6B2] flex items-center justify-center ">
              <div className="w-3/4 h-3/4 rounded-full flex items-center justify-center border-[10px] md:border-[15px] border-[#F4C6A5] "></div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Star decoration */}
        <ScrollAnimation delay={0.6}>
          <div className="absolute z-10 bottom-[-60px] sm:left-[55%] left-[50%] transform -translate-x-1/2 rotate-12 scale-75 md:scale-100">
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
