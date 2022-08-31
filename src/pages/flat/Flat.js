//REACT
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//COMPONENETS
import Footer from "../.././components/footer/Footer";
//FUNCTIONS
import { getFlat } from "../.././utils/firebase";
//SVG
import { ReactComponent as Bed } from "../../assets/flat/svg/bed.svg";
import { ReactComponent as Door } from "../../assets/flat/svg/door.svg";
import { ReactComponent as Bath } from "../../assets/flat/svg/bath.svg";
import { useSwiperTouch } from "../../hooks/Swiper";
const COMPONENT_STATE = {
  LOAD: "LOAD",
  END: "END",
  ERROR: "ERROR",
};

const Flat = () => {
  const params = useParams();

  const [flat, setFlat] = useState({ images: [] });
  const [stateComponent, setStateComponent] = useState(COMPONENT_STATE.LOAD);
  const [imageNumber, touchStart, touchMove, moveImage, changeImageNumber] =
    useSwiperTouch(flat.images.length);

  useEffect(() => {
    if (params && params.id) {
      getFlat(params.id)
        .then((response) => {
          setFlat({ ...response });
          setStateComponent(COMPONENT_STATE.END);
          console.log();
        })
        .catch(() => setStateComponent(COMPONENT_STATE.ERROR));
    }
  }, []);

  if (COMPONENT_STATE.ERROR === stateComponent) {
    return <div>Такой квартиры не существует</div>;
  }

  if (COMPONENT_STATE.LOAD === stateComponent) {
    return <div>Загружаем</div>;
  }

  return (
    <>
      <div>
        <div className="max-w-mobileContainer mx-auto px-5 pb-14 pt-5">
          <div className="mb-5">
            <Link
              to="/"
              className="font-Montserrat text-xl font-medium text-formTextColor"
            >
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
                onTouchStart={(e) => touchStart(e)}
                onTouchMove={(e) => touchMove(e)}
                onTouchEnd={(e) => moveImage(e)}
              >
                {flat.images.map((image, index) => (
                  <li key={index} className="w-72 h-96">
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
        <Footer/>
      </div>
    </>
  );
};

export default Flat;
