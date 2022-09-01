import React from 'react'
import './WhyUs.css'
const WhyUs = () => {
    return (
        <div className='bg-whyUsImage bg-cover bg-no-repeat mb:h-544 tl:h-580'>
            <div className='mb:max-w-mobileContainer  tl:max-w-tabletContainer mx-auto mb:pt-10 tl:pt-28 pb-12 px-5 flex flex-col items-center'>
                <h1 className='text-white font-Montserrat font-medium text-3xl mb:mb-16 tl:mb-44'>WHY US?</h1>
                <div className='mb:flex mb:flex-col tl:flex tl:flex-row'>
                    <div className='text-center mb:mr-0 tl:mr-10'>
                        <p className='num text-white font-Montserrat mb:text-4xl tl:text-6xl font-extrabold inline-block mb:mb-4'>+170</p>
                        <p className='text-white font-Montserrat mb:mb-12 tl:mb-0 mb:text-lg tl:text-2xl'>projects completed</p>    
                    </div>
                    <div className='text-center mb:mr-0 tl:mr-10'>
                        <p className='num text-white font-Montserrat mb:text-4xl tl:text-6xl font-extrabold inline-block  mb:mb-4'>+12</p>
                        <p className='text-white font-Montserrat mb:mb-12 tl:mb-0 mb:text-lg tl:text-2xl'>year in business</p>                
                    </div>
                    <div className='text-center'>
                        <p className='num text-white font-Montserrat mb:text-4xl tl:text-6xl font-extrabold inline-block  mb:mb-4'>+300</p>
                        <p className='text-white font-Montserrat mb:text-lg tl:text-2xl'>happy clients</p>                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;