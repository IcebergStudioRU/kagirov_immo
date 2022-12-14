import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FlatsPreview.css";
//CONTEXT
import { ContextGlobal } from "../../context/GlobalContextComponent";
//SVG
import { ReactComponent as Bed } from "../../assets/flatsPreview/svg/bed.svg";
import { ReactComponent as Door } from "../../assets/flatsPreview/svg/door.svg";
import { ReactComponent as Bath } from "../../assets/flatsPreview/svg/bath.svg";
import { ReactComponent as ArrowLeft } from "../../assets/flatsPreview/svg/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/flatsPreview/svg/arrowRight.svg";
import { ReactComponent as ViewAll } from "../../assets/flatsPreview/svg/viewAllicon.svg";
import { useSwiperTouch } from "../../hooks/Swiper";

const FlatsPreview = () => {
  const { flats, text, viewPort } = useContext(ContextGlobal);

  const [activeImagesNumber, setActiveIMagesNumber] = useState(0);
  const [
    flatNumber,
    touchStart,
    touchMove,
    moveFlat,
    changeFlatNumber,
    changeObjectRight,
    changeObjectLeft,
  ] = useSwiperTouch(flats.length - activeImagesNumber);
  const [sliderContainerPx, setSliderContainerPx] = useState(0);
  const [seeMore, setSeeMore] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let px;
    let number;
    if (viewPort === "mobile") {
      px = -240;
      number = 0;
    } else if (viewPort === "tablet") {
      px = -340;
      number = 1;
    } else {
      px = -370;
      number = 2;
    }
    setSliderContainerPx(px);
    setActiveIMagesNumber(number);
  }, [viewPort]);

  const ViewHideAll = () => {
    if (!seeMore) {
      return (
        <a
          className="font-Montserrat mb:text-2xl tl:text-3xl flex flex-col items-center"
          onClick={() => setSeeMore(true)}
          id="Review"
        >
          {text.flatsPreview.viewAll}
          <ViewAll />
        </a>
      );
    }
    return (
      <a
        className="font-Montserrat mb:text-2xl tl:text-3xl flex flex-col items-center "
        onClick={() => setSeeMore(false)}
        id="Review"
      >
        <ViewAll className="rotate-180" />
        {text.flatsPreview.hide}
      </a>
    );
  };

  return (
    <div id="FlatsPrewiew">
      <div className="mx-auto mb:pt-10 mb:px-5 mb:pb-10 mb:flex mb:flex-col mb:max-w-mobileContainer  mb:items-center tl:max-w-none tl:w-768 dt:w-1200">
        <h2 className="font-medium text-black font-Montserrat mb:text-2xl mb:text-center mb:mb-8 tl:text-3xl tl:text-left tl:mb-12 dt:text-4xl">
          Current Property
        </h2>
        {seeMore === false && (
          <div className="relative">
            <div
              onClick={changeObjectLeft}
              className="absolute w-12 h-12 -left-14 top-48 mb:hidden dt:block"
            >
              <ArrowLeft />
            </div>
            <div className="relative overflow-hidden mb:w-240 mb:h-320 mb:mb-3 tl:w-640 tl:h-400 tl:mb-5 dt:w-1070 dt:h-440 dt:mb-8">
              <ul
                onTouchStart={(e) => touchStart(e)}
                onTouchMove={(e) => touchMove(e)}
                onTouchEnd={() => moveFlat()}
                className="absolute flex"
                style={{
                  left: `${sliderContainerPx * flatNumber}px`,
                  transition: "0.8s",
                }}
              >
                {flats.map((flat, index) => (
                  <li
                    key={index}
                    className="card mb:w-240 mb:h-320 tl:w-300 tl:h-400 tl:mr-10 dt:w-330 dt:h-440"
                    id={`flatNumber${index}`}
                  >
                    <div className="wrapper overflow-hidden relative mb:h-320 tl:h-400 dt:h-440">
                      <img
                        src={flat.images[0]}
                        alt="flat1"
                        className="w-100% h-100% object-cover"
                      />

                      <div className="overlay absolute bg-flatsAddressBg w-100% h-100% left-0 mb:top-240 tl:top-300 dt:top-330">
                        <div className="mb:pt-6 tl:pt-8 dt:pt-9 mb-10">
                          <p className="text-white font-Montserrat text-center mb:text-2xl tl:text-3xl dt:text-4xl  ">
                            {flat.address}
                          </p>
                        </div>
                        <p className="text-white font-Montserrat text-center mb:text-xl mb:mb-6 tl:text-2xl dt:text-3xl tl:mb-12">
                          {flat.price}$
                        </p>

                        <div className="flex justify-center">
                          <div className="flex flex-col items-center mb:mr-4 tl:mr-6 dt:mr-8">
                            <Bed className="mb-1 mb:w-8 mb:h-8 tl:w-12 tl:h-12 dt:w-16 dt:h-16 " />
                            <p className="text-white font-Montserrat font-medium mb:text-xs tl:text-base dt:text-xl">
                              {flat.bed} bed
                            </p>
                          </div>
                          <div className="flex flex-col items-center mb:mr-4 tl:mr-6 dt:mr-8">
                            <Door className="mb-1 mb:w-8 mb:h-8 tl:w-12 tl:h-12 dt:w-16 dt:h-16" />
                            <p className="text-white font-Montserrat font-medium mb:text-xs tl:text-base dt:text-xl">
                              {flat.rooms} rooms
                            </p>
                          </div>
                          <div className="flex flex-col items-center">
                            <Bath className="mb-1 mb:w-8 mb:h-8 tl:w-12 tl:h-12 dt:w-16 dt:h-16" />
                            <p className="text-white font-Montserrat font-medium mb:text-xs tl:text-base dt:text-xl">
                              {flat.bath} bath
                            </p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 flex justify-center items-center w-full ">
                          <Link to={`/flat/${flat.id}`} className="seeMoreLink">
                            {text.flatsPreview.seeMore}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center items-center">
              {flats
                .filter(
                  (item, index, array) =>
                    index + activeImagesNumber < array.length
                )
                .map((bullet, index) => (
                  <div
                    className={
                      index === flatNumber
                        ? "flatsPreview_active-bullet"
                        : "flatsPreview_bullet"
                    }
                    onClick={() => {
                      changeFlatNumber(index);
                    }}
                  ></div>
                ))}
            </div>
            <div
              onClick={changeObjectRight}
              className="absolute w-12 h-12 -right-14 top-48 mb:hidden dt:block"
            >
              <ArrowRight />
            </div>
          </div>
        )}

        {seeMore === true && (
          <ul className="mb:-mb-8 tl:flex tl:flex-wrap tl:-mr-32 dt:-mr-margin85">
            {flats.map((flat, index) => (
              <li
                key={index}
                className="card mb:w-240 mb:h-320 mb:mb-8 tl:w-300 tl:h-400 tl:mr-32 tl:mb-20 dt:w-330 dt:h-440 dt:mr-margin85"
                id={`flatNumber${index}`}
              >
                <div className="wrapper overflow-hidden relative mb:h-320 tl:h-400 dt:h-440">
                  <img
                    src={flat.images[0]}
                    alt="flat1"
                    className="w-100% h-100% object-cover"
                  />
                  <div
                    className="overlay absolute bg-flatsAddressBg w-100% h-100% left-0
                   mb:top-240 tl:top-300 dt:top-330
                   "
                  >
                    <div className="mb:pt-6 tl:pt-8 dt:pt-9 mb-10">
                      <p className="text-white font-Montserrat text-center mb:text-2xl tl:text-3xl dt:text-4xl  ">
                        {flat.address}
                      </p>
                    </div>
                    <p className="text-white font-Montserrat text-center mb:text-xl mb:mb-6 tl:text-2xl dt:text-3xl tl:mb-12">
                      {flat.price}$
                    </p>
                    <div className="flex flex-col justify-end ">
                      <div className="flex justify-center">
                        <div className="flex flex-col items-center mb:mr-4 tl:mr-6 dt:mr-8">
                          <Bed className="mb-1 mb:w-8 mb:h-8 tl:w-12 tl:h-12 dt:w-16 dt:h-16 " />
                          <p className="text-white font-Montserrat font-medium mb:text-xs tl:text-base dt:text-xl">
                            {flat.bed} bed
                          </p>
                        </div>
                        <div className="flex flex-col items-center mb:mr-4 tl:mr-6 dt:mr-8">
                          <Door className="mb-1 mb:w-8 mb:h-8 tl:w-12 tl:h-12 dt:w-16 dt:h-16" />
                          <p className="text-white font-Montserrat font-medium mb:text-xs tl:text-base dt:text-xl">
                            {flat.rooms} rooms
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <Bath className="mb-1 mb:w-8 mb:h-8 tl:w-12 tl:h-12 dt:w-16 dt:h-16" />
                          <p className="text-white font-Montserrat font-medium mb:text-xs tl:text-base dt:text-xl">
                            {flat.bath} bath
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 flex justify-center items-center w-full ">
                        <Link to={`/flat/${flat.id}`} className="seeMoreLink">
                          {text.flatsPreview.seeMore}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mb:pt-10 tl:pt-14 dt:pt-18">
          <ViewHideAll />
        </div>
      </div>
    </div>
  );
};

export default FlatsPreview;

// const changeSlice = () => {
//   setSlice((prev) => {
//     if (prev === 3) {
//       setSlice(flats.length);
//     } else {
//       setSlice(3);
//     }
//   });
// };

/* <ul className="flex flex-col items-center mb:mb-12 tl:mb-16">
          {flats.slice(0, slice).map((flat, index) => (
            <li
              key={index}
              className="card mb:mb-10 tl:mb-20 mb:w-60 mb:h-309 tl:w-380 tl:h-480 last:mb-0"
              id={`flatNumber${index}`}
            >
              <div className="wrapper overflow-hidden relative mb:h-309 tl:h-480">
                <img
                  src={flat.images[0]}
                  alt="flat1"
                  className="w-100% h-100% object-cover"
                />

                <div className="overlay absolute w-100% h-100% mb:top-245 tl:top-361 left-0 bg-flatsAddressBg ">
                  <div>
                    <div className="mb:p-5 tl:p-12 mb-10">
                      <p className="text-white font-Montserrat mb:text-xl tl:text-2xl text-center ">
                        {flat.address}
                      </p>
                    </div>
                    <p className="text-white font-Montserrat mb:text-xl tl:text-2xl text-center mb:mb-6 tl:mb-20">
                      {flat.price}$
                    </p>
                    <div className="flex flex-col justify-end ">
                      <div className="flex justify-center">
                        <div className="flex flex-col items-center mr-4">
                          <Bed className="mb-1 mb:w-8 mb:h-8 tl:w-10 tl:h-10 " />
                          <p className="text-white font-Montserrat mb:text-xs tl:text-base font-medium">
                            {flat.bed} bed
                          </p>
                        </div>
                        <div className="flex flex-col items-center mr-4">
                          <Door className="mb-1 mb:w-8 mb:h-8 tl:w-10 tl:h-10" />
                          <p className="text-white font-Montserrat mb:text-xs tl:text-base font-medium">
                            {flat.rooms} rooms
                          </p>
                        </div>
                        <div className="flex flex-col items-center ">
                          <Bath className="mb-1 mb:w-8 mb:h-8 tl:w-10 tl:h-10" />
                          <p className="text-white font-Montserrat mb:text-xs tl:text-base font-medium">
                            {flat.bath} bath
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 flex justify-center items-center w-full ">
                        <Link
                          to={`/flat/${flat.id}`}
                          className="seeMoreLink"
                        >
                          {text.flatsPreview.seeMore}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ViewHideAll /> */
