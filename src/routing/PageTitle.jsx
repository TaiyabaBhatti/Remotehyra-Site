import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const currentLocation = useLocation();

  useEffect(() => {
    if (currentLocation.pathname === "/") {
      document.title = "Remotehyra";
    } else if (currentLocation.pathname === "/contact-us") {
      document.title = "Contact Us | Remotehyra";
    } else if (currentLocation.pathname === "/about") {
      document.title = "About | Remotehyra";
    } else if (currentLocation.pathname === "/services") {
      document.title = "Services | Remotehyra";
    } else if (currentLocation.pathname === "/portfolio") {
      document.title = "Portfolio | Remotehyra";
    } else if (currentLocation.pathname === "/blog") {
      document.title = "Blog | Remotehyra";
    }
  }, [location.pathname]);

  return null;
}
