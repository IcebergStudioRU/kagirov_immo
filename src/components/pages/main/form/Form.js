import React from 'react'
const Form = () => {
    return (
        <div>
            <div className='bg-formImage bg-cover bg-no-repeat h-96'>
                <div className='max-w-mobileContainer mx-auto pt-16 pb-3 px-5 flex flex-col items-center'>
                    <h1>SELL / RENT</h1>
                    <p>WITH ALL!</p>
                    <form className='flex flex-col items-center'>
                        <label className='flex flex-col'>
                            Name
                            <input className='w-72 h-12'/>
                        </label>
                        <label className='flex flex-col'>
                            Phone
                            <input className='w-72 h-12'/>
                        </label>
                        <label className='flex flex-col'>
                            E-mail
                            <input className='w-72 h-12'/>
                        </label>
                        <div>
                            <button>

                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;