import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
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
  FaSignOutAlt,
} from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { ChevronUp, ChevronDown } from "lucide-react";

import heroImage from "../../assets/patient.jpg";
import DoctorImage from "../../assets/phone.jpg";
import contactImage from "../../assets/image.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
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
      label: "Health Tips",
      path: "/blog",
      icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
    },
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

      {/* Hero Section */}
      <section
        className="relative h-[650px] w-full flex items-center justify-start overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-tertiary-body p-8 rounded-xl max-w-xl ml-12 z-10">
          <h2 className="text-3xl text-gray-800 mb-4">
            Skip the long queues. Book a doctor instantly.
          </h2>
          <Link
            to="/patient/book-consultation"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Quick Access Section */}
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
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="flex-1 max-w-lg mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Get Started Today
            </h1>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Talk to <span className="text-blue-600 font-medium">online doctors</span>. On-demand healthcare services at your fingertips.
            </p>
            <Link
              to="/patient/book-consultation"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              Talk to a specialist
            </Link>
          </div>

          {/* Phone UI */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="absolute w-96 h-96 bg-teal-200 rounded-full opacity-30"></div>
            <div className="relative z-10 w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-t-[2.5rem]"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>

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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
