import React from 'react'
import Button from '../../components/ui/Button'

export default function ContentLayout({title,subtitle,btn_text=null,titleColor,classTitle,element}) {
  return (
    <div className={`px-6   ${classTitle} flex flex-col items-start  gap-y-6 justify-center  w-[50%] max-desktop-s1:w-[80%] `}>
             {element}
              <h1 className={`text-5xl font-bold `}>
                {title}
              </h1>
              <p className={`font-semibold text-[20px]`}>
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
