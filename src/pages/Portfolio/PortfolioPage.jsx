import React from "react";
import HeroContainer from "../Common/HeroContainer";
import ProjectCard from "./ProjectCard";
import projects from "../../data/portfolioDetailedData";
import Wrapper from "../../components/ui/Wrapper";

export default function PortfolioPage() {
  return (
    <>
      <section
        className={`relative w-full  pt-12 max-md:pt-0 bg-whiteshade -z-50 
        min-h-screen`}
      >
        <HeroContainer
          tagText="Portfolio"
          title="Human-centered AI, transforming ideas into
            digital reality"
          desc="We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value."
        />

        {/* Hero section bg effect */}
        {/* <img
          src={aboutHero}
          alt=""
          className={`max-tablet-s3:hidden absolute bottom-24 -z-10 left-20 object-cover w-72 blur-xs transition-transform duration-1000 ease-out
            ${
              scrollStatus
                ? "translate-x-0-"
                : "-translate-x-[calc(100%+320px)]"
            }`}
        /> */}
      </section>

      {/* Projects case study cards */}
      <section className="relative bg-darkbrown">
        <Wrapper>
          <div className="grid grid-cols-3 gap-y-10 gap-x-12 max-desktop-s4:grid-cols-2 max-xsm:grid-cols-1 max-xsm:justify-items-center">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  tag={project.tag}
                  title={project.title}
                  path={`/portfolio/case-study/${project.id}`}
                />
              );
            })}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
