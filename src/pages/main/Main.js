import React from "react";

// import Header from "../../header/Header";
// import MobileMenu from "../../mobileMenu/MobileMenu";
// import AboutMe from "./aboutMe/AboutMe";
// import FlatsPreview from "./flatsPreview/FlatsPreview";
// import Form from "./form/Form";
// import Review from "./review/Review";
// import Screen from "./screen/Screen";
// import WhyUs from "./whyUs/WhyUs";

import Footer from "../../components/footer/Footer.js";
import WhyUs from "../../components/whyUs/WhyUs.js";
import Form from "../../components/form/Form.js";
import Review from "../../components/review/Review.js";
import FlatsPreview from "../../components/flatsPreview/FlatsPreview.js";
import AboutMe from "../../components/aboutMe/AboutMe.js";
import Screen from "../../components/screen/Screen.js";
import Header from "../../components/header/Header.js";
import MobileMenu from "../../components/mobileMenu/MobileMenu.js";

const Main = () => {
  return (
    <>
      <MobileMenu />
      <Screen>
        <Header />
      </Screen>
      <AboutMe />
      <FlatsPreview />
      <Review />
      <Form />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Main;
