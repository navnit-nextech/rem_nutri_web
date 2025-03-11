
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#043A22] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top section with logo, menu, and utilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo section */}
          <div>
            <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
              <path d="M21 8H48M21 16H42M21 24H36" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="10" stroke="white" strokeWidth="3"/>
              <path d="M60 5L60 27" stroke="#77E190" strokeWidth="3" strokeLinecap="round"/>
              <path d="M68 5L68 27" stroke="#77E190" strokeWidth="3" strokeLinecap="round"/>
              <path d="M76 5L76 27" stroke="#77E190" strokeWidth="3" strokeLinecap="round"/>
              <path d="M84 5L84 27" stroke="#77E190" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            
            <h3 className="text-lg font-medium mb-3">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-fizeo-mint-green transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-fizeo-mint-green transition-colors">About</a></li>
              <li><a href="#" className="hover:text-fizeo-mint-green transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-fizeo-mint-green transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-fizeo-mint-green transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Utilities */}
          <div>
            <h3 className="text-lg font-medium mb-3">Utilities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-fizeo-mint-green transition-colors">Styleguide</a></li>
              <li><a href="#" className="hover:text-fizeo-mint-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-fizeo-mint-green transition-colors">Update Log</a></li>
              <li><a href="#" className="hover:text-fizeo-mint-green transition-colors">Feedback</a></li>
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
              <button className="bg-fizeo-mint-green text-fizeo-dark-green font-medium px-4 py-3 rounded-r-md">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-white/80">
              By subscribing you agree to with our <a href="#" className="underline hover:text-fizeo-mint-green transition-colors">Privacy Policy</a> and provide consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm">
            © 2024 Fizeo. All rights reserved. | Powered by <a href="#" className="hover:text-fizeo-mint-green transition-colors">Framer</a> | Designed and developed by <a href="#" className="hover:text-fizeo-mint-green transition-colors">Vilu Creative</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="hover:text-fizeo-mint-green transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-fizeo-mint-green transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-fizeo-mint-green transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-fizeo-mint-green transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
