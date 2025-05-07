import React from 'react'

export default function InputBlock({labeltext,inputType}) {
  return (
    <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700 bg-white">{labeltext}</label>
    <input required="" className="w-full p-3 focus:border-b-2  bg-white  border border-gray-200 outline-none transition-all"  type={inputType} value=""/></div>
  )
}
