"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get first 80 characters for preview
  const previewText = post.description.slice(0, 80) + "...";
  
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <div className="bg-[var(--background-color-plain3)] rounded-2xl overflow-hidden h-full cursor-pointer">
        <div className="h-48 sm:h-90 overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110"
            width={600}
            height={350}
            priority
          />
        </div>

        <div className="p-5 sm:p-12">
          <h3 className="text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] font-bold text-[18px] sm:text-[20px] mb-2 sm:mb-3">
            {post.title}
          </h3>
          
          {/* Mobile view with expand/collapse */}
          <div className="sm:hidden">
            <p className={`text-[var(--text-color-dark)]/80 text-[14px] font-light leading-relaxed transition-all duration-300 ${isExpanded ? 'line-clamp-none pb-2' : 'line-clamp-2'}`}>
              {isExpanded ? post.description : previewText}
            </p>
            <div className="flex justify-center mt-3">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="group relative flex items-center gap-2 text-[var(--text-color-dark)] hover:text-[var(--text-color-dark)] 
                         transition-all duration-300 hover:-translate-y-1"
              >
                {/* Content wrapper with animation */}
                <div className="relative z-10 flex items-center gap-2 animate-[bounce_2s_ease-in-out_infinite]">
                  <span className="text-[14px] font-medium tracking-wide relative inline-block">
                    {isExpanded ? 'Show less' : 'Read more'}
                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--text-color-dark)]/50 
                                  md:hidden"></span>
                  </span>
                  <svg 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-all duration-500 ${isExpanded ? 'rotate-180' : ''} 
                             group-hover:translate-x-1 inline-block`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
          {/* Desktop view */}
          <p className="hidden sm:block text-[var(--text-color-dark)] font-['DM_Sans', 'sans-serif'] text-[16px]">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard; 