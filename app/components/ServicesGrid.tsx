"use client"




import React from "react";

import { useRouter } from 'next/navigation';


// Custom Home Icon using Tailwind CSS
const CustomHomeIcon = () => (

  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-6 h-6 text-[#043A22] fill-current"
  >
    <path d="M 218.83 103.77 l -80 -75.48 a 1.14 1.14 0 0 1 -0.11 -0.11 a 16 16 0 0 0 -21.53 0 l -0.11 0.11 L 37.17 103.77 A 16 16 0 0 0 32 115.55 V 208 a 16 16 0 0 0 16 16 H 96 a 16 16 0 0 0 16 -16 V 160 h 32 v 48 a 16 16 0 0 0 16 16 h 48 a 16 16 0 0 0 16 -16 V 115.55 A 16 16 0 0 0 218.83 103.77 Z M 208 208 H 160 V 160 a 16 16 0 0 0 -16 -16 H 112 a 16 16 0 0 0 -16 16 v 48 H 48 V 115.55 l 0.11 -0.1 L 128 40 l 79.9 75.43 l 0.11 0.1 Z"></path>
  </svg>
);

const Customsports = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-6 h-6 text-[#043A22] fill-current"
  >
    <path d="M 169.47 48.79 a 8 8 0 0 0 -2.94 -15.73 C 150.42 36.08 137 44.18 128 56 c -11.26 -15 -29.36 -24 -50 -24 A 62.07 62.07 0 0 0 16 94 c 0 70 103.79 126.67 108.21 129 a 7.93 7.93 0 0 0 7.58 0 h 0 a 332.57 332.57 0 0 0 41.09 -27.22 a 8 8 0 1 0 -9.76 -12.67 c -10.31 7.94 -20 14.37 -27.12 18.82 V 73.7 C 141.84 60.75 153.94 51.7 169.47 48.79 Z M 120 202 C 93.58 185.41 32 141.71 32 94 A 46.06 46.06 0 0 1 78 48 c 18.91 0 34.86 9.78 42 25.64 Z M 232.55 96 a 8.85 8.85 0 0 1 -0.89 0 a 8 8 0 0 1 -7.94 -7.12 a 45.88 45.88 0 0 0 -20.17 -33.14 a 8 8 0 1 1 8.9 -13.29 a 61.83 61.83 0 0 1 27.17 44.67 A 8 8 0 0 1 232.55 96 Z m -2.09 35.62 c -5.67 11.37 -13.94 23 -24.59 34.49 a 8 8 0 1 1 -11.74 -10.86 c 9.61 -10.4 17 -20.75 22 -30.77 a 8 8 0 1 1 14.31 7.14 Z"></path>
  </svg>
);

const CustomDiamondIcon = () => (
  <div style={{ display: "contents" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-6 h-6 text-[#043A22] fill-current"
    >
      <g color="rgb(28, 51, 50)">
        <path d="M235.33,116.72L139.28,20.66a16,16,0,0,0-22.56,0L20.67,116.72a16,16,0,0,0,0,22.56L116.72,235.33a16,16,0,0,0,22.56,0l96.05-96.05A16,16,0,0,0,235.33,116.72ZM128,224L32,128,128,32l96,96Z"></path>
      </g>
    </svg>
  </div>
);

const CustomHexagon = () => (
  <div style={{ display: "contents" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-6 h-6 text-[#043A22] fill-current"
    >
      <g color="rgb(28, 51, 50)">
        <path d="M 223.68 66.15 L 135.68 18 h 0 a 15.88 15.88 0 0 0 -15.36 0 l -88 48.17 a 16 16 0 0 0 -8.32 14 v 95.64 a 16 16 0 0 0 8.32 14 l 88 48.17 a 15.88 15.88 0 0 0 15.36 0 l 88 -48.17 a 16 16 0 0 0 8.32 -14 V 80.18 A 16 16 0 0 0 223.68 66.15 Z M 216 175.82 L 128 224 L 40 175.82 V 80.18 L 128 32 h 0 l 88 48.17 Z"></path>
      </g>
    </svg>
  </div>
);

const Customwellness = () => (
  <div style={{ display: "contents" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-6 h-6 text-[#043A22] fill-current"
    >
      <g color="rgb(28, 51, 50)">
        <path d="M 201.54 54.46 A 104 104 0 0 0 54.46 201.54 A 104 104 0 0 0 201.54 54.46 Z M 96 210 V 152 h 64 v 58 a 88.33 88.33 0 0 1 -64 0 Z m 48 -74 H 112 V 100.94 l 32 -16 Z m 46.22 54.22 A 88.09 88.09 0 0 1 176 201.77 V 152 a 16 16 0 0 0 -16 -16 V 72 a 8 8 0 0 0 -11.58 -7.16 l -48 24 A 8 8 0 0 0 96 96 v 40 a 16 16 0 0 0 -16 16 v 49.77 a 88 88 0 1 1 110.22 -11.55 Z"></path>
      </g>
    </svg>
  </div>
);

const Customworkplace = () => (
  <div style={{ display: "contents" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-6 h-6 text-[#043A22] fill-current"
    >
      <g color="rgb(28, 51, 50)">
        <path d="M 112 152 a 8 8 0 0 0 -8 8 v 28.69 L 75.72 160.4 A 39.71 39.71 0 0 1 64 132.12 V 95 a 32 32 0 1 0 -16 0 v 37.13 a 55.67 55.67 0 0 0 16.4 39.6 L 92.69 200 H 64 a 8 8 0 0 0 0 16 h 48 a 8 8 0 0 0 8 -8 V 160 A 8 8 0 0 0 112 152 Z M 40 64 A 16 16 0 1 1 56 80 A 16 16 0 0 1 40 64 Z m 168 97 V 123.88 a 55.67 55.67 0 0 0 -16.4 -39.6 L 163.31 56 H 192 a 8 8 0 0 0 0 -16 H 144 a 8 8 0 0 0 -8 8 V 96 a 8 8 0 0 0 16 0 V 67.31 L 180.28 95.6 A 39.71 39.71 0 0 1 192 123.88 V 161 a 32 32 0 1 0 16 0 Z m -8 47 a 16 16 0 1 1 16 -16 A 16 16 0 0 1 200 208 Z"></path>
      </g>
    </svg>
  </div>
);



const ServiceCard = ({ icon, title, description, onClick }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  onClick: () => void; 
}) => {
  return (
    <div
      className="px-8 py-10 w-full sm:w-[300px] md:w-[320px] lg:w-[500px] flex flex-col gap-4  
                 border border-[#EBE5DA] bg-[var(--background-color-plain)] rounded-[16px] opacity-100 overflow-hidden cursor-pointer
                 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out relative group"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 text-[var(--text-color-dark)]">
        <div className="transform transition-transform duration-500 group-hover:rotate-12">
          {icon}
        </div>
        <h3 className="text-[24px] text-[var(--text-color-dark)] font-['Libre_Baskerville',serif]">
          {title}
        </h3>
      </div>
      
      {/* Main content */}
      <p className="text-[var(--text-color-dark)] font-['DM_Sans', 'sans-serif'] text-[16px] leading-relaxed mb-8">
        {description}
      </p>
      
      {/* Blurred effect at the bottom with explore more text */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background-color-plain)] to-transparent flex items-end justify-center pb-5">
        <div className="flex items-center gap-2 text-[var(--text-color-dark)]/80 group-hover:text-[var(--text-color-dark)] transition-colors duration-300">
          <span className="text-[15px] font-medium font-['DM_Sans', 'sans-serif'] relative overflow-hidden">
            Explore more
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--text-color-dark)]/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </span>
          
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
      
      {/* Hover animation effect - subtle glow */}
      <div className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
           style={{
             boxShadow: "0 0 40px rgba(235, 229, 218, 0.3) inset",
           }}>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--text-color-dark)]/5 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};



const ServicesGrid = () => {
  const router = useRouter();
  
  const services = [
    {
      icon: <CustomHomeIcon />,
      title: "RemDi 2",
      description: "Type 2 and Pre Diabetes Reversal Programme. RemDi utilises the power of nutrition to help individuals achieve remission and get their lives back on track.",
      path: "/programs/remdi2"
    },
    {
      icon: <Customsports />,
      title: "Rem Bliss",
      description: "Women's Health Programme tackling PCOS/PCOD and Menopause. The programme utilises the power of nutrition and education to manage menopause & PCOS symptoms.",
      path: "/programs/rembliss"
    },
    {
      icon: <CustomDiamondIcon />,
      title: "Rem Meta",
      description: "Tackling Metabolic issues such as High Blood Pressure, Cardiac Risk, Fatty Liver and more. This program focuses on identifying the root cause of your metabolic disorder and developing a personalised plan to manage it.",
      path: "/programs/remmeta"
    },
    {
      icon: <CustomHexagon />,
      title: "Rem Fit",
      description: "To achieve intense weight loss @4-5kg/month or simply stay fit. Learn healthy habits and achieve your weight loss goals with our sustainable program, going beyond just calorie counting!",
      path: "/programs/remfit"
    },
  ];
  
  return (
    <div className="w-full bg-[url('https://framerusercontent.com/images/o58voyKMKfklvmDAsffE229zIwE.png')] bg-cover bg-center bg-no-repeat pb-28 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 justify-items-center ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            onClick={() => router.push(service.path)}
          />
        ))}
      </div>
  
      
    </div>
  );
};

export default ServicesGrid;