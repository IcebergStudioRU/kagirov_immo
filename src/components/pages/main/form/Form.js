import React from 'react'
import {ReactComponent as Name} from "./svg/Name.svg"
import {ReactComponent as Phone} from "./svg/Phone.svg"
import {ReactComponent as Email} from "./svg/E-mail.svg"
const Form = () => {
    return (
        <div className='bg-formImage bg-cover bg-no-repeat'>
            <div className='bg-formCoating'>
                <div className='max-w-mobileContainer mx-auto pt-16 pb-10 px-5 flex flex-col items-center'>
                    <h1 className='font-Roboto font-bold text-formTextColor text-3xl'>SELL / RENT</h1>
                    <p className='font-Roboto text-formTextColor text-2xl mb-10'>WITH ALL!</p>
                    <form className='flex flex-col items-center'>
                        <label className='flex flex-col mb-4 relative align-middle'>
                            <p className='font-Roboto text-inputFormBorderColor text-xs'>Name</p>
                            <input className='w-64 h-10 rounded border border-inputFormBorderColor relative pl-10 outline-none' type="text"/>
                            <Name className='absolute top-8 left-4 box-border'/>
                        </label>
                        <label className='flex flex-col mb-4 relative align-middle'>
                            <p className='font-Roboto text-inputFormBorderColor text-xs'>Phone</p>
                            <input className='w-64 h-10 rounded border border-inputFormBorderColor pl-10 outline-none' type="text"/>
                            <Phone className='absolute top-8 left-4 box-border'/>
                        </label>
                        <label className='flex flex-col relative align-middle mb-12'>
                            <p className='font-Roboto text-inputFormBorderColor text-xs' type="text">E-mail</p>
                            <input className='w-64 h-10 rounded border border-inputFormBorderColor pl-10 outline-none'/>
                            <Email className='absolute top-8 left-4 box-border'/>
                        </label>
                        <div>
                            <button className='df w-32 h-10 bg-formBtnColor rounded text-white shadow-xl'>
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