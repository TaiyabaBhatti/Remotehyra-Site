import { NavLink } from "react-router-dom"

export default function TabLink({text,path="/"}){
return (
    <NavLink to={""} className={({isActive})=> `nav-content relative text-[18px] hover:text-gray-500 duration-150 ${isActive?"" : "text-gray-400"}`}
    >
      {text}
    </NavLink>
)





}