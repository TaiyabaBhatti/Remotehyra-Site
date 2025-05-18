import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../../components/ui/Wrapper";
import HeroHeadline from "./Headline";
import RankingCard from "./RankingCard";
import PageTag from "./PageTag";
import aboutHero from "../../assets/images/about-hero-bg.png";
import Headline from "../../components/ui/Headline";

import static1 from "../../assets/lottie/about-card-1.png";
import static2 from "../../assets/lottie/about-card-2.png";
import static3 from "../../assets/lottie/about-card-3.png";
import static4 from "../../assets/lottie/about-card-4.png";
import OurStrength from "./OurStrength";

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
        className={`relative w-full min-h-[calc(100vh-30px)]  pt-12 overflow-hidden bg-whiteshade -z-50
         
        `}
      >
        <Wrapper properties="max-w-6xl z-50  m-auto">
          <PageTag text="About Us" />
          <HeroHeadline
            title="Human-centered AI, transforming ideas into
            digital reality"
            subtitle="We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value."
          />
        </Wrapper>

        <img
          src={aboutHero}
          alt=""
          className={`absolute bottom-24 -z-10 left-20 object-cover w-72 blur-xs transition-transform duration-1000 ease-out
            ${
              scrollStatus
                ? "translate-x-0-"
                : "-translate-x-[calc(100%+320px)]"
            }`}
        />
      </section>

      <section className="bg-darkbrown">
        <Wrapper properties="max-w-6xl m-auto max-desktop-s4:max-w-4xl">
          <Headline
            title="Leading the market with unmatched results"
            classTitle="section-black"
          />
          <div className="flex flex-row flex-wrap  gap-y-5 items-center  justify-center gap-x-5">
            <RankingCard title="Project Taken" numeric="100+" icon={static1} />
            <RankingCard title="Happy Clients" numeric="98%" icon={static4} />
            <RankingCard title="Team Members" numeric="25+" icon={static2} />
            <RankingCard title="Experience" numeric="5+" icon={static3} />
          </div>
        </Wrapper>
      </section>

      <OurStrength />
    </>
  );
}
