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
        titleColor="text-white" 
        properties="flex-1"
      />

<div className=""><img src={sideImage} alt="" className="w-[570px] h-[479px] max-desktop-lg3:w-[470px] "/></div>

      </div>

{/* cards */}
    <div className="flex flex-row gap-10 flex-wrap ">

<ExpertiseCard title="Chat-Bots" subtitle="Intelligent conversational agents for customer engagement"/>
<ExpertiseCard title="RAG Systems" subtitle="Retrieval Augmented Generation for enhanced AI responses"/>
<ExpertiseCard title="AI Agents" subtitle="Autonomous AI agents for task automation"/>
<ExpertiseCard title="Prompt Engineering" subtitle="Optimized prompts for maximum AI performance"/>
<ExpertiseCard title="AI Automation" subtitle="Streamlined processes with intelligent automation"/>
<ExpertiseCard title="LLMs" subtitle="Large Language Models for advanced text processing"/>

    </div>


    </Wrapper>
  );
}
