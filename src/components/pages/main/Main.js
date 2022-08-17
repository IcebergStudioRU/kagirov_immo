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
const Main = ({ mobileMenu, setMobileMenu }) => {
  return (
    <>
      <Screen>
        <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <MobileMenu mobileMenu={mobileMenu} />
      </Screen>
      <AboutMe />
      <Quotes />
      <FlatsPreview/>
      <Form />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Main;
