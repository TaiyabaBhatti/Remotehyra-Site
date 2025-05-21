import React from "react";
import { FcAdvance } from "react-icons/fc";

export default function HighlightedCard({ title, desc = null }) {
  return (
    <div className="px-3 py-7 rounded-tr-2xl  group flex flex-row items-start gap-x-3 bg-gradient-to-tr from-pink-50 to-violet-200 hover:scale-105 transition-transform duration-200 hover:shadow">
      {/* <FcAdvance className="text-purple-800 group-hover:scale-150 transition-transform duration-200" /> */}

      <div>
        <h1 className="first-letter:text-2xl first-letter:mr-0.5  font-semibold capitalize text-base">
          {title}
        </h1>
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );
}
