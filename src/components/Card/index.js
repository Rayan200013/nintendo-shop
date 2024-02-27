import React from "react";

const Card = ({ data }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img className="w-full" src={data.image} alt={data.title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
        <p className="text-gray-600">{data.date}</p>
        <div className="my-4">
          <p className="text-lg font-semibold">{data.space}</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {data.buttonText}
          </button>
          {data.saleEnd && (
            <p className="text-gray-600">Sales end: {data.saleEnd} days</p>
          )}
        </div>
        <div className="flex items-center mb-4">
          <div className="border-l-2 pl-2">
            <p>{data.text}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-4 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4c-4 0-7 3-7 7 0 5 7 10 7 10s7-5 7-10c0-4-3-7-7-7z"
            />
          </svg>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold">{data.price}</p>
            {data.originalPrice && (
              <p className="text-gray-500 line-through">{data.originalPrice}</p>
            )}
          </div>
          {data.salePercentage && (
            <p className="text-green-500 font-semibold">
              {data.salePercentage}% off
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
