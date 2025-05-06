import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/remotehyra-logo.webp"

export default function LogoBox({text_size,logo_size,properties="",element}) {
  return (
    
      <div className={`flex  ${properties} max-mobile-s1:gap-x-2 max-mobile-s1:flex-col max-mobile-s1:items-start`}>
        <img src={logo} alt="" className={`${logo_size} max-mobile-s1:size-8   object-cover`}/>
        <Link
          to={"/"}
          className={`logo-text ${text_size} bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text  text-transparent font-bold hover:opacity-80 duration-150`}
        >
          Remotehyra
        </Link>
        {element && <p className="font-semibold text-[20px]">info@remotehyra.com</p>}
    </div>
  );
}
