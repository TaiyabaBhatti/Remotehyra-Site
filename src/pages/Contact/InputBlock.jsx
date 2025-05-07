import React from 'react'

export default function InputBlock({labeltext,inputType}) {
  return (
    <div tabIndex={0}  className="px-6 pt-3 pb-2 group space-y-2 relative 
    before:absolute before:left-0 before:bottom-0  before:w-full before:h-0 before:z-50  focus-within:before:h-1 focus-within:pt-0.5 focus-within:before:duration-300 focus-within:duration-300  before:bg-linear-to-r before:from-[#BC01FF] before:to-[#46178f] border border-gray-200 focus:border-gray-400">
    <label className=" text-lg group-focus-within:text-sm font-medium text-gray-400 bg-white transition-all">{labeltext}</label>
    <input required="" className="relative bg-white group-focus-within:block w-full hidden   outline-none transition-all"  type={inputType} /></div>
  )
}
