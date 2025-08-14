import React from "react";
import { FaCode, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Custom website development tailored to your business needs using the latest technologies and frameworks for optimal performance.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description:
      "Mobile-first responsive designs that work flawlessly across all devices and screen sizes, ensuring great user experience.",
  },
];

export default function Services() { // ✅ default export
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
            What My Keyboard Does
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};