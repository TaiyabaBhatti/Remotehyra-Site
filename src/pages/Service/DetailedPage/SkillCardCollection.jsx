import React from "react";
import SkillCard from "./SkillCard";

export default function SKillContainer({ dataList }) {
  return (
    <div className="flex justify-center gap-3 flex-wrap">
      {dataList &&
        dataList.map((content, index) => {
          return <SkillCard key={index} text={content} />;
        })}
    </div>
  );
}
