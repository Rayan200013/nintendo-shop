import React from "react";
import { Link } from "react-router-dom";

const SectionFour = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        {/* Row 1 start */}
        <div className="flex flex-col lg:flex-row items-center border-b border-t mx-8  px-1 py-3">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
            <i className="fa-regular fa-calendar-days h-8 w-8 text-xxl text-heavy"></i>
            <h4 className="font-bold text-lg ml-2 lg:ml-4 text-heavy">
              Release date
            </h4>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <p className="font-sans font-regular text-base text-heavy text-center lg:text-left">
              October 5, 2017
            </p>
          </div>
        </div>
        {/* Row 1 End*/}

        {/* Row 2 start */}
        <div className="flex flex-col lg:flex-row items-center border-b  mx-8  px-1 py-3">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
            <i class="fa-solid fa-user-group h-8 w-8 text-xxl text-heavy"></i>
            <h4 className="font-bold text-lg ml-2 lg:ml-4 text-heavy">
              No. of players
            </h4>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <Link className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover border-b border-primary hover:border-primaryHover">
              Single System (1)
            </Link>
            <Link className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover border-b border-primary hover:border-primaryHover">
              Local wireless (1)
            </Link>
            <Link className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover border-b border-primary hover:border-primaryHover">
              Online (1-4)
            </Link>
          </div>
        </div>

        {/* Row 3 start */}
        <div className="flex flex-col lg:flex-row items-center border-b  mx-8  px-1 py-3">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
            <i class="fa-solid fa-gamepad h-8 w-8 text-xxl text-heavy"></i>
            <h4 className="font-bold text-lg ml-2 lg:ml-4 text-heavy">Genre</h4>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <Link className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover border-b border-primary hover:border-primaryHover">
              Role-Playing
            </Link>
            <Link className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover border-b border-primary hover:border-primaryHover">
              Simulation
            </Link>
          </div>
        </div>
        {/* Row 3 End */}

        {/* Row 4 start */}
        <div className="flex flex-col lg:flex-row items-center border-b  mx-8  px-1 py-3">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
            {/* <i class="fa-solid fa-user-group h-8 w-8 text-xxl text-heavy"></i> */}
            <i class="fa-solid fa-building h-8 w-8 text-xxl text-heavy"></i>
            <h4 className="font-bold text-lg ml-2 lg:ml-4 text-heavy">
              Publisher
            </h4>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <Link className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover border-b border-primary hover:border-primaryHover">
              ConcernedApe
            </Link>
          </div>
        </div>
        {/* Row 4 End */}

        {/* Row 5 start */}
        <div className="flex flex-col lg:flex-row items-center border-b  mx-8  px-1 py-3">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
            {/* <i class="fa-solid fa-user-group h-8 w-8 text-xxl text-heavy"></i> */}
            <i class="fa-solid fa-gear h-8 w-8 text-xxl text-heavy"></i>
            <h4 className="font-bold text-lg ml-2 lg:ml-4 text-heavy">
              ESRB rating
            </h4>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <Link className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover border-b border-primary hover:border-primaryHover">
              Everyone 10+
            </Link>
          </div>
        </div>
        {/* Row 5 End */}

        {/* Row 6 start */}
        <div className="flex flex-col lg:flex-row items-center border-b border-t mx-8  px-1 py-3">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
            <i className="fa-regular fa-calendar-days h-8 w-8 text-xxl text-heavy"></i>
            <h4 className="font-bold text-lg ml-2 lg:ml-4 text-heavy">
              Supported play modes
            </h4>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <p className="font-sans font-regular text-base text-heavy text-center lg:text-left">
              TV mode, Tabletop mode, Handheld mode
            </p>
          </div>
        </div>
        {/* Row 6 End*/}

        {/* Row 7 start */}
        <div className="flex flex-col lg:flex-row items-center border-b border-t mx-8  px-1 py-3">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
            <i class="fa-solid fa-database h-8 w-8 text-xxl text-heavy"></i>
            <h4 className="font-bold text-lg ml-2 lg:ml-4 text-heavy">
              Game file size
            </h4>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <p className="font-sans font-regular text-base text-heavy text-center lg:text-left">
              1.5 GB
            </p>
          </div>
        </div>
        {/* Row 7 End*/}

        {/* Row 8 start */}
        <div className="flex flex-col lg:flex-row items-center border-b border-t mx-8  px-1 py-3">
          {/* Left Side */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-start">
            <i class="fa-solid fa-globe h-8 w-8 text-xxl text-heavy"></i>
            <h4 className="font-bold text-lg ml-2 lg:ml-4 text-heavy">
              Release date
            </h4>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <p className="font-sans font-regular text-base text-heavy text-center lg:text-left">
              English, French, German, Italian, Japanese, Korean, Portuguese,
              Russian, Simplified Chinese, Spanish, Traditional Chinese
            </p>
          </div>
        </div>
        {/* Row 8 End*/}
      </div>
    </section>
  );
};

export default SectionFour;
