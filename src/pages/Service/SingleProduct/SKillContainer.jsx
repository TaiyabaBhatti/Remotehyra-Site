import React from "react";
import SkillCard from "./SkillCard";

export default function SKillContainer() {
  return (
    <div className="flex justify-center gap-3 flex-wrap">
      <SkillCard text="TensorFlow" />
      <SkillCard text="PyTorch" />
      <SkillCard text="Scikit-learn" />
      <SkillCard text="Python" />
      <SkillCard text="AWS SageMaker" />
      <SkillCard text="Azure ML" />
    </div>
  );
}
