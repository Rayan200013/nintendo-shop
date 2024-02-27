import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images/image"; // Import your images object
import data from "../Card/data.js";
import CtaButton from "../ctabutton/index.js";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import AbstractCards from "../AbstractCards/index.js";

const SectionOne = () => {
  return (
    <section className="bg-primary pt-12 pb-20">
      <div className="container mx-auto  p-12 bg-white">
        <div className="lg:flex">
          {/* Left Column */}
          <div className="lg:w-1/2 mx-auto lg:mx-0 lg:pr-8">
            {/* Breadcrumb */}
            <p className="text-gray-500 text-sm">
              Store > Games > Stardew Valley
            </p>
            {/* Picture */}
            {/* <img
              src={images.stardew}
              alt={data.title}
              className="mt-6 rounded-lg"
            /> */}
            <AbstractCards />
            {/* Left content Start*/}
            <div>
              <Link
                to="#"
                className="flex flex-col lg:flex-row items-center bg-white rounded my-6 mx-6 "
              >
                <div className="lg:w-1/4 mx-auto px-5 py-8">
                  <img src={images.stardew} alt="ESRB Rating" />
                </div>
                <div className="lg:w-3/4 mx-auto pr-8">
                  <p className="font-sans text-xsm pb-1 border-b border-blacky">
                    Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                    Gambling, Mild Language, Mild Blood
                  </p>
                  <p className="font-sans font-regular text-xsm pt-1">
                    User Interact
                  </p>
                </div>
              </Link>
            </div>
            {/* Left content End*/}
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 bg-white rounded-lg lg:ml-8 p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="border-l-2 pl-2 border-primary">
                <p>Nintendo Switch</p>
              </div>
            </div>
            <h3 className="font-sans font-bold text-lg text-heavy my-6">
              Stardew Valley
            </h3>
            <div className="flex justify-between pb-3">
              <div className="flex">
                <p className="text-lg font-semibold pr-2 text-xxl font-sans font-bold text-heavy">
                  $14.99
                </p>
              </div>
              <i className="fa-regular fa-heart text-xxxl text-primary hover:text-primaryHover hover:cursor-pointer mt-1"></i>
            </div>
            <div className="flex items-center py-10">
              <i class="fa-brands fa-bitcoin w-6 h-6 mr-4 text-xxl text-primary"></i>
              <p>Eligible for up to 75 Gold Points</p>
            </div>
            <CtaButton
              icon={faDownload}
              className="bg-primary text-white font-bold py-4 px-4 rounded mb-2 "
              fullWidth
              padding="large"
            >
              Direct Download
            </CtaButton>
            <p className="text-xs text-gray-500 mt-6">
              This item will be sent to your system automatically after
              purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
