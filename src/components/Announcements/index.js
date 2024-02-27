import React from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
  return (
    <div className="bg-light">
      <div className="container mx-auto px-4 py-4 lg:flex lg:items-center">
        {/* First Column */}
        <div className="lg:w-1/2 lg:flex lg:items-center">
          <div className="flex items-center justify-center lg:justify-end w-full">
            <i class="fa-solid fa-coins text-3xl mr-2 text-primary"></i>
            <p>
              <span className="font-sans font-bold text-heavy pr-1">
                Free shipping
              </span>
              on orders $50 or more. &nbsp;
              <Link to="#" className="underline">
                Restrictions apply.
              </Link>{" "}
            </p>
          </div>
        </div>
        {/* Column Divider */}
        <div className="hidden lg:block w-px h-6 bg-gray-400 mx-4"></div>
        {/* Second Column */}
        <div className="lg:w-1/2 lg:flex lg:items-center mt-4 lg:mt-0">
          <div className="flex items-center justify-center lg:justify-start">
            <i class="fa-solid fa-coins text-3xl mr-2 text-primary"></i>

            <p>
              Earn My &nbsp;
              <Link to="#" className="underline">
                Nintendo Points
              </Link>{" "}
              on digital games.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
