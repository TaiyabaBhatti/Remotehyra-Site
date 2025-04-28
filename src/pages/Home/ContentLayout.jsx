import React from 'react'
import Button from '../../components/ui/Button'

export default function ContentLayout({title,subtitle,btn_text=null,titleColor,properties,element}) {
  return (
    <div className={`px-6  ${properties} flex flex-col items-start  gap-y-6 justify-center  w-[50%] max-desktop-s1:w-[80%] `}>
             {element}
              <h1 className={`${titleColor} text-6xl font-extrabold `}>
                {title}
              </h1>
              <p className={` text-gray-400 text text-2xl`}>
              {subtitle}
              </p>
              {btn_text && <Button
                  text={btn_text}
                  properties="
                bg-purple-600
                text-white
                text-2xl
                relative
                z-50
                rounded-3xl
                py-4 px-8
                "
                />}
              
            </div>
  )
}
