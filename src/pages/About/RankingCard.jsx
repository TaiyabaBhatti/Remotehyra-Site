import React from "react";

export default function RankingCard({ title, numeric, desc }) {
  return (
    <div className="px-7 py-6 min-w-80 space-y-5 bg-white rounded-2xl">
      <h6 className="text-base font-medium text-hoverGray">{title}</h6>
      <h1 className="text-4xl text-darkbrown font-bold">{numeric}</h1>
      {/* <p className="text-xlg">{desc}</p> */}
    </div>
  );
}
