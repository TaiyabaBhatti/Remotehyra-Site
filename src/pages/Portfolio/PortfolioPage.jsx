import React from "react";
import HeroContainer from "../Common/HeroContainer";
import ProjectCard from "./ProjectCard";
import projects from "../../data/portfolioDetailedData";
import Wrapper from "../../components/ui/Wrapper";
import heroImage from "../../assets/images/portfolio-hero-img.webp";

export default function PortfolioPage() {
  return (
    <>
      <HeroContainer
        tagText="Portfolio"
        title="Human-centered AI, transforming ideas into
            digital reality"
        desc="We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value."
        image={heroImage}
      />

      {/* Projects case study cards */}
      <section className="relative bg-darkbrown py-12">
        <Wrapper>
          <div className="grid grid-cols-3 gap-y-10 gap-x-12 max-desktop-s4:grid-cols-2 max-tablet-s1:grid-cols-1 max-tablet-s1:justify-items-center max-tablet-s1:w-full">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  tag={project.tag}
                  title={project.title}
                  path={`/portfolio/case-study/${project.id}`}
                  thumbnail={project.thumbnail ? project.thumbnail : "false"}
                />
              );
            })}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
