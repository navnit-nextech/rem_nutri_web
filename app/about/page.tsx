"use client";

import React, { useState, useEffect, useRef } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutImageGrid from "../components/about/AboutImageGrid";
import AboutTeam from "../components/about/AboutTeam";
import GetInTouch from "../components/GetInTouch";

import Navbar from "../components/Navbar";

const AboutPage = () => {
  const [navTheme, setNavTheme] = useState("dark");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        // When the hero section is about to leave the viewport
        if (heroBottom <= 100) { // Using 100px threshold
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
      <Navbar theme={navTheme} />
      <div ref={heroRef}>
        <AboutHero />
      </div>
      <AboutStats />
      <AboutImageGrid />
      <AboutTeam />
      <GetInTouch />
    </div>
  );
};

export default AboutPage;
