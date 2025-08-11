import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md flex items-center justify-between bg-[#001BB7] text-white p-4">
      {/* ... your existing navbar code ... */}
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold text-[#1F2937]">Sasikumar</h1>
        <h1 className="text-3xl font-bold text-[#FFAF0B]">Sutharsan</h1>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" smooth={true} duration={500} className="cursor-pointer text-[#000000] hover:text-[#FFFFF0] text-2xl">Home</Link>
        <Link to="/about" smooth={true} duration={500} className="cursor-pointer text-[#000000] hover:text-[#FFFFF0] text-2xl">About</Link>
        <Link to="/contact" smooth={true} duration={500} className="cursor-pointer text-[#000000] hover:text-[#FFFFF0] text-2xl">Contact</Link>
        <Link to="/skills" smooth={true} duration={500} className="cursor-pointer text-[#000000] hover:text-[#FFFFF0] text-2xl">Skills</Link>
        <Link to="/education" smooth={true} duration={500} className="cursor-pointer text-[#000000] hover:text-[#FFFFF0] text-2xl">Education</Link>
        <Link to="/services" smooth={true} duration={500} className="cursor-pointer text-[#000000] hover:text-[#FFFFF0] text-2xl">Services</Link>
        <Link to="/contact" smooth={true} duration={500} className="cursor-pointer text-[#000000] hover:text-[#FFFFF0] text-2xl">Contact</Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700" id="mobile-menu">
          <Link to="/" smooth={true} duration={500} className="block px-4 py-2 text-[#000000] hover:text-[#FFFFF0] cursor-pointer" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" smooth={true} duration={500} className="block px-4 py-2text-[#000000] hover:text-[#FFFFF0] cursor-pointer" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" smooth={true} duration={500} className="block px-4 py-2text-[#000000] hover:text-[#FFFFF0] cursor-pointer" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/skills" smooth={true} duration={500} className="block px-4 py-2text-[#000000] hover:text-[#FFFFF0] cursor-pointer" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/education" smooth={true} duration={500} className="block px-4 py-2text-[#000000] hover:text-[#FFFFF0] cursor-pointer" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/services" smooth={true} duration={500} className="block px-4 py-2text-[#000000] hover:text-[#FFFFF0] cursor-pointer" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" smooth={true} duration={500} className="block px-4 py-2text-[#000000] hover:text-[#FFFFF0] cursor-pointer" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;