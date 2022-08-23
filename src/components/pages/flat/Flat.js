import React, { useState } from "react";
import { ReactComponent as Bed } from "./svg/bed.svg";
import { ReactComponent as Door } from "./svg/door.svg";
import { ReactComponent as Bath } from "./svg/bath.svg";
import { Link } from "react-router-dom";
const Flat = ({ flat }) => {
  const [imageNumber, setImageNumber] = useState(0);

  const changeImageNumber = (imageNumber) => {
    setImageNumber(imageNumber)
  }

  return (
    <>
      <div className="max-w-mobileContainer mx-auto px-5 pb-14 pt-5">
      <div className="mb-5">
        <Link to="/" className="font-Montserrat text-xl font-medium text-formTextColor">
            Back
        </Link>
      </div>
        <p className="font-Montserrat text-xl font-medium mb-14 text-formTextColor">
          {flat.address}
        </p>
      <div className="flex flex-col items-center mb-14">
        <div className="w-72 h-96 relative mb-2 overflow-hidden">
          <ul
            className="absolute flex w-800 top-0 "
            timeout={200}
            style={{ left: `${-288 * imageNumber}px`, transition: "0.8s" }}
          >
            {flat.images.map((image, index) => (
              <li className="w-72 h-96">
                <img
                  src={image}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex">
          {flat.images.map((image, index) => (
            <li
              className="w-12 h-16 mr-2 last:mr-0"
              onClick={() => {
                changeImageNumber(index);
              }}
            >
              <img
                src={image}
                alt="img"
                className="w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>
        </div>
      <p className="text-2xl font-Montserrat font-semibold text-formTextColor mb-5">
        {flat.price}$
      </p>
      <p className="gg w-80 text-formTextColor font-Montserrat font-normal mb-10">
        {flat.description}
      </p>
      <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <Bed className="mb-1" />
                <p className="text-formTextColor font-Montserrat text-xs font-medium">
                  {flat.bed} bed
                </p>
              </div>
              <div className="flex flex-col items-center mr-4">
                <Door className="mb-1" />
                <p className="text-formTextColor font-Montserrat text-xs font-medium">
                  {flat.rooms} rooms
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <Bath className="mb-1" />
                <p className="text-formTextColor font-Montserrat text-xs font-medium">
                  {flat.bath} bath
                </p>
              </div>
            </div>
      </div>
    
    </>
  );
};

export default Flat;
