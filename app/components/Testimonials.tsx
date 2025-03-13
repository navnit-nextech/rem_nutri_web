
"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "After a sports injury left me sidelined, Fizeo's physiotherapy team played a crucial role in my recovery. Their personalized approach and targeted exercises not only alleviated my pain but also helped me regain strength and flexibility. I'm back in the game, thanks to Fizeo!",
    name: "Sarah M",
    image: "https://framerusercontent.com/images/F8FpD28VlKZcge0xDGDslltN6k.jpg?scale-down-to=2048",
  },
  {
    text: "I cannot express enough gratitude to Fizeo for their exceptional physiotherapy services. Suffering from chronic back pain, I had tried various treatments with little success. The Fizeo team not only provided effective pain relief but also educated me on proactive strategies to manage my condition. Life-changing experience!",
    name: "Todd S",
    image: "https://framerusercontent.com/images/pDynE5qiJcGHCSqpdUsgCtF9coc.jpg?scale-down-to=2048",
  },
  {
    text: "As someone with a neurological condition, finding the right physiotherapy was crucial. Fizeo exceeded my expectations. Their neuro-rehabilitation expertise and compassionate care have significantly improved my mobility and overall well-being. Highly recommended for anyone seeking top-notch physio services!",
    name: "Melanie ]",
    image: "https://framerusercontent.com/images/TnND6kc2yg1n6MNWVR7VfKcvqE.jpg?scale-down-to=2048",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-[#024027] py-40 relative">
      <div className=" absolute top-[-4.5%] left-[47%]">


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" className="w-16 h-24 scale-70 md:w-20 md:h-32 md:scale-100 ">
          <path
            d="M 28.023 0 C 12.63 0 0.152 12.513 0.152 27.949 L 28.023 55.898 L 55.893 27.949 C 55.893 12.513 43.415 0 28.023 0 Z"
            fill="rgb(143, 194, 170)"

          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-white font-['Libre_Baskerville',serif] text-[40px] mb-4">
            Real stories, <span className="text-[#76FB91]">real transformations</span>
          </h2>
          <p className="text-white text-[24px] font-['Libre_Baskerville',serif]  mx-auto">
            These real stories illuminate the path to transformation,<span className="hidden md:block"></span> showcasing the impact of personalized care on physical well-<span className="hidden md:block"></span>being.
          </p>
        </div>

        <div className="max-w-full mx-auto mb-12 relative flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-[900px]">
            <div className="relative w-full  bg-red ">
              {/* Right and Bottom Borders */}

              

              
              

              {/* Embedded YouTube Video */}
              <iframe
                className="relative w-full h-[500px] rounded-2xl border-none"
                src="https://www.youtube.com/embed/W-XQS2NoRdc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>




            </div>




            <div className="relative md:absolute top-2 left-2 md:top-[25%] md:left-[995px] z-20">
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



        <div className="w-full h-[1px] bg-gray-500 mb-20"></div>

        <div className="max-w-5xl mx-auto text-center relative">
          <div className="flex justify-center mb-7">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#6FE984]">
                <path d="M10 1L13 7L19 8L14.5 13L16 19L10 16L4 19L5.5 13L1 8L7 7L10 1Z" fill="currentColor" />
              </svg>
            ))}
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-white mb-6 font-['Libre_Baskerville',serif] text-[20px]"
          >
            "{testimonials[currentIndex].text}"
          </motion.div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-15 h-15 rounded-full overflow-hidden">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-['Libre_Baskerville',serif] text-[20px]">{testimonials[currentIndex].name}</span>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-20 top-1/2 transform -translate-y-1/2 bg-[#043A22]/50 rounded-full p-3 hover:bg-[#043A22]/70 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-20 top-1/2 transform -translate-y-1/2 bg-[#043A22]/50 rounded-full p-3 hover:bg-[#043A22]/70 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
