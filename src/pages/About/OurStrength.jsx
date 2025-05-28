import React from "react";
import SideImage from "../../assets/images/about-side-img.jpg";
import Wrapper from "../../components/ui/Wrapper";
import StrengthCard from "./StrengthCard";

export default function OurStrength() {
  return (
    <section className="min-h-screen shadow-2xs">
      <Wrapper>
        <div className="flex flex-row items-center justify-between gap-x-5 gap-y-14 max-md:flex-col-reverse max-md:items-start">
          <div className="flex-1 grid gap-y-4 md:grid-cols-1 grid-cols-2 max-mobile-s1:grid-cols-1">
            <StrengthCard
              title="Innovation"
              desc="Pushing boundaries with cutting-edge solutions"
            />
            <StrengthCard
              title="Excellence"
              desc="Delivering exceptional quality in every project"
            />
            <StrengthCard
              title="Collaboration"
              desc="Working together to achieve greater results"
            />
            <StrengthCard
              title="Growth"
              desc="Continuous learning and improvement"
            />
          </div>
          <div className="max-md:w-full">
            <img
              loading="lazy"
              src={SideImage}
              alt="Business people working and talking about strengths of company"
              className="w-96 max-tablet-lg1:w-80 object-cover rounded-3xl max-md:w-full max-md:h-56"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
