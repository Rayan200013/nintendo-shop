import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets//images/image";
import CtaButton from "../ctabutton";
import { Link } from "react-router-dom";

const SectionFour = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section className="bg-white py-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row bg-rating m-8 rounded">
          {/* Left Column */}
          <div className="lg:w-1/2 p-8 pr-28">
            {/* icon */}
            <img
              src={images.nintendo}
              alt="nintendo-switch"
              className="w-40 mb-4"
            />
            {/* paragraph */}
            <p className="mb-8 mt-8 font-sans font-bold text-xl text-heavy">
              Play online, access classic NES™ and Super NES™ games, and more
              with Link Nintendo Switch Online membership.
            </p>
            <div className="mb-4 mt-4 flex flex-row">
              <p className="pr-4 ">This game supports:</p>
              <Link className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover border-b border-primary hover:border-primaryHover">
                Online Play
              </Link>
              <Link className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover border-b border-primary hover:border-primaryHover">
                Save Data Cloud
              </Link>
            </div>
            <CtaButton padding="regular">Learn More</CtaButton>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <img
              src={images.consoleStation}
              alt="Placeholder"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
