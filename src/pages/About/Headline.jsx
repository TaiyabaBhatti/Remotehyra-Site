import React from "react";

export default function Headline({ title, subtitle, properties }) {
  return (
    <div className={`h-full flex flex-col justify-end gap-y-24 ${properties} `}>
      <h1 className="text-7xl max-w-5xl leading-20   text-drakbrown font-semibold heading">
        {title}
      </h1>
      <p className="text-3xl ml-auto max-w-[565px] text-darkbrown font-medium desc">
        {subtitle}
      </p>
    </div>
  );
}
