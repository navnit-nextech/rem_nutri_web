

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="w-full  bg-[#033D24] text-white py-12 text-[14px]">
      <div className="max-w-6xl mx-auto px-4 flex  flex-col items-start -md:pl-5 md:flex-row md:justify-between">

        {/* <div className="max-w-6xl mx-auto px-4 flex flex-col items-start md:flex-row md:justify-between"></div> */}

        {/* First Row: Logo */}
        <div className="w-full flex justify-center mb-6 md:mb-0">
          <div className="flex items-center space-x-2">
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
            <span className="text-white text-[20px] font-['DM_Sans', 'sans-serif'] tracking-[0.2em] font-medium">
              FIZEO
            </span>
          </div>
        </div>

        {/* Second Row: Menu & Utilities */}
        <div className="w-full grid grid-cols-2 gap-8 md:grid-cols-2">
          {/* Menu */}
          <div>
            <h3 className="text-lg font-medium mb-3 font-['DM_Sans', 'sans-serif'] text-[10px] md:text-[12px]">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Home</a></li>
              <li><a href="#" className=" font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">About</a></li>
              <li><a href="#" className=" font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm ">Services</a></li>
              <li><a href="#" className=" font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm ">Blog</a></li>
              <li><a href="#" className="font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Utilities */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-[10px] md:text-sm">Utilities</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Styleguide</a></li>
              <li><a href="#" className="  font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Privacy Policy</a></li>
              <li><a href="#" className=" font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Update Log</a></li>
              <li><a href="#" className="font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Third Row: Subscribe */}
        <div className="w-full mt-6 md:mt-0">
          <h3 className="font-medium font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm mb-3">Subscribe</h3>
          <p className="mb-3 font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Join our newsletter to stay up to date on features and releases.</p>

          {/* Input & Button Container */}
          <div className="flex flex-col w-full md:flex-row md:items-center">
            {/* Input Field */}
            <input
              type="email"
              placeholder="name@email.com"
              className="w-full text-black bg-[#E6E6E6] border-none outline-none p-3 rounded-md mb-2 md:mb-0 md:flex-1"
            />

            {/* Subscribe Button */}
            <button className="bg-[#98FB98] text-black font-medium px-4 py-3 rounded-md md:w-auto md:ml-3 text-[10px] md:text-sm">
              Subscribe
            </button>
          </div>

          {/* Privacy Policy Text */}
          <p className="text-sm text-white/80 mt-3 text-[10px] md:text-[12px]">
            By subscribing you agree to our{' '}
            <a href="#" className="underline hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] transition-colors text-[10px] md:text-[12px] ">Privacy Policy</a>{' '}
            and provide consent to receive updates from our company.
          </p>
        </div>

      </div>


      <div className="w-[80%] ml-[10%] h-[1px] bg-gray-500 mt-10 mb-5"></div>

      <div className="pt-6 px-[10%] flex flex-col items-start text-left md:flex-row md:justify-between">
  {/* Copyright */}
  <div className="mb-4 font-['DM_Sans', 'sans-serif'] text-[10px] md:text-[12px]">
    © 2024 Fizeo. All rights reserved.
  </div>

  {/* Powered by */}
  <div className="mb-4 font-['DM_Sans', 'sans-serif'] text-[10px] md:text-[12px]">
    Powered by <a href="#" className="hover:text-[#6FE984] transition-colors text-[10px] md:text-[12px]">Framer</a>
  </div>

  {/* Designed by */}
  <div className="mb-4 font-['DM_Sans', 'sans-serif'] text-[10px] md:text-[12px]">
    Designed by <a href="#" className="hover:text-[#6FE984] transition-colors text-[10px] md:text-[12px]">Vilu Creative</a>
  </div>

  {/* Social Icons */}
  <div className="flex space-x-4">
    <a href="#" className="hover:text-[#6FE984] transition-colors">
      <Facebook size={20} />
    </a>
    <a href="#" className="hover:text-[#6FE984] transition-colors">
      <Instagram size={20} />
    </a>
    <a href="#" className="hover:text-[#6FE984] transition-colors">
      <Twitter size={20} />
    </a>
    <a href="#" className="hover:text-[#6FE984] transition-colors">
      <Linkedin size={20} />
    </a>
  </div>
</div>


    </footer>
  );
};

export default Footer;




