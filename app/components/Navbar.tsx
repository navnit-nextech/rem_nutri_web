"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[rgb(244,241,235)] border-b border-[#dedede] py-6 px-6">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between sm:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center">
                {/* SVG Logo */}
                <svg viewBox="0 0 31 30" className="w-8 h-8">
                  <path
                    d="M 22.255 9.169 C 19.674 9.34 17.485 10.273 15.688 11.967 C 12.882 14.609 14.858 18.302 17.772 19.666 C 19.223 20.347 20.755 20.722 22.367 20.791 L 22.354 29.546 C 22.354 29.665 22.307 29.78 22.223 29.864 C 22.139 29.949 22.026 29.996 21.907 29.996 L 13.605 29.996 C 13.487 29.996 13.375 29.949 13.292 29.865 C 6.671 23.309 2.524 19.111 0.849 17.272 C -0.766 15.504 0.278 13.637 1.759 12.071 C 5.53 8.089 9.329 4.135 13.158 0.211 C 13.2 0.168 13.25 0.134 13.305 0.111 C 13.359 0.088 13.417 0.076 13.475 0.076 L 21.89 0.076 C 22.071 0.076 22.235 0.187 22.303 0.357 C 22.325 0.412 22.336 0.471 22.336 0.531 Z"
                    fill="rgb(143, 194, 171)"
                  />
                  <path
                    d="M 22.255 9.169 C 24.911 9.139 27.172 9.923 29.037 11.522 C 31.098 13.29 31.749 16.021 29.702 18.068 C 27.872 19.892 25.427 20.799 22.367 20.79 C 20.755 20.721 19.223 20.347 17.771 19.666 C 14.858 18.302 12.882 14.609 15.688 11.967 C 17.485 10.273 19.674 9.34 22.255 9.169 Z"
                    fill="rgb(118, 251, 145)"
                  />
                </svg>
              </div>
              <span className="text-[#024027] text-[20px] tracking-[0.2em] -ml-1 font-medium font-['DM_Sans', 'sans-serif']">
                FIZEO
              </span>
            </Link>
          </div>

          {/* Navigation Links & Button - Desktop */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex items-center space-x-9">
              <Link
                href="/about"
                className="text-[#024027] text-[16px] font-['DM_Sans', 'sans-serif'] font-normal hover:text-fizeo-dark-green transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[#024027] text-[16px] font-['DM_Sans', 'sans-serif'] font-normal hover:text-fizeo-dark-green transition-colors"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-[#024027] text-[16px] font-['DM_Sans', 'sans-serif'] font-normal hover:text-fizeo-dark-green transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-[#024027] text-[16px] font-['DM_Sans', 'sans-serif'] font-normal hover:text-fizeo-dark-green transition-colors"
              >
                Contact
              </Link>
            </div>
            <Button className="bg-[#024027] hover:bg-[#035C3B] tracking-wide text-white text-[16px] font-semibold px-[24px] py-[24px] rounded-lg shadow-md">
              Book an appointment
            </Button>
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 relative w-10 h-10 flex items-center justify-center -top-2 right-4"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative">
              <motion.span
                initial={{ rotate: 0, y: 0 }}
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="absolute w-8 h-0.5 bg-[#024027] transform"
              ></motion.span>
              <motion.span
                initial={{ opacity: 1 }}
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute w-8 h-0.5 bg-[#024027] transform"
                style={{ top: "8px" }}
              ></motion.span>
              <motion.span
                initial={{ rotate: 0, y: 8 }}
                animate={isOpen ? { rotate: -45, y: 8 } : { rotate: 0, y: 16 }}
                transition={{ duration: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="absolute w-8 h-0.5 bg-[#024027] transform"
              ></motion.span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 1, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: "-100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              duration: 0.5,
            }}
            className="fixed inset-0 bg-[rgb(244,241,235)] z-40 md:hidden overflow-hidden shadow-lg"
            style={{
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              top: "-1px", // Ensure no gap at the top
            }}
          >
            <motion.div
              className="flex flex-col h-full space-y-8 pt-32 px-6 font-['Libre_Baskerville',serif] text-2xl"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.2,
                    when: "beforeChildren",
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                    when: "afterChildren",
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  exit: { y: 20, opacity: 0 },
                }}
              >
                <Link
                  href="/about"
                  className="text-[#024027] text-[24px] font-normal"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  exit: { y: 20, opacity: 0 },
                }}
              >
                <Link
                  href="/services"
                  className="text-[#024027] text-[24px] font-normal"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  exit: { y: 20, opacity: 0 },
                }}
              >
                <Link
                  href="/blog"
                  className="text-[#024027] text-[24px] font-normal"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  },
                  exit: { y: 20, opacity: 0 },
                }}
              >
                <Link
                  href="/contact"
                  className="text-[#024027] text-[24px] font-normal"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                      delay: 0.2,
                    },
                  },
                  exit: { y: 20, opacity: 0 },
                }}
              >
                <Button
                  className="bg-[#76FB91] hover:bg-[#5FE87A] text-[#024027] text-[16px] font-semibold px-[24px] py-[24px] rounded-lg shadow-md mt-8 font-['DM_Sans',serif] w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Book an appointment
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
