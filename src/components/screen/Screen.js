import React, { useContext } from "react";
import { ContextGlobal } from "../../context/GlobalContextComponent";
import bgVideoMP4 from "../../assets/screen/videos/bgVideo.mp4"
import bgVideoWeb from "../../assets/screen/videos/bgVideo.webm"
const Screen = ({ children }) => {
  const { text } = useContext(ContextGlobal);
    return (
      <div className="relative">
        <div>{children}</div>
        <video autoPlay muted loop className="h-screen w-screen object-cover">
          <source src={bgVideoMP4} type="video/mp4"/>
          <source src={bgVideoWeb} type="video/webm"/>
        </video>
        <div className="flex flex-col items-center p-5 justify-center absolute left-0 right-0 top-0 bottom-0">
             <p className="font-Montserrat text-white font-semibold text-center flex mb:text-3xl mb:mb-3 tl:text-4xl tl:mb-5">
               {text.screen.title}
             </p>
             <div className="mb:w-200 mb:h-16 tl:w-200 tl:h-16 bg-screenBtnBg rounded text-white shadow-xl flex items-center justify-center">
               <a className=" font-Montserrat text-xl" id="AboutMe" href="#Form">
                 {text.screen.button}
               </a>
             </div>
           </div>
      </div>
    );
};

export default Screen;

//mb:h-420 tl:h-600 - первый див
// mb:h-305 tl:h-488 - второй див
