

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full  bg-[var(--background-color-dark)] text-white py-22 text-[14px]">
      <div className="max-w-6xl mx-auto px-4 flex  flex-col items-start -md:pl-5 md:flex-row md:justify-between ">

        <div className="max-w-6xl mx-auto px-4 flex flex-col items-start md:flex-row md:justify-between">

          {/* First Row: Logo */}
          <Link href="/" className="">
            <div className="w-40 h-40 rounded-xl  ">
              {/* SVG Logo */}
              <img src="/images/rem_nutri_logo_.png" alt="RemDi Logo" className="" />

            </div>

          </Link>

        </div>

        {/* Second Row: Menu & Utilities */}
        <div className="w-full grid grid-cols-2 md:grid-cols-2 md:pl-20 md:pr-40">
          {/* Menu */}
          <div>
            <h3 className="text-lg font-medium mb-3 font-['DM_Sans', 'sans-serif'] text-[var(--text-color-plain)] text-[10px] md:text-sm">Menu</h3>
            <ul className="space-y-2">
              <li><a href="/" className=" text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Home</a></li>
              <li><a href="about" className=" text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">About</a></li>
              <li><a href="services" className=" text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm ">Services</a></li>
              <li><a href="blog" className=" text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm ">Blog</a></li>
              <li><a href="contact" className=" text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Utilities */}
          <div>
            <h3 className="text-lg text-[var(--text-color-plain)] font-medium mb-3 text-[10px] md:text-sm">Utilities</h3>
            <ul className="space-y-2">
              {/* <li><a href="#" className=" text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Styleguide</a></li> */}

              {/* <li>
              <Link
                href="/contact"
                className="className= text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm"
              >
                Contact
              </Link>
              </li> */}
              <li><Link href="privacy" className="  text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Privacy Policy</Link></li>
              <li><a href="testinomials" className=" text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Testinomials</a></li>
              {/* <li><a href="#" className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Feedback</a></li> */}
            </ul>
          </div>
        </div>

        {/* Third Row: Subscribe */}
        <div className="w-full md:w-[140%] mt-6 md:mt-0">
          <h3 className="font-medium text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm mb-3">Subscribe</h3>
          <p className="mb-3 font-['DM_Sans', 'sans-serif'] text-[var(--text-color-plain)] text-[10px] md:text-sm">Join our newsletter to stay up to date on features and releases.</p>

          {/* Input & Button Container */}
          <div className="flex flex-col w-full md:flex-row md:items-center">
            {/* Input Field */}
            <input
              type="email"
              placeholder="name@email.com"
              className="w-full text-black bg-[var(--background-color-plain3)] border-none outline-none p-3 rounded-md mb-2 md:mb-0 md:flex-1"
            />

            {/* Subscribe Button */}
            <button className="bg-[var(--background-color-light)] text-black font-medium px-4 py-3 rounded-md md:w-auto md:ml-3 text-[10px] md:text-sm">
              Subscribe
            </button>
          </div>

          {/* Privacy Policy Text */}
          <p className="text-sm text-[var(--text-color-plain)]/80 mt-3 text-[10px] md:text-[12px]">
            By subscribing you agree to our{' '}
            <a href="#" className="underline hover:text-[var(--text-color-light)] font-['DM_Sans', 'sans-serif'] transition-colors text-[10px] md:text-[12px] ">Privacy Policy</a>{' '}
            and provide consent to receive updates from our company.
          </p>
        </div>

      </div>


      <div className="w-[80%] ml-[10%] h-[1px] bg-gray-500 mt-10 mb-8"></div>


      <div className=" pr-0 md:pt-6 px-[10%] flex flex-col w=full items-start text-left md:flex-row md:justify-between md:w-[90%] ">

        <div className='flex md:flex-row md:justify-between  md:w-[60%]'>

        
        {/* Copyright */}
        <div className="mb-4 text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-[14px]">
          © 2024 Fizeo. All rights reserved.
        </div>

        {/* Powered by */}
        <div className="mb-4 text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-[14px]">
          Powered by <a href="#" className="hover:text-[#6FE984] transition-colors text-[10px] md:text-[12px]">Framer</a>
        </div>

        {/* Designed by */}
        <div className="mb-4 text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-[14px]">
          Designed by <a href="#" className="hover:text-[#6FE984] transition-colors text-[10px] md:text-[12px]">Vilu Creative</a>
        </div>

        </div>

        


        

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-[var(--text-color-light)] transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-[var(--text-color-light)] transition-colors">
            <Instagram size={20} />

          </a>
          <a href="#" className="hover:text-[var(--text-color-light)] transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover: transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>


    </footer>
  );
};

export default Footer;




