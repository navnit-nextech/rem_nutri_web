'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-[rgb(244,241,235)] border-b border-black-100 py-6 px-6"
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-9">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center ">
              {/* SVG Logo */}
              <svg viewBox="0 0 31 30" className="w-9 h-9">
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
            <span className="text-black font-semibold text-xl tracking-wider ml-2">FIZEO</span>
          </Link>
        </motion.div>

        {/* Navigation Links & Button */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="flex items-center space-x-12"
        >
          <div className="hidden md:flex items-center space-x-11">
            <Link href="/about" className="text-gray-800 hover:text-fizeo-dark-green">About</Link>
            <Link href="/services" className="text-gray-800 hover:text-fizeo-dark-green">Services</Link>
            <Link href="/blog" className="text-gray-800 hover:text-fizeo-dark-green">Blog</Link>
            <Link href="/contact" className="text-gray-800 hover:text-fizeo-dark-green">Contact</Link>
          </div>

          {/* Book an Appointment Button */}
          <Button className="bg-[#033D24] hover:bg-[#022b19] text-white text-3xl font-semibold px-8 py-6.5 rounded-lg shadow-md ml-9">  
            Book an appointment
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
