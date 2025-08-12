import React from "react";
import profileImage from "../assets/Sutha.png"; // Update with your image path

const About = () => {
  return (
    <section id="/about" className="py-20 bg-[#E9E9E9]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          Artist of the code
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF8040]"></span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="lg:w-5/12 flex justify-center">
            <img
              src={profileImage}
              alt="Sasikumar Sutharsan"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>

          {/* Content Column */}
          <div className="lg:w-7/12">
            <h3 className="text-3xl font-bold text-[#001BB7] mb-6">The Mind Behind the Code</h3>
            
            <p className="text-gray-700 mb-4 text-justify">
              Hi, I'm <strong className="text-[#0046FF]">Sasikumar Sutharsan</strong>, a passionate Full Stack Web Developer creating modern, responsive websites and applications. I also specialize in Tamil Typing, offering accurate and efficient typing services for documents, content, and translations. As a Graphic Designer, I design eye-catching visuals using Photoshop and Canva for branding, social media, and marketing. Additionally, I craft intuitive UI/UX designs to enhance user experience and engagement.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <p className="text-gray-700 mb-2">
                <strong className="text-[#0046FF]">Fun Fact: </strong>
                My last side project accidentally became a SaaS business. Your project might be next.
              </p>
              <p className="text-gray-700 mb-2">
                I did something is now a profitable business! Don't let your idea go to waste!
              </p>
              <p className="text-gray-700 font-medium">
                Your idea could be next... Let's skip the small talk and start building something legendary.
              </p>
            </div>

            {/* Info List */}
            <div className="space-y-3 mb-8">
              <div className="flex">
                <strong className="text-[#001BB7] w-20">Name:</strong>
                <span className="text-gray-700">Sasikumar Sutharsan</span>
              </div>
              <div className="flex">
                <strong className="text-[#001BB7] w-20">Email:</strong>
                <span className="text-gray-700">sutharsan112112@gmail.com</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0046FF] hover:bg-[#001BB7] text-white px-6 py-3 rounded-md transition-colors duration-300">
                Download CV
              </button>
              <a 
                href="#contact" 
                className="bg-[#FF8040] hover:bg-[#FF8040]/90 text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;