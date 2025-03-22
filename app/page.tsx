import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TherapeuticExcellence from "./components/TherapeuticExcellence";
import ServicesGrid from "./components/ServicesGrid";
import Testimonials from "./components/Testimonials";
import WhyFizeo from "./components/WhyFizeo";
import FizeoApproach from "./components/FizeoApproach";

import BlogSection from "./components/BlogSection";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import ScrollAnimation from "./components/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <TherapeuticExcellence />
      <ScrollAnimation longFade>
      
        <ServicesGrid />

        </ScrollAnimation>
      
      <Testimonials />
      <WhyFizeo />
      {/* <FizeoApproach /> */}
      <BlogSection />
      <GetInTouch />
    </div>
  );
};

export default Index;
