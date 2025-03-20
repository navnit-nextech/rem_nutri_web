import React from "react";

const ExpertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-8 h-8 text-[#043A22] fill-current"
  >
    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216v96H40ZM40,200V168H216v32ZM184,180a8,8,0,1,1-8-8A8,8,0,0,1,184,180Z"/>
  </svg>
);

const EvidenceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-8 h-8 text-[#043A22] fill-current"
  >
    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM56,216V40h88V88a8,8,0,0,0,8,8h48V216Zm48-64a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h16A8,8,0,0,1,104,152Zm72,0a8,8,0,0,1-8,8H136a8,8,0,0,1,0-16h32A8,8,0,0,1,176,152Zm0-32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h88A8,8,0,0,1,176,120Z"/>
  </svg>
);

const TailorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-8 h-8 text-[#043A22] fill-current"
  >
    <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"/>
  </svg>
);

const HolisticIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-8 h-8 text-[#043A22] fill-current"
  >
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"/>
  </svg>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="px-8 py-10 w-full md:w-[480px] lg:w-[580px] flex flex-col gap-6 border border-[#EBE5DA] bg-[var(--background-color-plain)] rounded-[16px] opacity-100 hover:shadow-lg transition-all hover:transform hover:scale-[1.01]">
      <div className="flex items-center gap-4 text-[var(--text-color-dark)]">
        {icon}
        <h3 className="text-[24px] text-[var(--text-color-dark)] font-['Libre_Baskerville',serif] font-bold">
          {title}
        </h3>
      </div>

      <p className="text-[var(--text-color-dark)] font-['DM_Sans', 'sans-serif'] text-[17px] leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};

const features = [
  {
    icon: <ExpertIcon />,
    title: "Created by Experts",
    description: "Our programme is designed by a team of experts, including internationally trained, multidisciplinary professionals. Our team comprises advanced dietetic practitioners, endocrinologists, specialised physiotherapists, and psychologists, ensuring comprehensive and holistic care."
  },
  {
    icon: <EvidenceIcon />,
    title: "Evidence-based, Sustainable Recovery",
    description: "Our programme is built on robust research and evidence-based practices, combining the wisdom of Ayurveda with modern medicine. This science-backed approach ensures sustainable recovery and optimal health outcomes."
  },
  {
    icon: <TailorIcon />,
    title: "Tailor-made Solutions",
    description: "Our tailor-made solutions include personalised diet plans, continuous health monitoring, and expert counselling, ensuring each individual's unique needs are met for optimal results."
  },
  {
    icon: <HolisticIcon />,
    title: "Holistic Healing",
    description: "Embrace holistic healing without resorting to fads or crash diets. Our programme features expert-led sessions for knowledge transfer, exercise modules and nutrition plans crafted to foster enduring health and well-being."
  }
];

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-[var(--background-color-plain2)]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-['Libre_Baskerville',serif] text-4xl sm:text-5xl text-[var(--text-color-dark)] text-center font-bold mb-4">
          Why Choose <span className="text-[var(--text-color-light)]">Us</span>
        </h2>
        
        <p className="text-[var(--text-color-dark)]/80 text-center text-lg font-medium max-w-2xl mx-auto mb-16">
          Experience the difference with our expert-led, evidence-based approach to health and wellness
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 