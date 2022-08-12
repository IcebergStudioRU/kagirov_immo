import React from "react";
import "./MobileMenu.css";

const MobileMenu = ({ mobileMenu }) => {
  return (
    <div className="mobileMenu">
      <div className={mobileMenu ? "mobileMenu_opened" : "mobileMenu_closed"}>
        <div className="mobileMenu_container">
          <div>MobileMenu</div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
