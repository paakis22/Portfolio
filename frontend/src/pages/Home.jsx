import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import bgImage from "../assets/BG.jpg"; // Adjust the path according to your file structure
import profileImage from "../assets/BG.jpg"; // Adjust the path
import About from "../pages/About.jsx"; // Import the About component

const Home = () => {
  return (
    <>
    {/* Hero Section */}
    <section
      id="/"
      className="relative min-h-screen"
    >
      {/* Overlay for blur effect */}
      <div className="absolute inset-0 bg-[#0046FF] bg-opacity-70 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 py-12">
        {/* Text Section */}
        <div className="text-white max-w-lg space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Hi, I'm <span className="text-sky-400">Sasikumar Sutharsan</span>
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold">
            I'm a <span className="text-sky-400">Full Stack Web Developer</span>
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            Full Stack Developer | Tamil Typing Expert | Graphic Designer
            (Photoshop & Canva) | UI/UX Designer – Building digital experiences
            that stand out!
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300">
              Hire Me
            </button>
            <button className="border border-white hover:border-sky-400 hover:bg-sky-400/10 text-white py-2 px-6 rounded-md transition duration-300">
              About Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/sutharsan112112"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-sky-400 p-3 rounded-full text-white transition duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sasi-sutharsan-807a04358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-sky-400 p-3 rounded-full text-white transition duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com/sasi.sutharsan/profilecard/?igsh=MWVuaXhpb3Nhb2U3cQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-sky-400 p-3 rounded-full text-white transition duration-300 hover:-translate-y-1"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1F9X51DbbR/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-sky-400 p-3 rounded-full text-white transition duration-300 hover:-translate-y-1"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Image Section - Only shown on medium screens and up */}
        <div className="hidden md:block max-w-xs lg:max-w-sm rounded-xl overflow-hidden shadow-lg z-10 border-4 border-sky-400/30">
          <img
            src={profileImage}
            alt="Sasikumar Sutharsan"
            className="object-cover w-full h-full rounded-xl"
            width={400}
            height={500}
          />
        </div>
      </div>
    </section>

    {/* Aboutus */}
    <section id="/about" className="relative">
      <About />
    </section>
    </>
  );
};

export default Home;
