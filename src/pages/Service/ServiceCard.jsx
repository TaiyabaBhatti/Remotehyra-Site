import React from "react";
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";

export default function ServiceProduct({ icon, title, desc, path }) {
  return (
    <div
      className="group flex flex-row gap-x-5  rounded-3xl px-4 py-8 
      opacity-75 bg-whiteshade hover:scale-105 transition-transform duration-300"
    >
      <div>{icon}</div>
      <div className="space-y-2">
        <h1 className="text-darkbrown font-bold text-lg capitalize">{title}</h1>
        <p className="text-darkbrown text-lg">{desc}</p>

        <Link
          to={path}
          className="text-blue-600 underline text-base flex gap-x-1 items-center"
        >
          <p>Learn more </p>

          <FcRight className="text-base h-fit group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}
