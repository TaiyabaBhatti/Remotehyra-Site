import React from "react";

export default function HeroHeadline({
  title,
  desc,
  properties,
  icon = false,
}) {
  return (
    <>
      {/* Headline */}
      <div
        className={`h-full flex flex-col justify-end gap-y-24 max-tablet-s3:gap-y-14 max-mobile-s2:gap-y-8 ${properties} `}
      >
        <h1 className="capitalize heading text-7xl max-tablet-s3:text-5xl  max-w-5xl leading-20 max-tablet-s3:leading-16 max-mobile-s3:leading-10   text-drakbrown font-semibold heading">
          {title}.
        </h1>

        {icon ? (
          <div className="flex flex-row justify-between items-center gap-x-10 max-sm:flex-col-reverse max-sm:items-start max-sm:gap-y-12 ">
            <div className="service-page-icon max-sm:m-auto">{icon}</div>
            <p className="flex-1 desc text-3xl max-tablet-s3:text-2xl  max-w-[565px]  text-darkbrown font-medium ">
              {desc}
            </p>
          </div>
        ) : (
          <p className="flex-1 desc text-3xl max-tablet-s3:text-2xl  max-w-[565px] ml-auto text-darkbrown font-medium desc max-md:ml-0 max-md:w-full">
            {desc}
          </p>
        )}
      </div>
    </>
  );
}
