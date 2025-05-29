import React from "react";
import { NavLink } from "react-router-dom";

export default function PolicyLink({ text, path = "", properties = "" }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        ` ${properties}   relative font-semibold text-[13px] text-gray-500 before:absolute before:bg-gray-500 before:h-0.5 before:w-0 hover:before:w-full hover:before:transition-all hover:before:duration-300 before:left-0 before:-bottom-1  ${
          isActive ? "before:w-full" : "before:w-0"
        }`
      }
    >
      {text}
    </NavLink>
  );
}
