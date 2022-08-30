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
  const {flats} = useContext(ContextGlobal)

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
          className="font-Montserrat text-2xl flex flex-col items-center"
          onClick={changeSlice}
          id="Review"
        >
          View All
          <ViewAll />
        </a>
      );
    }
    return (
      <a
        className="font-Montserrat text-2xl flex flex-col items-center "
        onClick={changeSlice}
        id="Review"
      >
        <ViewAll className="rotate-180" />
        Hide
      </a>
    );
  };

  return (
    <div className="bg-productBg" id="FlatsPrewiew">
      <div id="up"></div>
      <div className="max-w-mobileContainer mx-auto pt-5 pb-24 px-5 flex flex-col items-center">
        <ul className="flex flex-col items-center mb-12">
          {flats.slice(0, slice).map((flat, index) => (
            <li
              className="card mb-10 w-60 h-309 last:mb-0"
              id={`flatNumber${index}`}
            >
              <div className="wrapper overflow-hidden relative h-309">
                <img
                  src={flat.images[0]}
                  alt="flat1"
                  className="w-100% h-100% object-cover"
                />

                <div className="overlay  absolute w-100% h-100% top-245 left-0 bg-flatsAddressBg ">
                  <div>
                    <div className="p-5 mb-6">
                      <p className="text-white font-Montserrat text-xl text-center ">
                        {flat.address}
                      </p>
                    </div>
                    <p className="text-white font-Montserrat text-xl text-center mb-6">
                      {flat.price}$
                    </p>
                    <div className="flex flex-col justify-end ">
                      <div className="flex justify-center p-5">
                        <div className="flex flex-col items-center mr-4">
                          <Bed className="mb-1" />
                          <p className="text-white font-Montserrat text-xs font-medium">
                            {flat.bed} bed
                          </p>
                        </div>
                        <div className="flex flex-col items-center mr-4">
                          <Door className="mb-1" />
                          <p className="text-white font-Montserrat text-xs font-medium">
                            {flat.rooms} rooms
                          </p>
                        </div>
                        <div className="flex flex-col items-center ">
                          <Bath className="mb-1" />
                          <p className="text-white font-Montserrat text-xs font-medium">
                            {flat.bath} bath
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 flex justify-center items-center">
                        <Link
                          to={`/flat/${flat.id}`}
                          className="seeMoreLink"
                        >
                          See more
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
