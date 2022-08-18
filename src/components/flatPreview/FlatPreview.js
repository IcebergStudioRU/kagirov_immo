import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Bed } from "./svg/bed.svg";
import { ReactComponent as Door } from "./svg/door.svg";
import { ReactComponent as Bath } from "./svg/bath.svg";
import './FlatPreview.css'
const FlatPreview = ({flat}) => {
    return (
        <div className="wrapper overflow-hidden relative h-309">
              <img src={flat.images[0]} alt="flat1" className="w-100% h-100% object-cover" />

              <div className="overlay  absolute w-100% h-100% top-245 left-0 bg-flatsAddressBg ">
                <div>
                  <div className="p-5 mb-6">
                    <p className="text-white font-Montserrat text-xl text-center ">{flat.address}</p>
                  </div>
                  <p className="text-white font-Montserrat text-xl text-center mb-6">{flat.price}$</p>
                  <div className="flex flex-col justify-end ">
                    <div className="flex justify-center p-5">
                        <div className="flex flex-col items-center mr-4">
                          <Bed  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">{flat.bed}bed</p>
                        </div>
                        <div className="flex flex-col items-center mr-4">
                          <Door  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">{flat.rooms} rooms</p>
                        </div>
                        <div className="flex flex-col items-center ">
                          <Bath  className="mb-1"/>
                          <p className="text-white font-Montserrat text-xs">{flat.bath} bath</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0">
                      <Link className="w-60 h-63 bg-seeMoreBg text-formTextColor font-semibold font-Montserrat text-xl" to="/flat">See more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
}

export default FlatPreview;