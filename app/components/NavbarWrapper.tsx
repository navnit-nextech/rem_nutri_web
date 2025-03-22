"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const [navTheme, setNavTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      // Get 50% of the viewport height
      const scrollThreshold = window.innerHeight * 0.5;
      
      // Check if scrolled past 50% of the viewport height
      if (window.scrollY > scrollThreshold) {
        setNavTheme("light");
      } else {
        setNavTheme("dark");
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

  return <Navbar theme={navTheme} />;
} 