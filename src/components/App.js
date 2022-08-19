import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Flat from "./pages/flat/Flat";
import Main from "./pages/main/Main";
const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [flat, setFlat] = useState({})
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              mobileMenu={mobileMenu}
              setMobileMenu={setMobileMenu}
              setFlat={setFlat}
            />
          }
        />
        <Route path="/flat" element={<Flat flat={flat} />} />
      </Routes>
    </>
  );
};

export default App;
