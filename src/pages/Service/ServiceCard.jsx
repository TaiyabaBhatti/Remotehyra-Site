import React from "react";
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";

export default function ServiceCard({ icon, title, desc, path }) {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gradient-to-r from-pink-500 to-violet-500 p-[1px] rounded-3xl hover:scale-105 transition-transform duration-300"
    >
      <div
        className="group flex flex-row gap-x-5 h-full  rounded-3xl px-4 py-8 max-md:py-5 
   opacity-95 bg-darkbrown"
      >
        <div>{icon}</div>
        <div className="space-y-2">
          <h1 className="text-white font-bold text-lg max-sm:text-base capitalize">
            {title}
          </h1>
          <p className="text-white text-lg max-sm:text-base">{desc}</p>

          <Link
            to={path}
            className="text-blue-400 underline text-base flex gap-x-1 items-center"
          >
            <p>Learn more </p>

            <FcRight className="text-base h-fit group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
