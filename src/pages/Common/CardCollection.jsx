import React from "react";
import HighlightedCard from "./HighlightedCard";
import sideImg from "../../assets/images/single-page-side-img.png";

export default function CardCollection({ dataList, tag }) {
  return (
    <>
      <div className="relative z-50 py-10 flex flex-row gap-x-10 items-center justify-between  max-tablet-s3:items-start max-md:flex-col-reverse">
        <div className="space-y-10  min-w-96 max-md:min-w-full max-md:w-full">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-t from-pink-500 to-violet-500  bg-clip-text  text-transparent ">
              {tag ? "Key Features" : "Key Benefits"}
            </h1>
          </div>

          <div className="flex flex-col w-full gap-y-2">
            {dataList &&
              dataList.map((content, index) => {
                return <HighlightedCard key={index} title={content} />;
              })}
          </div>
        </div>

        <img
          src={sideImg}
          alt="a decorative piece for visual appealing"
          className=" w-96 object-cover h-full max-md:hidden"
        />
      </div>
    </>
  );
}
