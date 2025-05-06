import React from 'react'
import Button from '../../components/ui/Button'


export default function SectionContent({title,subtitle,src,btnText,btnDecor,classTitle}) {
  return (
   <div className={`${classTitle} py-10 h-full  overflow-hidden max-desktop-s3:mt-10`}>
   <div className={`flex relative z-50 flex-row gap-x-36  justify-between max-desktop-s3:flex-col`}>
   <div className={` pl-24 px-6  flex flex-col items-start  gap-y-6 justify-center  w-[50%] max-desktop-s3:w-[80%] `}>
             <h1 className="text-5xl  text-darkbrown font-bold">
               {title}
             </h1>
             <p className="text-[20px] font-semibold ">
             {subtitle}
             </p> 
             <Button
                 text={btnText}
                 btnDecor={btnDecor}
                 properties={btnDecor}
               />
           </div>
           <div className="relative">
            {/* svg backside image */}
               <div className={`absolute -z-40  max-desktop-s3:left-10 max-md:hidden  -left-96 top-0`}>
               <svg
            className="w-250 h-170 max-desktop-s3:ml-[calc(100vw-910px)]"
            viewBox="0 0 951 359"
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
         <div className={`h-[589px] w-lg max-desktop-s3:ml-[calc(100vw-512px)] max-sm:w-md max-md max-md:ml-[calc(100vw-448px)]`}>
            <img src={src} alt="" className=" object-cover rounded-bl-2xl"/></div>
              
           </div>
   </div>
   </div>
  )
}
