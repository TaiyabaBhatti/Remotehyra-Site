import React from "react";
import { NavLink } from "react-router-dom";

export default function ServiceLink({ text, path = "", properties = "" }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        ` ${properties} text-base  font-bold max-tablet-lg2:font-semibold max-tablet-lg2:text-sm text-darkbrown w-fit  relative before:absolute before:bg-black before:h-0.5 before:w-0 hover:before:w-full hover:before:transition-all hover:before:duration-300 before:left-0 before:-bottom-1  ${
          isActive ? "before:w-full" : "before:w-0"
        }`
      }
    >
      {text}
    </NavLink>
  );
}
