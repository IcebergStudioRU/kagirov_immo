import React, {useContext} from 'react';
import Zelimhan from "../../assets/aboutMe/images/Zelimkhan.png"
import { ContextGlobal } from '../../context/GlobalContextComponent';

const AboutMe = () => {
    const { text } = useContext(ContextGlobal);
    return (
        <div className="bg-aboutMeBg">
            <div className='relative'>
                <div className='flex justify-center bg-aboutMeImage bg-no-repeat bg-cover mb:mb-6 tl:mb-8'>
                    <img src={Zelimhan} alt="makler" className='mb:w-200 mb:h-300 tl:w-284 tl:h-420'/>
                </div>
                <div className='w-100% mb:h-4 tl:h-7 bg-imgZelimBorderBottom absolute bottom-0'></div>
            </div>
            <div className='flex justify-center'>
                <div className='p-4 flex flex-col items-center mb:w-380 tl:w-480'> 
                    <h1 className='text-white mb-6 mb:text-2xl tl:text-3xl font-Montserrat'>{text.aboutMe.title}</h1>
                    <p className='text-center text-white font-Montserrat mb:text-base tl:text-lg'>{text.aboutMe.text}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;