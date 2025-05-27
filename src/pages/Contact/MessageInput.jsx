import React from "react";

export default function MessageInput({ name, register, error }) {
  return (
    <>
      <div className="relative mt-10 ">
        <label htmlFor={name} className="text-gray-400 font-semibold text-lg">
          Your Message Here:
        </label>
        <textarea
          {...register(name, {
            required: `Message is required`,
          })}
          id={name}
          placeholder="Type Message.."
          className="bg-white opacity-30  w-full outline-0 p-3 min-h-32 mt-5"
        ></textarea>
        {error[name] && (
          <p className="text-red-400  text-sm mt-1 absolute -bottom-5 left-0">
            {error[name].message}
          </p>
        )}
      </div>
    </>
  );
}
