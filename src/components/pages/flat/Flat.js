import React, { useState } from "react";
const Flat = ({ flat }) => {
  const [imageNumber, setImageNumber] = useState(0);

  const changeImageNumber = (imageNumber) => {
    setImageNumber(imageNumber)
  }

  return (
    <>
      <div className="max-w-mobileContainer mx-auto p-5 flex flex-col items-center">
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
    </>
  );
};

export default Flat;
