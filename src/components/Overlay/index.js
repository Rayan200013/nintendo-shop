import React from "react";
import { Link } from "react-router-dom";

const Overlay = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed h-2/4 w-full bg-black bg-opacity-90 top-15 left-0 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="overlay-content absolute top-15 w-full text-center flex flex-row items-center justify-around">
        <Link to="#" className="block py-4 text-gray-300 hover:text-white">
          My Nintendo Store
        </Link>
        <Link to="#" className="block py-4 text-gray-300 hover:text-white">
          Games
        </Link>
        <Link to="#" className="block py-4 text-gray-300 hover:text-white">
          Nintendo Switch
        </Link>
        <Link to="#" className="block py-4 text-gray-300 hover:text-white">
          News & Events
        </Link>
        <Link to="#" className="block py-4 text-gray-300 hover:text-white">
          Play Nintendo
        </Link>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-300 hover:text-white focus:outline-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Overlay;
