import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="fixed w-full top-0 z-50 shadow-md bg-[#001BB7] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-white">Sasikumar</h1>
          <h1 className="text-3xl font-bold text-[#FFAF0B]">Sutharsan</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            smooth={true} 
            duration={500} 
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
            className={`cursor-pointer text-xl hover:text-[#FFAF0B] transition-colors ${
              activeLink === "home" ? "text-[#FFAF0B] font-bold" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
            className={`cursor-pointer text-xl hover:text-[#FFAF0B] transition-colors ${
              activeLink === "about" ? "text-[#FFAF0B] font-bold" : "text-white"
            }`}
          >
            About
          </Link>
          <Link 
            to="/skills" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
            className={`cursor-pointer text-xl hover:text-[#FFAF0B] transition-colors ${
              activeLink === "skills" ? "text-[#FFAF0B] font-bold" : "text-white"
            }`}
          >
            Skills
          </Link>
          <Link 
            to="/education" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
            className={`cursor-pointer text-xl hover:text-[#FFAF0B] transition-colors ${
              activeLink === "education" ? "text-[#FFAF0B] font-bold" : "text-white"
            }`}
          >
            Education
          </Link>
          <Link 
            to="/services" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
            className={`cursor-pointer text-xl hover:text-[#FFAF0B] transition-colors ${
              activeLink === "services" ? "text-[#FFAF0B] font-bold" : "text-white"
            }`}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
            className={`cursor-pointer text-xl hover:text-[#FFAF0B] transition-colors ${
              activeLink === "contact" ? "text-[#FFAF0B] font-bold" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#001BB7] absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <Link 
              to="home" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="active"
              onSetActive={handleSetActive}
              className={`py-3 px-4 cursor-pointer hover:text-[#FFAF0B] transition-colors ${
                activeLink === "home" ? "text-[#FFAF0B] font-bold" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="active"
              onSetActive={handleSetActive}
              className={`py-3 px-4 cursor-pointer hover:text-[#FFAF0B] transition-colors ${
                activeLink === "about" ? "text-[#FFAF0B] font-bold" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="active"
              onSetActive={handleSetActive}
              className={`py-3 px-4 cursor-pointer hover:text-[#FFAF0B] transition-colors ${
                activeLink === "skills" ? "text-[#FFAF0B] font-bold" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link 
              to="/education" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="active"
              onSetActive={handleSetActive}
              className={`py-3 px-4 cursor-pointer hover:text-[#FFAF0B] transition-colors ${
                activeLink === "education" ? "text-[#FFAF0B] font-bold" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link 
              to="/services" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="active"
              onSetActive={handleSetActive}
              className={`py-3 px-4 cursor-pointer hover:text-[#FFAF0B] transition-colors ${
                activeLink === "services" ? "text-[#FFAF0B] font-bold" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              smooth={true} 
              duration={500}
              spy={true}
              activeClass="active"
              onSetActive={handleSetActive}
              className={`py-3 px-4 cursor-pointer hover:text-[#FFAF0B] transition-colors ${
                activeLink === "contact" ? "text-[#FFAF0B] font-bold" : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;