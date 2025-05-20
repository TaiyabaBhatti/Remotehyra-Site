import React from "react";

export default function StrengthCard({ title, desc }) {
  return (
    <div className="relative cursor-auto hover:translate-x-7 transition-transform duration-300 ease-out bg-gradient-to-t from-pink-500 to-violet-500 w-fit pl-1 rounded-r-md">
      <div className="bg-white px-5 py-3  space-y-0.5 w-fit  h-full rounded-r-md">
        <h4 className="text-2xl max-tablet-lg1:text-xlg max-mobile-s2:text-lg font-semibold text-darkbrown">
          {title}
        </h4>
        <p className="text-hoverGray max-tablet-lg1:text-sm">{desc}</p>
      </div>
    </div>
  );
}
