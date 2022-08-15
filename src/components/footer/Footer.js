import React from 'react'
import { ReactComponent as Logo } from "./svg/logo-kagirov-immo.svg";
const Footer = () => {
    return (
        <div className='max-w-mobileContainer mx-auto py-28 px-5 flex flex-col items-center'>
            <Logo/>
        </div>
    );
}

export default Footer;