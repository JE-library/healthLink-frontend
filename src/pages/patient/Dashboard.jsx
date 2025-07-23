
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import React from "react";

import { Link } from "react-router";

import {
  FaCalendarAlt,
  FaUserMd,
  FaHeartbeat,
  FaCog,
  FaBell,

  FaFlask,
  FaPills,
  FaComments,
  FaQuestionCircle,
} from "react-icons/fa";
import { ChevronUp, ChevronDown } from "lucide-react";
import heroImage from "../../assets/patient.jpg";
import DoctorImage from "../../assets/phone.jpg";

  FaSignOutAlt,
} from "react-icons/fa";
import contactImage from "../../assets/image.png"; // Adjust path if needed


const Dashboard = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const handleNotifications = () => {
    navigate("/patient/notifications");
  };

  const featureLinks = [
    {
      label: "Appointments",
      path: "/patient/appointments",
      icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
    },
    {
      label: "Book Consultation",
      path: "/patient/book-consultation",
      icon: <FaUserMd className="text-green-500 text-2xl" />,
    },
    {
      label: "Consultation",
      path: "/patient/consultation/1",
      icon: <FaComments className="text-purple-500 text-2xl" />,
    },
    {
      label: "Pharmacy",
      path: "/patient/pharmacy",
      icon: <FaPills className="text-pink-500 text-2xl" />,
    },
    {
      label: "Home Lab",
      path: "/patient/home-lab",
      icon: <FaFlask className="text-indigo-500 text-2xl" />,
    },
    {
      label: "Notifications",
      path: "/patient/notifications",
      icon: <FaBell className="text-yellow-500 text-2xl" />,
    },
    {
      label: "Profile",
      path: "/patient/profile",
      icon: <FaCog className="text-gray-600 text-2xl" />,
    },
    {
      label: "Support",
      path: "/patient/support",
      icon: <FaQuestionCircle className="text-red-400 text-2xl" />,
    },
    {
      label: "Emergency",
      path: "/patient/emergency",
      icon: <FaHeartbeat className="text-red-600 text-2xl" />,
    },
  ];

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 pb-20 relative">
      {/* Hero Section */}
      <div
        className="relative  my-4 mx-4 h-[650px] flex items-center justify-start overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top-right Actions */}
        <div className="absolute top-6 right-6 z-10 flex gap-4">
          <button
            onClick={handleNotifications}
            className="bg-white p-3 rounded-full shadow hover:bg-gray-100"
          >
            <FaBell className="text-blue-600 text-xl" />
          </button>
          <button
            onClick={handleLogout}
            className="bg-white p-3 rounded-full shadow hover:bg-gray-100"
          >
            <HiOutlineLogout className="text-red-500 text-xl" />
          </button>
        </div>

        <div className="bg-tertiary-body p-8 rounded-xl max-w-xl ml-12 z-10">
          <h2 className="text-3xl md:text-3xl  text-gray-800 mb-4">
            Skip the long queues. Book a doctor instantly.
          </h2>
          <Link
            to="/patient/book-consultation"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"

    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <img
          src={contactImage}
          alt="Dashboard Hero"
          className="absolute w-full h-full object-cover z-0"
        />

        {/* Top-right Actions */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
          <button
            className="relative bg-white p-3 rounded-full shadow hover:shadow-md"
            title="Notifications"
          >
            <FaBell className="text-blue-600 text-xl" />
            <span className="absolute top-2 right-2 bg-red-500 h-2 w-2 rounded-full" />
          </button>
          <button
            onClick={() => console.log("Logging out...")}
            className="bg-white px-4 py-2 rounded-lg text-red-600 border border-red-400 hover:bg-red-50 transition"
          >
            <FaSignOutAlt className="inline mr-2" />
            <Link to="patient/notifications" className="Dashboard">
              Logout
            </Link>
          </button>
        </div>

        {/* Centered Welcome Message */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Skip the long queues. Ask a doctor online in just 3 easy steps.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <div className="bg-blue-200 rounded-2xl p-6 my-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 mx-4">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ask a doctor online today
          </h2>
          <p className="text-gray-700 mb-6">
            Talk to a certified healthcare provider now.
          </p>
          <Link
            to="/patient/book-consultation"
            className="bg-blue-400 text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-blue-500"

          >
            Talk to a specialist
          </Link>
        </div>

      </div>

      {/* Quick Access */}
      <div className="mt-10 px-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featureLinks.map(({ label, path, icon }) => (
            <Link
              key={label}
              to={path}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg flex flex-col items-center text-center"
            >
              {icon}
              <span className="mt-2 text-gray-800 font-semibold">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-primary-body py-8 px-6 mt-14 text-white text-center">
        <h3 className="text-4xl font-bold">Frequently Asked Questions</h3>
        <p className="mt-2">Find answers to the most common queries from our users.</p>
      

      <div className="max-w-4xl mx-auto bg-blue rounded-xl shadow-md p-6 mt-4 space-y-4">
        <div
          className={`border border-blue-200 rounded-xl p-4 transition-all duration-300 cursor-pointer ${
            openIndex === 0 ? "bg-primary-body" : "bg-pink-300"
          }`}
          onClick={() => toggle(0)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              What services does HealthLink offer?
            </h3>
            {openIndex === 0 ? <ChevronUp /> : <ChevronDown />}
=======
      </div>

      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 px-4">
        Welcome to HealthLink, Josephine 👋
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 px-4">
        <Link to="/patient/appointments" className="dashboard-card">
          <FaCalendarAlt className="text-2xl text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Upcoming Appointments</p>
            <p className="text-lg font-semibold text-gray-800">2</p>
          </div>
          {openIndex === 0 && (
            <p className="mt-2 text-sm text-white">
              We offer virtual consultations, urgent care, mental health services, and more.
            </p>
            
          )}
        </div>
        </div>
      </div>


      {/* Promotional Section */}
      <div className="mt-20 min-h-screen bg-gradient-to-b from-orange-50 via-white to-teal-50 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-teal-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-10 w-8 h-8 bg-teal-400 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-orange-300 rounded-full opacity-60"></div>

        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="flex-1 max-w-lg mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Get Started Today
            </h1>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Talk to <span className="text-blue-600 font-medium">online doctors</span>{" "}
              {/* <span className="text-blue-600 font-medium">get medical advice</span>, online prescriptions,{" "}
              <span className="text-orange-500 font-medium">refills</span>,{" "}
              <span className="text-blue-600 font-medium">lab requisitions</span> and{" "}
              <span className="text-blue-600 font-medium">medical notes</span> within{" "} */}
              <span className="text-orange-500 font-medium"></span>. On-demand healthcare services at your fingertips.
            </p>
            <Link
            to="/patient/book-consultation"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Talk to a specialist
          </Link>
        <Link to="/patient/available-doctors" className="dashboard-card">
          <FaUserMd className="text-2xl text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Available Doctors</p>
            <p className="text-lg font-semibold text-gray-800">5</p>
          </div>
        </Link>

        <Link to="/blog" className="dashboard-card">
          <FaHeartbeat className="text-2xl text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Health Tips</p>
            <p className="text-lg font-semibold text-gray-800">New Today</p>

          </div>


          {/* Right - Phone UI */}
         <div className="flex-1 flex justify-center items-center relative">
  <div className="absolute w-96 h-96 bg-teal-200 rounded-full opacity-30"></div>
  
  <div className="relative z-10 w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
      
      {/* Phone top notch */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-t-[2.5rem]"></div>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>
      
      {/* Phone screen content */}
      <div className="pt-12 px-6 h-full bg-gradient-to-b from-green-100 to-green-50">
        <div className="relative h-72 rounded-2xl overflow-hidden mb-6">
          <img
            src={DoctorImage}
            alt="Doctor consultation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Get 24/7 doctor in your pocket!
          </h2>
          <p className="text-gray-600 text-sm mb-8 px-2">
            Healthcare without the wait
          </p>
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
                    {/* <Link
            to="/patient/book-consultation"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Talk to a specialist
          </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

        <Link to="/patient/profile" className="dashboard-card">
          <FaCog className="text-2xl text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Settings</p>
            <p className="text-lg font-semibold text-gray-800">Update Info</p>
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-12">
        <Link
          to="/patient/book-consultation"
          className="bg-blue-600 text-white rounded-xl p-5 text-lg text-center hover:bg-blue-700 transition"
        >
          Book a Doctor Appointment
        </Link>

        <Link
          to="/patient/emergency"
          className="bg-red-600 text-white rounded-xl p-5 text-lg text-center hover:bg-red-700 transition"
        >
          Emergency / Call Ambulance
        </Link>
        
      </div>

    </div>
  );
};

export default Dashboard;

// const Dashboard = () => {
//   return (
//     <div className="p-6">
//       {/* 🌟 Hero Section */}
//       {/* 🩺 Hero Section with Image */}
//       <div className="bg-blue-200 rounded-2xl p-6 mb-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Text Content */}
//         <div className="md:w-1/2">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Skip the long queues at the walk-in clinic. Ask a doctor online for
//             help
//           </h2>
//           <p className="text-gray-700 text-md md:text-lg mb-6">
//             Consult with an online urgent care provider in 3 easy steps
//           </p>
//           <Link
//             to="/doc-appointments"
//             className="inline-block bg-blue-400 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
//           >
//             Talk to a doctor
//           </Link>
//         </div>

//         {/* Image */}
//         <div className="md:w-1/2">
//           <img
//             src="./a"
//             alt="Video consultation with doctor"
//             className="rounded-xl w-full object-cover"
//           />
//         </div>
//       </div>

//       <h1 className="text-3xl font-bold text-blue-700 mb-6">
//         Welcome to HealthLink, Josephine 👋
//       </h1>

//       {/* Summary Cards with Links */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <Link
//           to="/patient/appointments"
//           className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-xl transition"
//         >
//           <FaCalendarAlt className="text-2xl text-blue-500" />
//           <div>
//             <p className="text-sm text-gray-500">Upcoming Appointments</p>
//             <p className="text-lg font-semibold text-gray-800">2</p>
//           </div>
//         </Link>

//         <Link
//           to="/patient/available-doctors"
//           className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-xl transition"
//         >
//           <FaUserMd className="text-2xl text-green-500" />
//           <div>
//             <p className="text-sm text-gray-500">Available Doctors</p>
//             <p className="text-lg font-semibold text-gray-800">5</p>
//           </div>
//         </Link>

//         <Link
//           to="/blogs"
//           className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-xl transition"
//         >
//           <FaHeartbeat className="text-2xl text-pink-500" />
//           <div>
//             <p className="text-sm text-gray-500">Health Tips</p>
//             <p className="text-lg font-semibold text-gray-800">New Today</p>
//           </div>
//         </Link>

//         <Link
//           to="/dashboard/settings"
//           className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-xl transition"
//         >
//           <FaCog className="text-2xl text-gray-500" />
//           <div>
//             <p className="text-sm text-gray-500">Settings</p>
//             <p className="text-lg font-semibold text-gray-800">Update Info</p>
//           </div>
//         </Link>
//       </div>

//       {/* Action Buttons */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Link
//           to="/doc-appointments"
//           className="bg-blue-600 text-white rounded-xl p-5 text-lg hover:bg-blue-700 transition text-center"
//         >
//           Book a Doctor Appointment
//         </Link>

//         <Link
//           to="/amb-details"
//           className="bg-red-600 text-white rounded-xl p-5 text-lg hover:bg-red-700 transition text-center"
//         >
//           Emergency / Call Ambulance
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
