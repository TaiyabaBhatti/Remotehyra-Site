import React from 'react'

export default function ExpertiseCard({title,subtitle,titleColor,subtitleColor,fadeDelay}) {
  return (
    <div className='bg-green text-white  max-w-60 max-desktop-s4:max-w-52 max-mobile-s2:max-w-72 space-y-3' data-aos="fade-up" data-aos-delay={fadeDelay}>
        <hr />
      <h1 className='font-bold text-[18px]'>{title}</h1>
      <p className='text-gray-300'>{subtitle}</p>
    </div>
  )
}
