 
 import Button from "./ui/Button"
import TabLink from "./ui/TabLink"
 import { Link } from "react-router-dom" 
 import { FaBars } from "react-icons/fa6";
import LogoBox from "./ui/LogoBox";

 
 export default function Header({}){


    return (
        <header id="navbar" className="bg-white relative z-50 flex flex-row items-center justify-between w-full py-5 max-w-6xl m-auto px-2 h-full">
            <div className="flex flex-row  w-full gap-x-48  justify-center">
                <LogoBox text_size="text-5xl" logo_size="size-16" properties="flex-row items-center gap-x-5"/>
         
      <div className=" flex flex-row gap-x-10 max-tablet-lg1:gap-x-4 font-semibold items-center">
        <nav className=" text-black flex max-tablet-lg1:hidden flex-row items-center gap-x-5">
         
            <TabLink text="Home" path="/home" />
            <TabLink text="Services" />
            <TabLink text="Portfolio" />
            <TabLink text="About" />
            <TabLink text="Blog" />
       
        </nav>

        <button className="text-2xl max-tablet-lg1:flex hidden relative
        
    bg-linear-to-r
            from-[#BC01FF]
            to-[#46178f]
            text-white
        size-14  items-center justify-center rounded-full
    p-2
    ">
          <FaBars/>
        </button>

<Button properties="nav-content max-tablet-s1:hidden border-2
           py-3
           hover:bg-linear-to-r
                hover:from-[#BC01FF]
                 hover:to-[#46178f]
                 hover:duration-200
                 hover:border-0
                 hover:text-white
                 
          z-50" text="Contact Us"/>
      </div>
            </div>
    </header>
    )
    
     }