import React from 'react'
import Footer from '../../footer/Footer';
import { ReactComponent as Telegram } from "./svg/telegram.svg";
import { ReactComponent as WhatsApp } from "./svg/WhatsApp.svg";
import { ReactComponent as Instagram } from "./svg/instagram.svg";
import { Link } from "react-router-dom";
const Contacts = (setMobileMenu) => {

    return (
    <>
        <div className='relative'>
            <div className='bg-contactsBg bg-cover bg-no-repeat h-screen'>
                <div className='bg-contactsCoating h-screen'> 
                    <div className='max-w-mobileContainer mx-auto px-5 pb-24 pt-7'>
                        <div className='flex justify-between'>
                            <h1 className='text-contactsColor font-Montserrat text-2xl font-normal mb-20'>Contacts</h1>
                            <Link to="/" className="text-contactsColor font-Montserrat text-xl font-normal mb-20">
                                Back
                            </Link>
                        </div>
                        <div className='mb-5'>
                            <a className='text-contactsColor font-Montserrat text-base' href="tel:+79688588238" ><span className='font-semibold'>Phone:</span> +7 999 999 00 00</a>
                        </div>
                        <p className='text-contactsColor font-Montserrat text-base mb-28'><span className='font-semibold'>Address:</span> 10 East 76th St.</p>
                        <div className='flex justify-center'>
                            <Telegram className='mr-3'/>
                            <WhatsApp className='mr-3'/>
                            <Instagram/>
                        </div>
                        <div className="absolute bottom-0 w-full left-0">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </>
    );
}

export default Contacts;