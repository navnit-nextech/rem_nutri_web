import React from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

interface BlogPost {
  title: string;
  description: string;
  image: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The transformative power of physiotherapy",
      description:
        "Physiotherapy, a beacon of hope in healthcare, employs diverse techniques to address physical ailments, fostering recovery and overall well-being.",
      image:
        "https://framerusercontent.com/images/OeRclbjsWeC0jMfoFuBzCCMlSU.jpg?scale-down-to=4096",
    },
    {
      title: "The role of physiotherapy in enhancing physical wellness",
      description:
        "This blog explores physiotherapy's pivotal role in promoting physical wellness, highlighting diverse applications, benefits, and its overall impact on individuals' well-being.",
      image:
        "https://framerusercontent.com/images/lxAtPAUIneh071YKKbabBgH7edY.jpg?scale-down-to=2048",
    },
  ];

  return (
    <div className="w-full py-16 bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute -top-0 left-[50%] w-27 h-27 transform -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 79 88" id="svg10114666377" className="w-full h-full">
          <path
            d="M 33.29 0.098 L 62.459 0.098 L 43.566 25.211 L 78.958 25.211 L 16.231 87.982 L 35.359 45.656 L 0.174 45.656 Z"
            fill="#8FC2AB"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <ScrollAnimation>
          <div className="mb-10">
            <h2 className="text-[#1A1A1A] text-[40px] font-['Libre_Baskerville',serif]  mb-4">
              Insights and tips from our
              <br />
              Physiotherapy experts
            </h2>
            <Link href="/blog">
              <Button
                variant="default"
                className="bg-[#024027] font-['DM_Sans','sans-serif'] font-semibold text-xl hover:bg-[#043A22]/90 text-white rounded text-[16px] px-6 py-5"
              >
                View blog
              </Button>
            </Link>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className="bg-white rounded-2xl overflow-hidden h-full">
                <div className="h-90 overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:rotate-3 hover:scale-110"
                  />
                </div>

                <div className="p-12">
                  <h3 className="text-[#043A22] font-['Libre_Baskerville',serif] text-[20px]  mb-3">
                    {post.title}
                  </h3>
                  <p className="text-[#043A22] font-['DM_Sans', 'sans-serif'] text-[16px] text-base">
                    {post.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
