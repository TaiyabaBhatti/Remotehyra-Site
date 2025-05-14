import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({properties="",text,path}) {
  return (
   <Link to={path} className={`${properties} rounded-4xl relative
                cursor-pointer hover:duration-200 text-base font-semibold px-8 py-3`}>{text}</Link>
  )
}
