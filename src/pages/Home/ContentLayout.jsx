import React from 'react'
import Button from '../../components/ui/Button'

export default function ContentLayout({title,subtitle,btn_text=null,btnDecor,classTitle,element}) {
  return (
    <div className={`px-6 max-mobile-s3:px-0 ${classTitle} flex flex-col items-start  gap-y-6 justify-center  w-[50%] max-desktop-s1:w-[80%] max-sm:w-full `}>
             {element}
              <h1 className={`text-5xl font-bold heading`}>
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
