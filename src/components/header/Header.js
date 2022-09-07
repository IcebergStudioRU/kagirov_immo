import React, { useContext } from "react";
import HamBtn from "../hamBtn/HamBtn";
import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/header/svg/logo-kagirov-immo.svg";
import { ContextGlobal } from "../../context/GlobalContextComponent";
import { ReactComponent as LanguageChange } from "../../assets/multiComponents/svg/languageChange.svg";

const Header = () => {
  const { mobileMenu, setLanguage, language, setLoader,  } = useContext(ContextGlobal);

  return (
    // <div className={mobileMenu ? "headerFixed" : "headerDefault"}>
    // <div className="headerDefault">
    <div className="bg-headerBg absolute w-100% z-10">
      <div className="mx-auto p-5 flex justify-between mb:max-w-mobileContainer tl:max-w-none tl:w-768  dt:w-1200   items-center">
        <Link to="/">
          <Logo className="mb:w-140 mb:h-46 tl:w-186 tl:h-61" />
        </Link>
        <ul className="mb:hidden dt:flex">
          <li className="mr-7">
            <a className="font-normal text-2xl text-white" href="#AboutMe">
              About Me
            </a>
          </li>
          <li className="mr-7">
            <a className="font-normal text-2xl text-white" href="#FlatsPrewiew">
              Current Property
            </a>
          </li>
          <li className="mr-7">
            <a className="font-normal text-2xl text-white" href="#Form">
              Sell/Rent
            </a>
          </li>
          <li className="mr-7">
            <a className="font-normal text-2xl text-white" href="#Review">
              Reviews
            </a>
          </li>
          <li className="mr-7">
            <Link className="font-normal text-2xl text-white" to="/contacts">
              Contacts
            </Link>
          </li>
          <li
            onClick={() => {
              setLanguage("");
              setLoader(true);
            }}
            className="stroke-white w-16 flex items-center"
          >
            <LanguageChange />
            <div className="mb:text-2xl text-white">{language}</div>
          </li>
        </ul>
        <div className="dt:hidden">
          <HamBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
