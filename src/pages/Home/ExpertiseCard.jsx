import React from 'react'

export default function ExpertiseCard({title,subtitle,titleColor,subtitleColor}) {
  return (
    <div className='bg-green text-white  max-w-60 space-y-3'>
        <hr />
      <h1 className='font-bold text-[18px]'>{title}</h1>
      <p className='text-gray-300'>{subtitle}</p>
    </div>
  )
}
