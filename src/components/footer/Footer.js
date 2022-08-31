import React from 'react'
import { ReactComponent as Logo } from "../../assets/footer/svg/logo-kagirov-immo.svg";
const Footer = () => {
    return (
    <div className='bg-footerBg'>
        <div className='bg-footerCoating'>
            <div className='max-w-mobileContainer mx-auto py-28 px-5 flex flex-col items-center'>
                <Logo/>
            </div>
        </div>
    </div>
    );
}

export default Footer;