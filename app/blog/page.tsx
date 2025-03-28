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
      <div className="relative -mt-25 max-w-8xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 px-6 lg:px-30 mb-20 md:mb-40">
        {blogPosts.map((post: any, index: number) => (
          <ScrollAnimation key={index} delay={index * 0.2}>
            <Link href={`/blog/${post.slug}`} passHref>
              <div className="bg-[var(--background-color-plain3)] rounded-2xl overflow-hidden w-full max-w-[600px] mx-auto md:h-145 cursor-pointer">
                <div className="h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 hover:rotate-3 hover:scale-110"
                    width={600}
                    height={350}
                    priority
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] text-xl md:text-2xl leading-snug font-semibold">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-color-dark)] font-['DM_Sans', 'sans-serif'] text-sm md:text-base mt-4">
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
