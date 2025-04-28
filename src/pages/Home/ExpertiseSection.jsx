import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import Button from "../../components/ui/Button";
import ContentLayout from "./ContentLayout";
import sideImage from "../../assets/images/expertise_side_img.webp"
import ExpertiseCard from "./ExpertiseCard";


export default function ExpertiseSection() {
  return (
    <Wrapper properties="bg-black space-y-20">
        <div className="flex flex-row justify-center gap-5 items-center max-tablet-lg2:flex-col">
      <ContentLayout
        title="Our Expertise"
        subtitle="Leveraging cutting-edge AI technologies to deliver innovative solutions"
        classTitle="section-black"
      />

<div className=""><img src={sideImage} alt="" className="w-[570px] h-[479px] max-desktop-lg3:w-[470px] "/></div>

      </div>

{/* cards */}
    <div className="flex flex-row gap-10 flex-wrap ">
<ExpertiseCard title="Chat-Bots" subtitle="Intelligent conversational agents for customer engagement" fadeDelay="200"/>
<ExpertiseCard title="RAG Systems" subtitle="Retrieval Augmented Generation for enhanced AI responses" fadeDelay="300"/>
<ExpertiseCard title="AI Agents" subtitle="Autonomous AI agents for task automation" fadeDelay="400"/>
<ExpertiseCard title="Prompt Engineering" subtitle="Optimized prompts for maximum AI performance" fadeDelay="500"/>
<ExpertiseCard title="AI Automation" subtitle="Streamlined processes with intelligent automation" fadeDelay="600"/>
<ExpertiseCard title="LLMs" subtitle="Large Language Models for advanced text processing" fadeDelay="700"/>
    </div>


    </Wrapper>
  );
}
