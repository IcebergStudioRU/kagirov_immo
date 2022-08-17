import React, { useState } from "react";
import Main from "./pages/main/Main";
const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      
      <Main mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </>
  );
};

export default App;
