import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/images/image";

const Footer = () => {
  return (
    <section className="bg-gray-800 text-white">
      <div className=" flex flex-col  justify-between">
        {/* First Section - Logo and Social Icons */}
        <div className="flex items-center flex-row justify-between bg-primary py-10 px-10 ">
          <img
            src={images.nintendoFooter}
            alt="Logo"
            className="h-12 w-auto mr-8"
          />
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-gray-400">
              {/* <FontAwesomeIcon icon={faFacebook} size="lg" /> */}
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link to="#" className="hover:text-gray-400">
              {/* <FontAwesomeIcon icon={faInstagram} size="lg" /> */}
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link to="#" className="hover:text-gray-400">
              {/* <FontAwesomeIcon icon={faTwitter} size="lg" /> */}
              <i class="fa-brands fa-x-twitter"></i>
            </Link>

            <Link to="#" className="hover:text-gray-400">
              {/* <FontAwesomeIcon icon={faLinkedin} size="lg" /> */}
              <i class="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </div>

        {/* Second Section - Two Rows of Columns */}
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-0">
          {/* First Row */}
          <div className="flex flex-col border-r border-gray-600 pr-8">
            <h5 className="font-semibold text-lg mb-2">
              <Link to="#" className="hover:text-gray-400">
                About Us
              </Link>
            </h5>
            <ul>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Vision
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Values
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Row */}
          <div className="flex flex-col border-r border-gray-600 pl-8">
            <h5 className="font-semibold text-lg mb-2">
              <Link to="#" className="hover:text-gray-400">
                Services
              </Link>
            </h5>
            <ul>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-400">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Third Section - Image */}
        <div className="hidden lg:block">
          <img src="/path/to/image.jpg" alt="Image" className="h-20 w-auto" />
        </div>

        {/* Fourth Section - Copyright, Links, Language */}
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-0">
          {/* Left Paragraph */}
          <p className="text-sm lg:mr-8">
            © Nintendo. Games are property of their respective owners. Nintendo
            of America Inc. Headquarters are in Redmond, Washington, USA
          </p>

          {/* Middle Links */}
          <div className="flex flex-col lg:flex-row lg:mr-8">
            <Link
              to="#"
              className="text-sm hover:text-gray-400 lg:mr-4 mb-2 lg:mb-0"
            >
              Contact Us
            </Link>
            <Link
              to="#"
              className="text-sm hover:text-gray-400 lg:mr-4 mb-2 lg:mb-0"
            >
              Website Feedback
            </Link>
            <Link
              to="#"
              className="text-sm hover:text-gray-400 lg:mr-4 mb-2 lg:mb-0"
            >
              Terms of Use
            </Link>
            <Link
              to="#"
              className="text-sm hover:text-gray-400 lg:mr-4 mb-2 lg:mb-0"
            >
              Documents & Policies
            </Link>
          </div>

          {/* Right Logo and Language */}
          <div className="flex items-center">
            <img
              src="/path/to/logo.png"
              alt="Logo"
              className="h-8 w-auto mr-2"
            />
            <Link to="#" className="text-sm hover:text-gray-400">
              English (United States)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
