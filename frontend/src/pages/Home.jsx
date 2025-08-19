import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import About from "../pages/About.jsx";
import Skills from "../pages/Skills.jsx";
import Education from "../pages/Education.jsx";
import Services from "../pages/Services.jsx";
import Contact from "../pages/Contact.jsx";

export default function Home() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl text-emerald-600 font-medium mb-4">
              Hi, I'm Paakis
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-6">
              I'm a Full Stack Web Developer
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Full Stack Developer | Graphic Designer (Photoshop & Canva) | UI/UX Designer – Building digital experiences that stand out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition"
                onClick={() => scrollToSection("#contact")}
              >
                Hire Me
              </button>
              <button
                className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg text-lg font-medium transition"
                onClick={() => scrollToSection("#about")}
              >
                About Me
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 transition-colors">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};