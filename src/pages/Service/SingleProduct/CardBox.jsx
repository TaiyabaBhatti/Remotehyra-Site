import React from "react";

export default function CardBox({ text }) {
  return (
    <div className="px-3 py-7 bg-gradient-to-tr from-pink-50 to-violet-200 rounded-2xl">
      <p className="font-semibold">{text}</p>
    </div>
  );
}
