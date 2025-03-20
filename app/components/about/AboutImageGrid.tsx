import React from "react";
import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

const AboutImageGrid = () => {
  return (
    <div className="bg-[var(--background-color-plain2)] text-[var(--text-color-dark)] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="sm:my-20">
            <h2 className="text-3xl md:text-5xl text-center mb-4 font-['Libre_Baskerville',serif]">
              Inside RemDi
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Step inside the life at remDi. Witness the warm and welcoming
              environment, cutting-edge facilities, and compassionate team
              dedicated to your well-being.
            </p>
          </div>
        </ScrollAnimation>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex-1 w-full md:w-auto">
            <ScrollAnimation delay={0.2}>
              <div className="flex flex-col gap-6">
                {[ 
                  "https://plus.unsplash.com/premium_photo-1709560427703-f1d6336971ca?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1621919472462-6db865a003e4?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1629121958394-3be95d8c057c?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1532798442725-41036acc7489?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ].map((src, index) => (
                  <div key={index} className="relative overflow-hidden rounded-2xl w-full md:aspect-square aspect-[4/3]">
                    <Image
                      src={src}
                      alt={`Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          <div className="flex-1 w-full md:w-auto">
            <ScrollAnimation delay={0.4}>
              <div className="flex flex-col gap-6 max-sm:hidden">
                {[ 
                  "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1567740034541-1ff8b618a370?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "/images/about/stats.avif"
                ].map((src, index) => (
                  <div key={index} className="relative overflow-hidden rounded-2xl w-full md:aspect-square aspect-[4/3]">
                    <Image
                      src={src}
                      alt={`Image ${index + 5}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImageGrid;
