import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, path, tag, thumbnail }) {
  return (
    <>
      <div className="bg-gradient-to-r from-pink-500 to-violet-500 p-[1px] rounded-3xl  min-h-80   max-tablet-s1:w-[460px] max-xsm:w-full">
        <div
          className="relative group flex flex-row gap-x-5 h-full  rounded-3xl   
   opacity-95 bg-darkbrown"
        >
          <div
            className="text-white  z-50 w-full h-fit mt-auto relative flex flex-col gap-y-3 before:absolute before:bottom-0 before:left-0 before:w-full before:h-full   before:-z-10
          before:blur-xs
          before:backdrop-brightness-50 px-4 py-4 before:rounded-br-3xl before:rounded-bl-3xl"
          >
            <p className="text-sm max-sm:text-xsm">{tag}</p>
            <h1 className="text-lg max-sm:text-base font-semibold">{title}</h1>
            <Link
              to={path}
              className="border-[1px] rounded-2xl py-2 px-5 w-fit text-base max-sm:text-sm flex gap-x-1 items-center transition-transform duration-300 hover:border-0 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500"
            >
              View case study
            </Link>
          </div>

          <img
            src={thumbnail}
            className="absolute top-0 left-0 rounded-t-3xl h-fit -z-10 object-fill   max-tablet-s1:rounded-3xl w-full "
          />
        </div>
      </div>
    </>
  );
}
