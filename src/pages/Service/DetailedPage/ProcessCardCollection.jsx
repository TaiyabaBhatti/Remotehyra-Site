import React from "react";
import ProcessCard from "./ProcessCard";

export default function ProcessCardCollection({ dataList }) {
  return (
    <>
      <div className="space-y-10 max-desktop-s4:space-y-5 flex-1 max-md:w-full">
        <div>
          <h1 className=" text-3xl font-bold bg-gradient-to-t from-pink-500 to-violet-500  bg-clip-text  text-transparent max-desktop-s4:text-center">
            Our Process
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {dataList &&
            dataList.map((content, index) => {
              return (
                <ProcessCard
                  key={index}
                  title={content.title}
                  desc={content.desc}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
