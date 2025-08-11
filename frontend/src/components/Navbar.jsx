import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      {/* ... your existing navbar code ... */}

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">About</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">Contact</Link>
        <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">SKILLS</Link>
        <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">EDUCATION</Link>
        <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">SERVICES</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400">CONTACT</Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700" id="mobile-menu">
          <Link to="/" smooth={true} duration={500} className="block px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 cursor-pointer" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="block px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 cursor-pointer" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="contact" smooth={true} duration={500} className="block px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 cursor-pointer" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="skills" smooth={true} duration={500} className="block px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 cursor-pointer" onClick={() => setIsOpen(false)}>SKILLS</Link>
          <Link to="education" smooth={true} duration={500} className="block px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 cursor-pointer" onClick={() => setIsOpen(false)}>EDUCATION</Link>
          <Link to="services" smooth={true} duration={500} className="block px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 cursor-pointer" onClick={() => setIsOpen(false)}>SERVICES</Link>
          <Link to="contact" smooth={true} duration={500} className="block px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 cursor-pointer" onClick={() => setIsOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;