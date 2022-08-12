import React from "react";
const screen = ({ children }) => {
  return <div className="h-420 bg-screenImage bg-no-repeat bg-cover"> {children}</div>;
};

export default screen;
