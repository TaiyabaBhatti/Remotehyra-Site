 
 import Button from "./ui/Button"
import TabLink from "./ui/TabLink"
 import { Link } from "react-router-dom" 
 import { FaBars } from "react-icons/fa6";

 
 export default function Header({}){


    return (
        <header id="navbar" className="bg-white relative mb-20 z-50 flex flex-row items-center justify-between w-full py-5 max-w-6xl m-auto px-2">
            <div className="flex flex-row  w-full gap-x-48  justify-center">
                <div>
                    <Link to={"/"}  className="logo-text text-5xl text-purple-800 font-bold hover:opacity-80 duration-150">
                        Remotehyra
                    </Link>
                </div>
         
      <div className=" flex flex-row gap-x-10 font-semibold">
        <nav className=" text-black flex max-tablet-lg1:hidden flex-row items-center gap-x-5">
         
            <TabLink text="Home" path="/home" />
            <TabLink text="Services" />
            <TabLink text="Portfolio" />
            <TabLink text="About" />
            <TabLink text="Blog" />
       
        </nav>

        <button className="text-3xl  max-tablet-lg1:block hidden relative
          z-50
          cursor-pointer
          duration-300
           before:absolute
           before:-z-10
           before:hidden
           hover:before:block
           before:h-full before:w-full before:rounded-full
          hover:before:w-full
  hover:before:transition-all
  hover:before:duration-300
    before:top-0
    before:left-0
    before:bg-black 
    p-2
    before:opacity-30">
          <FaBars/>
        </button>

<Button properties="nav-content text-[18px] block border-2
          px-7 py-3
          rounded-3xl  relative
          z-50" text="Contact Us"/>
       

{/* <AnimButton text="login/sign up" properties="bg-black"/> */}

       
      </div>
            </div>
    </header>
    )
    
     }