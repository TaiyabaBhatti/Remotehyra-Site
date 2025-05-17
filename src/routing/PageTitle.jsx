import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'



export default function PageTitle() {


const currentLocation = useLocation();

useEffect(()=>{

 if(currentLocation.pathname === "/"){

document.title="Remotehyra"

  }
  else if(currentLocation.pathname === "/contact-us"){

document.title="Contact Us | Remotehyra"

  }

},[location.pathname])







  return null
}
