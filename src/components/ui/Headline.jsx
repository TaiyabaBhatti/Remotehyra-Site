import React from 'react'

export default function Headline({title,subtitle,properties}) {
  return (
    <div className={`max-w-2xl m-auto text-center  space-y-2.5 ${properties} `} >
      <h1 className='text-5xl  text-darkbrown font-bold'>{title}</h1>
      <p className='text-[20px] text-hoverGray font-semibold'>{subtitle}</p>
    </div>
  )
}
