import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutImageGrid from "../components/about/AboutImageGrid";
import AboutTeam from "../components/about/AboutTeam";
import GetInTouch from "../components/GetInTouch";

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutStats />
      <AboutImageGrid />
      <AboutTeam />
      <GetInTouch />
    </div>
  );
};

export default page;
