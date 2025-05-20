import React from "react";

export default function HeroHeadline({ title, desc, properties }) {
  return (
    <>
      {/* Headline */}
      <div
        className={`h-full flex flex-col justify-end gap-y-24 max-tablet-s3:gap-y-14 max-mobile-s2:gap-y-8 ${properties} `}
      >
        <h1 className="heading text-7xl max-tablet-s3:text-5xl  max-w-5xl leading-20 max-tablet-s3:leading-16 max-mobile-s3:leading-10   text-drakbrown font-semibold heading">
          {title}.
        </h1>
        <p className="desc text-3xl max-tablet-s3:text-2xl ml-auto max-w-[565px] max-md:max-w-96 text-darkbrown font-medium desc">
          {desc}
        </p>
      </div>
    </>
  );
}
