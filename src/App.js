import React from "react";
import GlobalContextComponent from "./context/GlobalContextComponent";
import Router from "./router/Router";

const App = () => {

  return (
    <>
      <GlobalContextComponent>
        <Router />
      </GlobalContextComponent>
    </>
  );
};

export default App;
