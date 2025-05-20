import React from "react";

export default function SkillCard({ text }) {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-violet-500 p-[1px] rounded-3xl">
      <div className="px-7  w-full py-4  bg-darkbrown rounded-3xl">
        <h1 className="text-lg capitalize text-white font-bold">{text}</h1>
      </div>
    </div>
  );
}
