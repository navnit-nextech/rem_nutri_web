"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  bgColor?: string; // Optional prop for background color
}

const Navbar: React.FC<NavbarProps> = ({
  bgColor = "bg-[rgb(244,241,235)]",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed bg-[var(--background-color-plain)]  h-[12.5%] left-0 w-full z-50  border-b border-[#dedede] py-6 px-6"
      >
        <div className="max-w-7xl w-full h-full mx-auto flex  items-center justify-between sm:px-8">
          {/* Logo */}
         
            <Link href="/" className="">
              <div className="w-40 h-40 -pr-15 rounded-xl pt-16 pr-5">
                {/* SVG Logo */}
                <img src="/images/rem_nutri_logo_.png" alt="RemDi Logo" />

              </div>
              
            </Link>
          

          {/* Navigation Links & Button - Desktop */}
          <div className="hidden md:flex items-center space-x-15">
            <div className="flex items-center space-x-9">
              <Link
                href="/about"
                className="text-[var(--text-color-dark)] text-[16px] font-['DM_Sans', 'sans-serif'] font-normal hover:text-fizeo-dark-green transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[var(--text-color-dark)] text-[16px] font-['DM_Sans', 'sans-serif'] font-normal hover:text-fizeo-dark-green transition-colors"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-[var(--text-color-dark)] text-[16px] font-['DM_Sans', 'sans-serif'] font-normal hover:text-fizeo-dark-green transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-[var(--text-color-dark)] text-[16px] font-['DM_Sans', 'sans-serif'] font-normal hover:text-fizeo-dark-green transition-colors"
              >
                Contact
              </Link>
            </div>
            <Button className="hover:bg-[#035C3B] tracking-wide text-[var(--text-color-plain)] text-[16px] font-semibold px-[24px] py-[24px] rounded-lg shadow-md" style={{ backgroundColor: "var(--background-color-dark)" }}>
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
            className="fixed inset-0 bg-[var(--background-color-plain)] z-40 md:hidden overflow-hidden shadow-lg"
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
  className="text-[var(--text-color-dark)] text-[24px] font-normal"
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
                  className="text-[var(--text-color-dark)] text-[24px] font-normal"
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
                  className="text-[var(--text-color-dark)] text-[24px] font-normal"
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
                  className="text-[var(--text-color-dark)] text-[24px] font-normal"
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
                  className="bg-[var(--background-color-light)] hover:bg-[#5FE87A] text-[var(--text-color-dark)] text-[16px] font-semibold px-[24px] py-[24px] rounded-lg shadow-md mt-8 font-['DM_Sans',serif] w-full"
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
