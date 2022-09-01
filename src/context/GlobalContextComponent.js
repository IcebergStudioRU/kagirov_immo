import React, { createContext, useEffect, useState } from "react";
import { getFlats, getReviews } from "../utils/firebase";

export const ContextGlobal = createContext();
const getViewPort = () => {
  const viewPortSize = document.documentElement.clientWidth;
  if (viewPortSize <= 767) return "mobile";
  if (viewPortSize >= 768 && viewPortSize <= 1199) return "tablet";
  return "desktop";
};
const GlobalContextComponent = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [flats, setFlats] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loaded, setLoaded] = useState(false)
  const [language, setLanguage] = useState("");
  const [viewPort, setViewPort] = useState(getViewPort());

  useEffect(() => {
    const resizeHandler = () => {
      setViewPort(getViewPort());
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

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
        viewPort
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default GlobalContextComponent;
