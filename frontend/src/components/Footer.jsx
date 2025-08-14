import React from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-6">
        
        {/* Name and Description */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-emerald-400 mb-2">
            Sasikumar Sutharsan
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Full Stack Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-emerald-600 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-emerald-600 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-emerald-600 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-emerald-600 text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 w-full text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Sasikumar Sutharsan. All rights reserved. Built with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
};