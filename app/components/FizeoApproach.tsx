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
      image: "https://framerusercontent.com/images/4pcOz1O3xO2KV3rdELIIAlQBo.jpg?scale-down-to=1024"
    },
    Holistic: {
      title: 'Holistic wellness programs',
      description: 'Comprehensive care for your overall well-being using a collaborative approach with health experts.',
      image: "https://framerusercontent.com/images/xwxrapMGZZvxYPvSiK8qgJD2vrs.jpg?scale-down-to=1024"
    },
    Empowering: {
      title: 'Empowering patient education',
      description: 'Emphasise patient education and empowerment in rehab by highlighting the importance of understanding conditions, treatment',
      image: "https://framerusercontent.com/images/lxAtPAUIneh071YKKbabBgH7edY.jpg?scale-down-to=2048"
    }
  };

  return (
    // <div className="w-full pt-40 relative bg-[#EBE5DA] min-h-00px]">

<div className="w-full pt-30 pb-40  bg-[#EBE5DA] min-h-[700px]">


      <div className="absolute top-0 left-1/2 transform left-[50%] -translate-y-1/2">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10C35 10 40 15 40 25C40 35 35 45 25 45C15 45 15 35 20 30" stroke="#77E190" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[#024027] font-['Libre_Baskerville',serif] text-[40px] text-3xl  mb-4 mb-7">
          The Fizeo Approach
        </h2>
        <p className="text-[#024027] font-['DM_Sans', 'sans-serif'] text-base mb-10 text-[20px] max-w-5xl mx-auto mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius<span className="hidden md:block"></span> enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros<span className="hidden md:block"></span> dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="inline-flex bg-[rgb(244,241,235)] rounded-full p-1 mb-10 shadow-sm">
          {(['Evidence', 'Holistic', 'Empowering'] as ApproachTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-20 py-4 text-sm font-bold  text-lg rounded-full transition-colors ${activeTab === tab
                  ? 'bg-[#024027] text-white'
                  : 'text-[#043A22] hover:bg-fizeo-beige-bg/50'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {/* Tab content */}
<div className="relative rounded-xl overflow-hidden mb-10 w-full max-w-[1400px] mx-auto">
  <div className="absolute inset-0 bg-black/40 z-10"></div>
  
  <img
  src={tabContent[activeTab].image}
  alt={tabContent[activeTab].title}
  className="w-full h-[500px] md:h-[600px] object-cover rounded-3xl"
/>


  <div className="absolute bottom-0 left-0 p-12 z-20 text-left">
    <h3 className="text-white text-[32px] font-['Libre_Baskerville',serif] mb-4">
      {tabContent[activeTab].title}
    </h3>
    <p className="text-white text-[20px] font-['DM_Sans', 'sans-serif'] text-lg max-w-2xl">
      {tabContent[activeTab].description}
    </p>
  </div>

  {/* Green border accent */}
  <div className="absolute bottom-0 right-0 w-full h-8 bg-[#8FC2AB]"></div>
  <div className="absolute top-0 right-0 w-8 h-full bg-[#8FC2AB]"></div>
</div>


      </div>

      
    </div>
  );
};

export default FizeoApproach;
