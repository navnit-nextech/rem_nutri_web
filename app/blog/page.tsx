import Image from "next/image";
import GetInTouch from "../components/GetInTouch";
import Link from "next/link";
import { client } from "../../sanity/lib/client";
import ScrollAnimation from "../components/ScrollAnimation";
import NavbarWrapper from "../components/NavbarWrapper";

export default async function Blog() {
  const blogPosts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      title,
      "slug": slug.current,
      "image": mainImageUrl,
      "description": titleLine,
      publishedAt
    }
  `);

  return (
    <>
      <NavbarWrapper />
      
      {/* Hero Section */}
      <div className="bg-[var(--background-color-dark)] py-40 md:py-50 text-left md:text-center relative px-6 md:px-0">
        <ScrollAnimation>
          <h1 className="text-[40px] md:text-[56px] font-['Libre_Baskerville',serif] text-[var(--text-color-plain)] leading-tight">
            Physio pulse to unleash the <br />
            <span className="text-[var(--text-color-light)]">power of movement</span>
          </h1>
        </ScrollAnimation>
      </div>

      {/* Blog Posts Grid */}
      <div className="relative -mt-20 sm:-mt-25 max-w-7xl mx-auto grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-10 mb-16 sm:mb-20 md:mb-40">
        <div className="md:col-span-2 mb-0 md:mb-4">
          <div className="w-full h-0.5 bg-transparent"></div>
        </div>
        {blogPosts.map((post: any, index: number) => (
          <ScrollAnimation key={index} delay={index * 0.2}>
            <Link href={`/blog/${post.slug}`} passHref>
              <div className="bg-[var(--background-color-plain3)] rounded-2xl overflow-hidden w-full max-w-[600px] mx-auto h-auto cursor-pointer flex flex-col shadow-md">
                <div className="h-[280px] overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 hover:rotate-3 hover:scale-110"
                    width={800}
                    height={500}
                    priority
                  />
                </div>
                <div className="p-5 flex-grow overflow-visible">
                  <h3 className="text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] text-xl leading-tight font-semibold break-words">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-color-dark)] font-['DM_Sans', 'sans-serif'] text-sm mt-3 break-words">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
        ))}
      </div>

      <GetInTouch />
    </>
  );
}
