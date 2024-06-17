import React, { useState } from "react";
import logo from "../../src/Assert/Logo.avif";
import food from "../../src/Assert/instafoodlogo.webp";
import marble from "../../src/Assert/marbleslogo.webp";
import composite from "../../src/Assert/Compositeslogo.webp";
import skyline from "../../src/Assert/shylinelogo.webp";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaAngleDown,
} from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800 bg-[#181818] relative">
      <div className="container flex h-10 md:justify-between md:space-x-8 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src={logo}
            alt="shetalogo"
            className=""
            width={100}
            height={100}
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex text-white">
          <li
            className="relative flex items-center  hover:underline-offset-8 hover:underline  border h-full"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 justify-center gap-1 "
            >
              What we do <FaAngleDown />
            </a>
            {isDropdownOpen && (
              <div
                className="absolute top-full bg-[#060503] shadow-md z-30 w-full left-0 opacity-90 animate-flipdown border border-red-700"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="grid grid-cols-2 w-44 mx-auto">
                  <div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-200 w-full border"
                    >
                      Overview
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-200"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-200"
                    >
                      Option 3
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-200 w-full border"
                    >
                      Overview
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-200"
                    >
                      Option 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-gray-200"
                    >
                      Option 3
                    </a>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1"
            >
              Show we are <FaAngleDown />
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center md:space-x-4 gap-2">
          {/* Uncomment social media icons if needed */}
          {/* <FaFacebook className="hover:text-[#ec1c24] cursor-pointer" />
          <FaInstagram className="hover:text-[#ec1c24] cursor-pointer" />
          <FaTwitter className="hover:text-[#ec1c24] cursor-pointer" /> */}
          <img
            src={food}
            alt="food"
            className="rounded-3xl"
            width={40}
            height={40}
          />
          <img
            src={marble}
            alt="food"
            className="rounded-3xl"
            width={40}
            height={40}
          />
          <img
            src={composite}
            alt="food"
            className="rounded-3xl"
            width={40}
            height={40}
          />
          <img
            src={skyline}
            alt="food"
            className="rounded-3xl"
            width={40}
            height={40}
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="h-72 bg-[#060503] absolute top-0 z-30"></div>
      )}
    </header>
  );
};

export default Header;
