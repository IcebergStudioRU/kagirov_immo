import React from "react";
const Screen = ({ children }) => {
  return (
    <div className="h-420 bg-screenImage bg-no-repeat bg-cover relative">
      {children}
      <div className=" flex flex-col items-center absolute left-0 right-0 bottom-28">
        <p className="font-Montserrat text-formTextColor text-3xl font-semibold text-center mb-10">
          Lorem ipsum
          <br />
          dolor
        </p>
        <div className="w-32 h-10 bg-screenBtnBg rounded text-white shadow-xl flex items-center justify-center">
          <a className=" font-Montserrat text-xl" id="AboutMe" href="#Form">
            Contact Us!
          </a>
        </div>
      </div>
      <div className="w-100% h-27 absolute bottom-0 bg-screenBorderBottom"></div>
    </div>
  );
};

export default Screen;