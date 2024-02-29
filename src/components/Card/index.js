import React from "react";

const Card = ({ data }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer h-440">
      <img className="w-full" src={data.image} alt={data.title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 font-sans hover:text-primaryHover">
          {data.title}
        </h2>
        <p className="text-gray-600">{data.date}</p>
        <div className="my-4">
          <p className="text-lg font-semibold">{data.space}</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {data.buttonText}
          </button>
          {data.saleEnd && (
            <p className="text-gray-600">Sales end: {data.saleEnd} hr</p>
          )}
        </div>

        <div className="flex justify-between pb-3">
          <div className="flex">
            <p className="text-lg font-semibold pr-2">{data.price}</p>
            {data.originalPrice && (
              <p className="text-gray-500 line-through">{data.originalPrice}</p>
            )}
          </div>
          {data.salePercentage && (
            <p className="text-green-500 font-semibold">
              - {data.salePercentage}%
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="border-l-2 pl-2 border-primary">
            <p>{data.text}</p>
          </div>

          <i class="fa-regular fa-heart text-xl text-primary hover:text-primaryHover hover:cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
