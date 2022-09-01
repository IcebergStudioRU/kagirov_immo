import React from 'react';
import Zelimhan from "../../assets/aboutMe/images/Zelimkhan.png"
const AboutMe = () => {
    return (
        <div className="bg-aboutMeBg w-1/1">
            <div className='relative'>
                <div className='flex justify-center bg-aboutMeImage bg-no-repeat bg-cover mb:mb-4 tl:mb-8'>
                    <img src={Zelimhan} alt="makler" className='mb:w-200 mb:h-300 tl:w-284 tl:h-420'/>
                </div>
                <div className='w-100% mb:h-4 tl:h-7 bg-imgZelimBorderBottom absolute bottom-0'></div>
            </div>
            <div>
                <div className='p-4 flex flex-col items-center  '> 
                    <h1 className='text-white mb-6 mb:text-2xl tl:text-3xl font-Montserrat'>About Me</h1>
                    <p className='text-center text-white font-Montserrat mb-4 mb:text-base tl:text-lg'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Suspendisse varius enim in eros<br/> elementum tristique. </p>
                    <p className='text-center text-white font-Montserrat mb:text-base tl:text-lg'>Duis cursus, mi quis viverra ornare, eros dolor<br/> interdum nulla, ut commodo diam libero vitae<br/> erat. Aenean faucibus nibh et justo cursus id<br/> rutrum lorem imperdiet</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;