"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const testimonials = [
  {
    text: "After a sports injury left me sidelined, Fizeo's physiotherapy team played a crucial role in my recovery. Their personalized approach and targeted exercises not only alleviated my pain but also helped me regain strength and flexibility. I'm back in the game, thanks to Fizeo!",
    name: "Sarah M",
    image:
      "https://framerusercontent.com/images/F8FpD28VlKZcge0xDGDslltN6k.jpg?scale-down-to=2048",
  },
  {
    text: "I cannot express enough gratitude to Fizeo for their exceptional physiotherapy services. Suffering from chronic back pain, I had tried various treatments with little success. The Fizeo team not only provided effective pain relief but also educated me on proactive strategies to manage my condition. Life-changing experience!",
    name: "Todd S",
    image:
      "https://framerusercontent.com/images/pDynE5qiJcGHCSqpdUsgCtF9coc.jpg?scale-down-to=2048",
  },
  {
    text: "As someone with a neurological condition, finding the right physiotherapy was crucial. Fizeo exceeded my expectations. Their neuro-rehabilitation expertise and compassionate care have significantly improved my mobility and overall well-being. Highly recommended for anyone seeking top-notch physio services!",
    name: "Melanie ]",
    image:
      "https://framerusercontent.com/images/TnND6kc2yg1n6MNWVR7VfKcvqE.jpg?scale-down-to=2048",
  },
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
    <div className="w-full bg-[var(--background-color-dark)] py-20 sm:py-40 relative">
      <div className=" absolute sm:top-[-4.2%] -top-12 left-[50%] transform -translate-x-1/2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 56"
          className="w-16 h-24 scale-70 md:w-20 md:h-32 md:scale-100 "
        >
          <path
            d="M 28.023 0 C 12.63 0 0.152 12.513 0.152 27.949 L 28.023 55.898 L 55.893 27.949 C 55.893 12.513 43.415 0 28.023 0 Z"
            fill="rgb(143, 194, 170)"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-[var(--text-color-plain)]  font-['Libre_Baskerville',serif] text-3xl sm:text-[40px] mb-4">
              Real stories,{" "}
              <span className="text-[var(--text-color-light)] ">real transformations</span>
            </h2>
            <p className="text-[var(--text-color-plain)]  text-lg sm:text-[24px] font-['Libre_Baskerville',serif]  mx-auto">
              These real stories illuminate the path to transformation,
              <span className="hidden md:block"></span> showcasing the impact of
              personalized care on physical well-
              <span className="hidden md:block"></span>being.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="max-w-full mx-auto mb-12 relative flex justify-center">
            <div className="rounded-2xl overflow-hidden w-[900px]">
              <div className="relative w-full  bg-red ">
                {/* Right and Bottom Borders */}

                {/* Embedded YouTube Video */}
                
                <iframe
                  className="relative w-full h-[200px] sm:h-[500px] rounded-2xl border-none"
                  src="https://www.youtube.com/embed/W-XQS2NoRdc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="relative md:absolute top-2 left-2 md:top-[25%] md:left-[995px] z-20 hidden sm:block">
                <div className="w-32 h-32 bg-fizeo-peach rounded-full flex items-center justify-center">
                  <svg
                    width="240"
                    height="240"
                    viewBox="0 0 73 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform rotate-[-15deg]"
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

        <div className="w-full h-[1px] bg-gray-500 mb-20"></div>

        <ScrollAnimation delay={0.4}>
          <div className="max-w-5xl mx-auto text-center relative px-4">
            <div className="relative overflow-hidden h-[300px] touch-pan-y">
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
                  <div className="flex justify-center mb-7">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="25"
                        height="25"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#6FE984]"
                      >
                        <path
                          d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[var(--text-color-plain)]  mb-6 font-['Libre_Baskerville',serif] text-sm sm:text-[20px]">
                    "{testimonials[currentIndex].text}"
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <div className="sm:w-15 sm:h-15 w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[var(--text-color-plain)]  font-['Libre_Baskerville',serif] text-sm sm:text-[20px]">
                      {testimonials[currentIndex].name}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-[var(--background-color-light)] w-4" : "bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#043A22]/50 rounded-full p-3 hover:bg-[#043A22]/70 transition md:-left-20 hidden md:block"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#043A22]/50 rounded-full p-3 hover:bg-[#043A22]/70 transition md:-right-20 hidden md:block"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Testimonials;
