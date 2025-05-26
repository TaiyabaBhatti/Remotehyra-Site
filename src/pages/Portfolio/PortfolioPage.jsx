import React from "react";
import HeroContainer from "../Common/HeroContainer";
import ProjectCard from "./ProjectCard";
import projects from "../../data/portfolioDetailedData";
import Wrapper from "../../components/ui/Wrapper";

export default function PortfolioPage() {
  return (
    <>
      <HeroContainer
        tagText="Portfolio"
        title="Human-centered AI, transforming ideas into
            digital reality"
        desc="We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value."
      />

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
