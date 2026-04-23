// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaFileUpload,
//   FaFileAlt,
//   FaBriefcase,
//   FaSearch,
//   FaLink,
//   FaGlobe,
//   FaExternalLinkAlt,
//   FaUser,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const cards = [
//     {
//       title: "Upload Resume",
//       desc: "Upload your resume to start matching",
//       bg: "bg-gradient-to-r from-blue-500 to-blue-700",
//       icon: <FaFileUpload size={24} />,
//       link: "/upload",
//     },
//     {
//       title: "View Resumes",
//       desc: "Check all resumes you’ve uploaded",
//       bg: "bg-gradient-to-r from-green-500 to-green-700",
//       icon: <FaFileAlt size={24} />,
//       link: "/resumes",
//     },
//     {
//       title: "Post Job",
//       desc: "Post a new job to the portal",
//       bg: "bg-gradient-to-r from-purple-500 to-purple-700",
//       icon: <FaBriefcase size={24} />,
//       link: "/post-job",
//     },
//     {
//       title: "View Jobs",
//       desc: "Browse all job listings",
//       bg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
//       icon: <FaSearch size={24} />,
//       link: "/jobs",
//     },
//     {
//       title: "Match Resume to All Jobs",
//       desc: "Match your resume to all posted jobs",
//       bg: "bg-gradient-to-r from-pink-500 to-pink-700",
//       icon: <FaLink size={24} />,
//       link: "/match-resume",
//     },
//     {
//       title: "Match Resume to Online Jobs",
//       desc: "Find jobs from external sources",
//       bg: "bg-gradient-to-r from-orange-500 to-orange-700",
//       icon: <FaGlobe size={24} />,
//       link: "/match-online-jobs",
//     },
//     {
//       title: "Online Jobs",
//       desc: "Explore jobs from Adzuna API",
//       bg: "bg-gradient-to-r from-indigo-500 to-indigo-700",
//       icon: <FaExternalLinkAlt size={24} />,
//       link: "/online-jobs",
//     },
//     {
//       title: "My Profile",
//       desc: "View your profile details",
//       bg: "bg-gradient-to-r from-teal-500 to-teal-700",
//       icon: <FaUser size={24} />,
//       link: "/profile",
//     },
//     {
//       title: "Logout",
//       desc: "Sign out of your account",
//       bg: "bg-gradient-to-r from-red-500 to-red-700",
//       icon: <FaSignOutAlt size={24} />,
//       action: () => {
//         localStorage.removeItem("token");
//         navigate("/");
//       },
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
//       style={{
//         backgroundImage:
//           'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1740&q=80")',
//       }}
//     >
//       <div className="bg-white/20 backdrop-blur-xl rounded-xl shadow-lg p-8 max-w-6xl w-full">
//         <h1 className="text-4xl font-bold text-white text-center mb-4">
//           Welcome to the Job Portal
//         </h1>
//         <p className="text-lg text-white text-center mb-10">
//           Find jobs, match your resume, post opportunities, and explore your career path.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`cursor-pointer text-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ${card.bg}`}
//               onClick={() => (card.action ? card.action() : navigate(card.link))}
//             >
//               <div className="flex items-center gap-3 mb-2">
//                 {card.icon}
//                 <h2 className="text-xl font-bold">{card.title}</h2>
//               </div>
//               <p className="text-sm opacity-90">{card.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
 
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileUpload,
  FaFileAlt,
  FaBriefcase,
  FaSearch,
  FaLink,
  FaGlobe,
  FaExternalLinkAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();

  const resumeCards = [
    {
      title: "Upload Resume",
      desc: "Upload your resume to start matching",
      bg: "bg-gradient-to-r from-blue-500 to-blue-700",
      icon: <FaFileUpload size={24} />,
      link: "/upload",
    },
    {
      title: "View Resumes",
      desc: "Check all resumes you’ve uploaded",
      bg: "bg-gradient-to-r from-green-500 to-green-700",
      icon: <FaFileAlt size={24} />,
      link: "/resumes",
    },
    {
      title: "Match Resume to All Jobs",
      desc: "Match your resume to all posted jobs",
      bg: "bg-gradient-to-r from-pink-500 to-pink-700",
      icon: <FaLink size={24} />,
      link: "/match-resume",
    },
  ];

  const jobCards = [
    {
      title: "Post Job",
      desc: "Post a new job to the portal",
      bg: "bg-gradient-to-r from-purple-500 to-purple-700",
      icon: <FaBriefcase size={24} />,
      link: "/post-job",
    },
    {
      title: "View Jobs",
      desc: "Browse all job listings",
      bg: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      icon: <FaSearch size={24} />,
      link: "/jobs",
    },
    {
      title: "Match Resume to Online Jobs",
      desc: "Find jobs from external sources",
      bg: "bg-gradient-to-r from-orange-500 to-orange-700",
      icon: <FaGlobe size={24} />,
      link: "/match-online-jobs",
    },
    {
      title: "Online Jobs",
      desc: "Explore jobs from Adzuna API",
      bg: "bg-gradient-to-r from-indigo-500 to-indigo-700",
      icon: <FaExternalLinkAlt size={24} />,
      link: "/online-jobs",
    },
  ];

  const profileCards = [
    {
      title: "My Profile",
      desc: "View your profile details",
      bg: "bg-gradient-to-r from-teal-500 to-teal-700",
      icon: <FaUser size={24} />,
      link: "/profile",
    },
    {
      title: "Logout",
      desc: "Sign out of your account",
      bg: "bg-gradient-to-r from-red-500 to-red-700",
      icon: <FaSignOutAlt size={24} />,
      action: () => {
        localStorage.removeItem("token");
        navigate("/");
      },
    },
  ];

  const renderSection = (title, cards) => (
    <section className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 inline-block px-5 py-3 rounded-xl bg-white/10 border border-white/20 shadow-md backdrop-blur-md">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`cursor-pointer text-white p-6 rounded-2xl border border-white/20 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ${card.bg}`}
              onClick={() => (card.action ? card.action() : navigate(card.link))}
            >
              <div className="flex items-center gap-4 mb-2">
                {card.icon}
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <p className="text-sm opacity-90">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div
      className="min-h-[150vh] w-full overflow-y-auto bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1740&q=80")',
      }}
    >
      <header className="text-center pt-12 px-6">
        <h1 className="text-5xl font-extrabold text-white mb-3 drop-shadow-md">
          Welcome to the Job Portal
        </h1>
        <p className="text-lg text-white opacity-90">
          “Your career is your business. Own it, love it, and work it.”
        </p>
      </header>

      {renderSection("📄 Resume Tools", resumeCards)}
      {renderSection("💼 Job Tools", jobCards)}
      {renderSection("👤 Profile & Account", profileCards)}

      <footer className="text-center text-white/70 pb-10">
        © 2025 Job Portal. Made with 💼 by Tharak Reddy.
      </footer>
    </div>
  );
};

export default HomePage;
