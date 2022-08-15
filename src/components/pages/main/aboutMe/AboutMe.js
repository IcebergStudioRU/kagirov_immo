import React from 'react';
import Zelimhan from "./images/zelimkhan.png"
const AboutMe = () => {
    return (
        <div className="bg-aboutMeBg w-1/1 relative " >

            <div className='flex justify-center border-b-8-black mb-4 bg-aboutMeImage bg-no-repeat bg-cover'>
                <img src={Zelimhan}/>
            </div>
            <div className='w-100% h-4 bg-imgZelimBorderBottom absolute bottom-0 top-297'></div>
            <div className='p-4 flex flex-col items-center  '>
                <h1 className='text-white mb-6 text-2xl font-Montserrat'>About Me</h1>
                <p className='text-center text-white font-Montserrat mb-4'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Suspendisse varius enim in eros<br/> elementum tristique. </p>

<p className='text-center text-white font-Montserrat'>Duis cursus, mi quis viverra ornare, eros dolor<br/> interdum nulla, ut commodo diam libero vitae<br/> erat. Aenean faucibus nibh et justo cursus id<br/> rutrum lorem imperdiet</p>
            </div>
        </div>
    );
}

export default AboutMe;