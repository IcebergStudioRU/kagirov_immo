import React from 'react'
import { ReactComponent as Logo } from "../../assets/footer/svg/logo-kagirov-immo.svg";
const Footer = () => {
    return (
    <div className='bg-footerBg mb:h-300 tl:h-493 bg-no-repeat bg-cover'>
        <div className='bg-footerCoating mb:h-300 tl:h-493 bg-no-repeat bg-cover'>
            <div className='mb:max-w-mobileContainer  tl:max-w-tabletContainer mx-auto mb:py-32 tl:py-52 px-5 flex flex-col items-center'>
                <Logo className='mb:w-140 mb:h-46 tl:w-280 tl:h-80'/>
            </div>
        </div>
    </div>
    );
}

export default Footer;