import React from "react";

export default function SolutionCards({ title, desc, properties,slideDelay,slideDir }) {
  return (
    <div data-aos="fade-up" data-aos-delay={slideDelay}
      className={` h-full w-full bg-white min-w-80 text-black shadow-2xl rounded-lg py-3 space-y-5 px-5 ${properties} relative before:absolute before:size-8 before:rounded-full max-md:py-8
      before:bg-linear-to-r
            before:from-[#BC01FF]
            before:to-[#46178f]
             before:opacity-65
              before:text-white before:left-0 before:-top-10  before:font-bold  before:flex before:items-center before:justify-center`}
    >
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-[18px] font-normal">{desc}</p>
    </div>
  );
}
