import React from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";
import { client } from "../../sanity/lib/client";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const BlogSection = async () => {
  const blogPosts: BlogPost[] = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0..1]{
      title,
      "slug": slug.current,
      "image": mainImageUrl,
      "description": titleLine,
      publishedAt
    }
  `);

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
              health experts
            </h2>
            <Link href="/blog">
              <Button
                variant="default"
                className="bg-[var(--background-color-dark)] font-['DM_Sans','sans-serif'] font-semibold text-xl hover:bg-[var(--background-color-dark)]/80 text-[var(--text-color-plain)] rounded text-[16px] px-6 py-5"
              >
                View blog
              </Button>
            </Link>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-15">
          {blogPosts.map((post, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-[var(--background-color-plain3)] rounded-2xl overflow-hidden h-full cursor-pointer">
                  <div className="h-90 overflow-hidden rounded-2xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:rotate-3 hover:scale-110"
                      width={600}
                      height={350}
                      priority
                    />
                  </div>

                  <div className="p-12">
                    <h3 className="text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] font-bold  text-[20px]  mb-3">
                      {post.title}
                    </h3>
                    <p className="text-[var(--text-color-dark)] font-['DM_Sans', 'sans-serif'] text-[16px] text-base">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
