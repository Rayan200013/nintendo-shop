import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images/image";

const Footer = () => {
  return (
    <section className=" text-white">
      {/* First Section - Logo and Social Icons */}
      <div className="flex flex-col items-center lg:flex-row justify-between bg-primary py-10 px-3 lg:px-16">
        <img
          src={images.nintendoFooter}
          alt="Logo"
          className="h-12 w-auto mb-4 lg:mb-0 lg:mr-8"
        />
        <div className="flex space-x-4">
          <Link to="#" className="pr-10">
            <i className="fa-brands fa-facebook text-2xl lg:text-3xl"></i>
          </Link>
          <Link to="#" className="pr-10">
            <i className="fa-brands fa-instagram text-2xl lg:text-3xl"></i>
          </Link>
          <Link to="#" className="pr-10">
            <i className="fa-brands fa-x-twitter text-2xl lg:text-3xl"></i>
          </Link>
          <Link to="#" className="">
            <i className="fa-brands fa-youtube text-2xl lg:text-3xl"></i>
          </Link>
        </div>
      </div>

      {/* Second Section - Two Rows of Columns */}
      <div className="flex flex-col lg:flex-row my-2 lg:mt-10 lg:mx-20">
        {/* First Row */}
        <div className="flex flex-col border-r border-l border-light pr-8 lg:pr-16 pl-5 w-full lg:w-1/4">
          <h2 className="font-semibold text-lg mb-2">
            <Link
              to="#"
              className="hover:border-b hover:border-primaryHover text-heavy font-sans font-bold "
            >
              About Us
            </Link>
          </h2>
          <ul>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Corporate Social Responsibility
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Vision
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Values
              </Link>
            </li>
          </ul>
        </div>

        {/* Second Row */}
        <div className="flex flex-col border-r border-light pr-8 lg:pr-20 pl-5 mt-4 lg:mt-0 w-full lg:w-1/4">
          <h5 className="font-bold text-lg mb-2">
            <Link
              to="#"
              className="hover:border-b hover:border-primaryHover text-heavy font-sans font-bold"
            >
              Shop
            </Link>
          </h5>
          <ul>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Hardware
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Merchandise
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Sales & deals
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Exclusives
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Online service
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Nintendo NY store
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Row */}
        <div className="flex flex-col border-r border-light pr-8 lg:pr-16 pl-5 mt-4 lg:mt-0 w-full lg:w-1/4">
          <h5 className="font-semibold text-lg mb-2">
            <Link
              to="#"
              className="hover:border-b hover:border-primaryHover text-heavy font-sans font-bold"
            >
              My Nintendo Store orders
            </Link>
          </h5>
          <ul>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Order details
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Shipping info
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Returns & exchanges
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Fourth Row */}
        <div className="flex flex-col border-light pr-8 pl-5 mt-4 lg:mt-0 w-full lg:w-1/4">
          <h5 className="font-semibold text-lg mb-2">
            <Link
              to="#"
              className="hover:border-b hover:border-primaryHover text-heavy font-sans font-bold"
            >
              Support
            </Link>
          </h5>
          <ul>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Nintendo Switch
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Nintendo Account
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Other systems
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Repairs
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Nintendo product recycling
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Second Section - Two Rows of Columns */}

      {/* Third Section */}
      <div className="flex flex-col lg:flex-row my-2 lg:mt-10 lg:mx-20">
        {/* First Row */}
        <div className="flex flex-col border-r border-l border-light pr-8 lg:pr-16 pl-5 w-full lg:w-1/4">
          <h2 className="font-semibold text-lg mb-2">
            <Link
              to="#"
              className="hover:border-b hover:border-primaryHover text-heavy font-sans font-bold "
            >
              Parents
            </Link>
          </h2>
          <ul>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Parents
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Info for parents
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Parental controls
              </Link>
            </li>
          </ul>
        </div>

        {/* Second Row */}
        <div className="flex flex-col border-r border-light pr-8 lg:pr-20 pl-5 mt-4 lg:mt-0 w-full lg:w-1/4">
          <h5 className="font-bold text-lg mb-2">
            <Link
              to="#"
              className="hover:border-b hover:border-primaryHover text-heavy font-sans font-bold"
            >
              Community
            </Link>
          </h5>
          <ul>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Community guidelines
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Online safety principles
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Row */}
        <div className="flex flex-col border-r border-light pr-8 lg:pr-16 pl-5 mt-4 lg:mt-0 w-full lg:w-1/4">
          <h5 className="font-semibold text-lg mb-2">
            <Link
              to="#"
              className="hover:border-b hover:border-primaryHover text-heavy font-sans font-bold"
            >
              Privacy
            </Link>
          </h5>
          <ul>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-sans font-bold text-base text-center lg:text-left mr-3 text-primary hover:text-primaryHover hover:border-primaryHover hover:border-b block py-1"
              >
                Cookies and interest-based ads
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Third Section */}

      {/* Fourth Section - Image */}
      <section className="container mx-auto text-right py-4 lg:py-8">
        <img
          src={images.esrb}
          alt="ESRB Rating"
          className="h-20 w-auto inline-block"
        />
      </section>
      {/* Fourth Section - Image */}

      {/* Fifth Section - Copyright, Links, Language */}
      <section className="bg-gray-700 py-4 lg:py-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16">
          {/* Left Paragraph */}
          <p className="text-xxsm lg:text-sm lg:mr-8 mb-4 lg:mb-0">
            © Nintendo. Games are property of their respective owners. Nintendo
            of America Inc. Headquarters are in Redmond, Washington, USA
          </p>

          {/* Middle Links */}
          <div className="flex flex-col lg:flex-row lg:mr-8 text-xsm">
            <Link
              to="#"
              className="text-xxsm lg:text-sm hover:border-b hover:border-primaryHover lg:mr-6 mb-2 lg:mb-0"
            >
              Contact Us
            </Link>
            <Link
              to="#"
              className="text-xxsm lg:text-sm hover:text-gray-400 lg:mr-6 mb-2 lg:mb-0"
            >
              Website Feedback
            </Link>
            <Link
              to="#"
              className="text-xxsm lg:text-sm hover:text-gray-400 lg:mr-6 mb-2 lg:mb-0"
            >
              Terms of Use
            </Link>
            <Link
              to="#"
              className="text-xxsm lg:text-sm hover:text-gray-400 mb-2 lg:mb-0"
            >
              Documents & Policies
            </Link>
          </div>

          {/* Right Logo and Language */}
          <div className="flex items-center">
            <i className="fas fa-flag-usa mr-2"></i>
            <Link to="#" className="text-xs lg:text-sm">
              English (United States)
            </Link>
          </div>
        </div>
      </section>
      {/* Fifth Section - Copyright, Links, Language */}
    </section>
  );
};

export default Footer;
