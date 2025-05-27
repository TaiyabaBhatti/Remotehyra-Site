import React from "react";

export default function InputBlock({ labeltext, inputType }) {
  return (
    <div
      tabIndex={0}
      className="pt-3 pb-2 group space-y-2 relative 
    before:absolute before:left-0 before:bottom-0  before:w-full before:h-0 before:z-50  focus-within:before:h-0.5 focus-within:pt-0.5 transition-all duration-300 ease-out before:bg-linear-to-r before:from-violet-500 before:to-darkbrown border-b-[1px] border-b-gray-700 focus-within:border-b-0 w-full"
    >
      <label className=" text-base group-focus-within:text-sm font-medium text-gray-400  transition-all capitalize max-mobile-s3:text-sm max-mobile-s3:group-focus-within:text-xsm">
        {labeltext}
      </label>
      <input
        required=""
        className="relative  group-focus-within:block w-full hidden outline-none transition-all text-gray-400 border-0"
        type={inputType}
      />
    </div>
  );
}
