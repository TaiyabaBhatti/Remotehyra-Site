import React from "react";

export default function RankingCard({ title, numeric, icon }) {
  return (
    <div className="min-w-60 max-w-96  bg-gradient-to-r from-pink-500 to-violet-500 p-[1px] rounded-3xl">
      <div className="px-7  w-full py-6 space-y-5 bg-darkbrown rounded-3xl">
        <h6 className="text-base font-medium text-paratextColor">{title}</h6>
        <h1 className="text-4xl lg:text-5xl max-md:text-3xl text-white font-bold">
          {numeric}
        </h1>

        <img
          loading="lazy"
          src={icon}
          alt={`ranking analysis of ${title}`}
          className="h-20 max-md:h-14 object-cover mt-10"
        />
      </div>
    </div>
  );
}
