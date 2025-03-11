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
          <div className="w-12 h-12 bg-[#0F9D58] rounded-xl flex items-center justify-center shadow-lg">
  <span className="text-white font-extrabold text-2xl">F</span>
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
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-gray-800 hover:text-fizeo-dark-green">About</Link>
            <Link href="/services" className="text-gray-800 hover:text-fizeo-dark-green">Services</Link>
            <Link href="/blog" className="text-gray-800 hover:text-fizeo-dark-green">Blog</Link>
            <Link href="/contact" className="text-gray-800 hover:text-fizeo-dark-green">Contact</Link>
          </div>

          {/* Book an Appointment Button */}
          <Button className="bg-[#033D24] hover:bg-[#022b19] text-white text-3xl font-semibold px-7 py-7 rounded-lg shadow-md">
  Book an appointment
</Button>


        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
