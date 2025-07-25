import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaUserMd,
  FaHeartbeat,
  FaPills,
  FaComments,
  FaQuestionCircle,
  FaCog,
} from "react-icons/fa";
import { ChevronUp, ChevronDown } from "lucide-react";

import heroImage from "../../assets/patient.jpg";
import DoctorImage from "../../assets/phone.jpg";
import axios from "../../services/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [stats, setStats] = useState(null);

  const toggleFAQ = (index) =>
    setOpenFAQ((prev) => (prev === index ? null : index));

  const quickLinks = [
    {
      label: "Book Consultation",
      path: "/patient/all-providers",
      icon: <FaUserMd className="text-blue-500 text-2xl" />,
    },
    {
      label: "Messages",
      path: "/patient/chats",
      icon: <FaComments className="text-purple-500 text-2xl" />,
    },
    // {
    //   label: "Pharmacy",
    //   path: "/patient/pharmacy",
    //   icon: <FaPills className="text-pink-500 text-2xl" />,
    // },
    {
      label: "Settings",
      path: "/patient/profile",
      icon: <FaCog className="text-gray-600 text-2xl" />,
    },
    // {
    //   label: "Emergency",
    //   path: "/patient/emergency",
    //   icon: <FaHeartbeat className="text-red-600 text-2xl" />,
    // },
    {
      label: "Support",
      path: "/patient/support",
      icon: <FaQuestionCircle className="text-orange-500 text-2xl" />,
    },
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("/users/overview");
        setStats(res.data.dashboardStats);
      } catch (err) {
        console.error("Failed to fetch dashboard stats", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-primary-font">
      {/* Hero Section */}
      <section
        className="h-[35vh] flex items-center justify-start px-8 md:px-20 relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      ></section>

      {/* Stats */}
      {stats && (
        <div className="mt-12 px-6 md:px-20 space-y-10">
          {/* Appointments Section */}
          {stats.appointments && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Appointments
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Object.entries(stats.appointments).map(([key, value]) => (
                  <div
                    key={`appointment-${key}`}
                    className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
                  >
                    <p className="text-gray-500 text-sm capitalize">{key}</p>
                    <h3 className="text-2xl font-bold text-blue-700">
                      {value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lab Requests Section */}
          {stats.labRequests && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Lab Requests
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Object.entries(stats.labRequests).map(([key, value]) => (
                  <div
                    key={`lab-${key}`}
                    className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
                  >
                    <p className="text-purple-600 text-sm capitalize">{key}</p>
                    <h3 className="text-2xl font-bold text-purple-700">
                      {value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick Access */}
      <div className="mt-16 px-6 md:px-20">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {quickLinks.map(({ label, path, icon }) => (
            <Link
              key={label}
              to={path}
              className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md flex flex-col items-center justify-center text-center transition"
            >
              {icon}
              <span className="mt-2 text-gray-700 font-medium text-sm">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white/90 p-8 rounded-2xl max-w-xl shadow-xl mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
          Get healthcare instantly without the queues.
        </h2>
        <Link
          to="/patient/all-providers"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          Talk to a Specialist
        </Link>
      </div>

      {/* FAQ */}
      <div className="bg-blue-800 py-14 px-6 mt-20 text-white">
        <h3 className="text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "What services does HealthLink offer?",
              answer:
                "We offer virtual consultations, lab requests, emergency response, and more.",
            },
            {
              question: "Can I reschedule an appointment?",
              answer:
                "Yes, visit the Appointments section to modify or cancel.",
            },
            {
              question: "How are lab results delivered?",
              answer:
                "Results will be available in your dashboard under Home Lab.",
            },
          ].map(({ question, answer }, index) => (
            <div
              key={index}
              className={`rounded-lg p-5 cursor-pointer transition-all duration-300 ${
                openFAQ === index ? "bg-white text-blue-900" : "bg-white/10"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium">{question}</h4>
                {openFAQ === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              {openFAQ === index && (
                <p className="mt-2 text-sm text-gray-800">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <div className="mt-20 px-6 md:px-20 py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="max-w-xl mb-10 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Healthcare. Anywhere. Anytime.
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect with top-rated doctors and specialists right from your
              device. No travel, no wait.
            </p>
            <Link
              to="/patient/all-providers"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Find a Doctor
            </Link>
          </div>

          <div className="relative w-72 h-[320px] bg-black rounded-[3rem] p-2 shadow-xl">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-t-[2.5rem]" />
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
              <div className="pt-12 px-6 h-full bg-gradient-to-b from-green-100 to-green-50 flex flex-col justify-between">
                <div className="h-32 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={DoctorImage}
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-bold text-gray-800">
                    Doctor in your pocket
                  </h2>
                  <p className="text-sm text-gray-600">Anytime. Anywhere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
