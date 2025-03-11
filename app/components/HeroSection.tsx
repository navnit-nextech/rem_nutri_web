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
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0L61 39L100 50L61 61L50 100L39 61L0 50L39 39L50 0Z"
              fill="#A6C6B2"
            />
          </svg>
        </div>


      </div>
    </div>
  );
};

export default HeroSection;