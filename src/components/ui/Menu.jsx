import React from "react";
import MenuItems from "./MenuItems";

export default function Menu({ toggleStatus }) {
  return (
    <div
      className={` 
        absolute -z-10
        
        side-menu
        h-screen
        bg-white w-full
    
     `}
    >
      <div className="space-y-8 max-w-6xl m-auto max-desktop-s4:max-w-4xl py-7 px-10 ">
        <MenuItems text="Home" path="/home" />
        <MenuItems text="Services" path="/services" />
        <MenuItems text="Portfolio" path="/portfolio" />
        <MenuItems text="About" path="/about" />
        <MenuItems text="Blog" path="/blog" />
      </div>
    </div>
  );
}
