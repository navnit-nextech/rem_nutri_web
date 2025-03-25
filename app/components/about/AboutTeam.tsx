import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../ScrollAnimation";
import { AnimatePresence, motion } from "framer-motion";

const AboutTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const teamMembers = [
    {
      id: 1,
      name: "Zoe Williams",
      role: "Founder & Principal Physiotherapist",
      image: "/images/about/team/1.avif",
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Marcus Turner",
      role: "Physiotherapist",
      image: "/images/about/team/2.avif",
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Ava Rodriguez",
      role: "Physiotherapist",
      image: "/images/about/team/3.avif",
      linkedin: "https://linkedin.com",
    },
    // {
    //   id: 1,
    //   name: "Zoe Williams",
    //   role: "Founder & Principal Physiotherapist",
    //   image: "/images/about/team/4.avif",
    //   linkedin: "https://linkedin.com",
    // },
    // {
    //   id: 2,
    //   name: "Marcus Turner",
    //   role: "Physiotherapist",
    //   image: "/images/about/team/5.webp",
    //   linkedin: "https://linkedin.com",
    // },
    // {
    //   id: 3,
    //   name: "Ava Rodriguez",
    //   role: "Physiotherapist",
    //   image: "/images/about/team/6.webp",
    //   linkedin: "https://linkedin.com",
    // },
  ];

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: '0%',
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <div className="bg-[var(--background-color-dark)] text-[var(--text-color-plain)] pb-10 sm:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation>
          <div className="md:py-12 pt-15 md:pt-32">
            <h2 className="font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] text-3xl md:text-5xl mb-5 max-w-4xl">
              Meet your{" "}
              <span className="text-[var(--text-color-light)]">dedicated partners</span> in
              wellness
            </h2>
            <p className="text-lg max-w-3xl mb-12 text-[var(--text-color-plain)] md:px-0">
              Embark on a journey to optimal well-being with our dedicated
              partners in wellness. We are committed to supporting and guiding
              you on your path to a healthier and happier life.
            </p>
          </div>
        </ScrollAnimation>

        {/* team grid */}
        <div className="md:pb-16">
          {/* Mobile Card View */}
          <div className="md:hidden relative h-[550px]">
            <div className="h-[500px] relative">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-[var(--background-color-plain2)] text-black rounded-2xl overflow-hidden h-full">
                    <div className="relative h-[400px] w-full">
                      <Image
                        src={teamMembers[currentIndex].image}
                        alt={teamMembers[currentIndex].name}
                        fill
                        className="object-top object-cover"
                      />
                      {/* Navigation Arrows */}
                      <div className="absolute inset-0 flex justify-between items-center px-4">
                        <button
                          onClick={prevCard}
                          className="p-2 rounded-full bg-[var(--background-color-dark)]/20 backdrop-blur-sm text-white hover:bg-[var(--background-color-dark)]/30 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6"/>
                          </svg>
                        </button>
                        <button
                          onClick={nextCard}
                          className="p-2 rounded-full bg-[var(--background-color-dark)]/20 backdrop-blur-sm text-white hover:bg-[var(--background-color-dark)]/30 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold font-['Libre_Baskerville',serif]">
                            {teamMembers[currentIndex].name}
                          </h3>
                          <p className="text-[var(--text-color-dark)]">{teamMembers[currentIndex].role}</p>
                        </div>
                        <Link
                          href={teamMembers[currentIndex].linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-[#024027]"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-[var(--text-color-light)]'
                      : 'bg-[var(--text-color-plain)]/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <ScrollAnimation key={member.id} delay={0.1 * (index % 3)}>
              <div className="bg-[var(--background-color-plain2)] text-black rounded-2xl overflow-hidden">
                  <div className="relative h-[400px] w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-top object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold font-['Libre_Baskerville',serif]">
                        {member.name}
                      </h3>
                      <p className="text-[var(--text-color-dark)]">{member.role}</p>
                    </div>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-[#024027]"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
