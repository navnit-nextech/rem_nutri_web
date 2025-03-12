import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const GetInTouch = () => {
  return (
    <div className="w-full py-16 px-4 relative bg-[#EBE5DA]">
     
      

      {/* New SVG added here */}
      <div className="absolute -top-10 left-165">
        <svg viewBox="0 0 57 57" width="110" height="110">
          <path
            d="M 42.55 56.735 L 28.366 56.735 L 42.55 -0.002 Z M 14.182 56.735 L -0.003 56.735 L 14.182 -0.002 Z"
            transform="translate(0.159 0.113) rotate(180 21.65 28.866)"
            fill="#8FC2AB"
          />
          <path
            d="M 42.301 56.735 L 28.117 56.735 L 42.301 -0.002 Z M 13.933 56.735 L -0.252 56.735 L 13.933 -0.002 Z"
            transform="translate(14.592 0.113) rotate(180 21.65 28.866)"
            fill="#8FC2AB"
          />
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
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row w-full max-w-[1400px] min-h-[500px] mx-auto">
          {/* Image section */}
          <div className="md:w-3/5 h-[500px]">
            <img
              src="https://framerusercontent.com/images/Pgmx10jt5D9VoQrgCviW7WkbsI.jpg"
              alt="Person exercising"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content section */}
          <div className="md:w-2/5 p-6 md:p-10 flex flex-col justify-center bg-[rgb(244,241,235)]">
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
