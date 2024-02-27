import React from "react";
import Slider from "react-slick";
import { images } from "../../assets/images/image";
import { Link } from "react-router-dom";

function AbstractCards() {
  const image = [
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
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {image.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AbstractCards;
