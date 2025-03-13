import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#033D24] text-white py-12 text-[14px]">
      <div className="max-w-6xl bg-r mx-auto px-4 flex flex-col items-start"> {/* Changed layout */}
        {/* Top section with logo, menu, and utilities */}
        <div className="grid grid-cols-1 md:grid-cols-2  mb-12 w-full"> {/* Ensuring full width alignment */}

        <div className= "grid grid-cols-1 md:grid-cols-3  mb-12 w-full" >

          {/* Logo section */}
          <div className="flex  space-x-2">
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

          {/* Menu */}
          <div>
            <h3 className="text-lg font-medium mb-3 text-[14px]">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px]transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px]transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Utilities */}
          <div>
            <h3 className="text-lg font-medium mb-3 font-['DM_Sans', 'sans-serif']">Utilities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px]transition-colors">Styleguide</a></li>
              <li><a href="#" className="hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px]transition-colors">Update Log</a></li>
              <li><a href="#" className="hover:text-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px]transition-colors">Feedback</a></li>
            </ul>
          </div>

        </div>

          {/* Subscribe */}
          <div className="pl-15">
            <h3 className="text-lg font-['DM_Sans', 'sans-serif'] text-[14px] font-medium mb-3">Subscribe</h3>
            <p className="mb-3 text-[14px] font-['DM_Sans', 'sans-serif']">Join our newsletter to stay up to date on features and releases.</p>

            <div className="flex font-['DM_Sans', 'sans-serif'] text-[14px] mb-4">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-grow text-black bg-white font-['DM_Sans', 'sans-serif'] text-[14px] border-none outline-none  p-3 mr-3 rounded-md"
              />
              <button className="bg-[#6FE984] font-['DM_Sans', 'sans-serif'] text-[14px] text-black font-medium px-4 py-3 rounded-md">
                Subscribe
              </button>
            </div>

            <p className="text-sm font-['DM_Sans', 'sans-serif'] text-[14px]  text-white/80">
              By subscribing you agree to our <a href="#" className="underline hover:text-[#6FE984]font-['DM_Sans', 'sans-serif'] text-[14px]  transition-colors">Privacy Policy</a> and provide consent to receive updates from our company.
            </p>
        </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 border-t border-white/20font-['DM_Sans', 'sans-serif']  text-[14px] w-full flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0 text-[14px]">
            © 2024 Fizeo. All rights reserved. | Powered by <a href="#" className="hover:text-[#6FE984] transition-colors">Framer</a> | Designed and developed by <a href="#" className="hover:text-[#6FE984] text-[14px] transition-colors">Vilu Creative</a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
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
      </div>
    </footer>
  );
};

export default Footer;
