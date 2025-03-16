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
              Inside Fizeo
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Step inside the life at Fizeo. Witness the warm and welcoming
              environment, cutting-edge facilities, and compassionate team
              dedicated to your well-being.
            </p>
          </div>
        </ScrollAnimation>
        <div className="flex justify-center items-center gap-6">
          <div className=" flex-1">
            <ScrollAnimation delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/11.avif"
                    alt="Fizeo facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/12.avif"
                    alt="Fizeo training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/13.avif"
                    alt="Fizeo equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/21.avif"
                    alt="Fizeo environment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Column 2 - 3 images */}
          <div className="flex-1">
            <ScrollAnimation delay={0.4}>
              <div className="flex flex-col gap-6 max-sm:hidden">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/22.avif"
                    alt="Fizeo wellness"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/23.avif"
                    alt="Fizeo therapy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about/stats.avif"
                    alt="Fizeo statistics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImageGrid;
