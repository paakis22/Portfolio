import React from "react";

const About = () => {
  return (
    <section
      id="/about"
      className="min-h-screen bg-gray-100 flex items-center justify-center p-6"
    >
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          About Me
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <img
            src="/profile.jpg" // place your profile picture in public folder
            alt="Sasikumar Sutharsan"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />

          {/* Text Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Sasikumar Sutharsan
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I’m a passionate Full Stack Web Developer with a strong interest
              in creating modern, responsive, and user-friendly applications.
              My expertise covers both frontend and backend development, and I
              enjoy turning ideas into real-world digital solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Besides coding, I also explore UI/UX design, photography, and
              digital creativity. I believe in continuous learning and strive
              to stay updated with the latest technologies to deliver high-quality
              work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;