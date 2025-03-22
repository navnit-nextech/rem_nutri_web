"use client";

import React, { useRef, useEffect } from "react";

const CustomHexagon = () => (
  <div className="icon-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-8 h-8 text-[#043A22] fill-current"
    >
      <g color="rgb(28, 51, 50)">
        <path d="M 223.68 66.15 L 135.68 18 h 0 a 15.88 15.88 0 0 0 -15.36 0 l -88 48.17 a 16 16 0 0 0 -8.32 14 v 95.64 a 16 16 0 0 0 8.32 14 l 88 48.17 a 15.88 15.88 0 0 0 15.36 0 l 88 -48.17 a 16 16 0 0 0 8.32 -14 V 80.18 A 16 16 0 0 0 223.68 66.15 Z M 216 175.82 L 128 224 L 40 175.82 V 80.18 L 128 32 h 0 l 88 48.17 Z"></path>
      </g>
    </svg>
  </div>
);

const Customwellness = () => (
  <div className="icon-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-8 h-8 text-[#043A22] fill-current"
    >
      <g color="rgb(28, 51, 50)">
        <path d="M 201.54 54.46 A 104 104 0 0 0 54.46 201.54 A 104 104 0 0 0 201.54 54.46 Z M 96 210 V 152 h 64 v 58 a 88.33 88.33 0 0 1 -64 0 Z m 48 -74 H 112 V 100.94 l 32 -16 Z m 46.22 54.22 A 88.09 88.09 0 0 1 176 201.77 V 152 a 16 16 0 0 0 -16 -16 V 72 a 8 8 0 0 0 -11.58 -7.16 l -48 24 A 8 8 0 0 0 96 96 v 40 a 16 16 0 0 0 -16 16 v 49.77 a 88 88 0 1 1 110.22 -11.55 Z"></path>
      </g>
    </svg>
  </div>
);

const Customworkplace = () => (
  <div className="icon-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-8 h-8 text-[#043A22] fill-current"
    >
      <g color="rgb(28, 51, 50)">
        <path d="M 112 152 a 8 8 0 0 0 -8 8 v 28.69 L 75.72 160.4 A 39.71 39.71 0 0 1 64 132.12 V 95 a 32 32 0 1 0 -16 0 v 37.13 a 55.67 55.67 0 0 0 16.4 39.6 L 92.69 200 H 64 a 8 8 0 0 0 0 16 h 48 a 8 8 0 0 0 8 -8 V 160 A 8 8 0 0 0 112 152 Z M 40 64 A 16 16 0 1 1 56 80 A 16 16 0 0 1 40 64 Z m 168 97 V 123.88 a 55.67 55.67 0 0 0 -16.4 -39.6 L 163.31 56 H 192 a 8 8 0 0 0 0 -16 H 144 a 8 8 0 0 0 -8 8 V 96 a 8 8 0 0 0 16 0 V 67.31 L 180.28 95.6 A 39.71 39.71 0 0 1 192 123.88 V 161 a 32 32 0 1 0 16 0 Z m -8 47 a 16 16 0 1 1 16 -16 A 16 16 0 0 1 200 208 Z"></path>
      </g>
    </svg>
  </div>
);

const HealthServiceBox = ({ 
  icon, 
  title,
  delay = 0 
}: { 
  icon: React.ReactNode; 
  title: string;
  delay?: number;
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (boxRef.current) {
                boxRef.current.classList.add('fade-in-up');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={boxRef}
      className="health-box opacity-0 bg-gradient-to-br from-[var(--background-color-plain)] to-[#f8f6f2] p-10 rounded-2xl border border-[#EBE5DA] shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out group hover:border-[var(--text-color-light)]/40 hover:translate-y-[-5px]"
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full border border-[#EBE5DA] bg-[var(--background-color-plain)] transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:border-[var(--text-color-light)]/40">
          {icon}
        </div>
      </div>
      <h3 className="text-center font-['Libre_Baskerville',serif] text-xl text-[var(--text-color-dark)] mb-3 font-semibold group-hover:text-[var(--text-color-light)] transition-colors duration-300">
        {title}
      </h3>
      <div className="w-0 h-0.5 bg-[var(--text-color-light)] mx-auto mb-4 opacity-80 transition-all duration-500 group-hover:w-24"></div>
    </div>
  );
};

const HealthServices = () => {
  const healthSectionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Add CSS animations
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .fade-in-up {
        animation: fadeInUp 0.8s forwards ease-out;
      }
      
      .icon-container {
        display: contents;
        transition: transform 0.3s ease-in-out;
      }
      
      .icon-container:hover svg {
        transform: scale(1.1);
      }
    `;
    document.head.appendChild(style);

    // Observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (healthSectionRef.current) {
      observer.observe(healthSectionRef.current);
    }

    return () => {
      if (healthSectionRef.current) {
        observer.unobserve(healthSectionRef.current);
      }
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-[var(--background-color-plain2)] py-20">
      <div className="max-w-7xl mx-auto py-16 px-4 pb-32">
        <h2 
          ref={healthSectionRef}
          className="opacity-0 font-['Libre_Baskerville',serif] text-3xl md:text-4xl text-[var(--text-color-dark)] text-center mb-4 font-bold"
        >
          WE PROVIDE FOR <span className="text-[var(--text-color-light)]">YOUR HEALTH</span>
        </h2>
        
        <p className="text-center text-[var(--text-color-dark)]/80 max-w-2xl mx-auto mb-12 text-lg font-['DM_Sans', 'sans-serif']">
          Our comprehensive services are designed to support your health journey at every step
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HealthServiceBox icon={<CustomHexagon />} title="Remission & Reversal Programmes" delay={100} />
          <HealthServiceBox icon={<Customwellness />} title="Meal Delivery" delay={300} />
          <HealthServiceBox icon={<Customworkplace />} title="Corporate Services" delay={500} />
        </div>
      </div>
    </div>
  );
};

export default HealthServices; 