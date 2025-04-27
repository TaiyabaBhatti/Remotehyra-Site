import React from 'react'

export default function Button({properties="",text}) {
  return (
   <button className={`${properties}  text-[18px] cursor-pointer`}>{text}</button>
  )
}
