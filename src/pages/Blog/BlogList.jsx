import React from "react";
import { topBlog } from "../../data/blogPostData";

export default function BlogList() {
  return (
    <>
      <div className="bg-whiteshade rounded-md p-5 space-y-6 w-full max-desktop-s4:h-[380px] max-desktop-s4:overflow-y-scroll">
        <h1 className="text-lg font-bold">Top Posts</h1>

        <div className="space-y-5">
          {topBlog.map((item, index) => {
            return (
              <div key={index} className="flex gap-x-5  items-start">
                <p className="text-3xl font-extrabold">{index}</p>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs">{item.desc}</p>
                  <p className="text-xs">{item.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
