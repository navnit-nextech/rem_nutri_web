"use client";

import React, { useRef, useEffect } from "react";

// Decorative divider for visual appeal
const Divider = () => (
  <div className="flex items-center justify-center my-10">
    <div className="w-40 h-[1px] bg-[#EBE5DA]"></div>
  </div>
);

const ConsultationCTA = () => {
  const consultationRef = useRef<HTMLDivElement>(null);

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
    `;
    document.head.appendChild(style);

    // Observer for animations
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

    if (consultationRef.current) {
      observer.observe(consultationRef.current);
    }

    return () => {
      if (consultationRef.current) {
        observer.unobserve(consultationRef.current);
      }
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-[var(--background-color-plain2)] py-12">
      <div className="max-w-2xl mx-auto text-center px-4">
        <Divider />
        <div 
          ref={consultationRef}
          className="opacity-0 bg-[var(--background-color-plain)] py-10 px-8 rounded-2xl border border-[#EBE5DA] shadow-sm relative overflow-hidden hover:shadow-xl hover:border-[var(--text-color-light)]/30 transition-all duration-500"
        >
          <h2 className="font-['Libre_Baskerville',serif] text-2xl text-[var(--text-color-dark)] mb-4 font-bold relative z-10 transition-transform duration-300 hover:scale-[1.02]">
            Still struggling to understand which programme will help manage your health concern?
          </h2>
          <p className="text-[var(--text-color-dark)]/90 mb-8 text-lg font-medium relative z-10 transition-all duration-300 hover:text-[var(--text-color-dark)]">
            Let's talk and find the perfect solution for you.
          </p>
          <button className="bg-[var(--background-color-dark)] text-[var(--text-color-plain)] font-bold py-4 px-10 rounded-lg transition-all duration-300 ease-in-out hover:shadow-md active:translate-y-0.5 relative z-10 hover:bg-[var(--background-color-dark)]/90 hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCTA; 