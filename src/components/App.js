import React, { useState } from "react";
import Header from "./header/Header";
import MobileMenu from "./mobileMenu/MobileMenu";
import AboutMe from "./pages/main/aboutMe/AboutMe";
import Screen from "./pages/main/screen/Screen";
import Products from "./pages/flats/products/Products";
import Quotes from "./pages/main/quotes/Quotes";
import Form from "./pages/main/form/Form";
import WhyUs from "./pages/main/whyUs/WhyUs";
const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <Screen>
        <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <MobileMenu mobileMenu={mobileMenu} />
      </Screen>

      <AboutMe />
      <Products/>
      <Quotes/>
      <Form/>
      <WhyUs/>
    </>
  );
};

export default App;
