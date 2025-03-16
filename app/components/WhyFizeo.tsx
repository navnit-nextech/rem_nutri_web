import React from "react";
import { Heart, Target, Leaf, User } from "lucide-react";
import { Button } from "../components/ui/button";
import ScrollAnimation from "./ScrollAnimation";

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
    <div className="bg-[var(--background-color-plain)] sm:w-[575px] sm:h-[220px] border border-[#ebe5da] p-8 rounded-2xl flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-[var(--text-color-dark)] text-[22px]">{icon}</span>
          <h3 className="text-[var(--text-color-dark)] text-[22px] font-bold font-['Libre_Baskerville']">
            {title}
          </h3>
        </div>
        <p className="text-[var(--text-color-dark)] text-[16px] font-light leading-relaxed mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

const Topdecorative = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="fill-[#8FC2AA] w-full h-full"
  >
    <path d="M 48.292 12.972 L 35.025 0.157 L 21.758 12.972 L 0.186 25.348 L 10.29 45.126 L 13.433 65.918 L 35.025 63.539 L 56.617 65.918 L 59.76 45.126 L 69.864 25.348 Z"></path>
  </svg>
);

const Customcare = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-6 h-6 text-[#043A22] fill-current"
  >
    <path d="M 223 57 a 58.1 58.1 0 0 0 -82 -0.06 L 128 69.47 L 115 56.91 a 58 58 0 0 0 -82 82.05 l 89.37 90.66 a 8 8 0 0 0 11.4 0 L 223 139 A 58.09 58.09 0 0 0 223 57 Z m -11.36 70.76 L 128 212.6 L 44.29 127.68 a 42 42 0 1 1 59.41 -59.4 l 0.1 0.1 l 12.67 12.19 l -10 9.65 a 8 8 0 0 0 -0.11 11.42 L 132.69 128 l -10.35 10.35 a 8 8 0 0 0 11.32 11.32 l 16 -16 a 8 8 0 0 0 0 -11.31 L 123.42 96.09 L 152.2 68.38 l 0.11 -0.1 a 42 42 0 1 1 59.37 59.44 Z"></path>
  </svg>
);

const Customexpertise = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-6 h-6 text-[#043A22] fill-current"
  >
    <path d="M 238.64 33.36 a 32 32 0 0 0 -45.26 0 h 0 a 32 32 0 0 0 0 45.26 c 0.29 0.29 0.6 0.57 0.9 0.85 l -26.63 49.46 a 32.19 32.19 0 0 0 -23.9 3.5 l -20.18 -20.18 a 32 32 0 0 0 -50.2 -38.89 h 0 a 32 32 0 0 0 0 45.26 c 0.29 0.29 0.59 0.57 0.89 0.85 L 47.63 168.94 a 32 32 0 0 0 -30.27 8.44 h 0 a 32 32 0 1 0 45.26 0 c -0.29 -0.29 -0.6 -0.57 -0.9 -0.85 l 26.63 -49.46 A 32.4 32.4 0 0 0 96 128 a 32 32 0 0 0 16.25 -4.41 l 20.18 20.18 a 32 32 0 1 0 50.2 -6.38 c -0.29 -0.29 -0.59 -0.57 -0.89 -0.85 l 26.63 -49.46 A 32.33 32.33 0 0 0 216 88 a 32 32 0 0 0 22.63 -54.62 Z M 51.3 211.33 a 16 16 0 0 1 -22.63 -22.64 h 0 A 16 16 0 1 1 51.3 211.33 Z m 33.38 -104 a 16 16 0 0 1 0 -22.63 h 0 a 16 16 0 1 1 0 22.63 Z m 86.64 64 a 16 16 0 0 1 -22.63 -22.63 h 0 a 16 16 0 0 1 22.63 22.63 Z m 56 -104 A 16 16 0 1 1 204.7 44.67 h 0 a 16 16 0 0 1 22.63 22.64 Z"></path>
  </svg>
);

const Customwellness = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-6 h-6 text-[#043A22] fill-current"
  >
    <path d="M 164 80 a 28 28 0 1 0 -28 -28 A 28 28 0 0 0 164 80 Z m 0 -40 a 12 12 0 1 1 -12 12 A 12 12 0 0 1 164 40 Z m 90.88 155.92 l -54.56 -92.08 A 15.87 15.87 0 0 0 186.55 96 h 0 a 15.85 15.85 0 0 0 -13.76 7.84 L 146.63 148 l -44.84 -76.1 a 16 16 0 0 0 -27.58 0 L 1.11 195.94 A 8 8 0 0 0 8 208 H 248 a 8 8 0 0 0 6.88 -12.08 Z M 88 80 l 23.57 40 H 64.43 Z M 22 192 l 33 -56 h 66 l 18.74 31.8 l 0 0 L 154 192 Z m 150.57 0 l -16.66 -28.28 L 186.55 112 L 234 192 Z"></path>
  </svg>
);

const Custompatient = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-6 h-6 text-[#043A22] fill-current"
  >
    <path d="M 187.14 114.84 l 26.78 -29.46 a 8 8 0 0 0 -11.84 -10.76 l -20.55 22.6 l -17.2 -54.07 A 15.94 15.94 0 0 0 149.08 32 H 106.91 A 15.94 15.94 0 0 0 91.66 43.15 l -50.91 160 A 16 16 0 0 0 56 224 H 200 a 16 16 0 0 0 15.25 -20.85 Z M 184.72 160 H 146.08 l 28.62 -31.48 Z M 106.91 48 h 42.17 l 20 62.9 L 124.46 160 H 71.27 Z M 56 208 l 10.18 -32 H 189.81 L 200 208 Z"></path>
  </svg>
);

const Custompositive = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className="w-6 h-6 text-[#043A22] fill-current"
  >
    <path d="M 223.45 40.07 a 8 8 0 0 0 -7.52 -7.52 C 139.8 28.08 78.82 51 52.82 94 a 87.09 87.09 0 0 0 -12.76 49 c 0.57 15.92 5.21 32 13.79 47.85 l -19.51 19.5 a 8 8 0 0 0 11.32 11.32 l 19.5 -19.51 C 81 210.73 97.09 215.37 113 215.94 q 1.67 0.06 3.33 0.06 A 86.93 86.93 0 0 0 162 203.18 C 205 177.18 227.93 116.21 223.45 40.07 Z M 153.75 189.5 c -22.75 13.78 -49.68 14 -76.71 0.77 l 88.63 -88.62 a 8 8 0 0 0 -11.32 -11.32 L 65.73 179 c -13.19 -27 -13 -54 0.77 -76.71 c 22.09 -36.47 74.6 -56.44 141.31 -54.06 C 210.2 114.89 190.22 167.41 153.75 189.5 Z"></path>
  </svg>
);

const WhyFizeo = () => {
  const features = [
    {
      icon: <Customcare />,
      title: "Personalized Care",
      description:
        "Fizeo is dedicated to tailoring physiotherapy treatments to the unique needs of each individual, ensuring a personalized and effective approach to rehabilitation.",
    },
    {
      icon: <Customexpertise />,
      title: "Specialized Expertise",
      description:
        "Our team of highly qualified physiotherapists brings specialized knowledge in orthopedic rehabilitation, sports injury management, and neurological rehabilitation, providing comprehensive care across various specialties.",
    },
    {
      icon: <Customwellness />,
      title: "Holistic Wellness",
      description:
        "Fizeo adopts a holistic approach to wellness, offering preventive programs, ergonomic consultations, and proactive strategies that go beyond immediate symptom relief, promoting long-term health benefits.",
    },
    {
      icon: <Custompatient />,
      title: "Patient Empowerment",
      description:
        "We believe in empowering patients through education, providing resources and support that enable individuals to actively participate in their recovery and self-management.",
    },
    {
      icon: <Custompositive />,
      title: "Positive Outcomes",
      description:
        "The success stories of satisfied individuals stand as testimonials to the effectiveness of our services, reflecting positive outcomes, improved mobility, and life-changing experiences. Choose Fizeo for a track record of results and a commitment to your well-being.",
    },
  ];

  return (
    <>
      <div className="w-full bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute  max-sm:w-[70px] max-sm:h-[70px] w-[100px] left-[45%] -top-8 ">
          <Topdecorative />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 ">
          <div className="relative flex flex-col lg:flex-row gap-16">
            {/* Left content section */}
            <div className="w-full lg:w-1/2 pt-10">
              <ScrollAnimation>
                <h2 className="text-[var(--text-color-dark)] text-3xl  font-['Libre_Baskerville',serif] text-[40px] mb-9">
                  Why Fizeo?
                </h2>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <p className="text-[var(--text-color-dark)] text-[20px] mb-8 font-['DM_Sans', 'sans-serif']">
                  Fizeo stands out for its commitment to personalized and
                  <span className="hidden md:block"></span> specialized
                  physiotherapy, offering individualized care,
                  <span className="hidden md:block"></span> expertise in various
                  specialties, a holistic wellness approach,
                  <span className="hidden md:block"></span> patient empowerment
                  through education, positive{" "}
                  <span className="hidden md:block"></span>testimonials, and a
                  dedication to staying at the forefront of
                  <span className="hidden md:block"></span>
                  cutting-edge practices.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <Button className="bg-[var(--background-color-dark)] font-['DM_Sans','sans-serif'] font-semibold text-xl hover:bg-[#043A22]/90 text-[var(--text-color-plain)] rounded text-[16px] px-6 py-6">
                  About us
                </Button>
              </ScrollAnimation>

              <ScrollAnimation delay={0.6}>
                <div className="relative mt-12">
                  {/* Shadow Effects */}
                  <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#8FC2AA] rounded-2xl"></div>

                  {/* Image */}
                  <div className="rounded-2xl overflow-hidden relative z-10">
                    <img
                      src="https://framerusercontent.com/images/Dz29EjSxlyI8KYdSmdBXHIHfi0.jpg?scale-down-to=1024"
                      alt="Patient receiving physiotherapy treatment"
                      className="w-full h-175 object-cover"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right features section */}
            <div className="w-full lg:w-1/2 min-h-[900px] flex flex-col mt-10 justify-center gap-y-6">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} delay={0.2 * (index + 1)}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyFizeo;
