import React from 'react'
import {ReactComponent as Name} from "../../assets/form/svg/Name.svg"
import {ReactComponent as Phone} from "../../assets/form/svg/Phone.svg"
import {ReactComponent as Email} from "../../assets/form/svg/E-mail.svg"
const Form = () => {
    return (
        <div className='bg-formImage bg-cover bg-no-repeat mb:h-500 tl:h-580'>
            <div className='bg-formCoating mb:h-500 tl:h-580'>
                <div className='mb:max-w-mobileContainer tl:max-w-tabletContainer mx-auto pt-16 pb-10 px-5 flex flex-col items-center'>
                    <h1 className='font-Montserrat font-bold text-formTextColor text-3xl'>SELL / RENT</h1>
                    <p className='font-Montserrat text-formTextColor text-2xl mb-10'>WITH ALL!</p>
                    <form className='flex flex-col items-center'>
                        <label className='flex flex-col mb-4 relative align-middle'>
                            <p className='font-Montserrat text-inputFormBorderColor mb:text-xs tl:text-xl'>Name</p>
                            <input className='mb:w-64 mb:h-10 tl:w-360 tl:h-52 rounded border border-inputFormBorderColor relative mb:pl-10 tl:pl-12 outline-none' type="text"/>
                            <Name className='absolute mb:top-8 tl:top-11 mb:w-4 mb:h-4 tl:w-5 tl:h-5 left-4 box-border'/>
                        </label>
                        <label className='flex flex-col mb-4 relative align-middle'>
                            <p className='font-Montserrat text-inputFormBorderColor mb:text-xs tl:text-xl'  >Phone</p>
                            <input className='mb:w-64 mb:h-10 tl:w-360 tl:h-52 rounded border border-inputFormBorderColor mb:pl-10 tl:pl-12 outline-none' type="text"/>
                            <Phone className='absolute mb:top-8 tl:top-11 mb:w-4 mb:h-4 tl:w-5 tl:h-5 left-4 box-border'/>
                        </label>
                        <label className='flex flex-col relative align-middle mb-12'>
                            <p className='font-Montserrat text-inputFormBorderColor mb:text-xs tl:text-xl' type="text">E-mail</p>
                            <input className='mb:w-64 mb:h-10 tl:w-360 tl:h-52 rounded border border-inputFormBorderColor mb:pl-10 tl:pl-12 outline-none'/>
                            <Email className='absolute mb:top-8 tl:top-11 mb:w-4 mb:h-4 tl:w-5 tl:h-5 left-4 box-border'/>
                        </label>
                        <div>
                            <button className='mb:w-32 mb:h-10 tl:w-48 tl:h-14 bg-formBtnColor rounded text-white shadow-xl font-Montserrat mb:text-xl mb:text-2xl'>
                                Contact Us!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;