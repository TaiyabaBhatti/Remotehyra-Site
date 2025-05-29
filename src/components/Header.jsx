import Button from "./ui/Button";
import TabLink from "./ui/TabLink";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import LogoBox from "./ui/LogoBox";
import { useEffect, useRef, useState } from "react";
import Menu from "./ui/Menu";

export default function Header({}) {
  // state for toggle between hide and open hamburger menu

  const [toggle, settoggle] = useState(false);
  const [theme, setTheme] = useState(true);
  const currentLocation = useLocation();

  const [topDistance, setTopDistance] = useState(0);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleNavbar = () => {
      const header = document.getElementById("navbar");
      const currentScrollPos = window.scrollY;

      if (prevScrollPos.current > currentScrollPos) {
        header.classList.remove("scrolled-down");
      } else if (currentScrollPos > header.offsetHeight + 20) {
        header.classList.add("scrolled-down");
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleNavbar);
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  useEffect(() => {
    if (
      currentLocation.pathname === "/" ||
      currentLocation.pathname === "/home"
    ) {
      setTheme(false);
    } else {
      setTheme(true);
    }

    const handleSideMenuResize = () => {
      if (window.innerWidth > 950) {
        settoggle(false);
      }
    };

    window.addEventListener("resize", handleSideMenuResize);
    return () => {
      window.removeEventListener("resize", handleSideMenuResize);
    };
  }, [currentLocation.pathname, theme]);

  const toggleFun = () => {
    if (toggle) {
      settoggle(false);
    } else {
      settoggle(true);
    }
  };
  //

  return (
    <>
      <section className="relative z-50">
        <header
          id="navbar"
          className={`h-28 z-50 
          fixed top-0 left-0 w-full  shadow-[0_10px_35px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out
          ${theme ? "bg-whiteshade" : "bg-white"}
          `}
        >
          <div className="same-spacing flex flex-row items-center justify-between py-6 h-full px-7 max-w-6xl m-auto   max-desktop-s4:max-w-4xl">
            <div className="flex flex-row items-center   w-full gap-x-10    justify-between">
              <LogoBox
                text_size="text-4xl"
                logo_size="size-12"
                properties="flex-row gap-x-2"
              />

              <div className=" flex flex-row gap-x-10 max-tablet-lg1:gap-x-4 font-semibold items-center">
                <nav className="flex max-tablet-lg1:hidden flex-row items-center gap-x-5">
                  <TabLink text="Home" path="/home" />
                  <TabLink text="Services" path="/services" />
                  <TabLink text="Portfolio" path="portfolio" />
                  <TabLink text="About" path="/about" />
                  <TabLink text="Blog" path="blog" />
                </nav>

                {/* hidden menu icon */}
                <button
                  onClick={toggleFun}
                  className="text-2xl max-tablet-lg1:flex hidden relative  
    bg-linear-to-r
            from-[#BC01FF]
            to-[#46178f]
            text-white
        size-14 max-mobile-s1:size-10 max-mobile-s1:text-lg  items-center justify-center rounded-full
    p-2
    "
                >
                  <FaBars />
                </button>

                <Button
                  properties="nav-content max-tablet-s1:hidden border-[1px]
           py-3
           hover:bg-linear-to-r
                hover:from-[#BC01FF]
                 hover:to-[#46178f]
                 hover:border-0
                 hover:text-white
                 
          z-50"
                  text="Contact Us"
                  path="/contact-us"
                />
              </div>
            </div>
          </div>
        </header>

        {toggle && <Menu toggleStatus={toggle} />}
      </section>
    </>
  );
}
