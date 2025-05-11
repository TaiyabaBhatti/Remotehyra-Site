import React from 'react'
import Button from '../../components/ui/Button'

export default function ContentLayout({title,subtitle,btn_text=null,btnDecor,classTitle,element}) {
  return (
    <div className={`max-w-[525px] max-desktop-s4:max-w-full  ${classTitle} flex flex-col items-start  gap-y-6 justify-center `}>
             {element}
              <h1 className={`heading text-5xl font-bold`}>
                {title}
              </h1>
              <p className={`desc font-semibold text-lg`}>
              {subtitle}
              </p>
              {btn_text && <Button
                  text={btn_text}
                  properties={btnDecor}
                />}
            </div>
  )
}
