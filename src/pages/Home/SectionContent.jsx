import React from 'react'
import Button from '../../components/ui/Button'


export default function SectionContent({title,subtitle,src,svgElement,btnText,classTitle,screenWidth}) {
  return (
   <div className={`${classTitle} py-10 h-full  overflow-hidden`}>
   <div className={`flex relative z-50 flex-row gap-x-36 justify-between ${screenWidth}:flex-col`}>
   <div className={` pl-24 px-6  flex flex-col items-start  gap-y-6 justify-center  w-[50%] ${screenWidth}:w-[80%] `}>
             <h1 className="text-6xl  text-darkbrown font-bold">
               {title}
             </h1>
             <p className="text-[18px] font-semibold ">
             {subtitle}
             </p>
            
             <Button
                 text={btnText}
                 properties="
            bg-linear-to-r
            from-[#BC01FF]
            to-[#46178f]
            text-white
            
            py-4 
               "
               />
           </div>
           <div className="relative">
               <div className={`absolute -z-40  ${screenWidth}:left-10  -left-96 top-0`}>
             {svgElement}
               </div>
         <div className={`h-[589px] w-lg ${screenWidth}:ml-[50%]`}>
            <img src={src} alt="" className=" object-cover rounded-bl-2xl"/></div>
              
           </div>
   </div>
   </div>
  )
}
