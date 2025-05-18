import React from "react";

export default function Headline({ title, subtitle, properties, classTitle }) {
  return (
    <div
      className={`max-w-2xl m-auto text-center mb-10 space-y-3.5 ${properties} ${classTitle} `}
    >
      <h1 className="text-5xl  text-darkbrown font-bold heading">{title}</h1>
      <p className="text-lg text-hoverGray font-semibold desc">{subtitle}</p>
    </div>
  );
}
