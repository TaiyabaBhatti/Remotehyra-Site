import React from "react";
import Button from "../../components/ui/Button";
import bgPattern from "../../assets/images/bg-pattern-10.png";
import rightPattern from "../../assets/images/right-pattern-2.png";

export default function SectionContent({
  title,
  subtitle,
  src,
  btnText,
  btnDecor,
  classTitle,
  uniqueTitle,
  bgColor,
}) {
  return (
    <div
      className={`${classTitle} relative overflow-hidden  ${bgColor} 
    `}
    >
      <div
        className="flex max-w-7xl ml-auto max-desktop-s4:max-w-5xl gap-x-5  items-center justify-end max-tablet-lg2:flex-col max-tablet-lg2:items-start 
    max-tablet-lg2:m-auto
    max-tablet-lg2:max-w-4xl
     max-tablet-lg2:mt-10"
      >
        <div
          data-aos="zoom-in"
          className={`same-spacing flex   mt-8 flex-col items-start pl-10 max-tablet-lg2:pl-7 gap-y-10 max-w-[625px] max-tablet-lg2:max-w-full `}
        >
          <h1 className="text-5xl  text-darkbrown font-bold heading">
            {title}
          </h1>
          <p className="desc text-[20px] font-semibold">{subtitle}</p>
          <Button text={btnText} btnDecor={btnDecor} properties={btnDecor} />
        </div>

        <div className={`relative w-full`}>
          {uniqueTitle === "hero" ? (
            <img
              src={src}
              alt=""
              className="max-h-[550px] min-h-[500px] ml-auto relative w-2xl object-cover max-tablet-lg2:rotate-30   max-tablet-lg2:w-full max-sm:min-h-36
  "
            />
          ) : (
            <>
              <img
                src={src}
                data-aos="fade-left"
                alt=""
                className="w-2xl object-cover max-h-[550px] min-h-[500px] max-md:size-96 max-mobile-s2:min-h-96  ml-auto "
              />

              <img
                src={rightPattern}
                alt=""
                className="hidden max-tablet-lg2:block absolute top-0 left-0  size-80 max-md:size-64  max-md:mt-20 opacity-50 object-cover max-mobile-s2:-left-24 max-mobile-s3:hidden"
              />
            </>
          )}
        </div>
      </div>

      <img
        loading="lazy"
        src={bgPattern}
        alt="Decorative vector images for visual appealing"
        className="absolute  -bottom-20 max-w-2xl    left-0  -z-20 max-tablet-lg2:hidden"
      />
    </div>
  );
}
