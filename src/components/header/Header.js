import React from "react";
import { ReactComponent as Logo } from "./svg/logo-kagirov-immo.svg";
import Hamburger from "hamburger-react";
const Header = ({mobileMenu, setMobileMenu}) => {
  const changeMobileMenu = () => {
    setMobileMenu((prev) => !prev)
  }
  return (
    <div className="header bg-headerBg">
      <div className="max-w-mobileContainer mx-auto p-5 flex justify-between ">
        <Logo />
        <Hamburger
          toggled={mobileMenu}
          toggle={changeMobileMenu}
          color="white"
          size={26}
          rounded
        />
      </div>
    </div>
  );
};

export default Header;
