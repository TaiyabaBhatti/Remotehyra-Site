import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function MenuItems({ text, path }) {
  return (
    <div className="flex justify-between items-center">
      <NavLink
        to={path}
        className={`relative  tracking-wide text-lg text-darkbrown font-semibold`}
      >
        {text}
      </NavLink>
      <MdArrowRightAlt className="font-extralight text-2xl" />
    </div>
  );
}
