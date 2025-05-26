import React from "react";
import { category } from "../../data/blogPostData";

export default function CategoryList() {
  return (
    <>
      <div className="bg-whiteshade rounded-md p-5 space-y-6 w-full min-h-96">
        <h1 className="text-lg font-bold">Categories</h1>
        <ul>
          {category.map((item, index) => {
            return (
              <li
                key={index}
                className="capitalize not-last:border-b-[1px] not-last:py-3"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
