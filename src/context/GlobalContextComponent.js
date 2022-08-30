import React, { createContext, useEffect, useState } from "react";
import { getFlats, getReviews } from "../utils/firebase";

export const ContextGlobal = createContext();

const GlobalContextComponent = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [flats, setFlats] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getFlats().then((response) => setFlats([...response]));
  }, []);

  useEffect(() => {
    getReviews().then((response) => setReviews([...response]));
  }, []);

  return (
    <ContextGlobal.Provider value={{ mobileMenu, setMobileMenu, flats, reviews }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default GlobalContextComponent;
