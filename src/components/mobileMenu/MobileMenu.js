import React from "react";
import HamBtn from "../hamBtn/HamBtn";
import "./MobileMenu.css";

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className={mobileMenu ? "mobileMenu_opened" : "mobileMenu_closed"}>
      <div className="max-w-mobileContainer mx-auto p-5 ">
        <div className="hamMobMenu flex flex-col items-end mb-28">
          <HamBtn mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1">
            About Me
          </p>
          <p className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1">
            Current Property
          </p>
          <p className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1">
            Sell/Rent
          </p>
          <p className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1">
            Review
          </p>
          <p className="text-white font-font-Montserrat border-b  text-2xl pb-1">
            Contacts
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
