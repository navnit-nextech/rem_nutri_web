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
      title: "Reversing Type 2 Diabetes: A New Approach with RemDi",
      description:
        "Discover how RemDi's personalised nutrition and lifestyle-based approach can help manage and potentially reverse Type 2 Diabetes for long-term health benefits.",
      image:
        "https://images.unsplash.com/photo-1463367620918-d4824d05ce0e?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The Role of Nutrition in Managing Metabolic Disorders",
      description:
        "Explore how tailored nutrition and holistic wellness strategies at RemDi can help balance metabolism and support better health outcomes.",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-full py-16 bg-[var(--background-color-plain)] bg-cover bg-center bg-no-repeat relative">
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
            <h2 className="text-[var(--text-color-dark)] text-[40px] font-['Libre_Baskerville',serif]  mb-4">
              Insights and tips from our
              <br />
              Physiotherapy experts
            </h2>
            <Link href="/blog">
              <Button
                variant="default"
                className="bg-[var(--background-color-dark)] font-['DM_Sans','sans-serif'] font-semibold text-xl hover:bg-[#043A22]/90 text-[var(--text-color-plain)] rounded text-[16px] px-6 py-5"
              >
                View blog
              </Button>
            </Link>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-15">
          {blogPosts.map((post, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className="bg-[var(--background-color-plain3)] rounded-2xl overflow-hidden h-full">
                <div className="h-90 overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:rotate-3 hover:scale-110"
                  />
                </div>

                <div className="p-12">
                  <h3 className="text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] text-[20px]  mb-3">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-color-dark)] font-['DM_Sans', 'sans-serif'] text-[16px] text-base">
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
