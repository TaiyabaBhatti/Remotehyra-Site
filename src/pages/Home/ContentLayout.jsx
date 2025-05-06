import React from 'react'
import Button from '../../components/ui/Button'

export default function ContentLayout({title,subtitle,btn_text=null,btnDecor,classTitle,element}) {
  return (
    <div className={`px-6 ${classTitle} flex flex-col items-start  gap-y-6 justify-center  w-[50%] max-desktop-s1:w-[80%] `}>
             {element}
              <h1 className={`text-5xl font-bold `}>
                {title}
              </h1>
              <p className={`font-semibold text-lg`}>
              {subtitle}
              </p>
              {btn_text && <Button
                  text={btn_text}
                  properties={btnDecor}
                />}
            </div>
  )
}
