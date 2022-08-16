import React from "react";
import { ReactComponent as ViewAll } from "./svg/viewAllicon.svg";
import { ReactComponent as Bed } from "./svg/bed.svg";
import { ReactComponent as Door } from "./svg/door.svg";
import { ReactComponent as Bath } from "./svg/bath.svg";
import flat1 from "./img/flat1.png";
import flat2 from "./img/flat2.png";
import flat3 from "./img/flat3.png";
import "./Product.css";
const Products = () => {
  return (
    <div className="bg-productBg">
      <div className="max-w-mobileContainer mx-auto pt-5 pb-24 px-5 flex flex-col items-center">
        <ul className="flex flex-col items-center mb-12">
          <li className="card mb-10 w-60 h-309">
            <div className="wrapper overflow-hidden relative h-309">
              <img src={flat1} alt="flat1" className="w-100% h-100% object-cover" />

              <div className="overlay  absolute w-100% h-100% top-245 left-0 bg-flatsAddressBg ">
                <div>
                  <div className="p-5 mb-6">
                    <p className="text-white font-Montserrat text-xl text-center ">10 East 76th St.</p>
                  </div>
                  <p className="text-white font-Montserrat text-xl text-center mb-6">988$</p>
                  <div className="flex flex-col justify-end ">
                    <div className="flex justify-center p-5">
                        <div className="flex flex-col items-center mr-4">
                          <Bed  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">1bed</p>
                        </div>
                        <div className="flex flex-col items-center mr-4">
                          <Door  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">3 rooms</p>
                        </div>
                        <div className="flex flex-col items-center ">
                          <Bath  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">1 bath</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0">
                      <button className="w-60 h-63 bg-seeMoreBg text-formTextColor font-semibold font-Montserrat text-xl">See more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="card mb-10 w-60 h-309">
            <div className="wrapper overflow-hidden relative h-309">
              <img src={flat2} alt="flat1" className="w-100% h-100% object-cover" />

              <div className="overlay  absolute w-100% h-100% top-245 left-0 bg-flatsAddressBg ">
                <div>
                  <div className="p-5 mb-6">
                    <p className="text-white font-Montserrat text-xl text-center ">10 East 76th St.</p>
                  </div>
                  <p className="text-white font-Montserrat text-xl text-center mb-6">988$</p>
                  <div className="flex flex-col justify-end ">
                    <div className="flex justify-center p-5">
                        <div className="flex flex-col items-center mr-4">
                          <Bed  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">1bed</p>
                        </div>
                        <div className="flex flex-col items-center mr-4">
                          <Door  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">3 rooms</p>
                        </div>
                        <div className="flex flex-col items-center ">
                          <Bath  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">1 bath</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0">
                      <button className="w-60 h-63 bg-seeMoreBg text-formTextColor font-semibold font-Montserrat text-xl">See more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="card mb-10 w-60 h-309">
            <div className="wrapper overflow-hidden relative h-309">
              <img src={flat3} alt="flat3" className="w-100% h-100% object-cover" />

              <div className="overlay  absolute w-100% h-100% top-245 left-0 bg-flatsAddressBg ">
                <div>
                  <div className="p-5 mb-6">
                    <p className="text-white font-Montserrat text-xl text-center ">10 East 76th St.</p>
                  </div>
                  <p className="text-white font-Montserrat text-xl text-center mb-6">988$</p>
                  <div className="flex flex-col justify-end ">
                    <div className="flex justify-center p-5">
                        <div className="flex flex-col items-center mr-4">
                          <Bed  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">1bed</p>
                        </div>
                        <div className="flex flex-col items-center mr-4">
                          <Door  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">3 rooms</p>
                        </div>
                        <div className="flex flex-col items-center ">
                          <Bath  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">1 bath</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0">
                      <button className="w-60 h-63 bg-seeMoreBg text-formTextColor font-semibold font-Montserrat text-xl">See more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <p className="font-Montserrat text-2xl flex flex-col items-center">
          View All
          <ViewAll />
        </p>
      </div>
    </div>
  );
};

export default Products;
