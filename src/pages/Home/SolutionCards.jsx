import React from "react";

export default function SolutionCards({
  title,
  desc,
  properties,
  slideDelay,
  slideDir,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={slideDelay}
      className={` h-full w-full bg-white min-w-80 max-mobile-s3:min-w-full text-black shadow-2xl rounded-lg py-5 space-y-1 px-5 ${properties} relative before:absolute before:size-8 before:max-mobile-s3:size-6 before:rounded-full max-md:py-8
      before:bg-linear-to-r
            before:from-[#BC01FF]
            before:to-[#46178f]
             before:opacity-65
              before:text-white before:left-0 before:-top-5  before:font-bold  before:flex before:items-center before:justify-center`}
    >
      <h1 className="sub-title font-semibold text-lg text-darkbrown">
        {title}
      </h1>
      <p className="sub-desc text-base font-normal text-hoverGray">{desc}</p>
    </div>
  );
}
