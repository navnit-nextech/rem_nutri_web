import React from "react";


const HeroSection = () => {
  return (
    <div
      className="relative w-full min-h-screen pt-32 md:pt-20 mt-10 md:mt-9 flex items-center justify-center 
  bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-0">






      <div className="max-w-7xl w-full relative">
        {/* Background Section (Includes Text and Image) */}
        {/* <div className="relative bg-[#043B25] text-white p-20 md:p-12 lg:p-20 rounded-3xl w-full min-h-[530px] flex flex-col lg:flex-row items-center justify-between overflow-hidden"> */}

        <div className="relative bg-[#043A22] text-white p-20 md:p-12 lg:p-20 rounded-3xl w-[90%] lg:w-[95%] mx-auto min-h-[530px] flex flex-col lg:flex-row items-center justify-between overflow-hidden">

          {/* Left Content */}
          <div className="relative z-10 w-full lg:w-[55%]">
            <h1 className="text-[30px] lg:text-[55px] font-normal leading-tight font-['Libre_Baskerville',serif]">
              Expert care for <span className="hidden md:block"></span>
              your <span className="text-[#6FE984]">mobility</span>
            </h1>

            <p className="mt-8 text-lg">
              Experience expert physiotherapy for enhanced mobility <span className="hidden md:block"></span> and a
              vibrant life.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="bg-[#6FE984] text-black font-semibold py-3 px-6 rounded-lg shadow-md">
                Book now
              </button>
              <button className="border border-[#6FE984] text-[#6FE984] font-semibold py-3 px-6 rounded-lg shadow-md">
                Contact us
              </button>
            </div>
          </div>



        </div>
        <div className="absolute top-[-25%] right-[-2.5%] w-[60%] h-[140%] flex items-center justify-center overflow-visible">
          <img
            src="https://framerusercontent.com/images/aNU3HkDM6E1ItviWon24xupCE.jpg?scale-down-to=4096"
            alt="Physiotherapist helping a client with mobility training"
            className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-lg hidden md:block"
          />

        </div>

        {/* Circle decoration */}
        <div className="absolute top-10 right-8 translate-x-7 w-28 h-28 flex items-center justify-center">
          {/* Outer Transparent Ring */}
          <div className="w-full h-full rounded-full border-[15px] border-[#A6C6B2] flex items-center justify-center">
            {/* Peach Ring (Expanding Outward) */}
            <div className="w-3/4 h-3/4 rounded-full flex items-center justify-center border-[15px] border-[#F4C6A5]"></div>
          </div>
        </div>
        <div className="absolute bottom-[-60px] left-[53%] transform -translate-x-1/2 rotate-12 ">
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


      </div>
    </div>
  );
};

export default HeroSection;