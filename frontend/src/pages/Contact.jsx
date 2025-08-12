import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#E9E9E9]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#000000] mb-4 relative">
            Exchange Ideas
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF8040]"></span>
          </h2>
          <h3 className="text-2xl text-[#0046FF] mb-6">
            Let's talk about your project
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer for your
            project, have a question, or just want to connect.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information - Left Side */}
          <div className="md:w-1/2">
            <div className="space-y-6 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-[#FF8040] rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#001BB7]">Location</h4>
                  <p className="text-gray-700">
                    New Market Road, Kopay North, Kopay<br />
                    Jaffna, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-[#FF8040] rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#001BB7]">Email</h4>
                  <p className="text-gray-700">sutharsan112112@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-[#FF8040] rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#001BB7]">Phone</h4>
                  <p className="text-gray-700">+94 766 859 962</p>
                </div>
              </div>

              {/* Social Icons - Moved inside contact info section */}
              <div className="pt-4">
                <div className="flex gap-4 justify-start">
                  <a
                    href="https://github.com/sutharsan112112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-[#0046FF] p-3 rounded-full text-white transition duration-300 hover:-translate-y-1"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sasi-sutharsan-807a04358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-[#0046FF] p-3 rounded-full text-white transition duration-300 hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/sasi.sutharsan/profilecard/?igsh=MWVuaXhpb3Nhb2U3cQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-[#0046FF] p-3 rounded-full text-white transition duration-300 hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1F9X51DbbR/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-[#0046FF] p-3 rounded-full text-white transition duration-300 hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#001BB7] mb-1 text-left"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0046FF]"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#001BB7] mb-1 text-left"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0046FF]"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#001BB7] mb-1 text-left"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0046FF]"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#001BB7] mb-1 text-left"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0046FF]"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0046FF] hover:bg-[#001BB7] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;