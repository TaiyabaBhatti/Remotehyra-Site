import React from 'react'

export default function HomeHeadline({title,subtitle}) {
  return (
    <div className='max-w-2xl m-auto text-center  space-y-2.5' >
      <h1 className='text-4xl  text-darkbrown font-bold'>{title}</h1>
      <p className='text-[18px] text-hoverGray font-semibold'>{subtitle}</p>
    </div>
  )
}
