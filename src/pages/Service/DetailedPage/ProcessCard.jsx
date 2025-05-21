import React from "react";
import { FcAdvance } from "react-icons/fc";

export default function ProcessCard({ label, title, desc }) {
  return (
    <div className="group flex flex-row items-start gap-x-8 px-3 py-5 ">
      <FcAdvance className="text-purple-800 group-hover:scale-150 transition-transform duration-200 text-3xl" />

      <div>
        <h1 className="font-bold capitalize text-lg">{title}</h1>
        <p className="text-hoverGray">{desc}</p>
      </div>
    </div>
  );
}
