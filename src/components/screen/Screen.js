import React from "react";
const Screen = ({ children }) => {
  return (
    <div className="bg-screenImage bg-no-repeat bg-cover relative mb:h-420 tl:h-600 ">
      {children}
      <div className="flex flex-col items-center p-5 justify-center mb:h-305 tl:h-488">
        <p className="font-Montserrat text-formTextColor font-semibold text-center flex mb:text-3xl mb:mb-3 tl:text-4xl tl:mb-5">
          Lorem ipsum
          <br />
          dolor
        </p>
        <div className="mb:w-32 mb:h-10 tl:w-200 tl:h-58 bg-screenBtnBg rounded text-white shadow-xl flex items-center justify-center">
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
