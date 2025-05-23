import React from "react";

export default function ColoredBorderCard({ children }) {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-violet-500 p-[1px] rounded-3xl">
      <div className="px-7  w-full py-4  bg-darkbrown opacity-95 rounded-3xl flex flex-row gap-x-14 items-center justify-between max-sm:items-start max-sm:gap-x-5 max-mobile-s3:flex-col max-mobile-s3:gap-y-5">
        {children}
      </div>
    </div>
  );
}
