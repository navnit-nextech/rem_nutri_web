import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import Servicelist from "../components/services/servicelist";
import ServicesProcess from "../components/services/ServicesProcess";
import ServiceQueries from "../components/services/ServiceQueries";
import GetInTouch from "../components/GetInTouch";

const page = () => {
  return (
    <div>
      <ServicesHero />
      {/* <Servicelist/> */}
      <ServicesProcess />
      <ServiceQueries/>
      <GetInTouch />
    </div>
  );
};

export default page;
