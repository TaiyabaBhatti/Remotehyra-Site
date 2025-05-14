import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

export default function MenuItems({text}) {
  return (
     <div className='flex justify-between items-center'>
          <h4 className={`relative  tracking-wide text-lg text-darkbrown font-semibold`}>{text}</h4>
           <MdArrowRightAlt className='font-extralight text-2xl'/>
           </div>
  )
}
