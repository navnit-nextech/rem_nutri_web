import React from 'react';
import { Heart, Target, Leaf, User } from 'lucide-react';
import { Button } from "../components/ui/button";

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[rgb(244,241,235)] rounded-lg p-6 mb-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="text-[#043A22]">
          {icon}
        </div>
        <div>
          <h3 className="text-[#043A22] text-lg font-medium mb-2">{title}</h3>
          <p className="text-[#043A22] text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhyFizeo = () => {
  const features = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Personalized Care",
      description: "Fizeo is dedicated to tailoring physiotherapy treatments to the unique needs of each individual, ensuring a personalized and effective approach to rehabilitation."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Specialized Expertise",
      description: "Our team of highly qualified physiotherapists brings specialized knowledge in orthopedic rehabilitation, sports injury management, and neurological rehabilitation, providing comprehensive care across various specialties."
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Holistic Wellness",
      description: "Fizeo adopts a holistic approach to wellness, offering preventive programs, ergonomic consultations, and proactive strategies that go beyond immediate symptom relief, promoting long-term health benefits."
    },
    {
      icon: <User className="w-5 h-5" />,
      title: "Patient Empowerment",
      description: "We believe in empowering patients through education, providing resources and support that enable individuals to actively participate in their recovery and self-management."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Positive Outcomes",
      description: "The success stories of satisfied individuals stand as testimonials to the effectiveness of our services, reflecting positive outcomes, improved mobility, and life-changing experiences. Choose Fizeo for a track record of results and a commitment to your well-being."
    },
  ];

  return (
    <div className="w-full py-20 bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-8">
        <div className="flex flex-col lg:flex-row gap-10">

        

          {/* Left content section */}
          <div className="w-full lg:w-1/2">
            
            <h2 className="text-[#043A22] text-3xl md:text-5xl font-serif mb-9">
              Why Fizeo?
            </h2>
            <p className="text-[#043A22] text-xl mb-8">
              Fizeo stands out for its commitment to personalized and specialized
              physiotherapy, offering individualized care, expertise in various specialties,
              a holistic wellness approach, patient empowerment through education,
              positive testimonials, and a dedication to staying at the forefront of
              cutting-edge practices.
            </p>

            <Button className="bg-[#043A22] text-xl hover:bg-[#043A22]/90 text-white rounded-md font-medium px-6 py-2">
              About us
            </Button>

            <div className="mt-12">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/Dz29EjSxlyI8KYdSmdBXHIHfi0.jpg?scale-down-to=1024"
                  alt="Patient receiving physiotherapy treatment"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right features section */}
          <div className="w-full lg:w-1/2 min-h-[600px] flex flex-col justify-center">
  {features.map((feature, index) => (
    <FeatureCard
      key={index}
      icon={feature.icon}
      title={feature.title}
      description={feature.description}
    />
  ))}
</div>


          {/* Inserted SVG */}
          

        </div>
      </div>
    </div>
  );
};

export default WhyFizeo;
