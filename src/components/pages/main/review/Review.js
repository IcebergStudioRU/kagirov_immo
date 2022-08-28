import React, {useState, useEffect} from 'react'
import { getReviews } from '../../../../utils/firebase';
import FlatPreview from '../flatsPreview/flatPreview/FlatPreview';
import "./Review.css"

const Quotes = () => {
    const [reviewNumber, setReviewNumber] = useState(0);
    const [reviews, setReviews] = useState([])
    const [touch, setTouch] = useState(0)
    const [move, setMove] = useState(0)
    useEffect(() => {
        getReviews().then((response) => setReviews([...response]));
      }, []);
    const changeReviewNumber = (reviewNumber) => {
        setReviewNumber(reviewNumber);
      };
    const touchStart = (e) => {
        setTouch(Math.round(e.touches[0].clientX))
        console.log(touch)
    }
    const touchMove = (e) => {
        setMove(Math.round(e.touches[0].clientX))
        console.log(move)
    }
    const touchEnd = () => {
        if (move === 0) {
            return
        }
        if (touch > move) {
            if (touch - move < 30) {
                return
            } else if (reviews.length - 1 > reviewNumber) {
                setReviewNumber((prev) => prev + 1)
            } else {
                setReviewNumber(0)
            }
        }
        if (touch < move) {
            if (touch - move > -30) {
                return
            } else if (0 < reviewNumber) {
                setReviewNumber((prev) => prev - 1)
            } else {
                setReviewNumber(reviews.length - 1)
            }
        }
        setTouch(0)
        setMove(0)
    }
    return (
        
        <div className='bg-QuotesBg h-350'>
            <div className='bg-quotesMeImage bg-bottom bg-no-repeat h-350'>
                <div className='max-w-mobileContainer mx-auto p-5'>
                    <div className='flex flex-col items-center'>
                        <div className='w-300 h-300 relative overflow-hidden'>
                            <div className='flex absolute top-0 left-300' onTouchStart={(e) => touchStart(e)} onTouchMove={(e) => touchMove(e)} onTouchEnd={() => touchEnd()} style={{ left: `${-300 * reviewNumber}px`, transition: "0.8s" }}>
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
                        <div className='flex justify-center items-center'>
                            {reviews.map((bullet, index) => (
                                <div className={index === reviewNumber ? 'review_active-bullet' : 'review_bullet'}  onClick={() => {changeReviewNumber(index)}}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes;