import React from "react";
import PageTag from "../../Common/PageTag";
import Wrapper from "../../../components/ui/Wrapper";
import image from "../../../assets/images/demo.webp";
import Tag from "../../../components/ui/Tag";

export default function BlogHeroContainer({ title, date, tag, writer }) {
  return (
    <div className="relative overflow-hidden w-full  pt-12 max-md:pt-0 bg-whiteshade -z-50 min-h-screen ">
      <Wrapper properties="flex flex-row items-center justify-between gap-x-5 gap-y-10 max-md:flex-col-reverse">
        <div className="space-y-5">
          <PageTag text="Blog" />
          <h1 className="sub-title font-semibold text-3xl text-darkbrown">
            {title}
          </h1>
          <div className="flex items-center gap-x-3 max-mobile-s3:text-sm">
            <span>{date}</span>
            <Tag text={tag} />
            <span className="underline">{writer}</span>
          </div>
        </div>
        <div className=" max-md:w-full">
          <img
            src={image}
            alt=""
            className="rounded-md h-96 object-cover min-w-80  max-md:w-full max-md:min-w-full max-md:h-52"
          />
        </div>
      </Wrapper>
    </div>
  );
}
