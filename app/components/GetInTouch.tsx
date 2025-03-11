
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const GetInTouch = () => {
  return (
    <div className="w-full py-16 px-4 relative bg-[#EBE5DA]">
      {/* Decorative element at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10L20 50" stroke="#77E190" strokeWidth="8" strokeLinecap="round"/>
          <path d="M35 10L35 50" stroke="#77E190" strokeWidth="8" strokeLinecap="round"/>
          <path d="M50 10L50 50" stroke="#77E190" strokeWidth="8" strokeLinecap="round"/>
          <path d="M65 10L65 50" stroke="#77E190" strokeWidth="8" strokeLinecap="round"/>
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

        <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
          {/* Image section */}
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/b2f625a7-13f9-4bd0-8fab-b286a3786086.png" 
              alt="Person exercising" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content section */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-start mb-3">
                <div className="bg-[#043A22]rounded p-1 mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12H16M8 12V10M16 12V14" stroke="#004C30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[#043A22] text-2xl font-serif">Let's chat</h3>
              </div>
              <p className="text-gray-600 mb-1">
                Don't hesitate, take the first step toward a healthier you!
              </p>
              <p className="text-gray-600">
                Your journey to well-being starts with a simple connection.
              </p>
            </div>
            
            <div className="space-y-4">
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
