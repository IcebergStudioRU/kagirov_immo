import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import MobileMenu from "../../mobileMenu/MobileMenu";
import AboutMe from "./aboutMe/AboutMe";
import Form from "./form/Form";
import Quotes from "./quotes/Quotes";
import Screen from "./screen/Screen";
import WhyUs from "./whyUs/WhyUs";
import FlatsPreview from "./flatsPreview/FlatsPreview";
const Main = ({ mobileMenu, setMobileMenu, setFlat }) => {
  return (
    <>
      <Screen mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}>
        <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <MobileMenu
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      </Screen>
      <AboutMe />
      <Quotes />
      <FlatsPreview setFlat={setFlat} />
      <Form />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Main;
