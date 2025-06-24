import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "../ScrollAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin, FaUserTie } from "react-icons/fa";

const AboutTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [advisoryCurrentIndex, setAdvisoryCurrentIndex] = useState(0);
  const [advisoryDirection, setAdvisoryDirection] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [flippedAdvisorIndexes, setFlippedAdvisorIndexes] = useState<number[]>([]);
  const [flippedFounder, setFlippedFounder] = useState(false);
  
  // Highlighted profile for Sridevi K
  const srideviProfile = {
    id: 1,
    name: "Mrs. Sridevi Kakarlapudi",
    role: "Founder & CEO, RemNutri Health Pvt. Ltd.",
    image: "/images/team_1.jpeg",
    linkedin: "https://linkedin.com",
    description: `MSc Diabetes Care, University of York\nPG Diplomas, Nutrition & Dietetics (UK & India)\nRegistered Dietitian (HCPC, UK)\n\n25+ years in Diabetes & Metabolic Health. Former Clinical Lead, Rotherham NHS (UK).\nBlending Western clinical practice with Indian wellness for scalable, patient-centric care.`
  };

  // Team members (excluding Sridevi K, add a new member to keep 6)
  const teamMembers = [
    {
      id: 2,
      name: "HITHASRI REDDY.M",
      role: "CO-FOUNDER",
      image: "/images/team_2.jpeg",
      linkedin: "https://linkedin.com",
      description: "Consultant Dietitian with 35 years of experience in administration, teaching, clinical, and academic roles. Retired Chief Dietitian at NIMS. Has held a lead role in the Indian Dietetic Association. Passionate about patient empowerment and strongly believes in the power of nutrition over pharmaceuticals.",
    },
    {
      id: 4,
      name: "BHAGIRATH.M",
      role: "CO-FOUNDER",
      image: "icon",
      icon: <FaUserTie className="w-40 h-40 text-gray-500" />,
      linkedin: "https://linkedin.com",
      description: "Experienced in project management at an MNC with a lead role in building new teams. Expert in handling operations with strong abilities in team motivation, management, and effective communication.",
    },
    {
      id: 3,
      name: "SHAKILA SRIKUMAR",
      role: "MENTOR",
      image: "/images/team_3.jpeg",
      linkedin: "https://linkedin.com",
      description: "",
    },
    {
      id: 5,
      name: "J. A. CHOWDARY",
      role: "MENTOR",
      image: "icon",
      icon: <FaUserTie className="w-40 h-40 text-gray-500" />,
      linkedin: "https://linkedin.com",
      description: "",
    },
  ];

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const nextAdvisorySlide = () => {
    setAdvisoryDirection(1);
    setAdvisoryCurrentIndex((prev) => (prev + 1) % advisoryPanel.length);
  };

  const prevAdvisorySlide = () => {
    setAdvisoryDirection(-1);
    setAdvisoryCurrentIndex((prev) => (prev - 1 + advisoryPanel.length) % advisoryPanel.length);
  };

  const advisoryPanel = [
    {
      id: 1,
      name: "DR. SMITA SAXENA",
      role: "ADVISOR",
      image: "/images/advisory_1.jpg",
      linkedin: "https://linkedin.com",
      description: "I am currently employed as a consultant psychiatrist in Derbyshire for the older peoples services since 2011. I am an inpatient and community consultant with responsibility for the care of service users with Organic issues including Dementia , Delirium and other neuropsychiatric illnesses . I also provide care to people with functional illnesses such as Depression, Schizophrenia , Bipolar and Personality disorders .",
    },
    {
      id: 2,
      name: "DR. DEEPTI ALLA",
      role: "ADVISOR",
      image: "/images/advisory_2.jpeg",
      linkedin: "https://linkedin.com",
      description: "Dr. Deepti Alla, a Primary Care Physician in York, UK, completed her MBBS in Guntur and specialist training in the UK. She is interested in women’s health, dermatology, medical education, and health commissioning, and advocates healthy living. She has known award-winning dietician Mrs. Sridevi Kakarlapudi (Sri) for over a decade and supports her work in diabetes care and weight loss. Deepti is keen to join Sri’s panel to promote healthy lifestyles in Hyderabad.",
    },
    
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: '0%',
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 40, mass: 1.2 },
        opacity: { duration: 0.5, ease: "easeInOut" }
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  // Helper to toggle flip state
  const toggleFlip = (index: number) => {
    setFlippedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleAdvisorFlip = (index: number) => {
    setFlippedAdvisorIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleFounderFlip = () => setFlippedFounder((prev) => !prev);

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

        {/* Highlighted Sridevi K Profile */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between bg-gradient-to-br from-yellow-50 via-[var(--background-color-plain2)] to-white rounded-3xl shadow-2xl p-0 md:p-0 mb-12 overflow-hidden perspective-1000" onMouseEnter={toggleFounderFlip} onMouseLeave={toggleFounderFlip} onTouchStart={toggleFounderFlip}>
          {/* Decorative background accent */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-tr from-yellow-100/40 to-transparent z-0" />
          <div className={`relative w-full flex-1 h-[500px] flex flex-col md:flex-row`}>
            <div className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flippedFounder ? 'rotate-y-180' : ''}`}>
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col md:flex-row h-full w-full [backface-visibility:hidden]">
                {/* Image section */}
                <div className="relative w-full md:w-[25rem] h-[300px] md:h-full flex-shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={srideviProfile.image}
              alt={srideviProfile.name}
              fill
              className="object-cover object-center h-full w-full"
              style={{ minHeight: '100%', minWidth: '100%', border: 'none' }}
            />
          </div>
                {/* Content section */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center p-6 md:p-10">
            <div className="bg-[var(--background-color-plain2)] rounded-2xl px-6 py-6 md:px-10 md:py-8 w-full max-w-2xl flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-extrabold font-['Libre_Baskerville',serif] text-yellow-700 mb-1 drop-shadow-lg">{srideviProfile.name}</h2>
              <p className="text-lg md:text-xl font-semibold text-yellow-600 mb-2 tracking-wide uppercase">{srideviProfile.role}</p>
              <div className="text-base md:text-lg text-[var(--text-color-dark)] mb-3 font-medium whitespace-pre-line break-words max-w-xl mx-auto">{srideviProfile.description}</div>
              <blockquote className="italic text-sm md:text-base text-yellow-800 mb-4 max-w-xl border-l-4 border-yellow-400 pl-4 mx-auto">“Empowering lives through holistic wellness and science-backed nutrition.”</blockquote>
              <Link
                href={srideviProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#024027]"
                  style={{ minWidth: '32px', minHeight: '32px' }}
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
                  </div>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 flex flex-col md:flex-row h-full w-full [backface-visibility:hidden] rotate-y-180 bg-gradient-to-br from-yellow-50 via-[var(--background-color-plain2)] to-white shadow-xl p-6 rounded-2xl items-center justify-center">
                <div className="flex flex-col items-center justify-center h-full w-full py-8">
                  <div className="text-base md:text-lg text-[var(--text-color-dark)] mb-4 font-medium max-w-3xl mx-auto text-left leading-relaxed break-words">
                    <div className="mb-3">
                      <h4 className="font-semibold text-yellow-700 mb-1 text-sm uppercase tracking-wide">Education & Credentials</h4>
                      <ul className="list-disc pl-5 mb-2 text-sm">
                        <li>MSc Diabetes Care, University of York (UK)</li>
                        <li>PG Diploma, Nutrition & Dietetics, Cardiff University (UK)</li>
                        <li>PG Diploma, Nutrition & Dietetics, Padmavathi Mahila University (India)</li>
                        <li>Registered Dietitian, Health & Care Professions Council (HCPC, UK)</li>
                      </ul>
                    </div>
                    <div className="mb-3">
                      <h4 className="font-semibold text-yellow-700 mb-1 text-sm uppercase tracking-wide">Professional Experience</h4>
                      <ul className="list-disc pl-5 mb-2 text-sm">
                        <li>25+ years as Advanced Dietetic Practitioner in UK & India</li>
                        <li>Clinical Lead, Nutrition & Dietetics, Rotherham NHS Foundation Trust (UK)</li>
                        <li>Led award-winning, innovative dietetic service with measurable outcomes</li>
                        <li>Expert in scalable, patient-centric metabolic care delivery</li>
                      </ul>
                    </div>
                    <div className="mb-3">
                      <h4 className="font-semibold text-yellow-700 mb-1 text-sm uppercase tracking-wide">Leadership & Innovation</h4>
                      <ul className="list-disc pl-5 mb-2 text-sm">
                        <li>Founder & CEO, RemNutri Health Private Ltd.</li>
                        <li>Develops integrative, evidence-based solutions for Diabetes prevention & management</li>
                        <li>Bridges Western medical practice with traditional Indian wellness principles</li>
                        <li>Creates scalable, culturally adaptive healthcare models</li>
                        <li>Deep clinical insight into emerging trends in nutritional science</li>
                      </ul>
                    </div>
                    <span className="italic text-yellow-800 block mt-2 text-center text-sm">"Transforming lives through integrative, evidence-based nutrition."</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* team grid */}
        <div className="md:pb-2">
          {/* Mobile Card View */}
          <div className="md:hidden relative h-[550px]">
            <div className="h-[510px] relative overflow-hidden">
              {/* Fixed navigation layer */}
              <div className="absolute inset-0 z-10 flex justify-between items-center px-4 pointer-events-none">
                <button
                  onClick={prevCard}
                  className="p-2 rounded-full bg-[var(--background-color-dark)]/20 backdrop-blur-sm text-white hover:bg-[var(--background-color-dark)]/30 transition-colors pointer-events-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button
                  onClick={nextCard}
                  className="p-2 rounded-full bg-[var(--background-color-dark)]/20 backdrop-blur-sm text-white hover:bg-[var(--background-color-dark)]/30 transition-colors pointer-events-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>

              {/* Card content with animation */}
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                  style={{ 
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div
                    className={`relative h-[500px] w-full perspective-1000`}
                    onClick={() => toggleFlip(currentIndex)}
                  >
                    <div
                      className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flippedIndexes.includes(currentIndex) ? 'rotate-y-180' : ''}`}
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0 bg-[var(--background-color-plain2)] text-black rounded-2xl overflow-hidden h-full w-full [backface-visibility:hidden] flex flex-col">
                        <div className="relative h-[500px] w-full">
                      {teamMembers[currentIndex].image !== "icon" ? (
                        <Image
                          src={teamMembers[currentIndex].image}
                          alt={teamMembers[currentIndex].name}
                          fill
                          className="object-center object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-100">
                          <div className="text-gray-400">
                            {teamMembers[currentIndex].icon}
                          </div>
                        </div>
                      )}
                    </div>
                        <div className="p-6 flex-1 flex flex-col justify-end">
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
                      {/* Back Side */}
                      <div className="absolute inset-0 rounded-2xl h-full w-full [backface-visibility:hidden] rotate-y-180 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-[var(--background-color-plain2)] to-white shadow-xl p-6">
                        <div className="flex flex-col items-center justify-center h-full w-full">
                          <h3 className="text-2xl font-bold text-yellow-700 mb-2 font-['Libre_Baskerville',serif]">{teamMembers[currentIndex].name}</h3>
                          <p className="text-yellow-600 font-semibold mb-2 uppercase tracking-wide">{teamMembers[currentIndex].role}</p>
                          <p className="text-[var(--text-color-dark)] text-base text-center italic max-w-xs mx-auto">
                            {teamMembers[currentIndex].description || 'A valued member of our team, dedicated to your wellness journey.'}
                          </p>
                        </div>
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
          <div className="hidden md:grid grid-cols-3 gap-6">
            {/* First row: 2 profiles, 1 empty */}
            {teamMembers.slice(0, 2).map((member, index) => (
              <ScrollAnimation key={member.id} delay={0.1 * index}>
                <div
                  className="relative h-[500px] w-full perspective-1000"
                  onMouseEnter={() => toggleFlip(index)}
                  onMouseLeave={() => toggleFlip(index)}
                  onTouchStart={() => toggleFlip(index)}
                >
                  <div
                    className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flippedIndexes.includes(index) ? 'rotate-y-180' : ''}`}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 bg-[var(--background-color-plain2)] text-black rounded-2xl overflow-hidden h-full w-full [backface-visibility:hidden] flex flex-col">
                      <div className="relative h-[500px] w-full">
                        {member.image !== "icon" ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-[top_10%] object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full bg-gray-100">
                            <div className="text-gray-400">
                              {member.icon}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-end">
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
                    {/* Back Side */}
                    <div className="absolute inset-0 rounded-2xl h-full w-full [backface-visibility:hidden] rotate-y-180 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-[var(--background-color-plain2)] to-white shadow-xl p-6">
                      <div className="flex flex-col items-center justify-center h-full w-full">
                        <h3 className="text-2xl font-bold text-yellow-700 mb-2 font-['Libre_Baskerville',serif]">{member.name}</h3>
                        <p className="text-yellow-600 font-semibold mb-2 uppercase tracking-wide">{member.role}</p>
                        <p className="text-[var(--text-color-dark)] text-base text-center italic max-w-xs mx-auto">
                          {member.description || 'A valued member of our team, dedicated to your wellness journey.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
            {/* Empty placeholder for third card in first row */}
            <div></div>
            {/* Second row: last 2 profiles, 1 empty */}
            {teamMembers.slice(2, 4).map((member, index) => (
              <ScrollAnimation key={member.id} delay={0.1 * (index + 2)}>
                <div
                  className="relative h-[500px] w-full perspective-1000"
                  onMouseEnter={() => toggleFlip(index + 2)}
                  onMouseLeave={() => toggleFlip(index + 2)}
                  onTouchStart={() => toggleFlip(index + 2)}
                >
                  <div
                    className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flippedIndexes.includes(index + 2) ? 'rotate-y-180' : ''}`}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 bg-[var(--background-color-plain2)] text-black rounded-2xl overflow-hidden h-full w-full [backface-visibility:hidden] flex flex-col">
                      <div className="relative h-[500px] w-full">
                  {member.image !== "icon" ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-[top_10%] object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-100">
                      <div className="text-gray-400">
                        {member.icon}
                      </div>
                    </div>
                  )}
                </div>
                      <div className="p-6 flex-1 flex flex-col justify-end">
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
                    {/* Back Side */}
                    <div className="absolute inset-0 rounded-2xl h-full w-full [backface-visibility:hidden] rotate-y-180 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-[var(--background-color-plain2)] to-white shadow-xl p-6">
                      <div className="flex flex-col items-center justify-center h-full w-full">
                        <h3 className="text-2xl font-bold text-yellow-700 mb-2 font-['Libre_Baskerville',serif]">{member.name}</h3>
                        <p className="text-yellow-600 font-semibold mb-2 uppercase tracking-wide">{member.role}</p>
                        <p className="text-[var(--text-color-dark)] text-base text-center italic max-w-xs mx-auto">
                          {member.description || 'A valued member of our team, dedicated to your wellness journey.'}
                        </p>
                      </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
            {/* Empty placeholder for third card in second row */}
            <div></div>
          </div>
        </div>

        {/* Advisory Panel Section */}
        <div className="mt-8">
          <ScrollAnimation>
            <div className="md:py-8 pt-2 md:pt-10">
              <h2 className="font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] text-3xl md:text-5xl mb-5 max-w-4xl">
                Meet our{" "}
                <span className="text-[var(--text-color-light)]">expert advisors</span> in
                healthcare
              </h2>
              <p className="text-lg max-w-3xl mb-8 text-[var(--text-color-plain)] md:px-0">
                Our advisory panel consists of leading experts in their respective fields who ensure our programs are backed by the latest research and best practices in healthcare.
              </p>
            </div>
          </ScrollAnimation>

          {/* Mobile View */}
          <div className="md:hidden relative h-[550px]">
            <div className="h-[510px] relative overflow-hidden">
              {/* Fixed navigation layer */}
              <div className="absolute inset-0 z-10 flex justify-between items-center px-4 pointer-events-none">
                <button
                  onClick={prevAdvisorySlide}
                  className="p-2 rounded-full bg-[var(--background-color-dark)]/20 backdrop-blur-sm text-white hover:bg-[var(--background-color-dark)]/30 transition-colors pointer-events-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button
                  onClick={nextAdvisorySlide}
                  className="p-2 rounded-full bg-[var(--background-color-dark)]/20 backdrop-blur-sm text-white hover:bg-[var(--background-color-dark)]/30 transition-colors pointer-events-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>

              {/* Card content with animation */}
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={advisoryCurrentIndex}
                  custom={advisoryDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                  style={{ 
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div
                    className={`relative h-[500px] w-full perspective-1000`}
                    onClick={() => toggleAdvisorFlip(advisoryCurrentIndex)}
                  >
                    <div
                      className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flippedAdvisorIndexes.includes(advisoryCurrentIndex) ? 'rotate-y-180' : ''}`}
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0 bg-[var(--background-color-plain2)] text-black rounded-2xl overflow-hidden h-full w-full [backface-visibility:hidden] flex flex-col">
                        <div className="relative h-[500px] w-full">
                      <Image
                        src={advisoryPanel[advisoryCurrentIndex].image}
                        alt={advisoryPanel[advisoryCurrentIndex].name}
                        fill
                        className="object-top object-cover"
                      />
                    </div>
                        <div className="p-6 flex-1 flex flex-col justify-end">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold font-['Libre_Baskerville',serif]">
                            {advisoryPanel[advisoryCurrentIndex].name}
                          </h3>
                          <p className="text-[var(--text-color-dark)]">{advisoryPanel[advisoryCurrentIndex].role}</p>
                        </div>
                        <Link
                          href={advisoryPanel[advisoryCurrentIndex].linkedin}
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
                      {/* Back Side */}
                      <div className="absolute inset-0 rounded-2xl h-full w-full [backface-visibility:hidden] rotate-y-180 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-[var(--background-color-plain2)] to-white shadow-xl p-6">
                        <div className="flex flex-col items-center justify-center h-full w-full">
                          <h3 className="text-2xl font-bold text-yellow-700 mb-2 font-['Libre_Baskerville',serif]">{advisoryPanel[advisoryCurrentIndex].name}</h3>
                          <p className="text-yellow-600 font-semibold mb-2 uppercase tracking-wide">{advisoryPanel[advisoryCurrentIndex].role}</p>
                          <p className="text-[var(--text-color-dark)] text-base text-center italic max-w-xs mx-auto">
                            {advisoryPanel[advisoryCurrentIndex].description || 'A valued advisor, guiding our programs with expertise and care.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {advisoryPanel.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAdvisoryDirection(index > advisoryCurrentIndex ? 1 : -1);
                    setAdvisoryCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === advisoryCurrentIndex
                      ? 'bg-[var(--text-color-light)]'
                      : 'bg-[var(--text-color-plain)]/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-14">
            {advisoryPanel.map((member, index) => (
              <ScrollAnimation key={member.id} delay={0.1 * (index % 3)}>
                <div
                  className={`relative h-[500px] w-full perspective-1000`}
                  onMouseEnter={() => toggleAdvisorFlip(index)}
                  onMouseLeave={() => toggleAdvisorFlip(index)}
                  onTouchStart={() => toggleAdvisorFlip(index)}
                >
                  <div
                    className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flippedAdvisorIndexes.includes(index) ? 'rotate-y-180' : ''}`}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 bg-[var(--background-color-plain2)] text-black rounded-2xl overflow-hidden h-full w-full [backface-visibility:hidden] flex flex-col">
                      <div className="relative h-[500px] w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-top object-cover"
                    />
                  </div>
                      <div className="p-6 flex-1 flex flex-col justify-end">
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
                  {/* Back Side */}
                  <div className="absolute inset-0 rounded-2xl h-full w-full [backface-visibility:hidden] rotate-y-180 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-[var(--background-color-plain2)] to-white shadow-xl p-6">
                    <div className="flex flex-col items-center justify-center h-full w-full">
                      <h3 className="text-2xl font-bold text-yellow-700 mb-2 font-['Libre_Baskerville',serif]">{member.name}</h3>
                      <p className="text-yellow-600 font-semibold mb-2 uppercase tracking-wide">{member.role}</p>
                      <p className="text-[var(--text-color-dark)] text-base text-center italic max-w-xs mx-auto">
                        {member.description || 'A valued advisor, guiding our programs with expertise and care.'}
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Kitchen Team Section - Full Width Prominent Card */}
        <div className="mt-2">
          <ScrollAnimation>
            <div className="md:py-8 pt-2 md:pt-10">
              <h2 className="font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] text-3xl md:text-5xl mb-5 max-w-4xl">
                Meet our <span className="text-[var(--text-color-light)]">kitchen team</span>
              </h2>
              <p className="text-lg max-w-3xl mb-8 text-[var(--text-color-plain)] md:px-0">
                Our expert chefs craft every meal with care and nutrition in mind, ensuring every bite supports your wellness journey.
              </p>
            </div>
          </ScrollAnimation>
          <div className="w-full flex justify-center">
            <div className="relative w-full bg-gradient-to-br from-yellow-50 via-[var(--background-color-plain2)] to-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center overflow-hidden p-0 md:p-0 mb-12">
              {/* Decorative background accent */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-tr from-yellow-100/40 to-transparent z-0" />
              {/* Icon or group image */}
              <div className="relative z-10 w-full md:w-[25rem] h-64 md:h-[500px] flex-shrink-0 overflow-hidden rounded-2xl flex items-center justify-center bg-yellow-50">
                <FaUserTie className="w-40 h-40 md:w-60 md:h-60 text-gray-400" />
              </div>
              {/* Content on right, always centered */}
              <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center p-6 md:p-10">
                <div className="bg-[var(--background-color-plain2)] rounded-2xl px-6 py-6 md:px-10 md:py-8 w-full max-w-2xl flex flex-col items-center">
                  <h3 className="text-3xl md:text-4xl font-extrabold font-['Libre_Baskerville',serif] text-yellow-700 mb-2 drop-shadow-lg">Our Kitchen Team</h3>
                  <p className="text-lg md:text-xl text-[var(--text-color-dark)] mb-4 font-medium text-center">A passionate group of chefs dedicated to preparing healthy, delicious, and balanced meals for our clients every day.</p>
                  <ul className="text-left text-[var(--text-color-dark)] text-base mb-4 max-w-xl mx-auto list-disc pl-6">
                    <li>Expertise in nutrition-focused meal preparation</li>
                    <li>Commitment to hygiene and quality</li>
                    <li>Innovative, seasonal, and diverse menu offerings</li>
                    <li>Personalized meal plans for every client</li>
                  </ul>
                  <span className="italic text-yellow-800">"Bringing health and taste together, one meal at a time."</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;