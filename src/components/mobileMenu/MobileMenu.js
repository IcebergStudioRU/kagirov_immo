import React from "react";
import HamBtn from "../hamBtn/HamBtn";
import { Link } from "react-router-dom";
import "./MobileMenu.css";

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  
  const closeMobileMenu = () => {
    setMobileMenu(false)
    document.querySelector("body").style.overflow = "auto"
  }
  return (
    <div className={mobileMenu ? "mobileMenu_opened" : "mobileMenu_closed"}>
      <div className="max-w-mobileContainer mx-auto p-5 ">
        <div className="hamMobMenu flex flex-col items-end mb-28">
          <HamBtn mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
        </div>
        <div className="flex flex-col items-center">
          <a className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1" href="#AboutMe" onClick={closeMobileMenu}>
            About Me
          </a>
          <a className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1"  href="#FlatsPrewiew" onClick={closeMobileMenu}>
            Current Property
          </a>
          <a className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1" href="#Form" onClick={closeMobileMenu}>
            Sell/Rent
          </a>
          <a className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1" href="#Review" onClick={closeMobileMenu}>
            Review
          </a>
          <Link to="/contacts" className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1" onClick={closeMobileMenu}>
                Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
