import React, {useState, useEffect} from 'react'
import { getReviews } from '../../../../utils/firebase';
import FlatPreview from '../flatsPreview/flatPreview/FlatPreview';
const Quotes = () => {
    const [reviewNumber, setReviewNumber] = useState(0);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        getReviews().then((response) => setReviews([...response]));
      }, []);
    const changeReviewNumber = (reviewNumber) => {
        setReviewNumber(reviewNumber);
      };
    return (
        // <div className='bg-QuotesBg h-350'>
        //     <div className='bg-quotesMeImage bg-bottom bg-no-repeat h-350'>
        //         <div className=' max-w-mobileContainer mx-auto flex flex-col items-center'>
        //             <div className='w-380 h-310 relative'>
        //                 <div className='flex absolute top-0'>
        //                     <div className='flex flex-col items-center'>
        //                         <div className='w-20 h-20 border-2 border-r-2 rounded-full mb-3'></div>
        //                         <p className='font-Montserrat text-white'>ZELIMHAN</p>
        //                         <p className='font-Montserrat mb-7 text-white text-xs'>RIELTOR</p>
        //                         <p className='font-Montserrat text-center text-white' id="Form">I don't work for quantity.  It is important to me<br/>that my clients receive my services<br/>of the highest quality!</p>
        //                     </div>
        //                     <div className='flex flex-col items-center'>
        //                         <div className='w-20 h-20 border-2 border-r-2 rounded-full mb-3'></div>
        //                         <p className='font-Montserrat text-white'>ZELIMHAN</p>
        //                         <p className='font-Montserrat mb-7 text-white text-xs'>RIELTOR</p>
        //                         <p className='font-Montserrat text-center text-white' id="Form">I don't work for quantity.  It is important to me<br/>that my clients receive my services<br/>of the highest quality!</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='flex items-center'>
        //                         <div className='w-4 h-4 bg-bullets mr-2 rounded-full'></div>
        //                         <div className='w-2.5 h-2.5 bg-white mr-2 rounded-full'></div>
        //                         <div className='w-2.5 h-2.5 bg-white rounded-full'></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='bg-QuotesBg h-350'>
            <div className='bg-quotesMeImage bg-bottom bg-no-repeat h-350'>
                <div className='max-w-mobileContainer mx-auto p-5'>
                    <div className='flex flex-col items-center'>
                        <div className='w-300 h-300 relative overflow-hidden'>
                            <div className='flex absolute top-0 left-300' style={{ left: `${-300 * reviewNumber}px`, transition: "0.8s" }}>
                                {reviews.map((review, index) => (
                                    <div className='flex flex-col items-center w-300 h-300 p-4'>
                                        <img src={review.image} className="mb-6"/>
                                        <p className='font-Montserrat text-white'>{review.name}</p>
                                        <p className='font-Montserrat mb-7 text-white text-xs'>{review.firstName}</p>
                                        <p className='font-Montserrat text-center text-white' id="Form">{review.review}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            {reviews.map((ff, index) => (
                                <div className='w-4 h-4 bg-bullets mr-2 rounded-full'  onClick={() => {changeReviewNumber(index)}}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes;