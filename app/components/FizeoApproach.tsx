'use client';

import { useState } from 'react';
import Image from 'next/image';

type ApproachTab = 'Evidence' | 'Holistic' | 'Empowering';

interface TabContentItem {
  title: string;
  description: string;
  image: string;
}

const FizeoApproach = () => {
  const [activeTab, setActiveTab] = useState<ApproachTab>('Evidence');

  const tabContent: Record<ApproachTab, TabContentItem> = {
    Evidence: {
      title: 'Evidence-based care',
      description: "Highlight how treatment plans are tailored to each patient's specific needs, considering their medical history, lifestyle, and goals.",
      image: "/lovable-uploads/164a3e22-03ef-45a4-b1ed-4b39b76bf1af.png"
    },
    Holistic: {
      title: 'Holistic treatment approach',
      description: 'Our approach considers the whole person, addressing not just the symptoms but the underlying causes and overall wellbeing.',
      image: "/lovable-uploads/164a3e22-03ef-45a4-b1ed-4b39b76bf1af.png"
    },
    Empowering: {
      title: 'Empowering self-management',
      description: 'We provide knowledge and tools to help patients actively participate in their recovery and maintain long-term health.',
      image: "/lovable-uploads/164a3e22-03ef-45a4-b1ed-4b39b76bf1af.png"
    }
  };

  return (
    <div className="w-full py-16 relative bg-[#EBE5DA]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10C35 10 40 15 40 25C40 35 35 45 25 45C15 45 15 35 20 30" stroke="#77E190" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-[#043A22] text-3xl md:text-4xl font-serif mb-4">
          The Fizeo Approach
        </h2>
        <p className="text-[#043A22] text-base mb-10 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="inline-flex bg-white rounded-full p-1 mb-10 shadow-sm">
          {(['Evidence', 'Holistic', 'Empowering'] as ApproachTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === tab
                  ? 'bg-[#043A22] text-white'
                  : 'text-[#043A22] hover:bg-fizeo-beige-bg/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="relative rounded-xl overflow-hidden mb-10">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={tabContent[activeTab].image}
            alt={tabContent[activeTab].title}
            className="w-full h-72 md:h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
            <h3 className="text-white text-2xl font-serif mb-2">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-white text-sm max-w-md">
              {tabContent[activeTab].description}
            </p>
          </div>
          
          {/* Green border accent */}
          <div className="absolute bottom-0 right-0 w-full h-2 bg-fizeo-mint-green"></div>
        </div>
      </div>

      {/* Decorative element at the bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 15L40 45" stroke="#77E190" strokeWidth="5" strokeLinecap="round"/>
          <path d="M40 15L20 45" stroke="#77E190" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

export default FizeoApproach;
