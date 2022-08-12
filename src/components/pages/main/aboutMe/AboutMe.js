import React from 'react';
import {ReactComponent as Stripes} from "./svg/svg-stripes.svg"
import Zelimhan from "./images/zelimkhan.png"
const AboutMe = () => {
    return (
        <div className="bg-aboutMeBg w-1/1 h-550 pt-12" >
            <div className="bg-aboutMeImage bg-no-repeat bg-cover">
            <div>
                <img src={Zelimhan}/>
            </div>
            </div>
        </div>
    );
}

export default AboutMe;