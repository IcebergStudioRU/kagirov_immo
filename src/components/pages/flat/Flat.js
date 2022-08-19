import React from "react";
import Slider from "react-slick";
const Flat = ({ flat }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={flat.images[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>

      <div className="max-w-mobileContainer mx-auto p-5 flex flex-col items-center">
      <p className="text-formTextColor font-Montserrat text-xl text-center mb-12">
              {flat.address}
      </p>
        <div className="w-250 h-300">
          <Slider {...settings}>
            {flat.images.map((image) => (
              
                <img src={image}  className="w-250 h-380 object-cover mb-3"  />
              
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Flat;
