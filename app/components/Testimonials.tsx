"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const testimonials = [
  {
    text: "At 65yrs, I never thought I would be able to go on a diet. I am very set in my ways. When Sri asked me to have some blood tests, I was shocked to know I had Diabetes. When Sri said, I could follow the RemDi diet and reverse my diabetes, I decided to give it a try. In three months, I lost 12kg, reversed my diabetes and even after 9months my readings are within normal range. My friends and family are so surprised that I am looking 10yrs younger and actually have a glow in my face. I think the balanced meals really helped not only to lose weight but also to improve my overall health.",
    name: "Rajya Lakshmi",
    image: "/images/t_6.png",
  },
  {
    text: "I lost hope that I will ever lose weight. No matter what I did, I felt I could not lose weight, that is, until I took the RemDi program. I lost 10kg, reversed my diabetes. Resolved my long standing hip pain. I could not believe how energetic I felt. I got a spring in my step after a very long time. Thank you RemDi.",
    name: "Kavitha",
    image: "/images/t_1.png",
  },
  {
    text: "The last thing I expected from doing a diet program is having more energy. I was very pleasantly surprised when I started to not only lose weight but also have more energy. My Diabetes also got back into control. The variety, the combination of foods and most importantly the taste are great. I have been recommending it to all my clients.",
    name: "Om Prakash",
    image: "/images/t_2.png",
  },
  {
    text: "I started taking the meals only for convenience but was very pleasantly surprised to find that I could actually lose 10kg and reduce my Diabetes medication from three types of tablets to just one and even that reduced by half. I'm aiming to come off all my diabetes medication. Mrs Sri's expert advice and support has been extremely helpful. My family and I liked the food so much my wife also started on the program and is losing weight.",
    name: "Bhaskar Reddy",
    image: "/images/t_3.png",
  },
  {
    text: "Thank you RemDi, I have lost 20kg in 3months. I have tried many diet programs before but was never successful. Mainly because, most of them were either all Salads or all fully Desi and tasteless. RemDi is very different. The meal plans have such a wide range that the diet doesn't get boring at all. Once I started to lose weight, I felt motivated to exercise too. After a very long time, I am looking my best.",
    name: "Abhimanyu",
    image: "/images/t_4.png",
  },
  {
    text: "I am into my 4th week now. Lost 5kg, looking great. The combination of the expert advice and support from the team especially from Sri and the tasty meals is what makes it work. I actually look forward to receiving my meals. The menu range is so varied and exciting. My friends have commented saying, we have never seen anyone being excited about being on a diet. I have enjoyed every meal so far. Would recommend the program to anyone.",
    name: "Shiv",
    image: "/images/t_5.png",
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
    <div className="w-full bg-[var(--background-color-dark)] pt-20 md:pb-25 sm:pt-40 sm:pb-15  relative">
      <div className=" absolute -top-12 md:-top-16 left-[50%] transform -translate-x-1/2 ">
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

        {/* <ScrollAnimation delay={0.2}>
          <div className="max-w-full mx-auto mb-12 relative flex justify-center">
            <div className="rounded-2xl overflow-hidden w-[900px]">
              <div className="relative w-full h-[200px] sm:h-[500px] rounded-2xl border-none">
                
                
                <iframe
                  className="relative w-full h-[200px] sm:h-[500px] rounded-2xl border-none"
                  src="https://www.youtube.com/embed/W-XQS2NoRdc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="relative md:absolute top-2 left-2 md:top-[25%] md:left-[83%] z-20 hidden lg:block">
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
        </ScrollAnimation> */}

        <div className="w-full h-[1px] bg-gray-500 mb-20"></div>

        <ScrollAnimation delay={0.4}>
          <div className="max-w-5xl mx-auto text-center relative px-4">
            <div className="relative overflow-hidden min-h-[400px] pb-24 sm:pb-0 touch-pan-y">
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
                  className="w-full left-0 right-0 cursor-grab active:cursor-grabbing"
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
                    <div className="sm:w-15 sm:h-15 w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        width={56}
                        height={56}
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

            

            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#043A22]/50 rounded-full p-3 hover:bg-[#043A22]/70 transition md:left-2 lg:left-4 xl:-left-[8%] hidden md:block"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#043A22]/50 rounded-full p-3 hover:bg-[#043A22]/70 transition md:right-2 lg:right-4 xl:-right-[8%] hidden md:block"
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
