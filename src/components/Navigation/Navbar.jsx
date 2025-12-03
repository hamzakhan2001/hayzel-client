import React, { useState } from "react";
import logo from "./../../assets/hayzel-logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Contact", "Blogs", "FAQs"];

  return (
    <header
      className={`font-poppins bg-deepNavyBlue shadow-md fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-deepNavyBlue shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto py-8 flex items-center justify-around px-4 sm:px-6 md:px-10">
        {/* Left: Logo */}
        <div className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Hayzel Technologies Logo"
            className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto"
          />
        </div>

        {/* Right: Navigation Menu */}
        <ul className="hidden md:flex space-x-10 font-poppins font-medium text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  if (item === "Home") {
                    e.preventDefault(); // stop default scroll
                    window.location.reload(); // reload current page
                  }
                }}
                className="relative text-white transition-all duration-300 ease-in-out hover:text-vibrantBlue hover:scale-110 inline-block 
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-vibrantBlue after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden bg-deepNavyBlue flex flex-col items-center space-y-6 py-6 font-poppins font-medium text-white border-b border-gray-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-lg transition-all duration-300 ease-in-out hover:text-vibrantBlue hover:scale-110"
                onClick={() => setIsOpen(false)} // close on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
