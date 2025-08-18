// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.status === 200) {
//         toast.success(data.message);
//         setFormData({ name: "", email: "", subject: "", message: "" });
//       } else {
//         toast.error(data.message || "Something went wrong");
//       }
//     } catch (err) {
//       toast.error("Server error. Please try again later.");
//     }
//   };

//   return (
//     <section className="bg-gray-50 py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h1 className="text-3xl font-bold text-gray-900">Exchange Ideas</h1>
//           <p className="text-gray-600 mt-2">
//             Let's talk about your project. Feel free to reach out if you're
//             looking for a developer for your project, have a question, or just
//             want to connect.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left Info */}
//           <div className="space-y-6">
//             <div className="flex items-center p-5 bg-white rounded-lg shadow">
//               <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
//                 📍
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">Location</h3>
//                 <p className="text-gray-600 text-sm">
//                   New Market Road, Kopay North, Kopay <br />
//                   Jaffna, Sri Lanka
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center p-5 bg-white rounded-lg shadow">
//               <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
//                 📧
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">Email</h3>
//                 <p className="text-green-600 text-sm">
//                   sutharsan112112@gmail.com
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center p-5 bg-white rounded-lg shadow">
//               <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
//                 📞
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">Phone</h3>
//                 <p className="text-green-600 text-sm">+94 766 859 962</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white rounded-lg shadow p-6 space-y-4"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
//               required
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Toast container */}
//       <ToastContainer position="top-center" />
//     </section>
//   );
// };

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        toast.success(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Exchange Ideas</h1>
          <p className="text-gray-600 mt-2">
            Let's talk about your project. Feel free to reach out if you're
            looking for a developer for your project, have a question, or just
            want to connect.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Info */}
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center p-5 bg-white rounded-lg shadow">
              <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                📍
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600 text-sm">
                  <a
                    href="https://www.google.com/maps?q=9.706038,80.06949"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    New Market Road, Kopay North, Kopay <br />
                    Jaffna, Sri Lanka
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center p-5 bg-white rounded-lg shadow">
              <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                📧
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-green-600 text-sm">
                  <a
                    href="mailto:sutharsan112112@gmail.com"
                    className="hover:underline"
                  >
                    sutharsan112112@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center p-5 bg-white rounded-lg shadow">
              <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                📞
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-green-600 text-sm">
                  <a href="tel:+94766859962" className="hover:underline">
                    +94 766 859 962
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow p-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
              required
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-center" />
    </section>
  );
}
