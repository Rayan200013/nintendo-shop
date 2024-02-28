import React, { useState } from "react";
import Overlay from "../Overlay";
import { Link } from "react-router-dom";

const PrimaryNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    if (menu === activeMenu) {
      setMenuOpen(!menuOpen);
    } else {
      setActiveMenu(menu);
      setMenuOpen(true);
    }
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setActiveMenu(null);
  };

  return (
    <div className="hidden-mobile md:block">
      <div className="container mx-auto px-4 pb-4 lg:flex lg:items-center justify-center">
        <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-4">
            {[
              {
                icon: "fa-brands fa-bitcoin",
                text: "My Nintendo Store",
                links: [
                  { text: "Link 1", to: "#" },
                  { text: "Link 2", to: "#" },
                ],
              },
              {
                icon: "fa-brands fa-bitcoin",
                text: "Games",
                links: [
                  { text: "Link 3", to: "#" },
                  { text: "Link 4", to: "#" },
                ],
              },
              {
                icon: "fa-brands fa-bitcoin",
                text: "Nintendo Switch",
                links: [
                  { text: "Link 5", to: "#" },
                  { text: "Link 6", to: "#" },
                ],
              },
              {
                icon: "fa-brands fa-bitcoin",
                text: "News & Events",
                links: [
                  { text: "Link 7", to: "#" },
                  { text: "Link 8", to: "#" },
                ],
              },
              {
                icon: "fa-brands fa-bitcoin",
                text: "Play Nintendo",
                links: [
                  { text: "Link 9", to: "#" },
                  { text: "Link 10", to: "#" },
                ],
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => handleMenuClick(index)}
                  className="flex items-center text-gray-600 hover:text-red-500 focus:outline-none font-sans font-bold text-heavy"
                >
                  <i className={item.icon} />
                  {item.text}
                  <i className="fas fa-angle-down ml-2" />
                </button>
                {menuOpen && activeMenu === index && (
                  <Overlay isOpen={menuOpen} onClose={handleCloseMenu}>
                    <div className="overlay-content flex flex-col items-center justify-center h-1/2">
                      {item.links.map((link, idx) => (
                        <Link
                          key={idx}
                          to={link.to}
                          className="py-4 text-gray-300 hover:text-white"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </Overlay>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNav;
