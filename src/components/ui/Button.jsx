import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({properties="",text,path}) {
  return (
   <Link className={`${properties} rounded-4xl relative
               z-50  cursor-pointer duration-200 text-lg font-semibold px-8 py-3`}>{text}</Link>
  )
}
