import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

export function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-8"
            src="/logo.svg" // Your logo image path
            alt="Logo"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-600">All Categories</span>
              <button
                onClick={toggleDropdown}
                className="ml-2 focus:outline-none"
              >
                {/* <IoMdArrowDropdown className="h-5 w-5" /> */}
              </button>
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  {/* Dropdown Content Here */}
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Category 1
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Category 2
                  </Link>
                  {/* Add more categories as needed */}
                </div>
              )}
            </div>
          </div>

          {/* Secondary Menu */}
          <div className="flex items-center space-x-4">
            <Link to="#" className="text-gray-600 hover:text-black">
              {/* <FaRegHeart className="text-xl" /> */}
              <span className="ml-1">Wishlist</span>
            </Link>
            <Link to="#" className="text-gray-600 hover:text-black">
              {/* <FaShoppingCart className="text-xl" /> */}
              <span className="ml-1">Cart</span>
            </Link>
            <Link to="#" className="text-gray-600 hover:text-black">
              {/* <FaUser className="text-xl" /> */}
              <span className="ml-1">Login / Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
