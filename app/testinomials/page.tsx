"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import Navbar from "../components/Navbar";

const testimonials = [
  {
    text: "I was diagnosed with Type 2 Diabetes a few years ago, and I felt like my life was limited. I started the Rem Di program with a lot of skepticism, but I was truly amazed by the results. With the help of Rem Nutri's team, I've been able to manage my blood sugar levels naturally and even reduce my medication! I feel better than ever, and I'm so grateful for the knowledge and support I received.",
    name: "Sarah Jones",
    image:
      "https://framerusercontent.com/images/F8FpD28VlKZcge0xDGDslltN6k.jpg?scale-down-to=2048",
  },
  {
    text: "PCOS has been a constant source of frustration for me. I struggled with weight management, irregular periods, and low energy. The Rem Bliss program completely transformed my health. The personalized meal plan and stress management techniques helped me regulate my hormones and lose weight. Now, I feel more in control of my body and my health than ever before.",
    name: "Priya Sharma",
    image:
      "https://images.unsplash.com/photo-1631005436794-ccaa79de61ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  // {
  //   text: "As someone with a neurological condition, finding the right physiotherapy was crucial. Fizeo exceeded my expectations. Their neuro-rehabilitation expertise and compassionate care have significantly improved my mobility and overall well-being. Highly recommended for anyone seeking top-notch physio services!",
  //   name: "Melanie ]",
  //   image:
  //     "https://framerusercontent.com/images/TnND6kc2yg1n6MNWVR7VfKcvqE.jpg?scale-down-to=2048",
  // },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const ConsultationCTA = () => {
  return (
    <div className="w-full bg-[var(--background-color-plain2)] py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[var(--background-color-light)]/20 to-[var(--background-color-light)]/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-[var(--background-color-light)]/10"
        >
          <div className="relative p-10 sm:p-16 text-center">
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[var(--background-color-light)]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--background-color-light)]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-[var(--background-color-light)]/5 rounded-full blur-xl"></div>
            
            <h2 className="text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] text-3xl sm:text-[42px] mb-6 relative z-10">
              Schedule A Free Consultation Today!
            </h2>
            
            <p className="text-[var(--text-color-dark)] text-lg sm:text-xl mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Take the first step towards a healthier and happier you. Our free consultation allows you to discuss your health goals with our program advisors and learn more about how RemDi can help you achieve them.
            </p>
            
            <motion.a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-[var(--background-color-dark)] text-[var(--text-color-plain)] font-semibold text-lg rounded-xl hover:bg-[var(--background-color-dark)]/90 transition-all duration-300 relative z-10 group shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book A Free Consultation
              <svg 
                className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <>
    <Navbar/>

      <div className="w-full bg-[var(--background-color-dark)] py-24 sm:py-44 relative">
        
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-[var(--text-color-plain)] font-['Libre_Baskerville',serif] text-4xl sm:text-[48px] mb-6">
                Real stories, {" "}
                <span className="text-[var(--text-color-light)]">real transformations</span>
            </h2>
              <p className="text-[var(--text-color-plain)] text-xl sm:text-[28px] font-['Libre_Baskerville',serif] max-w-4xl mx-auto leading-relaxed">
              These real stories illuminate the path to transformation,
              <span className="hidden md:block"></span> showcasing the impact of
              personalized care on physical well-
              <span className="hidden md:block"></span>being.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
            <div className="max-w-full mx-auto mb-16 relative flex justify-center">
              <div className="rounded-3xl overflow-hidden w-full max-w-[1000px] shadow-2xl">
                <div className="relative w-full">
                  {/* Video with enhanced styling */}
                <iframe
                    className="relative w-full h-[240px] sm:h-[560px] rounded-3xl border-none"
                  src="https://www.youtube.com/embed/W-XQS2NoRdc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="relative md:absolute top-2 left-2 md:top-[25%] md:left-[995px] z-20 hidden sm:block">
                  <div className="w-36 h-36 bg-fizeo-peach rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    width="240"
                    height="240"
                    viewBox="0 0 73 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                      className="transform rotate-[-15deg] scale-110"
                  >
                    <path
                      d="M 29.194 4.376 C 21.822 -1.947 10.704 -1.109 4.369 6.247 C -1.958 13.595 -1.118 24.664 6.245 30.979 L 36.239 56.705 L 36.475 56.978 L 36.516 56.942 L 36.558 56.978 L 36.793 56.705 L 66.788 30.979 C 74.151 24.664 74.991 13.595 68.663 6.248 C 62.329 -1.108 51.211 -1.947 43.838 4.376 L 36.516 10.656 L 29.194 4.376 Z"
                      fill="rgb(255, 189, 153)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

          <div className="w-full h-[1px] bg-gray-500/60 mb-24"></div>

        <ScrollAnimation delay={0.4}>
          <div className="max-w-5xl mx-auto text-center relative px-4">
              <div className="relative overflow-hidden h-[340px] sm:h-[360px] touch-pan-y">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(e, { offset, velocity }) => {
                    setIsDragging(false);
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full left-0 right-0 cursor-grab active:cursor-grabbing"
                >
                    <div className="flex justify-center mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                          width="30"
                          height="30"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                          className="text-[#6FE984] mx-1"
                      >
                        <path
                          d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                    <div className="text-[var(--text-color-plain)] mb-8 font-['Libre_Baskerville',serif] text-base sm:text-[22px] leading-relaxed max-w-4xl mx-auto">
                    "{testimonials[currentIndex].text}"
                  </div>

                    <div className="flex items-center justify-center gap-4">
                      <div className="sm:w-16 sm:h-16 w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--text-color-light)]/30 shadow-md">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                          width={64}
                          height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                      <span className="text-[var(--text-color-plain)] font-['Libre_Baskerville',serif] text-base sm:text-[22px] font-medium">
                      {testimonials[currentIndex].name}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

              <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                    className={`h-3 rounded-full transition-all ${
                      index === currentIndex ? "bg-[var(--background-color-light)] w-8" : "bg-white/50 w-3"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#043A22]/60 hover:bg-[#043A22]/80 rounded-full p-4 transition md:-left-24 hidden md:block shadow-lg"
            >
                <ChevronLeft className="w-7 h-7 text-white" />
            </button>
            <button
              onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#043A22]/60 hover:bg-[#043A22]/80 rounded-full p-4 transition md:-right-24 hidden md:block shadow-lg"
            >
                <ChevronRight className="w-7 h-7 text-white" />
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
      
      <ConsultationCTA />
    </>
  );
};

export default Testimonials;
