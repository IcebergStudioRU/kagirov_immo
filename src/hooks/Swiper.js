import { useState } from "react";

export const useSwiperTouch = (length) => {
  const [touch, setTouch] = useState(0);
  const [untouch, setUntouch] = useState(0);
  const [imageNumber, setImageNumber] = useState(0);

  const moveImage = () => {
    if (untouch === 0) {
      return;
    }
    if (touch > untouch) {
      if (touch - untouch < 30) {
        return;
      } else if (length - 1 > imageNumber) {
        setImageNumber((prev) => {
          return prev + 1;
        });
      } else {
        setImageNumber(0);
      }
    }
    if (touch < untouch) {
      if (touch - untouch > -30) {
        return;
      } else if (0 < imageNumber) {
        setImageNumber((prev) => {
          return prev - 1;
        });
      } else {
        setImageNumber(length - 1);
      }
    }
    setTouch(0);
    setUntouch(0);
  };

  const touchStart = (e) => {
    const x1 = Math.round(e.touches[0].clientX);
    setTouch(x1);
  };

  const touchMove = (e) => {
    const x2 = Math.round(e.touches[0].clientX);
    setUntouch(x2);
  };

  const changeImageNumber = (imageNumber) => {
    setImageNumber(imageNumber);
  };

  const changeObjectRight = () => {
    if (length - 1 > imageNumber) {
      setImageNumber((prev) => {
        return prev + 1;
      });
    } else {
      setImageNumber(0);
    }
  };

  const changeObjectLeft = () => {
    if (0 < imageNumber) {
      setImageNumber((prev) => {
        return prev - 1;
      });
    } else {
      setImageNumber(length - 1);
    }
  };

  return [
    imageNumber,
    touchStart,
    touchMove,
    moveImage,
    changeImageNumber,
    changeObjectRight,
    changeObjectLeft,
  ];
};
