import React from "react";
import Tag from "../../../components/ui/Tag";

import image from "../../../assets/images/demo.webp";
import { Link } from "react-router-dom";

export default function BlogCard({ data, path }) {
  return (
    <>
      <Link to={path}>
        <article className="bg-white rounded-md ">
          <img
            loading="lazy"
            src={image}
            alt={`blog of ${data.title}`}
            className="rounded-t-md h-54 w-full object-cover"
          />
          <div className="space-y-3 p-5">
            <div className="flex gap-2 items-center">
              <p className="text-sm">{data.date}</p>-
              <Tag text={data.tag} />
            </div>
            <h5 className="font-semibold text-black">{data.title}</h5>
            <p className="text-hoverGray text-sm">{data.desc}</p>
          </div>
        </article>
      </Link>
    </>
  );
}
