import React, { useState } from 'react';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CertificationModal = ({ onClose }) => {
  const [expandedModules, setExpandedModules] = useState([]);

  const toggleModule = (index) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter(i => i !== index));
    } else {
      setExpandedModules([...expandedModules, index]);
    }
  };

  const modules = [
    { title: "1. Ubuntu & Terminal", content: "Master Linux command line, file systems, and shell scripting for development environments." },
    { title: "2. Introduction to Programming", content: "Learn programming fundamentals, algorithms, and problem-solving techniques." },
    { title: "3. HTML Fundamentals", content: "Structure web content with semantic HTML5 elements and accessibility best practices." },
    { title: "4. Git & GitHub", content: "Version control, collaboration workflows, and open-source contribution practices." },
    { title: "5. CSS & Responsive Design", content: "Modern styling techniques, Flexbox, Grid, and mobile-first responsive design." },
    { title: "6. JavaScript (ES6+)", content: "Master modern JavaScript including async/await, promises, and functional programming." },
    { title: "7. Database Systems", content: "SQL and NoSQL databases, data modeling, and query optimization." },
    { title: "8. React.js (Frontend Framework)", content: "Component-based architecture, hooks, state management, and performance optimization." },
    { title: "9. Node.js (Backend Runtime)", content: "Server-side JavaScript, event loop, streams, and file system operations." },
    { title: "10. Express.js (Backend Framework)", content: "RESTful API design, middleware, authentication, and error handling." }
  ];

  const learningOutcomes = [
    "Develop responsive, interactive web applications",
    "Implement both SQL and NoSQL database solutions",
    "Build modern UIs with React.js",
    "Create secure backend services with Node/Express",
    "Deploy full-stack applications"
  ];

  const toolsTechnologies = [
    { category: "Frontend", items: ["VS Code", "Chrome DevTools"] },
    { category: "Backend", items: ["Postman", "MongoDB Compass"] },
    { category: "Version Control", items: ["Git", "GitHub"] },
    { category: "Deployment", items: ["Vercel", "Render", "Netlify"] }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white p-6 pb-4 border-b z-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#001BB7]">Full Stack Web Development Certification</h2>
              <p className="text-gray-600 mt-1">Comprehensive Training Program Covering Modern Web Technologies</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl md:text-2xl ml-4"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 pt-4">
          {/* Course Overview */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-[#0046FF] mb-3">Course Overview</h3>
            <p className="text-gray-700">
              This intensive program provides end-to-end training in full stack web development, equipping students with practical skills in both frontend and backend technologies. The curriculum progresses from fundamental concepts to advanced frameworks, ensuring graduates can build complete, production-ready web applications.
            </p>
          </section>

          {/* Detailed Curriculum */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-[#0046FF] mb-3">Detailed Curriculum</h3>
            <div className="space-y-2">
              {modules.map((module, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleModule(index)}
                    aria-expanded={expandedModules.includes(index)}
                  >
                    <h4 className="font-medium text-[#001BB7]">{module.title}</h4>
                    {expandedModules.includes(index) ? (
                      <FaChevronUp className="text-[#FF8040]" />
                    ) : (
                      <FaChevronDown className="text-[#FF8040]" />
                    )}
                  </button>
                  {expandedModules.includes(index) && (
                    <div className="p-4 bg-white border-t">
                      <p className="text-gray-700">{module.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-[#0046FF] mb-3">Learning Outcomes</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {learningOutcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </section>

          {/* Tools & Technologies */}
          <section>
            <h3 className="text-xl font-bold text-[#0046FF] mb-3">Tools & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {toolsTechnologies.map((group, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-[#001BB7] mb-2">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// Example usage in parent component:
const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setShowModal(true)}
        className="bg-[#0046FF] text-white px-4 py-2 rounded"
      >
        View Certification Details
      </button>
      
      {showModal && <CertificationModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default CertificationModal;