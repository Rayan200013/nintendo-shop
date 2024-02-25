import React, { useState } from "react";
import {
  heart,
  cart,
  user,
  truck,
  questionMark,
  mobile,
  search,
} from "../../assets/icons/icon";
import { images } from "../../assets/images/image";
import { Link } from "react-router-dom";

export function Header() {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="bg-white border-t border-b border-gray-200">
      <div className="container flex items-center justify-between py-0">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="#">
            <img className="h-12" src={images.logo} alt="Logo" />
          </Link>
          {/* Search Bar */}
          <div className="relative ml-4">
            <span className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fa-solid fa-magnifying-glass text-gray-400 hover:text-primary"></i>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="border-b border-blacky py-2 pl-10 pr-56 w-full focus:outline-none focus:border-blue-500 hover:border-blue-500 hover:text-primary"
              />
            </span>

            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                onClick={toggleCategories}
                className="focus:outline-none flex items-center space-x-2 hover:text-primary"
              >
                <span className="ml-1 pr-3 font-sans text-heavy text-base font-bold hover:text-primary">
                  All Categories
                </span>
                <i
                  className="fa-solid fa-chevron-down h-5 w-5 text-xl"
                  alt="Categories"
                ></i>
              </button>
              {showCategories && (
                <div className="absolute right-0 left-0 top-10 mt-2 py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    All Categories
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Games
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Hardware
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Merchandise
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    News & Events
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Support
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* this is the Secondary Menu start */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="#"
            className="flex items-center text-gray-600 hover:text-primary"
          >
            {/* <img src={questionMark} alt="Heart" className="h-6 w-6" /> */}
            <i className="fa-solid fa-circle-question h-7 w-8 text-xxl"></i>
            <span className="ml-1 font-sans text-base font-bold">Support</span>
          </Link>
          <Link
            to="#"
            className="flex items-center text-gray-600 hover:text-primary"
          >
            {/* <img src={heart} alt="Heart" className="h-6 w-6" /> */}
            <i class="fa-solid fa-heart h-7 w-8 text-xxl"></i>
            <span className="ml-1 font-sans text-base font-bold ">
              Wish List
            </span>
          </Link>
          <Link
            to="#"
            className="flex items-center text-gray-600 hover:text-primary"
          >
            {/* <img src={cart} alt="Cart" className="h-6 w-6" /> */}
            <i class="fa-solid fa-cart-shopping  h-5 w-6 text-xxl"></i>
            <span className="ml-1 font-sans text-base  font-bold">Cart</span>
          </Link>
          <Link
            to="#"
            className="flex items-center text-gray-600 hover:text-primary"
          >
            {/* <img src={user} alt="User" className="h-6 w-6" /> */}
            <i class="fa-solid fa-user  h-7 w-8 text-xxl"></i>
            <span className="ml-1 font-sans text-base  font-bold">
              Login / Sign Up
            </span>
          </Link>
          <Link
            to="#"
            className="flex items-center text-gray-600 hover:text-primary"
          >
            <img src={user} alt="User" className="h-6 w-6 hover:text-primary" />
          </Link>
        </div>

        {/* <div className="md">
          <img src={mobile} alt="Language" className="h-6 w-6" />
        </div> */}
        {/* this is the Secondary Menu End */}
      </div>
    </div>
  );
}
