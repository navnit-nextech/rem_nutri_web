

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
import ServicesProcess from "./components/services/ServicesProcess";
import React from "react";


const Index = () => {
  

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      <TherapeuticExcellence />
      
      
        <ServicesGrid />

        
        <ServicesProcess />
      

      
      
      
      {/* <WhyFizeo /> */}
      {/* <FizeoApproach /> */}
      
      <BlogSection />
      <Testimonials />
      <GetInTouch />
    </div>
  );
};

export default Index;
