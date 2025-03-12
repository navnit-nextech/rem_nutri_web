
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "../components/ui/button";

import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  image: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "The transformative power of physiotherapy",
      description: "Physiotherapy, a beacon of hope in healthcare, employs diverse techniques to address physical ailments, fostering recovery and overall well-being.",
      image: "https://framerusercontent.com/images/OeRclbjsWeC0jMfoFuBzCCMlSU.jpg?scale-down-to=4096"
    },
    {
      title: "The role of physiotherapy in enhancing physical wellness",
      description: "This blog explores physiotherapy's pivotal role in promoting physical wellness, highlighting diverse applications, benefits, and its overall impact on individuals' well-being.",
      image: "https://framerusercontent.com/images/lxAtPAUIneh071YKKbabBgH7edY.jpg?scale-down-to=2048"
    }
  ];

  return (
    <div
  className="w-full py-16 bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat"
>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="text-[#043A22] text-3xl md:text-5xl font-serif mb-4">
            Insights and tips from our<br />Physiotherapy experts
          </h2>
          <Link href="/blog">
            <Button
              variant="default"
              className="bg-[#043A22] hover:bg-[#043A22]/90 md:text-xl text-white rounded-md px-6 py-2 mt-2"
            >
              View blog
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  {blogPosts.map((post, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
      {/* Larger Image */}
      <div className="h-90 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Larger Content */}
      <div className="p-12">
        <h3 className="text-[#043A22] text-2xl font-serif mb-3">
          {post.title}
        </h3>
        <p className="text-[#043A22] text-base">
          {post.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default BlogSection;
