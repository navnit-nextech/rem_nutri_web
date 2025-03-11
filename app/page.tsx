
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TherapeuticExcellence from './components/TherapeuticExcellence';
import ServicesGrid from './components/ServicesGrid';
import Testimonials from './components/Testimonials';
import WhyFizeo from './components/WhyFizeo';
import FizeoApproach from './components/FizeoApproach';
import BlogSection from './components/BlogSection';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection /> 
      <TherapeuticExcellence />
      <ServicesGrid />
      <Testimonials />
      <WhyFizeo />
      <FizeoApproach />
      <BlogSection />
      <GetInTouch />
      <Footer />      
    </div>
  );
};

export default Index;
