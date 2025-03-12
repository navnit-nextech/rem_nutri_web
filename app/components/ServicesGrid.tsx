import React from 'react';
import { Home, Heart, Target, Brain, Leaf, User } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="p-8 bg-[rgb(244,241,235)] border hover:shadow-xl transition-shadow flex flex-col gap-4 w-full sm:w-[300px] md:w-[320px] lg:w-[350px]">
      <div className="text-[#043A22]">{icon}</div>
      <h3 className="text-[#043A22] text-2xl font-serif">{title}</h3>
      <p className="text-[#043A22] text-base leading-relaxed">{description}</p>
    </div>
  );
};


const ServicesGrid = () => {
  const services = [
    { icon: <Home className="w-6 h-6" />, title: "Musculoskeletal Rehab", description: "Tailored rehabilitation programs for musculoskeletal conditions, injuries, and post-surgical recovery to restore optimal function and mobility." },
    { icon: <Heart className="w-6 h-6" />, title: "Sports Injury Care", description: "Specialized care for athletes, including assessment, treatment, and prevention strategies to address sports-related injuries and enhance performance." },
    { icon: <Target className="w-6 h-6" />, title: "Effective Pain Relief", description: "Comprehensive approach to alleviate pain through manual therapy, exercises, and education, targeting the root cause for long-term relief." },
    { icon: <Brain className="w-6 h-6" />, title: "Neuro Rehab", description: "Specialized interventions for individuals with neurological disorders, focusing on improving movement, balance, and overall functional independence." },
    { icon: <Leaf className="w-6 h-6" />, title: "Preventive Wellness", description: "Proactive and personalized programs designed to prevent injuries, enhance physical fitness, and promote overall well-being through targeted exercises and education." },
    { icon: <User className="w-6 h-6" />, title: "Workplace Ergonomics", description: "Assessment and recommendations to optimize workplace ergonomics, reducing the risk of musculoskeletal issues and promoting a healthy work environment." }
  ];

  return (
    <div className="w-full bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat py-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
