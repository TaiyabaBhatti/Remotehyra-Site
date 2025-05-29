import React from "react";

export default function SubmitButton({ text, loading = null }) {
  return (
    <button
      type="submit"
      className="text-gray-400 flex justify-center items-center gap-2 font-bold text-lg cursor-pointer bg-gradient-to-tr from-darkbrown from-10% to-violet-500 rounded-md py-5 px-3  active:scale-105 uppercase transition-transform duration-200 ease-out mt-10"
    >
      {loading ? "sending" : "Send message"}

      {loading && (
        <div id="contact-submit" className="flex flex-row gap-x-1.5">
          <div id="dot-1" className="dot size-2 bg-gray-400 rounded-full"></div>
          <div id="dot-2" className="dot size-2 bg-gray-400 rounded-full"></div>
          <div id="dot-3" className="dot size-2 bg-gray-400 rounded-full"></div>
        </div>
      )}
    </button>
  );
}
