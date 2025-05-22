import React from "react";
import HighlightedCard from "./HighlightedCard";

export default function BenefitCardCollection({ dataList }) {
  return (
    <div className="space-y-10 max-md:min-w-72">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-t from-pink-500 to-violet-500  bg-clip-text  text-transparent ">
          Key Benefits
        </h1>
      </div>

      <div className="flex flex-col  gap-y-2">
        {dataList &&
          dataList.map((content, index) => {
            return <HighlightedCard key={index} title={content} />;
          })}
      </div>
    </div>
  );
}
