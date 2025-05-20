import React from "react";
import { FcAdvance } from "react-icons/fc";

export default function ProcessCard({ label, title, desc }) {
  return (
    <div className="group flex flex-row items-start gap-x-8 px-3 py-5 bg-gradient-to-bl from-sky-50 to-blue-200 rounded-2xl">
      <FcAdvance className="text-purple-800 group-hover:scale-150 transition-transform duration-200" />

      <div>
        <h1 className="font-bold capitalize text-lg">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
