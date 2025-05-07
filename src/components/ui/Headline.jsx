import React from 'react'

export default function Headline({title,subtitle,properties}) {
  return (
    <div className={`max-w-2xl m-auto text-center mb-20 space-y-2.5 ${properties} `} >
      <h1 className='text-5xl  text-darkbrown font-bold heading'>{title}</h1>
      <p className='text-lg text-hoverGray font-semibold desc'>{subtitle}</p>
    </div>
  )
}
