import React, { useContext } from "react";
import Zelimchan2 from "../../assets/aboutMe/images/Zelimchan2.PNG";
import { ContextGlobal } from "../../context/GlobalContextComponent";

const AboutMe = () => {
  const { text } = useContext(ContextGlobal);
  return (
    <div className="bg-aboutMeBg tl:bg-aboutMeImage tl:bg-no-repeat tl:bg-cover">
      {/* <div className="tl:flex tl:flex-row-reverse tl:max-w-tabletContainer mx-auto tl:bg-aboutMeImage tl:bg-cover"> */}
      <div className="tl:flex tl:flex-row-reverse tl:w-768 tl:mx-auto dt:w-1200">
        {/* <div className="flex justify-center mb:bg-aboutMeImage mb:bg-no-repeat mb:bg-cover tl:mb-0 tl:bg-none relative"> */}
        <div className="mb:bg-aboutMeImage mb:bg-no-repeat mb:bg-cover mb:relative tl:bg-none tl:static tl:pr-5">
          <div className="mb:max-w-mobileContainer mb:mx-auto mb:flex mb:justify-center mb:px-5 tl:max-w-none tl:mx-0 tl:block tl:p-0">
            <img
              src={Zelimchan2}
              alt="makler"
              className="object-contain inline-block mb:w-200 tl:w-284 dt:w-450"
            />
          </div>
          <div className="w-100% mb:h-4 bg-imgZelimBorderBottom absolute bottom-0 tl:hidden"></div>
        </div>
        <div className="mb:max-w-mobileContainer mb:mx-auto mb:p-5 tl:max-w-none tl:mx-0 tl:p-0 tl:py-5 tl:pl-5 tl:w-464 dt:py-20 dt:w-730">
          <h2 className="font-medium text-white font-Montserrat mb:text-2xl mb:text-center mb:mb-3 tl:text-3xl tl:text-left tl:mb-6 dt:text-4xl ">
            {text.aboutMe.title}
          </h2>
          <p className="text-white font-Montserrat mb:text-base mb:text-center tl:text-lg tl:text-left">
            {text.aboutMe.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
