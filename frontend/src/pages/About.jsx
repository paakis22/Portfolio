import React from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import SuthaImage from '../assets/image/Sutha.png';

export default function About() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 mb-4">
            Artist of the Code
          </h2>
          <p className="text-xl text-emerald-600 font-medium">
            Sasikumar Sutharsan
          </p>
          <p className="text-lg text-gray-600 mt-2">The Mind Behind the Code</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi, I'm Sasikumar Sutharsan, a passionate Full Stack Web Developer
              creating modern, responsive websites and applications. I also
              specialize in Tamil Typing, offering accurate and efficient typing
              services for documents, content, and translations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a Graphic Designer, I design eye-catching visuals using
              Photoshop and Canva for branding, social media, and marketing.
              Additionally, I craft intuitive UI/UX designs to enhance user
              experience and engagement.
            </p>

            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-lg font-medium text-emerald-800 mb-2">
                Fun Fact:
              </p>
              <p className="text-gray-700 mb-4">
                My last side project accidentally became a SaaS business. Your
                project might be next.
              </p>
              <p className="text-emerald-700 font-medium">
                I did something that is now a profitable business! Don't let
                your idea go to waste!
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg font-medium text-gray-900 mb-4">
                Your idea could be next... Let's skip the small talk and start
                building something legendary.
              </p>
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-gray-700">Name:</span>
                  <span className="ml-2 text-gray-600">
                    Sasikumar Sutharsan
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="ml-2 text-gray-600">
                    sutharsan112112@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition">
                <FaDownload className="mr-2" />
                Download CV
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center justify-center border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg text-lg font-medium transition"
              >
                <FaEnvelope className="mr-2" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content / Image */}
          <div className="flex justify-center">
            <div className="w-[300px] h-[400px] bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center">
              <img
                src={SuthaImage}
                alt="Sasikumar Sutharsan"
                className="w-[280px] h-[380px] object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};