import React from "react";
import BenefitCards from "./CardBox";
import CardBox from "./CardBox";

export default function BenefitCardCollection() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-t from-pink-500 to-violet-500  bg-clip-text  text-transparent">
          Key Benefits
        </h1>
      </div>

      <div className="flex flex-col gap-y-2">
        <CardBox text="Improved decision making with predictive analytics" />
        <CardBox text="Reduced operational costs through automation" />
        <CardBox text="Enhanced customer experience through personalization" />
        <CardBox text="Increased efficiency in business processes" />
        <CardBox text="Data-driven insights for strategic planning" />
      </div>
    </div>
  );
}
