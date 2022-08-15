import React from 'react'
import {ReactComponent as ViewAll} from "./svg/viewAllicon.svg"
import flat1 from './img/flat1.png'
import flat2 from './img/flat2.png'
import flat3 from './img/flat3.png'
const Products = () => {
    return (
        <div className='bg-productBg'>
            <div className='max-w-mobileContainer mx-auto pt-5 pb-24 px-5 flex flex-col items-center'>
                <ul className='flex flex-col items-center mb-12'>
                    <li className='mb-10'>
                        <div className="relative">
                            <img src={flat1}/>
                            <div className='absolute bottom-0 w-100% bg-flatsAddressBg h-16 flex justify-center items-center'>
                                <p className='text-white font-Montserrat text-xl'>10 East 76th St.</p>
                            </div>
                        </div>
                    </li>
                    <li className='mb-10'>
                        <div className="relative">
                            <img src={flat2}/>
                            <div className='absolute bottom-0 w-100% bg-flatsAddressBg h-16 flex justify-center items-center'>
                                <p className='text-white font-Montserrat text-xl'>10 East 76th St.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="relative">
                            <img src={flat3} />
                            <div className='absolute bottom-0 w-100% bg-flatsAddressBg h-16 flex justify-center items-center'>
                                <p className='text-white font-Montserrat text-xl'>10 East 76th St.</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <p className='font-Montserrat text-2xl flex flex-col items-center'>View All<ViewAll/></p>
            </div>
        </div>
    );
}

export default Products;