import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import Button from "../../components/ui/Button";
import ContentLayout from "./ContentLayout";
import sideImage from "../../assets/images/home-side-img.webp";
import ExpertiseCard from "./ExpertiseCard";

export default function ExpertiseSection() {
  return (
    <section className="bg-darkbrown pt-24">
      <Wrapper>
        <div className=" space-y-20 max-w-6xl max-desktop-s4:max-w-3xl m-auto">
          <div className="flex flex-row justify-between gap-10 items-center max-desktop-s4:flex-col">
            <ContentLayout
              title="Our Expertise in smart and scalable AI support."
              subtitle="Leveraging cutting-edge AI technologies to deliver innovative solutions. Utilizing a Large Language Model (LLM) and the use generative AI to recommend and optimize customer service workflows"
              classTitle="section-black"
              animation="fade-up"
            />

            <img
              loading="lazy"
              src={sideImage}
              // data-aos="zoom-in"
              alt="Decorative image for visual appealing"
              className="h-[440px] object-cover  max-desktop-s4:w-full max-desktop-s4:h-60 rounded-2xl "
            />
          </div>

          {/* cards */}
          <div className="flex flex-row gap-10 flex-wrap ">
            <ExpertiseCard
              title="Chat-Bots"
              subtitle="Intelligent conversational agents for customer engagement"
            />
            <ExpertiseCard
              title="RAG Systems"
              subtitle="Retrieval Augmented Generation for enhanced AI responses"
              fadeDelay="200"
            />
            <ExpertiseCard
              title="AI Agents"
              subtitle="Autonomous AI agents for task automation"
              fadeDelay="300"
            />
            <ExpertiseCard
              title="Prompt Engineering"
              subtitle="Optimized prompts for maximum AI performance"
              fadeDelay="400"
            />
            <ExpertiseCard
              title="AI Automation"
              subtitle="Streamlined processes with intelligent automation"
              fadeDelay="500"
            />
            <ExpertiseCard
              title="LLMs"
              subtitle="Large Language Models for advanced text processing"
              fadeDelay="600"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
