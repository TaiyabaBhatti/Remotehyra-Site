import React from "react";
import { Link } from "react-router-dom";

export default function Button({ properties = "", text, path = null }) {
  return (
    <>
      {path ? (
        <Link
          to={path}
          className={`${properties} rounded-4xl relative
                capitalize cursor-pointer hover:duration-200 text-base font-semibold px-8 py-3`}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`${properties} rounded-4xl relative
                capitalize cursor-pointer hover:duration-200 text-base font-semibold px-8 py-3`}
        >
          {text}
        </button>
      )}
    </>
  );
}
