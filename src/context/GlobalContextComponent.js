import React, { createContext, useEffect, useState } from "react";
import { getFlats, getReviews } from "../utils/firebase";

export const ContextGlobal = createContext();

const GlobalContextComponent = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [flats, setFlats] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loaded, setLoaded] = useState(false)
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const reviews = getReviews().then((response) => setReviews([...response]));
    const flats = getFlats().then((response) => setFlats([...response]));
    Promise.all([reviews, flats]).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        mobileMenu,
        setMobileMenu,
        flats,
        reviews,
        loader,
        setLoader,
        language,
        setLanguage,
        loaded,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default GlobalContextComponent;
