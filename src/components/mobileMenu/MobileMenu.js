import React, { useContext } from "react";
import HamBtn from "../hamBtn/HamBtn";
import { Link } from "react-router-dom";
import "./MobileMenu.css";
import { ContextGlobal } from "../../context/GlobalContextComponent";
import { ReactComponent as LanguageChange } from "../../assets/multiComponents/svg/languageChange.svg";

const MobileMenu = () => {
  const { mobileMenu, setMobileMenu, setLoader, setLanguage, language } =
    useContext(ContextGlobal);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    document.querySelector("body").style.overflow = "auto";
  };

  return (
    <div className={mobileMenu ? "mobileMenu_opened" : "mobileMenu_closed"}>
      <div className="mb:max-w-mobileContainer tl:max-w-tabletContainer mx-auto mb:p-5 tl:p-5">
        <div className="hamMobMenu flex flex-col items-end mb:mb-28 tl:mb-14">
          <HamBtn />
        </div>
        <div className="flex flex-col items-center">
          <a
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            href="#AboutMe"
            onClick={closeMobileMenu}
          >
            About Me
          </a>
          <a
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            href="#FlatsPrewiew"
            onClick={closeMobileMenu}
          >
            Current Property
          </a>
          <a
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            href="#Form"
            onClick={closeMobileMenu}
          >
            Sell/Rent
          </a>
          <a
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            href="#Review"
            onClick={closeMobileMenu}
          >
            Reviews
          </a>
          <Link
            to="/contacts"
            className="text-white font-font-Montserrat border-b  mb:text-2xl tl:text-3xl mb:mb-4 tl:mb-10 mb:pb-1 tl:pb-2"
            onClick={closeMobileMenu}
          >
            Contacts
          </Link>
          <div
            onClick={() => {
              setLanguage("");
              setLoader(true);
              setMobileMenu(false);
            }}
            className="stroke-white mb:w-20 mb:h-16 tl:w-24 tl:h-20 flex items-center"
          >
            <LanguageChange />
            <div className="mb:text-3xl text-white">{language}</div>
          </div>
        </div>
        {/* <button onClick={() => {
          setLanguage("")
          setLoader(true)
          setMobileMenu(false)
        }}>?????????????? ???????? | Choose the language | Sprache w??hlen</button> */}
      </div>
    </div>
  );
};

export default MobileMenu;
