

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

// const Customface = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 256 256"
//     className="w-8 h-8 text- fill-current"
//   >
//     <path d="M9.5 3H6.5C5.9477 3 5.5 3.44772 5.5 4V7H9.5C9.6137 6.99748 9.7216 7.0504 9.7892 7.1419C9.8568 7.2334 9.8758 7.352 9.84 7.46L9.1 9.66C9.0318 9.8619 8.8431 9.9984 8.63 10H5.5V17.5C5.5 17.7761 5.2761 18 5 18H2.5C2.22386 18 2 17.7761 2 17.5V10H0.5C0.22386 10 0 9.7761 0 9.5V7.5C0 7.2239 0.22386 7 0.5 7H2V4C2 1.79086 3.7909 0 6 0H9.5C9.7761 0 10 0.22386 10 0.5V2.5C10 2.77614 9.7761 3 9.5 3Z"></path>
//   </svg>
// );


// const Custominsta = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 256 256"
//     className="w-8 h-8 text-white fill-current"
//   >
//     <path d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5027 7.8057 13.0294 6.65957 12.1849 5.81508C11.3404 4.97059 10.1943 4.49734 9 4.5ZM6.25 9C6.25 10.5188 7.4812 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9Z"></path>
//   </svg>
// );


// const Customtwitter = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 256 256"
//     className="w-8 h-8 text-white fill-current"
//   >
//     <path d="M17.9728 2.7174C17.5084 3.33692 16.947 3.87733 16.3103 4.31776C16.3103 4.47959 16.3103 4.64142 16.3103 4.81225C16.3154 7.7511 15.1415 10.5691 13.0518 12.6345C10.962 14.6999 8.1312 15.8399 5.19405 15.7989C3.49599 15.8046 1.81967 15.4169 0.296422 14.6661C0.214282 14.6302 0.161312 14.549 0.161622 14.4593V14.3604C0.161622 14.2313 0.266232 14.1267 0.395272 14.1267C2.06442 14.0716 3.67402 13.4929 4.99634 12.4724C3.48553 12.4419 2.12619 11.5469 1.5006 10.1707C1.46901 10.0956 1.47884 10.0093 1.52657 9.9432C1.57429 9.8771 1.653 9.8407 1.73425 9.8471C2.19342 9.8932 2.65718 9.8505 3.1002 9.7212C1.43239 9.375 0.179212 7.9904 -0.000137933 6.2957C-0.00650793 6.2144 0.029922 6.1357 0.096002 6.0879C0.162072 6.0402 0.248242 6.0303 0.323382 6.062C0.770942 6.2595 1.25409 6.3635 1.74324 6.3676C0.281842 5.40846 -0.349388 3.58405 0.206552 1.92622C0.263942 1.76513 0.401812 1.64612 0.569502 1.61294C0.737182 1.57975 0.909962 1.63728 1.02432 1.76439C2.99639 3.86325 5.70604 5.11396 8.5819 5.25279C8.5083 4.95885 8.4721 4.65676 8.4741 4.35372C8.501 2.76472 9.4842 1.34921 10.9634 0.769872C12.4425 0.190542 14.1249 0.562032 15.223 1.71044C15.9714 1.56785 16.695 1.31645 17.3707 0.964212C17.4202 0.933312 17.483 0.933312 17.5325 0.964212C17.5634 1.01373 17.5634 1.07652 17.5325 1.12604C17.2052 1.87552 16.6523 2.50412 15.9509 2.92419C16.5651 2.85296 17.1685 2.70807 17.7482 2.49264C17.797 2.45942 17.8611 2.45942 17.9099 2.49264C17.9508 2.51134 17.9814 2.54711 17.9935 2.59042C18.0056 2.63373 17.998 2.68018 17.9728 2.7174Z"></path>
//   </svg>
// );

// const Customlinkedin = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 256 256"
//     className="w-8 h-8 text-white fill-current"
//   >
//     <path d="M9.5 3H6.5C5.9477 3 5.5 3.44772 5.5 4V7H9.5C9.6137 6.99748 9.7216 7.0504 9.7892 7.1419C9.8568 7.2334 9.8758 7.352 9.84 7.46L9.1 9.66C9.0318 9.8619 8.8431 9.9984 8.63 10H5.5V17.5C5.5 17.7761 5.2761 18 5 18H2.5C2.22386 18 2 17.7761 2 17.5V10H0.5C0.22386 10 0 9.7761 0 9.5V7.5C0 7.2239 0.22386 7 0.5 7H2V4C2 1.79086 3.7909 0 6 0H9.5C9.7761 0 10 0.22386 10 0.5V2.5C10 2.77614 9.7761 3 9.5 3Z"></path>
//   </svg>
// );




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




