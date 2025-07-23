import React from "react";

import { Link } from "react-router";
import {
  FaCalendarAlt,
  FaUserMd,
  FaHeartbeat,
  FaCog,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import contactImage from "../../assets/image.png"; // Adjust path if needed

const Dashboard = () => {
  return (
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
        </Link>

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
