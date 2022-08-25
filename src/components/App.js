import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Flat from "./pages/flat/Flat";
import Main from "./pages/main/Main";
import Contacts from "./pages/contacts/Contacts";
const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [flat, setFlat] = useState({})
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact="true"
          element={

            <Main
              mobileMenu={mobileMenu}
              setMobileMenu={setMobileMenu}
              setFlat={setFlat}
            />
          }
        />
        <Route path="/flat" exact="false" element={<Flat flat={flat} />} />
        <Route path="/contacts" exact="true" element={<Contacts mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>}/>
      </Routes>
    </>
  );
};

export default App;
