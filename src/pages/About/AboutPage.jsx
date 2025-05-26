import React, { useEffect, useRef, useState } from "react";
import aboutHero from "../../assets/images/about-hero-bg.png";
import OurStrength from "./OurStrength";
import OurRanking from "./OurRanking";
import HeroContainer from "../Common/HeroContainer";

export default function AboutPage() {
  return (
    <>
      <HeroContainer
        tagText="About Us"
        title="Human-centered AI, transforming ideas into
            digital reality"
        desc="We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value."
        animateElement={aboutHero}
      />

      {/* Ranking cards */}
      <OurRanking />

      {/* Strength cards */}
      <OurStrength />
    </>
  );
}
