import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa6"
import {Link} from "react-router-dom"

export default function SocialHandles() {
  return (

    // social links
    <div className={`flex flex-row  gap-x-3  text-2xl max-md:text-lg text-black`}>
       <Link to="" className=''><FaFacebookF/></Link>
       <Link to="" className=''><FaTwitter/></Link>
       <Link to="" className=''><FaInstagram/></Link>
    </div>
  )
}
