import React, { useContext } from "react";
import HamBtn from "../hamBtn/HamBtn";
import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/header/svg/logo-kagirov-immo.svg";
import { ContextGlobal } from "../../context/GlobalContextComponent";

const Header = () => {
  const { mobileMenu } = useContext(ContextGlobal);


  
  return (
    <div className={mobileMenu ? "headerFixed" : "headerDefault"}>
      <div className="mb:max-w-mobileContainer tl:max-w-tabletContainer mx-auto p-5 flex justify-between ">
        <Link to="/">
          <Logo className="mb:w-140 mb:h-46 tl:w-186 tl:h-61"/>
        </Link>
        <div className={mobileMenu ? "block" : "none"}>
          <HamBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
