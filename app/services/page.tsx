import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import ServicesProcess from "../components/services/ServicesProcess";
import GetInTouch from "../components/GetInTouch";

const page = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesProcess />
      <GetInTouch />
    </div>
  );
};

export default page;
