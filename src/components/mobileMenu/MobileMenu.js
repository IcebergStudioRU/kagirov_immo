import React from "react";
import "./MobileMenu.css";

const MobileMenu = ({ mobileMenu }) => {
  return (
    <div className="">
      <div className={mobileMenu ? "mobileMenu_opened" : "mobileMenu_closed"}>
        <div className="max-w-mobileContainer mx-auto pt-32 pb-10 px-5 flex flex-col items-center">
          <p className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1">About Me</p>
          <p className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1">Current Property</p>
          <p className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1">Sell/Rent</p>
          <p className="text-white font-font-Montserrat border-b  text-2xl mb-4 pb-1">Review</p>
          <p className="text-white font-font-Montserrat border-b  text-2xl pb-1">Contacts</p>
      </div>
      </div>
    </div>
  );
};

export default MobileMenu;
