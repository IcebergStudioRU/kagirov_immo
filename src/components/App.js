import React, { useState } from "react";
import Header from "./header/Header";
import MobileMenu from "./mobileMenu/MobileMenu";
import AboutMe from "./pages/main/aboutMe/AboutMe";
import Screen from "./pages/main/screen/Screen";
const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <Screen>
        <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <MobileMenu mobileMenu={mobileMenu} />
      </Screen>

      <AboutMe />
    </>
  );
};

export default App;
