// import React from "react";
// import { Card, Button, Badge, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "../components/ui";
// import { GraduationCap, Code, Database, Globe, Server } from "lucide-react";

// const curriculum = [
//   { title: "Ubuntu & Terminal", icon: <Server className="h-5 w-5" /> },
//   { title: "Introduction to Programming", icon: <Code className="h-5 w-5" /> },
//   { title: "HTML Fundamentals", icon: <Globe className="h-5 w-5" /> },
//   { title: "Git & GitHub", icon: <Code className="h-5 w-5" /> },
//   { title: "CSS & Responsive Design", icon: <Globe className="h-5 w-5" /> },
//   { title: "JavaScript (ES6+)", icon: <Code className="h-5 w-5" /> },
//   { title: "Database Systems", icon: <Database className="h-5 w-5" /> },
//   { title: "React.js (Frontend Framework)", icon: <Code className="h-5 w-5" /> },
//   { title: "Node.js (Backend Runtime)", icon: <Server className="h-5 w-5" /> },
//   { title: "Express.js (Backend Framework)", icon: <Server className="h-5 w-5" /> },
// ];

// const tools = {
//   frontend: ["VS Code", "Chrome DevTools"],
//   backend: ["Postman", "MongoDB Compass"],
//   versionControl: ["Git", "GitHub"],
//   deployment: ["Vercel", "Render", "Netlify"],
// };

// export default function Education() {
//   return (
//     <section id="education" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 mb-4">
//             My Education Journey
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             A solid foundation in technology and design through comprehensive training and hands-on experience.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <Card className="p-8 hover:shadow-lg transition-shadow">
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
//                   <GraduationCap className="h-6 w-6 text-emerald-600" />
//                 </div>
//               </div>

//               <div className="flex-1">
//                 <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
//                   Full Stack Web Development
//                 </h3>
//                 <p className="text-gray-600 mb-4 leading-relaxed">
//                   Mastered full stack development including front-end technologies like React and back-end systems with Node.js and databases...
//                 </p>

//                 <Dialog>
//                   <DialogTrigger>
//                     <Button variant="outline">View Details</Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
//                     <DialogHeader>
//                       <DialogTitle className="text-2xl font-serif font-bold text-gray-900">
//                         Full Stack Web Development Certification
//                       </DialogTitle>
//                       <p className="text-lg text-emerald-600 font-medium">
//                         Comprehensive Training Program Covering Modern Web Technologies
//                       </p>
//                     </DialogHeader>

//                     <div className="space-y-8 mt-6">
//                       <div>
//                         <h4 className="text-lg font-serif font-bold text-gray-900 mb-3">Course Overview</h4>
//                         <p className="text-gray-700 leading-relaxed">
//                           This intensive program provides end-to-end training in full stack web development, equipping
//                           students with practical skills in both frontend and backend technologies.
//                         </p>
//                       </div>

//                       <div>
//                         <h4 className="text-lg font-serif font-bold text-gray-900 mb-4">Detailed Curriculum</h4>
//                         <div className="grid md:grid-cols-2 gap-3">
//                           {curriculum.map((item, index) => (
//                             <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                               <div className="text-emerald-600">{item.icon}</div>
//                               <span className="text-gray-700 font-medium">{item.title}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       <div>
//                         <h4 className="text-lg font-serif font-bold text-gray-900 mb-4">Tools & Technologies</h4>
//                         <div className="grid md:grid-cols-2 gap-6">
//                           {Object.entries(tools).map(([category, items]) => (
//                             <div key={category}>
//                               <h5 className="font-medium text-gray-900 mb-2 capitalize">
//                                 {category.replace(/([A-Z])/g, " $1").trim()}
//                               </h5>
//                               <div className="flex flex-wrap gap-2">
//                                 {items.map((tool) => (
//                                   <Badge key={tool}>{tool}</Badge>
//                                 ))}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };


import React from "react";
import { Card, Badge } from "../components/ui";
import { GraduationCap, Code, Database, Globe, Server } from "lucide-react";

const curriculum = [
  { title: "Ubuntu & Terminal", icon: <Server className="h-5 w-5" /> },
  { title: "Introduction to Programming", icon: <Code className="h-5 w-5" /> },
  { title: "HTML Fundamentals", icon: <Globe className="h-5 w-5" /> },
  { title: "Git & GitHub", icon: <Code className="h-5 w-5" /> },
  { title: "CSS & Responsive Design", icon: <Globe className="h-5 w-5" /> },
  { title: "JavaScript (ES6+)", icon: <Code className="h-5 w-5" /> },
  { title: "Database Systems", icon: <Database className="h-5 w-5" /> },
  { title: "React.js (Frontend Framework)", icon: <Code className="h-5 w-5" /> },
  { title: "Node.js (Backend Runtime)", icon: <Server className="h-5 w-5" /> },
  { title: "Express.js (Backend Framework)", icon: <Server className="h-5 w-5" /> },
];

const tools = {
  frontend: ["VS Code", "Chrome DevTools"],
  backend: ["Postman", "MongoDB Compass"],
  versionControl: ["Git", "GitHub"],
  deployment: ["Vercel", "Render", "Netlify"],
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-gray-900 mb-4">
            My Education Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A solid foundation in technology and design through comprehensive training and hands-on experience.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Full Stack Web Development
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Mastered full stack development including front-end technologies like React and back-end systems with Node.js and databases.
                </p>

                {/* Curriculum */}
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-bold text-gray-900 mb-3">Curriculum</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {curriculum.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="text-emerald-600">{item.icon}</div>
                        <span className="text-gray-700 font-medium">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h4 className="text-lg font-serif font-bold text-gray-900 mb-4">Tools & Technologies</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(tools).map(([category, items]) => (
                      <div key={category}>
                        <h5 className="font-medium text-gray-900 mb-2 capitalize">
                          {category.replace(/([A-Z])/g, " $1").trim()}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {items.map((tool) => (
                            <Badge key={tool}>{tool}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};