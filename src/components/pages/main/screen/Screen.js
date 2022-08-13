import React from "react";
const screen = ({ children }) => {
  return <div className="h-420 bg-screenImage bg-no-repeat bg-cover relative"> {children} <div className="w-100% h-27 absolute bottom-0 bg-screenBorderBottom"></div></div>;
};

export default screen;
