import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";

function NavBar({ toggle, theme }) {
  const [showNav, setShowNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  function toggleHandler() {
    toggle();
    setShowNav(!setShowNav);
  }

  return (
    <div className=" fixed flex justify-between w-full h-20 2xl:h-32 px-4 xl:px-16   bg-black text-white items-center">
      <div>
        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-signature  ">
          Hamza
        </h1>
      </div>
      <ul className="hidden md:flex md:-ml-4  ">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className="cursor-pointer text-white px-5 md:px-3 lg:px-6 2xl:px-8 capitalize font-medium 2xl:text-3xl hover:scale-105 duration-200"
            >
              <Link to={link.link} smooth duration={500}>
                {link.link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={toggle} className="px-2 hidden md:flex">
          {theme === "dark" ? <GoSun size={20} /> : <FaRegMoon size={20} />}
        </button>
      </div>
      {
        <div
          onClick={() => setShowNav((curr) => !curr)}
          className="md:hidden cursor-pointer text-gray-500 z-10 pr-4"
        >
          {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      }

      {showNav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="px-4 py-6  capitalize cursor-pointer text-4xl"
              >
                <Link
                  to={link.link}
                  smooth
                  duration={500}
                  onClick={() => setShowNav(!setShowNav)}
                >
                  {link.link}
                </Link>
              </li>
            );
          })}
          <button className="text-4xl mt-4" onClick={toggleHandler}>
            {theme === "dark" ? <GoSun /> : <FaRegMoon />}
          </button>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
