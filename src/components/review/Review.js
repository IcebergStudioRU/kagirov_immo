import React, { useContext, useEffect, useState } from "react";
import "./Review.css";
import { ContextGlobal } from "../../context/GlobalContextComponent";
import { ReactComponent as ArrowLeft } from "../../assets/flatsPreview/svg/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/flatsPreview/svg/arrowRight.svg";
import { useSwiperTouch } from "../../hooks/Swiper";

const Quotes = () => {
  const [sliderContainerPx, setSliderContainerPx] = useState(0);
  const { reviews, viewPort } = useContext(ContextGlobal);
  const [
    reviewNumber,
    touchStart,
    touchMove,
    moveReview,
    changeReviewNumber,
    changeObjectRight,
    changeObjectLeft,
  ] = useSwiperTouch(reviews.length);

  useEffect(() => {
    let val = 0;
    if (viewPort === "mobile") {
      val = -320;
    } else if (viewPort === "tablet") {
      val = -500;
    } else {
      val = -700;
    }
    setSliderContainerPx(val);
  }, [viewPort]);

  return (
    <div className="bg-QuotesBg">
      <div className="mx-auto mb:p-5 mb:max-w-mobileContainer tl:p-8 tl:max-w-none tl:w-768 dt:p-10 dt:max-w-none dt:w-1200">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div
              onClick={changeObjectLeft}
              className="absolute w-12 h-12 -left-24 top-60 mb:hidden dt:block fill-white"
            >
              <ArrowLeft />
            </div>
            <div className="relative overflow-hidden mb:w-320 mb:h-300 mb:mb-3 tl:w-500 tl:h-400 tl:mb-5 dt:w-700 dt:h-500 dt:mb-8">
              <ul
                className="flex absolute"
                onTouchStart={(e) => touchStart(e)}
                onTouchMove={(e) => touchMove(e)}
                onTouchEnd={() => moveReview()}
                style={{
                  left: `${sliderContainerPx * reviewNumber}px`,
                  transition: "0.8s",
                }}
              >
                {reviews.map((review, index) => (
                  <li className="flex flex-col items-center mb:w-320 mb:h-300 tl:w-500 tl:h-400 dt:w-700 dt:h-500">
                    <img
                      src={review.image}
                      alt="dsomds"
                      className="mb:mb-6 tl:mb-10 mb:w-20 mb:h-20 tl:w-28 tl:h-28 dt:w-32 dt:h-32"
                    />
                    <p className="font-Montserrat text-white mb:text-xl tl:text-3xl dt:text-4xl">
                      {review.name}
                    </p>
                    <p className="font-Montserrat mb-5 text-white mb:text-xs tl:text-lg dt:text-xl">
                      {review.firstName}
                    </p>
                    <p
                      className="font-Montserrat text-center text-white mb:text-xs tl:text-lg dt:text-xl"
                      id="Form"
                    >
                      {review.review}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center">
              {reviews.map((bullet, index) => (
                <div
                  className={
                    index === reviewNumber
                      ? "review_active-bullet"
                      : "review_bullet"
                  }
                  onClick={() => {
                    changeReviewNumber(index);
                  }}
                ></div>
              ))}
            </div>
            <div
              onClick={changeObjectRight}
              className="absolute w-12 h-12 -right-24 top-60 mb:hidden dt:block fill-white"
            >
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="bg-QuotesBg mb:h-350 tl:h-493">
  //     <div className="bg-reviewBg bg-bottom bg-no-repeat mb:h-350 tl:h-493">
  //       <div className="mb:max-w-mobileContainer tl:max-w-tabletContainer mx-auto p-5">
  //         <div className="flex flex-col items-center">
  //           <div className="mb:w-300 mb:h-300 tl:w-400 tl:h-400 relative overflow-hidden">
  //             <div
  //               className="flex absolute top-0 left-300"
  //               onTouchStart={(e) => touchStart(e)}
  //               onTouchMove={(e) => touchMove(e)}
  //               onTouchEnd={() => moveReview()}
  //               style={{
  //                 left: `${sliderContainerPx * reviewNumber}px`,
  //                 transition: "0.8s",
  //               }}
  //             >
  //               {reviews.map((review, index) => (
  //                 <div className="flex flex-col items-center mb:w-300 mb:h-300 tl:w-400 tl:h-400 p-4">
  //                   <img
  //                     src={review.image}
  //                     alt="dsomds"
  //                     className="mb:mb-6 tl:mb-10 mb:w-16 mb:h-16 tl:w-24 tl:h-24"
  //                   />
  //                   <p className="font-Montserrat text-white mb:text-xl tl:text-3xl">
  //                     {review.name}
  //                   </p>
  //                   <p className="font-Montserrat mb-7 text-white mb:text-xs tl:text-lg">
  //                     {review.firstName}
  //                   </p>
  //                   <p
  //                     className="font-Montserrat text-center text-white mb:text-xs tl:text-lg"
  //                     id="Form"
  //                   >
  //                     {review.review}
  //                   </p>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //           <div className="flex justify-center items-center">
  //             {reviews.map((bullet, index) => (
  //               <div
  //                 className={
  //                   index === reviewNumber
  //                     ? "review_active-bullet"
  //                     : "review_bullet"
  //                 }
  //                 onClick={() => {
  //                   changeReviewNumber(index);
  //                 }}
  //               ></div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Quotes;
