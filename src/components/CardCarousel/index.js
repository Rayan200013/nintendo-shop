import React, { useState } from "react";
import Card from "../Card";
import cardsData from "../Card/data.json";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={prevCard}
        >
          &lt;
        </button>
        <div className="mx-2">
          <Card data={cardsData[currentIndex]} />
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={nextCard}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
