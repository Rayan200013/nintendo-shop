import React from "react";
import Slider from "react-slick";
import data from "../Card/data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <button className="slick-arrow slick-prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    ),
    nextArrow: (
      <button className="slick-arrow slick-next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    ),
  };

  return (
    <>
      <section className="bg-white pb-20 px-16">
        <div className="container mx-auto px-4 md:px-20">
          <h2 className="font-sans font-heavy font-bold text-xxl py-12">
            More like this
          </h2>
          <div className="slider-container">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index}>
                  <Card data={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default PauseOnHover;
