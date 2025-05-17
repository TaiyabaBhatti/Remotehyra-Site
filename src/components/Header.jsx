 
 import Button from "./ui/Button"
import TabLink from "./ui/TabLink"
 import { Link } from "react-router-dom" 
 import { FaBars } from "react-icons/fa6";
import LogoBox from "./ui/LogoBox";
import { useEffect, useState } from "react";
import Menu from "./ui/Menu";


 
 export default function Header({}){

    // state for toggle between hide and open hamburger menu

    const [toggle,settoggle] = useState(false);
  
    
useEffect(()=>{

const handleSideMenuResize = ()=>{

if(window.innerWidth > 950){
settoggle(false)
}

}

window.addEventListener('resize',handleSideMenuResize) 

return () => {
    window.removeEventListener('resize',handleSideMenuResize)
}


},[])



    const toggleFun = () => {

if(toggle){
settoggle(false)
}

else{
    settoggle(true)
}
    }



    return (

        <>
        <header id="navbar" className=" bg-white relative z-50">

<div className="same-spacing flex flex-row items-center justify-between py-10 px-7 max-w-6xl m-auto  h-full max-desktop-s4:max-w-4xl">

            <div className="flex flex-row items-center   w-full gap-x-10    justify-between">
                <LogoBox text_size="text-4xl" logo_size="size-12" properties="flex-row gap-x-2"/>
         
      <div className=" flex flex-row gap-x-10 max-tablet-lg1:gap-x-4 font-semibold items-center">
        <nav className=" text-black flex max-tablet-lg1:hidden flex-row items-center gap-x-5">
         
            <TabLink text="Home" path="/home" />
            <TabLink text="Services" />
            <TabLink text="Portfolio" />
            <TabLink text="About" />
            <TabLink text="Blog" />
       
        </nav>

{/* hidden menu icon */}
        <button onClick={toggleFun} className="text-2xl max-tablet-lg1:flex hidden relative  
    bg-linear-to-r
            from-[#BC01FF]
            to-[#46178f]
            text-white
        size-14 max-mobile-s1:size-10 max-mobile-s1:text-lg  items-center justify-center rounded-full
    p-2
    ">
          <FaBars/>
        </button>

<Button properties="nav-content max-tablet-s1:hidden border-[1px]
           py-3
           hover:bg-linear-to-r
                hover:from-[#BC01FF]
                 hover:to-[#46178f]
                 hover:border-0
                 hover:text-white
                 
          z-50" text="Contact Us" path="/contact-us"/>
      </div>
            </div>

       

          </div>
    </header>

 {toggle && <Menu toggleStatus={toggle}/>
            
          }




    </>
    )
    
     }