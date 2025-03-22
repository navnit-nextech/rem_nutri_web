"use client";

import React, { useState, useEffect, useRef } from "react";
import ServicesHero from "../components/services/ServicesHero";
import Navbar from "../components/Navbar";
import ServicesProcess from "../components/services/ServicesProcess";
import ServiceQueries from "../components/services/ServiceQueries";
import GetInTouch from "../components/GetInTouch";
import HealthServices from "../components/services/HealthServices";

const Page = () => {
  const [navTheme, setNavTheme] = useState("dark");
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (processRef.current) {
        const processBottom = processRef.current.getBoundingClientRect().bottom;
        // When the process section is about to leave the viewport
        if (processBottom <= 100) { // Using 100px threshold
          setNavTheme("light");
        } else {
          setNavTheme("dark");
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar theme={navTheme}/>
      <ServicesHero />
      <div ref={processRef}>
        <ServicesProcess />
      </div>
      <HealthServices />
      <ServiceQueries/>
      <GetInTouch />
    </div>
  );
};

export default Page;
