import React from 'react';
import {ReactComponent as Stripes} from "./svg/svg-stripes.svg"
import Zelimhan from "./images/zelimkhan.png"
const AboutMe = () => {
    return (
        <div className="bg-aboutMeBg w-1/1 h-550 pt-4" >

            <div className='flex justify-center'>
                <img src={Zelimhan}/>
            </div>
            <div className='p-4 flex flex-col items-center '>
                <h1 className='text-white mb-8'>AboutMe</h1>
                <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Suspendisse varius enim in eros<br/> elementum tristique. </p>

<p className='text-center text-white'>Duis cursus, mi quis viverra ornare, eros dolor<br/> interdum nulla, ut commodo diam libero vitae<br/> erat. Aenean faucibus nibh et justo cursus id<br/> rutrum lorem imperdiet</p>
            </div>
        </div>
    );
}

export default AboutMe;