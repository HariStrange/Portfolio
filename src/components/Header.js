import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-lg shadow-md text-white"
          : "bg-transparent backdrop-blur-md text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">
          <a href="#home">Portfolio</a>
        </h1>
        <nav className="hidden md:flex space-x-6 font-semibold">
          <a href="#home" className="hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="hover:text-gray-200">
            About
          </a>
          <a href="#skills" className="hover:text-gray-200">
            Skills
          </a>
          <a href="#certificates" className="hover:text-gray-200">
            Certificates
          </a>
          <a href="#projects" className="hover:text-gray-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-200">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-2xl text-white absolute top-0 left-0 w-full h-screen transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <a href="#home" className="text-xl" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="text-xl" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="text-xl" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#certificates" className="text-xl" onClick={toggleMenu}>
              Certificates
            </a>
            <a href="#projects" className="text-xl" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" className="text-xl" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
