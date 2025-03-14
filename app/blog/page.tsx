"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import GetInTouch from "../components/GetInTouch";

import Footer from "../components/Footer";


const blogPosts = [
  {
    title: "The transformative power of physiotherapy",
    description:
      "Physiotherapy, a beacon of hope in healthcare, employs diverse techniques to address physical ailments, fostering recovery and overall well-being.",
    image: "https://framerusercontent.com/images/OeRclbjsWeC0jMfoFuBzCCMlSU.jpg?scale-down-to=1024",
  },
  {
    title: "The role of physiotherapy in enhancing physical health",
    description:
      "This blog explores physiotherapy's pivotal role in promoting physical wellness, highlighting diverse applications, benefits, and its overall impact on individuals' well-being.",
    image: "https://framerusercontent.com/images/lxAtPAUIneh071YKKbabBgH7edY.jpg?scale-down-to=1024",
  },
  {
    title: "Unveiling Physiotherapy: Your Path to Optimal Health",
    description:
      "Delve into the world of physiotherapy and uncover how expert-guided techniques can help prevent injuries, manage pain, and maintain peak physical condition.",
    image: "https://framerusercontent.com/images/e5OizJWQAtx8b2w4paCssE6NZ0I.jpg",
  },
  {
    title: "Nourish Your Body, Mind, and Soul",
    description:
      "Physiotherapy shines in healthcare, breathing new life through holistic care. Explore transformative essence, holistic principles, and innovative techniques.",
    image: "https://framerusercontent.com/images/GoHIr3jcVOZxBnPPEMhYGwme69w.jpg?scale-down-to=4096",
  },
];

const Blog = () => {
  return (


    <div>

    <Navbar  /> 
    

    

    <div className="bg-[#024027] min-h-screen">

    <div className="text-center py-16 pt-32">
  <h1 className="text-5xl md:text-6xl font-['Libre_Baskerville',serif] text-white font-semibold leading-tight">
    Physio pulse to unleash <br />
    <span className="text-green-700">the power of movement</span>
  </h1>
</div>



      <div className="bg-[url('/images/new_hero_bg.png')] mt-60">

      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 px-4 md:px-8 lg:px-20">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-64 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-t-2xl"
                width={500}
                height={300}
                priority
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-[#043A22] font-['Libre_Baskerville',serif] text-2xl leading-snug font-semibold">
                {post.title}
              </h3>
              <p className="text-gray-700 font-['DM_Sans', 'sans-serif'] text-base mt-4">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      </div>
    </div>

    <GetInTouch/>

    <Footer/>




    </div>

   
  );
};

export default Blog;
