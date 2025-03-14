import React from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

const TherapeuticExcellence = () => {
  return (
    <div className="w-full py-20 bg-[url('/images/new_hero_bg.png')] bg-cover bg-center bg-no-repeat relative">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col items-center text-center relative">
        {/* Positioned SVG */}
        <div className="relative md:absolute top-2 left-2 md:top-[-10%] md:left-[10%] hidden sm:block">
          <svg
            viewBox="0 0 59 59"
            className="w-24 h-24 scale-75 md:w-32 md:h-32 md:scale-100 rotate-180"
          >
            <path
              d="M 44.177 0 L 0.147 0 L 0.147 44.25 L 14.823 59 L 14.823 14.75 L 58.853 14.75 Z M 58.853 48.695 L 58.853 29.5 L 39.754 29.5 Z M 29.5 59 L 48.351 59 L 29.5 40.055 Z"
              fill="rgb(242, 225, 211)"
            />
          </svg>
        </div>

        <ScrollAnimation>
          <h2 className="text-[#024027] text-[40px]  mb-5 max-w-2xl mt-8 font-['Libre_Baskerville',serif]">
            Therapeutic excellence <br /> tailored for you.
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <p className="text-[#024027] text-[20px]  font-['DM_Sans', 'sans-serif'] max-w-4xl mx-auto mb-12 leading-relaxed">
            At Fizeo, we offer a diverse range of services meticulously designed
            to
            <span className="hidden md:block"></span> cater to your unique
            needs. Whether you're recovering from an injury,{" "}
            <span className="hidden md:block"></span> seeking relief from pain,
            or aiming to optimize your physical well-being,{" "}
            <span className="hidden md:block"></span> our team of dedicated
            professionals is committed to providing therapeutic{" "}
            <span className="hidden md:block"></span>excellence.
          </p>
        </ScrollAnimation>

        <Link href="/services">
          <Button className="bg-[#76FB91] font-['DM_Sans', 'sans-serif'] text-[16px] hover:bg-[rgb(111,233,132)] text-[#043A22] !font-bold rounded-md px-6 py-6">
            Our services
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TherapeuticExcellence;
