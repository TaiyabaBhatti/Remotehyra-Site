import React from "react";

export default function HeroHeadline({ desc, properties, image }) {
  return (
    <>
      {/* Headline */}

      <div
        className={` flex justify-end pl-44 max-tablet-lg2:pl-20 max-md:pl-0 `}
      >
        <div className="flex  flex-row justify-between items-center   max-w-6xl bg-darkbrown rounded-l-[70px] max-md:rounded-none max-desktop-s5:h-96 max-tablet-lg2:h-auto h-[450px] max-mobile-s4:flex-col max-mobile-s4:w-full max-mobile-s4:bg-transparent">
          <img
            src={image}
            alt=""
            className=" object-cover w-1/2 max-md:w-1/3 h-[450px] max-desktop-s5:h-96   rounded-l-[70px] max-md:rounded-none max-md:h-56 max-mobile-s4:hidden"
          />

          <div className=" flex-1 max-md:w-2/3 max-mobile-s4:!w-full max-tablet-lg2:px-10  px-20 py-10 max-mobile-s4:px-5 max-mobile-s4:py-3">
            <p className=" desc text-3xl   text-white max-mobile-s4:text-darkbrown font-normal max-desktop-s5:text-2xl max-md:text-lg">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
