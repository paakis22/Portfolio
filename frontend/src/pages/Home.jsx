import React from "react";
import { useState } from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay for blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="text-white max-w-lg space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hi, I'm{" "}
            <span className="text-sky-400">Sasikumar Sutharsan</span>
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold">
            I'm a{" "}
            <span className="text-sky-400">Full Stack Web Developer</span>
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            Full Stack Developer
            {/* <span className="text-red-400">(Photoshop & Canva)</span> | UI/UX
            Designer – Building digital experiences that stand out! */}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition">
              Hire Me
            </button>
            <button className="border border-white hover:border-sky-400 text-white py-2 px-6 rounded-md transition">
              About Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com/yourinstagram"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-lg">
          <img
            src="/path/to/your-photo.jpg"
            alt="Sasikumar Sutharsan"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;