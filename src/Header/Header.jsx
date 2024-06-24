import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
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
import Section from "../Sections/Section";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <header className="p-4 bg-white relative">
        <div className="container flex h-10 md:justify-between md:space-x-8 mx-auto">
          <a
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src={logo} alt="Logo" width={100} height={100} />
          </a>
          <ul className="items-stretch justify-end hidden space-x-3 lg:flex text-black w-full z-10">
            {isDropdownOpen && (
              <>
                <div
                  className="absolute bg-white top-full w-[1550px] mx-auto mt-10 h-[550px] left-0 right-0 shadow-md z-40 opacity-90 animate-flipdown "
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="flex items-center justify-end">
                    <span
                      className="p-10 font-bold"
                      onClick={() => {
                        setIsDropdownOpen(false);
                      }}
                    >
                      <IoClose size={30} className="cursor-pointer" />
                    </span>
                  </div>
                  <div className="grid grid-cols-4 w-full">
                    <div>
                      <h3 className="text-4xl p-5 text-black font-bold">
                        Featured
                      </h3>
                      <a
                        href="#"
                        className="flex text-xl p-4 text-black hover:bg-gray-200 w-full items-center border-b-2 border-gray-900 "
                      >
                        Overview
                        <span className="w-full flex justify-end">
                          <FaChevronRight />
                        </span>
                      </a>
                      <a
                        href="#"
                        className="flex text-xl   p-4 text-black hover:bg-gray-200 w-full items-center border-b-2 border-gray-900"
                      >
                        By Service
                        <span className=" flex justify-end">
                          <FaChevronRight />
                        </span>
                      </a>
                      <a
                        href="#"
                        className="flex text-xl  p-4 text-black hover:bg-gray-200 w-full items-center border-b-2 border-gray-900"
                      >
                        By Sector
                        <span className="w-full flex justify-end">
                          <FaChevronRight />
                        </span>
                      </a>
                      <a
                        href="#"
                        className="flex  text-xl p-4 text-black hover:bg-gray-200 w-full items-center border-b-2 border-gray-900"
                      >
                        Clients
                        <span className="w-full flex justify-end">
                          <FaChevronRight />
                        </span>
                      </a>
                    </div>
                    <div>
                      <h3 className="text-4xl p-5 text-black font-bold">
                        By Service
                      </h3>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full"
                      >
                        Overview
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full"
                      >
                        Option 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full"
                      >
                        Option 3
                      </a>
                    </div>
                    <div>
                      <h3 className="text-4xl p-5 text-black font-bold">
                        By Sector
                      </h3>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full"
                      >
                        Overview
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full"
                      >
                        Option 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full"
                      >
                        Option 3
                      </a>
                    </div>
                    <div>
                      <h3 className="text-4xl p-5 text-black font-bold">
                        Client List
                      </h3>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full"
                      >
                        Overview
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full"
                      >
                        Option 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200 w-full"
                      >
                        Option 3
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fixed inset-0 bg-black  bg-opacity-10 top-20 pointer-events-none transition-opacity duration-500 z-[200px]"></div>
              </>
            )}
            <li className="relative flex items-center h-full">
              <a
                href="#"
                className="flex items-center px-4 -mb-1 justify-center gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Work <FaAngleDown />
              </a>
            </li>
            <li className="flex">
              <a href="#" className="flex items-center px-4 -mb-1">
                Show we are <FaAngleDown />
              </a>
            </li>
            <li className="flex">
              <a href="#" className="flex items-center px-4 -mb-1">
                News
              </a>
            </li>
            <li className="flex">
              <a href="#" className="flex items-center px-4 -mb-1">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
      <Section />
    </>
  );
};

export default Header;
