'use client'
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thanks for subscribing!'
        });
        setEmail('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full  bg-[var(--background-color-dark)] text-white pt-10 pb-15 md:py-22 text-[14px]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-start -md:pl-5 md:flex-row md:justify-between ">

        <div className="max-w-6xl mx-auto md:px-4 flex flex-col items-start md:flex-row md:justify-between">

          {/* First Row: Logo */}
          <Link href="/">
            <div className="md:w-40 md:h-40 rounded-xl  h-20 w-50">
              {/* SVG Logo */}
              <img src="/images/rem_nutri_logo_.png" alt="RemDi Logo" className="" />
            </div>
          </Link>

        </div>

        {/* Second Row: Menu & Utilities */}
        <div className="w-full grid grid-cols-2 md:grid-cols-2 md:pl-20 md:pr-40">
          {/* Menu */}
          <div>
            {/* <h3 className="text-lg font-medium mb-3 font-['DM_Sans', 'sans-serif'] text-[var(--text-color-plain)] text-[10px] md:text-sm">Menu</h3> */}
            <ul className="space-y-2">
              <li><Link href="/" className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Home</Link></li>
              <li><Link href="/about" className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">About</Link></li>
              <li><Link href="/services" className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Services</Link></li>
              <li><Link href="/blog" className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Utilities */}
          <div>
            {/* <h3 className="text-lg text-[var(--text-color-plain)] font-medium mb-3 text-[10px] md:text-sm">Utilities</h3> */}
            <ul className="space-y-2">
              {/* <li><a href="#" className=" text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Styleguide</a></li> */}
              <li><Link href="/privacy" className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Privacy Policy</Link></li>
              <li><Link href="/testinomials" className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Testinomials</Link></li>
              {/* <li><a href="#" className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm">Feedback</a></li> */}
            </ul>
          </div>
        </div>

        {/* Third Row: Subscribe */}
        <div className="w-full md:w-[140%] mt-6 md:mt-0">
          <h3 className="font-medium text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-sm mb-3">Subscribe</h3>
          <p className="mb-3 font-['DM_Sans', 'sans-serif'] text-[var(--text-color-plain)] text-[10px] md:text-sm">Join our newsletter to stay up to date on features and releases.</p>

          {/* Input & Button Container */}
          <form onSubmit={handleSubmit} className="flex flex-col w-full md:flex-row md:items-center">
            {/* Input Field */}
            <input
              type="email"
              placeholder="name@email.com"
              className="w-full text-black bg-[var(--background-color-plain3)] border-none outline-none p-3 rounded-md mb-2 md:mb-0 md:flex-1"
              value={email}
              onChange={handleEmailChange}
              disabled={isSubmitting}
            />

            {/* Subscribe Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`bg-[var(--background-color-light)] text-black font-medium px-4 py-3 rounded-md md:w-auto md:ml-3 text-[10px] md:text-sm transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[var(--background-color-light)]/90'}`}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {/* Status Message */}
          {submitStatus.type && (
            <p className={`mt-2 text-[10px] md:text-sm ${submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {submitStatus.message}
            </p>
          )}

          {/* Privacy Policy Text */}
          <p className="text-sm text-[var(--text-color-plain)]/80 mt-3 text-[10px] md:text-[12px]">
            By subscribing you agree to our{' '}
            <Link href="/privacy" className="underline hover:text-[var(--text-color-light)] font-['DM_Sans', 'sans-serif'] transition-colors text-[10px] md:text-[12px] ">Privacy Policy</Link>{' '}
            and provide consent to receive updates from our company.
          </p>
        </div>

      </div>


      <div className="w-[80%] ml-[10%] h-[1px] bg-gray-500 mt-10 mb-8"></div>


      <div className=" pr-0 md:pt-6 px-[10%] flex flex-col w=full items-start text-left md:flex-row md:justify-between md:w-[90%] ">

        <div className="flex flex-col items-center md:flex-row md:justify-between mb-5 md:w-[60%]">
          {/* Copyright */}
          <div className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-[14px]">
            © 2024 RemNutri Health Private Limited
          </div>

          <div className="text-[var(--text-color-plain)] font-['DM_Sans', 'sans-serif'] text-[10px] md:text-[14px] mt-2 md:mt-0">
            Designed and Developed by&nbsp;
            <a href="https://www.nextechz.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Nextech
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color-light)] transition-colors">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color-light)] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color-light)] transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-color-light)] transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>


    </footer>
  );
};

export default Footer;




