import React from "react";
import './Header.css'
import { ReactComponent as Logo } from "./svg/logo-kagirov-immo.svg";
import Hamburger from "hamburger-react";
const Header = ({mobileMenu, setMobileMenu}) => {
  const body = document.querySelector('body')
  const overflowBody = mobileMenu ? "scroll" : "hidden";
  const changeMobileMenu = () => {
    setMobileMenu((prev) => !prev)
    body.style.overflow = `${overflowBody}`
    body.style.overflowX = "hidden"
  }
  return (
    <div className={mobileMenu ? 'headerFixed' : 'headerDefault'}>
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
