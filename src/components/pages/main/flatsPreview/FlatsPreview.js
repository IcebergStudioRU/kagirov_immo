import React, { useState, useEffect } from "react";
import { getFlats } from "../../../../utils/firebase";
import FlatPreview from "../../../flatPreview/FlatPreview";
import { ReactComponent as ViewAll } from "./svg/viewAllicon.svg";
const FlatsPreview = () => {
  const [flats, setFlats] = useState([]);
  const [slice, setSlice] = useState(3);

  useEffect(() => {
    getFlats().then((response) => setFlats([...response]));
  }, []);

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
        <button
          className="font-Montserrat text-2xl flex flex-col items-center"
          onClick={changeSlice}
        >
          View All
          <ViewAll />
        </button>
      );
    }
    return (
      <button
        className="font-Montserrat text-2xl flex flex-col items-center "
        onClick={changeSlice}
      >
        <ViewAll className="rotate-180" />
        Hide
      </button>
    );
  };

  return (
    <div className="bg-productBg">
      <div className="max-w-mobileContainer mx-auto pt-5 pb-24 px-5 flex flex-col items-center">
        <ul className="flex flex-col items-center mb-12">
          {flats.slice(0, slice).map((flat) => (
            <li className="card mb-10 w-60 h-309 last:mb-0">
              <FlatPreview flat={flat} />
            </li>
          ))}
        </ul>
        <ViewHideAll />
      </div>
    </div>
  );
};

export default FlatsPreview;