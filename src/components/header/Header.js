import React from "react";
import HamBtn from "../hamBtn/HamBtn";
import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Logo } from "./svg/logo-kagirov-immo.svg";

const Header = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className={mobileMenu ? "headerFixed" : "headerDefault"}>
      <div className="max-w-mobileContainer mx-auto p-5 flex justify-between ">
      <Link to="/"><Logo /></Link>
      <div className={mobileMenu ? 'block' : 'none'}>
        <HamBtn mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
      </div>
      </div>
    </div>
  );
};

export default Header;
