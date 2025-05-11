import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/remotehyra-logo.webp"

export default function LogoBox({text_size,logo_size,properties="",element}) {
  return (
    
      <div className={`flex  ${properties}  max-mobile-s1:items-start`}>
       
        <img src={logo} alt="" className={` ${logo_size} object-cover max-mobile-s1:size-10`}/>
       
        <Link
          to={"/"}
          className={`logo-text ${text_size} bg-gradient-to-r from-pink-500 to-violet-500  bg-clip-text  text-transparent font-bold hover:opacity-80 duration-150 transition-all`}
        >
          
          Remotehyra
        </Link>
        {element && <p className="font-semibold text-[20px] max-mobile-s1:text-base">info@remotehyra.com</p>}
    </div>
  );
}
