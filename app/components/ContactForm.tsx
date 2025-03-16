
"use client"








import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";



const Custommsg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-7 h-7 text-white fill-current"
  >
    <path d="M 224 48 H 32 a 8 8 0 0 0 -8 8 V 192 a 16 16 0 0 0 16 16 H 216 a 16 16 0 0 0 16 -16 V 56 A 8 8 0 0 0 224 48 Z m -96 85.15 L 52.57 64 H 203.43 Z M 98.71 128 L 40 181.81 V 74.19 Z m 11.84 10.85 l 12 11.05 a 8 8 0 0 0 10.82 0 l 12 -11.05 l 58 53.15 H 52.57 Z M 157.29 128 L 216 74.18 V 181.82 Z"></path>
  </svg>
);


const Custinsta = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-10 h-10 text-[var(--text-color-dark)] fill-current"
  >
    <path d="M 128 80 a 48 48 0 1 0 48 48 A 48.05 48.05 0 0 0 128 80 Z m 0 80 a 32 32 0 1 1 32 -32 A 32 32 0 0 1 128 160 Z M 176 24 H 80 A 56.06 56.06 0 0 0 24 80 v 96 a 56.06 56.06 0 0 0 56 56 h 96 a 56.06 56.06 0 0 0 56 -56 V 80 A 56.06 56.06 0 0 0 176 24 Z m 40 152 a 40 40 0 0 1 -40 40 H 80 a 40 40 0 0 1 -40 -40 V 80 A 40 40 0 0 1 80 40 h 96 a 40 40 0 0 1 40 40 Z M 192 76 a 12 12 0 1 1 -12 -12 A 12 12 0 0 1 192 76 Z"></path>
  </svg>
);

const Custfacebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-10 h-10 text-[var(--text-color-dark)] fill-current"
  >
    <path d="M 128 24 A 104 104 0 1 0 232 128 A 104.11 104.11 0 0 0 128 24 Z m 8 191.63 V 152 h 24 a 8 8 0 0 0 0 -16 H 136 V 112 a 16 16 0 0 1 16 -16 h 16 a 8 8 0 0 0 0 -16 H 152 a 32 32 0 0 0 -32 32 v 24 H 96 a 8 8 0 0 0 0 16 h 24 v 63.63 a 88 88 0 1 1 16 0 Z"></path>
  </svg>

);

const Custpintrest = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-10 h-10 text-[var(--text-color-dark)] fill-current"
  >
    <path d="M 216 112 c 0 22.57 -7.9 43.2 -22.23 58.11 C 180.39 184 162.25 192 144 192 c -17.88 0 -29.82 -5.86 -37.43 -12 L 95.79 225.83 A 8 8 0 0 1 88 232 a 8.24 8.24 0 0 1 -1.84 -0.21 a 8 8 0 0 1 -6 -9.62 l 32 -136 a 8 8 0 0 1 15.58 3.66 l -16.9 71.8 C 114 166 123.3 176 144 176 c 27.53 0 56 -23.94 56 -64 A 72 72 0 1 0 65.63 148 a 8 8 0 0 1 -13.85 8 A 88 88 0 1 1 216 112 Z"></path>
  </svg>
);

const Custyoutube = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-10 h-10 text-[var(--text-color-dark)] fill-current"
  >
    <path d="M 164.44 121.34 l -48 -32 A 8 8 0 0 0 104 96 v 64 a 8 8 0 0 0 12.44 6.66 l 48 -32 a 8 8 0 0 0 0 -13.32 Z M 120 145.05 V 111 l 25.58 17 Z M 234.33 69.52 a 24 24 0 0 0 -14.49 -16.4 C 185.56 39.88 131 40 128 40 s -57.56 -0.12 -91.84 13.12 a 24 24 0 0 0 -14.49 16.4 C 19.08 79.5 16 97.74 16 128 s 3.08 48.5 5.67 58.48 a 24 24 0 0 0 14.49 16.41 C 69 215.56 120.4 216 127.34 216 h 1.32 c 6.94 0 58.37 -0.44 91.18 -13.11 a 24 24 0 0 0 14.49 -16.41 c 2.59 -10 5.67 -28.22 5.67 -58.48 S 236.92 79.5 234.33 69.52 Z m -15.49 113 a 8 8 0 0 1 -4.77 5.49 c -31.65 12.22 -85.48 12 -86 12 H 128 c -0.54 0 -54.33 0.2 -86 -12 a 8 8 0 0 1 -4.77 -5.49 C 34.8 173.39 32 156.57 32 128 s 2.8 -45.39 5.16 -54.47 A 8 8 0 0 1 41.93 68 c 30.52 -11.79 81.66 -12 85.85 -12 h 0.27 c 0.54 0 54.38 -0.18 86 12 a 8 8 0 0 1 4.77 5.49 C 221.2 82.61 224 99.43 224 128 S 221.2 173.39 218.84 182.47 Z"></path>
  </svg>
);

const Custtwit = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-10 h-10 text-[var(--text-color-dark)] fill-current"
  >
    <path d="M 205.66 194.34 a 8 8 0 0 1 -11.32 11.32 L 128 139.31 L 61.66 205.66 a 8 8 0 0 1 -11.32 -11.32 L 116.69 128 L 50.34 61.66 A 8 8 0 0 1 61.66 50.34 L 128 116.69 l 66.34 -66.35 a 8 8 0 0 1 11.32 11.32 L 139.31 128 Z"></path>
  </svg>
);





const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
  
  
  
  <div className="w-full bg-[var(--background-color-plain1)] py-16 md:py-24 mt-25">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          {/* Left column with text and contact info */}
          <div className="space-y-12">
            {/* Heading and intro text */}
            <div className="space-y-6">
              <h2 className="text-[26px] md:text-[40px] font-['Libre_Baskerville',serif] text-[var(--text-color-dark)]">Let's talk</h2>
              <p className="text-[20px] font-['DM_Sans', 'sans-serif'] text-[var(--text-color-dark)] leading-relaxed">
                From pain management to performance optimization, <span className="hidden md:block"></span>we're here to understand your needs and guide you <span className="hidden md:block"></span>toward a healthier, more active life. Start a <span className="hidden md:block"></span>conversation with us for a personalized approach to<span className="hidden md:block"></span> your well-being journey.
              </p>
            </div>

            {/* Separator line */}
            <div className="w-115 h-px bg-gray-200"></div>

            {/* Contact information */}
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[var(--background-color-dark)] flex items-center justify-center">
                  <Custommsg />
                </div>
                <div>
                  <h3 className="text-[var(--text-color-dark)] text-[24px] font-['Libre_Baskerville',serif]">Email us</h3>
                  <a href="mailto:info@fizeo.com" className="text-[var(--text-color-dark)] text-[20px] font-['DM_Sans', 'sans-serif']">
                    info@fizeo.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[var(--background-color-dark)] flex items-center justify-center">
                  <Phone />
                </div>
                <div>
                  <h3 className="text-[var(--text-color-dark)] text-[24px]  font-['Libre_Baskerville',serif]">Phone us</h3>
                  <span className="text-[var(--text-color-dark)] text-[20px] font-['DM_Sans', 'sans-serif']">8450 9087</span>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[var(--background-color-dark)] flex items-center justify-center">
                  <MapPin  />
                </div>
                <div>
                  <h3 className="text-[var(--text-color-dark)] text-[24px]  font-['Libre_Baskerville',serif]">Find us</h3>
                  <span className="text-[var(--text-color-dark)] text-[20px] font-['DM_Sans', 'sans-serif']">123 Main Street, French, 56789, Townsville.</span>
                </div>
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex gap-6 pt-6 text-[var(--text-color-dark)]">
              <a href="#" className="w-10 h-10  flex items-center justify-center">
                <Custinsta />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center ">
                <Custfacebook />
              </a>
              <a href="#" className="w-10 h-10  flex items-center justify-center  ">
                <Custpintrest />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center ">
                <Custyoutube />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center ">
                <Custtwit />
              </a>
            </div>
          </div>

          {/* Right column with form */}
          <div className="border border-[#ebe5da] bg-[var(--background-color-plain)] px-16 py-20 rounded-2xl relative -ml-4 md:-ml-8">


            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName" className="font-['DM_Sans', 'sans-serif'] text-[16px] text-[var(--text-color-dark)] ">
                    First Name*
                  </Label>
                  <Input
                    id="firstName"
                    required
                    className="bg-white border border-transparent focus-visible:ring-0 focus-visible:border-[var(--text-color-dark)] focus-visible:border-[0.5px] text-black"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="font-['DM_Sans', 'sans-serif'] text-[16px] text-[var(--text-color-dark)]">
                    Last Name*
                  </Label>
                  <Input
                    id="lastName"
                    required
                    className="bg-white border-transparent focus-visible:ring-0 focus-visible:border-[var(--text-color-dark)] focus-visible:border-[0.5px] text-black"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-['DM_Sans', 'sans-serif'] text-[16px] text-[var(--text-color-dark)]">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-white border-transparent focus-visible:ring-0 focus-visible:border-[var(--text-color-dark)]focus-visible:border-[0.5px] text-black"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="font-['DM_Sans', 'sans-serif'] text-[16px] text-[var(--text-color-dark)]">
                    Service*
                  </Label>
                  <Input
                    id="service"
                    required
                    className="bg-white border-transparent focus-visible:ring-0 focus-visible:border-[var(--text-color-dark)]focus-visible:border-[0.5px] text-black"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-['DM_Sans', 'sans-serif'] text-[16px] text-[var(--text-color-dark)]">
                    Message
                  </Label>
                  <Input
                    id="message"
                    required
                    className="bg-white border-transparent focus-visible:ring-0 focus-visible:border-[var(--text-color-dark)]focus-visible:border-[0.5px] text-black"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--background-color-light)] text-[var(--text-color-dark)] font-bold py-3 text-base"
              >
                Submit
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>

   
  );
};

export default ContactForm;

