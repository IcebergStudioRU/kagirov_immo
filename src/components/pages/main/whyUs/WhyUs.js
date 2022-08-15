import React from 'react'
import './WhyUs.css'
const WhyUs = () => {
    return (
        <div className='bg-whyUsImage h-420 bg-cover bg-no-repeat'>
            <h1 className='text-white font-Roboto'>WHY US?</h1>
            <div>
                <p className='num text-white font-AvenirNext text-4xl font-extrabold'>+170</p>
                <p className='text-white font-Roboto'>projects completed</p>    
            </div>
            <div>
                <p className='num text-white font-Roboto text-4xl font-extrabold'>+12</p>
                <p className='text-white font-Roboto'>year in business</p>                
            </div>
            <div>
                <p className='num text-white font-Roboto text-4xl font-extrabold'>+300</p>
                <p className='text-white font-Roboto'>happy clients</p>                            
            </div>

        </div>
    );
}

export default WhyUs;