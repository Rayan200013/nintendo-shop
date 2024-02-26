import React from "react";

const Card = ({ data }) => {
  const {
    image,
    title,
    date,
    freeDemo,
    salesEnd,
    price,
    originalPrice,
    salePercentage,
    description,
    favorite,
  } = data;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-auto" />

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-lg mb-2">{title}</h3>

        {/* Date */}
        <p className="text-sm text-gray-600 mb-2">{date}</p>

        {/* Free Demo or Sales End */}
        {freeDemo ? (
          <p className="text-green-500 font-semibold mb-2">Free Demo</p>
        ) : (
          <p className="text-red-500 font-semibold mb-2">
            Sales End: {salesEnd} days
          </p>
        )}

        {/* Price */}
        <div className="flex items-center mb-2">
          <p className="font-semibold">{price}</p>
          {originalPrice && (
            <p className="text-gray-500 ml-2 line-through">{originalPrice}</p>
          )}
          {salePercentage && (
            <p className="text-green-500 ml-2">{salePercentage}% OFF</p>
          )}
        </div>

        {/* Description */}
        <p className="mb-4">{description}</p>

        {/* Action Section */}
        <div className="flex justify-between">
          <div className="border-l pl-4">
            <p>Text with border-left</p>
          </div>
          <div className="flex items-center">
            {favorite && <i className="ri-heart-fill text-red-500 mr-2"></i>}
            {/* You can replace the icon above with any heart icon you want */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
