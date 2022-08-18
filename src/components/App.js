import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Flat from "./pages/flat/Flat";
import Main from "./pages/main/Main";
const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/kagirov_immo"
          element={
            <Main mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          }
        />
        <Route path="/kagirov_immo/flat" element={<Flat/>}/>
      </Routes>
    </>
  );
};

export default App;
