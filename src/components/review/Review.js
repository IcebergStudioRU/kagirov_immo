import React, { useContext } from "react";
import "./Review.css";
import { ContextGlobal } from "../../context/GlobalContextComponent";
import { useSwiperTouch } from "../../hooks/Swiper";

const Quotes = () => {
  const { reviews } = useContext(ContextGlobal);
  const [reviewNumber, touchStart, touchMove, moveReview, changeReviewNumber] =
    useSwiperTouch(reviews.length);

  return (
    <div className="bg-QuotesBg h-350">
      <div className="bg-reviewBg bg-bottom bg-no-repeat h-350">
        <div className="max-w-mobileContainer mx-auto p-5">
          <div className="flex flex-col items-center">
            <div className="w-300 h-300 relative overflow-hidden">
              <div
                className="flex absolute top-0 left-300"
                onTouchStart={(e) => touchStart(e)}
                onTouchMove={(e) => touchMove(e)}
                onTouchEnd={() => moveReview()}
                style={{ left: `${-300 * reviewNumber}px`, transition: "0.8s" }}
              >
                {reviews.map((review, index) => (
                  <div className="flex flex-col items-center w-300 h-300 p-4">
                    <img src={review.image} alt="dsomds" className="mb-6" />
                    <p className="font-Montserrat text-white">{review.name}</p>
                    <p className="font-Montserrat mb-7 text-white text-xs">
                      {review.firstName}
                    </p>
                    <p
                      className="font-Montserrat text-center text-white"
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
