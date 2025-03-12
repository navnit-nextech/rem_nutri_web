
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const GetInTouch = () => {
  return (
    <div className="w-full py-16 px-4 relative bg-[#EBE5DA]">
      {/* Decorative element at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10L20 50" stroke="#77E190" strokeWidth="8" strokeLinecap="round" />
          <path d="M35 10L35 50" stroke="#77E190" strokeWidth="8" strokeLinecap="round" />
          <path d="M50 10L50 50" stroke="#77E190" strokeWidth="8" strokeLinecap="round" />
          <path d="M65 10L65 50" stroke="#77E190" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#043A22] text-4xl md:text-5xl font-serif">
            Get moving, <span className="font-medium">get in touch!</span>
          </h2>
          <p className="text-[#043A22] text-base max-w-2xl mx-auto mt-2">
            Reach out to us and let's embark on a journey towards a healthier, happier you. Your optimal health is just a conversation away!
          </p>
        </div><div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row w-full max-w-[1400px] min-h-[500px] mx-auto">
  {/* Image section - Stretched further right */}
  <div className="md:w-3/5 h-[500px]">
    <img
      src="https://framerusercontent.com/images/Pgmx10jt5D9VoQrgCviW7WkbsI.jpg"
      alt="Person exercising"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content section - Stretched fully to fill the right side */}
  <div className="md:w-2/5 p-6 md:p-10 flex flex-col justify-center bg-[rgb(244,241,235)] ">
    <div className="mb-6">
      <div className="flex items-start mb-3">
        <h3 className="text-[#043A22] text-2xl font-serif">Let's chat</h3>
      </div>
      <p className="text-gray-700 text-base mb-1">
        Don't hesitate, take the first step toward a healthier you!
      </p>
      <p className="text-gray-700 text-base">
        Your journey to well-being starts with a simple connection.
      </p>
    </div>

    <div className="space-y-3 text-base">
      <div className="flex items-center">
        <MapPin className="mr-3 text-[#043A22]" size={18} />
        <span className="text-[#043A22]">123 Main Street, French, 56789, Townsville.</span>
      </div>
      <div className="flex items-center">
        <Phone className="mr-3 text-[#043A22]" size={18} />
        <span className="text-[#043A22]">8450 9087</span>
      </div>
      <div className="flex items-center">
        <Mail className="mr-3 text-[#043A22]" size={18} />
        <a href="mailto:info@fizeo.com" className="text-[#043A22] hover:text-fizeo-mint-green transition-colors">
          info@fizeo.com
        </a>
      </div>
    </div>
  </div>
</div>




      </div>
    </div>
  );
};

export default GetInTouch;
