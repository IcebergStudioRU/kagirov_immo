import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./FlatsPreview.css";
//CONTEXT
import { ContextGlobal } from "../../context/GlobalContextComponent";
//SVG
import { ReactComponent as Bed } from "../../assets/flatsPreview/svg/bed.svg";
import { ReactComponent as Door } from "../../assets/flatsPreview/svg/door.svg";
import { ReactComponent as Bath } from "../../assets/flatsPreview/svg/bath.svg";
import { ReactComponent as ViewAll } from "../../assets/flatsPreview/svg/viewAllicon.svg";

const FlatsPreview = () => {
  const [slice, setSlice] = useState(3);
  const {flats, text} = useContext(ContextGlobal)

  const changeSlice = () => {
    setSlice((prev) => {
      if (prev === 3) {
        setSlice(flats.length);
      } else {
        setSlice(3);
      }
    });
  };

  const ViewHideAll = () => {
    if (slice === 3) {
      return (
        <a
          className="font-Montserrat mb:text-2xl tl:text-3xl flex flex-col items-center"
          onClick={changeSlice}
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
        onClick={changeSlice}
        id="Review"
      >
        <ViewAll className="rotate-180" />
        {text.flatsPreview.hide}
      </a>
    );
  };

  return (
    <div className="bg-productBg" id="FlatsPrewiew">
      <div id="up"></div>
      <div className="mb:max-w-mobileContainer tl:max-w-tabletContainer mx-auto pt-5 pb-24 px-5 flex flex-col items-center">
        <ul className="flex flex-col items-center mb:mb-12 tl:mb-16">
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
        <ViewHideAll />
      </div>
    </div>
  );
};

export default FlatsPreview;
