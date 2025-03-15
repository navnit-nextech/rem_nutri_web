import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import ServicesProcess from "../components/services/ServicesProcess";
import ServiceQueries from "../components/services/ServiceQueries";
import GetInTouch from "../components/GetInTouch";

const page = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesProcess />
      <ServiceQueries/>
      <GetInTouch />
    </div>
  );
};

export default page;
