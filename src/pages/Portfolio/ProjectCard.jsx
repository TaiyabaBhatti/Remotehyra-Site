import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, path, tag }) {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 to-violet-500 p-[1px] rounded-3xl  min-h-80">
        <div
          className="relative z-50 group flex flex-row gap-x-5 h-full  rounded-3xl  max-md:py-5 
   opacity-95 bg-darkbrown"
        >
          <div
            className="text-white z-50 w-full h-fit mt-auto relative flex flex-col gap-y-3 before:absolute before:bottom-0 before:left-0 before:w-full before:h-full   before:-z-10
          before:blur-xs
          before:backdrop-brightness-50 px-4 py-4 before:rounded-br-3xl before:rounded-bl-3xl"
          >
            <p className="text-sm">{tag}</p>
            <h1 className="text-lg font-semibold">{title}</h1>
            <Link
              to={path}
              className="border-[1px] rounded-2xl py-2 px-5 w-fit text-base flex gap-x-1 items-center transition-transform duration-300 hover:border-0 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500"
            >
              View case study
            </Link>
          </div>

          <img
            alt=""
            className="absolute top-0 left-0 rounded-3xl -z-10 h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
