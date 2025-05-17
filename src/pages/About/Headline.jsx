import React from "react";

export default function Headline({ title, subtitle, properties }) {
  return (
    <div className={` mb-20 space-y-3.5 ${properties} `}>
      <h1 className="text-6xl max-w-3xl leading-20   text-drakbrown font-bold heading">
        {title}
      </h1>
      <p className="text-3xl ml-auto max-w-[465px] text-darkbrown font-medium desc">
        {subtitle}
      </p>
    </div>
  );
}
