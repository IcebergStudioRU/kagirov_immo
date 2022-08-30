import React from 'react'
import './WhyUs.css'
const WhyUs = () => {
    return (
        <div className='bg-whyUsImage bg-cover bg-no-repeat '>
            <div className='max-w-mobileContainer mx-auto pt-10 pb-12 px-5 flex flex-col items-center'>
                <h1 className='text-white font-Montserrat font-medium text-3xl mb-16'>WHY US?</h1>
                <div className='text-center'>
                    <p className='num text-white font-Montserrat text-4xl font-extrabold inline-block mb-4'>+170</p>
                    <p className='text-white font-Montserrat mb-12'>projects completed</p>    
                </div>
                <div className='text-center'>
                    <p className='num text-white font-Montserrat text-4xl font-extrabold inline-block  mb-4'>+12</p>
                    <p className='text-white font-Montserrat mb-12'>year in business</p>                
                </div>
                <div className='text-center'>
                    <p className='num text-white font-Montserrat text-4xl font-extrabold inline-block  mb-4'>+300</p>
                    <p className='text-white font-Montserrat'>happy clients</p>                            
                </div>
            </div>
        </div>
    );
}

export default WhyUs;