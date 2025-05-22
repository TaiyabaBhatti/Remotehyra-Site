import React from "react";
import { FcAdvance } from "react-icons/fc";

export default function HighlightedCard({ title, desc = null, icon = null }) {
  return (
    <div
      className={`rounded-sm bg-white group flex flex-row items-start gap-x-8 px-3 py-5 shadow-md w-full  ${
        !icon
          ? "hover:translate-x-3.5 transition-transform duration-200 opacity-85"
          : ""
      }`}
    >
      {icon && (
        <FcAdvance className="text-purple-800 group-hover:scale-150 transition-transform duration-200 text-3xl" />
      )}

      <div>
        <h1
          className={`${
            !icon ? "first-letter:text-2xl text-base" : "text-lg"
          } font-semibold capitalize  max-md:text-base `}
        >
          {title}
        </h1>
        {desc && <p className="text-hoverGray">{desc}</p>}
      </div>
    </div>
  );
}
