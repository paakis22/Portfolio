import React, { useEffect, useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const skills = [
  {
    name: "HTML5",
    level: 95,
    description: "Semantic markup, accessibility standards, and modern HTML features.",
    icon: <FaHtml5 className="w-8 h-8 text-orange-500" />,
  },
  {
    name: "CSS3",
    level: 95,
    description: "Responsive design, animations, and modern layout techniques.",
    icon: <FaCss3Alt className="w-8 h-8 text-blue-500" />,
  },
  {
    name: "JavaScript",
    level: 85,
    description: "ES6+ features, functional programming, and DOM manipulation.",
    icon: <FaJs className="w-8 h-8 text-yellow-500" />,
  },
  {
    name: "React",
    level: 85,
    description: "Component-based architecture, hooks, and state management.",
    icon: <FaReact className="w-8 h-8 text-cyan-500" />,
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getSkillLevel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 mb-4">Code Weapons</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafting seamless experiences through code and design with these powerful technologies.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-serif font-bold text-gray-900">{skill.name}</h3>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                  {getSkillLevel(skill.level)}
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{skill.description}</p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Proficiency</span>
                  <span className="text-gray-900 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Icons */}
        <div className="flex justify-center mt-12 space-x-8 flex-wrap">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center flex flex-col items-center mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                {skill.icon}
              </div>
              <span className="text-sm text-gray-600">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};