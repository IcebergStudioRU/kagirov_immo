import React from 'react'
const Quotes = () => {
    return (
        <div className='bg-QuotesBg'>
            <div className='bg-quotesMeImage bg-bottom bg-no-repeat '>
                <div className=' max-w-mobileContainer mx-auto pt-16 pb-3 px-5 flex flex-col items-center'>
                    <div className='w-20 h-20 border-2 border-r-2 rounded-full mb-3'></div>
                    <p className='font-AvenirNext text-white'>ZELIMHAN</p>
                    <p className='font-Roboto mb-7 text-white text-xs'>RIELTOR</p>
                    <p className='font-AvenirNext text-center text-white mb-14'>I don't work for quantity.  It is important to me<br/>that my clients receive my services<br/>of the highest quality!</p>
                    <div className='flex items-center'>
                        <div className='w-4 h-4 bg-bullets mr-2 rounded-full'></div>
                        <div className='w-2.5 h-2.5 bg-white mr-2 rounded-full'></div>
                        <div className='w-2.5 h-2.5 bg-white rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes;