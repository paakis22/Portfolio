import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // Example icons

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 className="text-4xl text-orange-500" />,
      title: "HTML5",
      description: "Semantic markup, accessibility standards, and modern HTML features.",
      level: "Expert"
    },
    {
      icon: <FaCss3Alt className="text-4xl text-blue-500" />,
      title: "CSS3",
      description: "Responsive design, animations, and modern layout techniques.",
      level: "Expert"
    },
    {
      icon: <FaJs className="text-4xl text-yellow-400" />,
      title: "JavaScript",
      description: "ES6+ features, functional programming, and DOM manipulation.",
      level: "Advanced"
    },
    {
      icon: <FaReact className="text-4xl text-blue-400" />,
      title: "React",
      description: "Component-based architecture, hooks, and state management.",
      level: "Advanced"
    }
  ];

  return (
    <section id="/skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          Code Weapons
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FF8040]"></span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card p-6 bg-[#E9E9E9] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="skill-icon mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-[#001BB7] mb-2 text-center">
                {skill.title}
              </h4>
              <p className="text-gray-700 mb-4 text-center">
                {skill.description}
              </p>
              <span className="block text-center text-sm font-medium text-[#FF8040]">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;