// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaBriefcase } from "react-icons/fa";

// const CoverPage = () => {
//   const navigate = useNavigate();

//   const handleStart = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 flex flex-col items-center justify-center text-white px-4 text-center">
//       <div className="text-6xl font-extrabold mb-4 flex items-center justify-center gap-3">
//         <FaBriefcase className="text-yellow-300 animate-bounce" />
//         Job Portal
//       </div>
//       <p className="text-xl md:text-2xl font-medium mb-8 max-w-xl">
//         “The future depends on what you do today.” – Mahatma Gandhi
//       </p>
//       <button
//         onClick={handleStart}
//         className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-2xl shadow-lg transition duration-300"
//       >
//         Get Started
//       </button>
//       <div className="absolute bottom-4 text-sm text-white/70">
//         Built with ❤️ by Tharak Reddy
//       </div>
//     </div>
//   );
// };

// export default CoverPage;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaBriefcase,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaLinkedin,
// } from "react-icons/fa";

// const CoverPage = () => {
//   const navigate = useNavigate();

//   const handleStart = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-blue-700 text-white font-sans overflow-y-auto px-6 py-10 space-y-12">
      
//       {/* Header */}
//       <div className="text-center">
//         <h1 className="text-5xl font-extrabold mb-4 flex justify-center items-center gap-3">
//           <FaBriefcase className="text-yellow-300 animate-pulse" />
//           Job Portal
//         </h1>
//         <p className="text-xl max-w-3xl mx-auto text-white/80">
//           “Choose a job you love, and you will never have to work a day in your life.” – Confucius
//         </p>
//       </div>

//       {/* About Section */}
//       <div className="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-black rounded-2xl p-6 shadow-xl text-center">
//         <h2 className="text-2xl font-bold mb-2">Why Use This Portal?</h2>
//         <p className="text-base">
//           Discover your dream job. Upload your resume, get instant matches with job openings,
//           and apply directly. Our smart engine finds the best roles for you.
//         </p>
//       </div>

//       {/* Get Started Button */}
//       <div className="flex justify-center">
//         <button
//           onClick={handleStart}
//           className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg rounded-full shadow-md transition duration-300"
//         >
//           Get Started
//         </button>
//       </div>

//       {/* Contact Section */}
//       <div className="bg-black/30 p-6 rounded-2xl shadow-md text-center space-y-4">
//         <h3 className="text-xl font-semibold text-white/90">Contact Information</h3>
//         <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white/80">
//           <div className="flex items-center gap-2">
//             <FaEnvelope className="text-yellow-300" />
//             tharakreddy07@gmail.com
//           </div>
//           <div className="flex items-center gap-2">
//             <FaPhone className="text-green-400" />
//             +91 6302196518
//           </div>
//           <div className="flex items-center gap-2">
//             <FaMapMarkerAlt className="text-red-400" />
//             Karimnagar, Telangana
//           </div>
//           <div className="flex items-center gap-2">
//             <FaLinkedin className="text-blue-400" />
//             <a
//               href="https://www.linkedin.com/in/tharak-reddy-287b3524a/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline hover:text-white"
//             >
//               LinkedIn Profile
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <p className="text-center text-white/60 mt-6">
//         © 2025 Job Portal. Crafted with ❤️ by Tharak Reddy.
//       </p>
//     </div>
//   );
// };

// export default CoverPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaCheckCircle,
  FaUserTie,
  FaUpload,
  FaSearch,
} from "react-icons/fa";

const CoverPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-[120vh] w-full bg-gradient-to-b from-pink-100 via-pink-50 to-white text-gray-900 font-sans px-6 py-10 overflow-y-auto space-y-24">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold flex justify-center items-center gap-3 text-pink-700">
          <FaBriefcase className="text-pink-500 animate-pulse" />
          Job Portal
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-700">
          “Choose a job you love, and you will never have to work a day in your life.” – Confucius
        </p>
        <button
          onClick={handleStart}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300"
        >
          Get Started
        </button>
      </section>

      {/* About Section Box */}
      <section className="bg-gradient-to-tr from-indigo-700 to-blue-600 rounded-2xl p-6 shadow-xl max-w-5xl mx-auto text-center space-y-3 text-white">
        <h2 className="text-2xl font-bold">About the Platform</h2>
        <p className="text-white/90 text-base">
          Our portal connects freshers, students, and professionals to top jobs by simplifying resume uploads,
          job matching, and direct applications — all in one powerful platform.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-purple-800 to-purple-600 rounded-2xl p-6 shadow-xl max-w-5xl mx-auto space-y-6 text-white">
        <h3 className="text-2xl font-semibold text-center">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90 text-center">
          <div className="flex flex-col items-center space-y-2">
            <FaUserTie className="text-3xl text-blue-200" />
            <p>Create your account</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaUpload className="text-3xl text-green-200" />
            <p>Upload your resume</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaSearch className="text-3xl text-yellow-200" />
            <p>Get matched instantly</p>
          </div>
        </div>
      </section>

      {/* Features Section Box */}
      <section className="bg-gradient-to-tr from-purple-700 to-pink-600 rounded-2xl p-6 shadow-xl max-w-5xl mx-auto text-white">
        <h3 className="text-xl font-semibold text-center mb-6">Key Features</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90 text-left px-2">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-300 mt-1" />
            Upload and parse resumes with one click
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-300 mt-1" />
            Smart job matching engine
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-300 mt-1" />
            Apply to curated job openings instantly
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-300 mt-1" />
            Secure login & user dashboard
          </li>
        </ul>
      </section>

      {/* Contact Section Box */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 shadow-lg max-w-5xl mx-auto text-center space-y-4 text-white">
        <h3 className="text-xl font-semibold text-blue-300">Contact Information</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white/90 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-300" />
            tharakreddy07@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-green-400" />
            +91 6302196518
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" />
            Karimnagar, Telangana
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-blue-400" />
            <a
              href="https://www.linkedin.com/in/tharak-reddy-287b3524a/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 pb-10">
        © 2025 Job Portal. Crafted with ❤️ by Tharak Reddy.
      </footer>
    </div>
  );
};

export default CoverPage;
