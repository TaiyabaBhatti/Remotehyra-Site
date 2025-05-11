import React from "react";
import Button from "../../components/ui/Button";

export default function SectionContent({
  title,
  subtitle,
  src,
  btnText,
  btnDecor,
  classTitle,
}) {
  return (
    <div className={`${classTitle} overflow-hidden  h-[675px] max-desktop-s4:h-[880px]  max-md:pb-8`}>
      <div
        className={`flex flex-row relative z-50  max-md:gap-0 max-sm:gap-y-10 justify-end gap-x-48 max-desktop-lg3:gap-x-24 max-desktop-s4:flex-col max-desktop-s4:mt-10`}
      >
        <div
          className={` px-10  flex flex-col items-start  gap-y-6 justify-center  max-w-[525px] max-desktop-s4:max-w-4xl m-auto`}
        >
          <h1 className="text-5xl  text-darkbrown font-bold heading">
            {title}
          </h1>
          <p className="desc text-[20px] font-semibold">{subtitle}</p>
          <Button text={btnText} btnDecor={btnDecor} properties={btnDecor} />
        </div>
        <div className="relative  flex justify-end  ">
          {/* svg backside image */}
          <div
            className={`absolute w-full -z-40    top-0 -left-[calc(100vw-945px)] max-desktop-lg3:-left-[calc(100vw-925px)] max-desktop-lg1:-left-[calc(100vw-900px)]
              max-desktop-s3:-left-[calc(100vw-800px)] max-desktop-s4:left-[60px]
              max-tablet-s3:left-0
             max-tablet-s1:-left-[80px]
             max-md:left-[50px]
                `}
          >
            <svg
              className="w-250  h-170 max-md:w-190 "
              viewBox="0 0 951 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 552L45.0001 455.999C45.0001 422.862 71.863 395.999 105 395.999L150.764 395.999L215.032 395.999C248.325 395.999 275.252 368.892 275.031 335.6L274.681 282.97L274.681 150.701L274.681 105C274.681 71.8629 301.544 45 334.681 45L590.34 45L906 45"
                stroke="url(#paint0_linear_903:2012)"
                strokeWidth="90"
                strokeLinecap="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_903:2012"
                  x1="461.739"
                  y1="53.9753"
                  x2="462.552"
                  y2="548.371"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#6BDAB6"></stop>
                  <stop offset="1" stopColor="#66E0F6"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            className={`w-lg  max-md:w-[450px] max-sm:px-10 
          `}
          >
            <img src={src} alt="" className=" object-cover rounded-bl-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
