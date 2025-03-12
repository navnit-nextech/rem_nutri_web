
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#033D24] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top section with logo, menu, and utilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo section */}
          <div>
            
            
            <h3 className="text-lg font-medium mb-3">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6FE984] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#6FE984] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#6FE984] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#6FE984] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#6FE984] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Utilities */}
          <div>
            <h3 className="text-lg font-medium mb-3">Utilities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#6FE984] transition-colors">Styleguide</a></li>
              <li><a href="#" className="hover:text-[#6FE984] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#6FE984] transition-colors">Update Log</a></li>
              <li><a href="#" className="hover:text-[#6FE984] transition-colors">Feedback</a></li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-medium mb-3">Subscribe</h3>
            <p className="mb-3">Join our newsletter to stay up to date on features and releases.</p>
            
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="name@email.com" 
                className="flex-grow bg-white/10 border-none outline-none text-white p-3 rounded-l-md"
              />
              <button className="bg-[#6FE984] text-fizeo-black font-medium px-4 py-3 rounded-r-md">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-white/80">
              By subscribing you agree to with our <a href="#" className="underline hover:text-[#6FE984]transition-colors">Privacy Policy</a> and provide consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm">
            © 2024 Fizeo. All rights reserved. | Powered by <a href="#" className="hover:text-[#6FE984]transition-colors">Framer</a> | Designed and developed by <a href="#" className="hover:text-[#6FE984]transition-colors">Vilu Creative</a>
          </div>
          
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
      </div>
    </footer>
  );
};

export default Footer;
