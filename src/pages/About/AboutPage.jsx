import React, { useEffect, useRef, useState } from "react";
import aboutHero from "../../assets/images/about-hero-bg.png";
import OurStrength from "./OurStrength";
import OurRanking from "./OurRanking";
import HeroContainer from "../Common/HeroContainer";

export default function AboutPage() {
  const sectionRef = useRef();
  const [scrollStatus, setScrollStatus] = useState(false);

  useEffect(() => {
    console.log(aboutHero);
    const scrollFunc = () => {
      const section = sectionRef.current;
      const sectionViewPortPara = section.getBoundingClientRect();
      const sectionTop = sectionViewPortPara.y;

      if (sectionTop < -60) {
        setScrollStatus(true);
      } else {
        setScrollStatus(false);
      }
      console.log("section top", section.offsetTop);
      console.log("section top", section.getBoundingClientRect().y);
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, [scrollStatus]);

  return (
    <>
      <section
        ref={sectionRef}
        className={`relative w-full  pt-12 max-md:pt-0 overflow-hidden bg-whiteshade -z-50 
        min-h-screen`}
      >
        <HeroContainer
          tagText="About Us"
          title="Human-centered AI, transforming ideas into
            digital reality"
          desc="We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value."
        />

        {/* Hero section bg effect */}
        <img
          src={aboutHero}
          alt=""
          className={`max-tablet-s3:hidden absolute bottom-24 -z-10 left-20 object-cover w-72 blur-xs transition-transform duration-1000 ease-out
            ${
              scrollStatus
                ? "translate-x-0-"
                : "-translate-x-[calc(100%+320px)]"
            }`}
        />
      </section>

      {/* Ranking cards */}
      <OurRanking />

      {/* Strength cards */}
      <OurStrength />
    </>
  );
}
