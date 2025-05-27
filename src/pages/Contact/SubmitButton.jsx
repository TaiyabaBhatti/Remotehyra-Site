import React from "react";

export default function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="text-gray-400 font-bold cursor-pointer bg-gradient-to-tr from-darkbrown from-10% to-violet-500 rounded-md p-3  active:scale-105 transition-transform duration-200 ease-out mt-10"
    >
      {text}
    </button>
  );
}
