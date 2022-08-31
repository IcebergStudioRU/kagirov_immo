import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../pages/main/Main.js";
import Flat from "../pages/flat/Flat.js";
import Contacts from "../pages/contacts/Contacts.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path={`flat/:id`} element={<Flat />} />
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
