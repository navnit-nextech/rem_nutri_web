import React from "react";
import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

const AboutStats = () => {
  // Stats data
  const stats = [
    { value: "12", label: "Clinics" },
    { value: "230", label: "Staff" },
    { value: "900+", label: "Patients" },
    { value: "59", subLabel: "5 stars" },
  ];

  return (
    <section className="relative w-full py-16 md:py-38 overflow-hidden font-['Libre_Baskerville',serif]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/stats.avif"
          alt="Physiotherapy session"
          fill
          className="object-cover"
          priority
        />
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#1c3328e8]/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-16 items-center max-sm:flex-col-reverse">
          {/* Stats Grid */}
          <div className=" flex-1 w-full">
            <ScrollAnimation delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[var(--background-color-plain3)]/15 p-6 text-center rounded-lg w-full"
                  >
                    <div className="text-[var(--text-color-light)] text-5xl md:text-6xl font-bold mb-3">
                      {stat.value}
                    </div>
                    <div className="text-[var(--text-color-plain)] text-xl md:text-2xl">
                      {stat.label}
                      {stat.subLabel && (
                        <div className="text-[var(--text-color-plain)] text-xl md:text-2xl">
                          {stat.subLabel}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Description */}
          <div className="text-[var(--text-color-plain)] flex-1">
            <ScrollAnimation delay={0.4}>
              <p className="md:text-xl leading-relaxed max-sm:text-center">
                Our skilled physiotherapy team is committed to providing
                personalized care, backed by years of expertise. From the moment
                you step into our clinic, you'll encounter a supportive
                environment dedicated to optimizing your health journey.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
