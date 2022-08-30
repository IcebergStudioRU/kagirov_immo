import React, { createContext, useEffect, useState } from "react";

export const ContextGlobal = createContext();

const GlobalContextComponent = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);




  return (
    <ContextGlobal.Provider value={{mobileMenu, setMobileMenu }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default GlobalContextComponent;
