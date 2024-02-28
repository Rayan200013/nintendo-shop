import React from "react";
import Slider from "react-slick";
import { images } from "../../assets/images/image";
import { Link } from "react-router-dom";
import "./style.css";

function AbstractCards() {
  const image = [
    images.stardew,
    images.secreenshot1,
    images.stardew,
    images.stardew,
    images.stardew,
    images.stardew,
  ];

  const settings = {
    customPaging: function (i) {
      return (
        <Link>
          <img src={image[i]} alt={`Slide ${i + 1}`} />
        </Link>
      );
    },
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {image.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Custom Arrow Components
const CustomPrevArrow = (props) => (
  <div className="custom-prev-arrow" {...props}>
    {/* Your custom previous arrow icon or content */}
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-next-arrow" {...props}>
    {/* Your custom next arrow icon or content */}
  </div>
);

export default AbstractCards;
