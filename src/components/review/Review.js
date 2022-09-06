import React, { useContext, useEffect, useState } from "react";
import "./Review.css";
import { ContextGlobal } from "../../context/GlobalContextComponent";
import { useSwiperTouch } from "../../hooks/Swiper";

const Quotes = () => {
  const [sliderContainerPx, setSliderContainerPx] = useState(0)
  const { reviews, viewPort } = useContext(ContextGlobal);
  const [reviewNumber, touchStart, touchMove, moveReview, changeReviewNumber] =
    useSwiperTouch(reviews.length);
  useEffect(() => {
    let val = 0
    if (viewPort === "mobile") {
      val = -300
    } else if (viewPort === "tablet"){
      val = -400
    } else {
      val = -600
    }
    setSliderContainerPx(val)
  }, [viewPort])
  return (
    <div className="bg-QuotesBg mb:h-350 tl:h-493">
      <div className="bg-reviewBg bg-bottom bg-no-repeat mb:h-350 tl:h-493">
        <div className="mb:max-w-mobileContainer tl:max-w-tabletContainer mx-auto p-5">
          <div className="flex flex-col items-center">
            <div className="mb:w-300 mb:h-300 tl:w-400 tl:h-400 relative overflow-hidden">
              <div
                className="flex absolute top-0 left-300"
                onTouchStart={(e) => touchStart(e)}
                onTouchMove={(e) => touchMove(e)}
                onTouchEnd={() => moveReview()}
                style={{
                  left: `${sliderContainerPx * reviewNumber}px`,
                  transition: "0.8s",
                }}
              >
                {reviews.map((review, index) => (
                  <div className="flex flex-col items-center mb:w-300 mb:h-300 tl:w-400 tl:h-400 p-4">
                    <img
                      src={review.image}
                      alt="dsomds"
                      className="mb:mb-6 tl:mb-10 mb:w-16 mb:h-16 tl:w-24 tl:h-24"
                    />
                    <p className="font-Montserrat text-white mb:text-xl tl:text-3xl">
                      {review.name}
                    </p>
                    <p className="font-Montserrat mb-7 text-white mb:text-xs tl:text-lg">
                      {review.firstName}
                    </p>
                    <p
                      className="font-Montserrat text-center text-white mb:text-xs tl:text-lg"
                      id="Form"
                    >
                      {review.review}
                    </p>
                  </div>
                ))}
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
