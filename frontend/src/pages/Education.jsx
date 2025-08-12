import React, { useState } from "react"; // Need to import useState
import { FaGraduationCap, FaLaptopCode, FaUniversity } from "react-icons/fa";
import CertificationModal from "../pages/EducationModal.jsx" // Need to import the modal component

const Education = () => {
  const [showModal, setShowModal] = useState(false);
  
  const educationData = [
    {
      icon: <FaGraduationCap className="text-4xl text-[#0046FF]" />,
      title: "Full Stack Web Development",
      description:
        "Mastered full stack development including front-end technologies like React and back-end systems with Node.js and databases...",
    },
    // Add other education items if needed
  ];

  return (
    <section id="/education" className="py-20 bg-[#E9E9E9]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          My Education Journey
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF8040]"></span>
        </h2>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="education-card bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="education-icon mb-6 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#001BB7] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-6 text-justify">
                {item.description}
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#0046FF] hover:bg-[#001BB7] text-white px-6 py-2 rounded-md transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        
        {/* Modal should be outside the map function */}
        {showModal && <CertificationModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
};

export default Education;