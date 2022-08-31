import React, { useContext } from "react";
import Hamburger from "hamburger-react";
import { ContextGlobal } from "../../context/GlobalContextComponent";

const HamBtn = () => {
  const { mobileMenu, setMobileMenu } = useContext(ContextGlobal);

  const body = document.querySelector("body");
  const overflowBody = mobileMenu ? "scroll" : "hidden";
  const changeMobileMenu = () => {
    setMobileMenu((prev) => !prev);
    body.style.overflow = `${overflowBody}`;
    body.style.overflowX = "hidden";
  };

  return (
    <Hamburger
      toggled={mobileMenu}
      toggle={changeMobileMenu}
      color="white"
      size={26}
      rounded
    />
  );
};

export default HamBtn;
