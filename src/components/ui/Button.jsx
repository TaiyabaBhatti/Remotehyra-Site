import React from 'react'

export default function Button({properties="",text}) {
  return (
   <button className={`${properties} rounded-4xl relative
               z-50  cursor-pointer text-[18px] font-semibold px-8`}>{text}</button>
  )
}
