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
        className="relative h-[35vh] flex items-center px-8 md:px-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-0" />
      </section>
      {/* Hero Text Content (Optional) */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-body mb-2 drop-shadow-sm">
          Your Health, Our Priority
        </h1>
        <p className="text-base md:text-lg text-primary-body max-w-xl">
          Access top doctors, labs, and wellness tips all from one platform.
        </p>
      </div>

      {/* Stats Section */}
      {stats && (
        <div className="mt-16 px-6 md:px-12 lg:px-20 space-y-12">
          {/* Appointments */}
          {stats.appointments && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Appointment Stats
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(stats.appointments).map(([key, value]) => (
                  <div
                    key={`appointment-${key}`}
                    className="bg-white border border-gray-200 p-5 rounded-xl  shadow-sm hover:shadow-md transition"
                  >
                    <p className="text-md text-gray-500 capitalize mb-1">
                      {key}
                    </p>
                    <h3 className="text-3xl font-bold text-blue-700 ">
                      {value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lab Requests */}
          {stats.labRequests && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Lab Request Stats
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Object.entries(stats.labRequests).map(([key, value]) => (
                  <div
                    key={`lab-${key}`}
                    className="bg-white border border-gray-200 p-5 rounded-xl  shadow-sm hover:shadow-md transition"
                  >
                    <p className="text-md text-gray-500 capitalize mb-1">
                      {key}
                    </p>
                    <h3 className="text-3xl font-bold text-purple-700">
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
      <div className="mt-20 px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Quick Access
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {quickLinks.map(({ label, path, icon }) => (
            <Link
              key={label}
              to={path}
              className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md flex flex-col items-center justify-center text-center transition"
            >
              <div className="text-blue-600 text-2xl">{icon}</div>
              <span className="mt-3 text-gray-800 font-medium text-sm">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Call-to-Action Box */}
      <div className="bg-white/90 p-10 rounded-2xl max-w-2xl shadow-xl mx-auto mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
          Get healthcare instantly without the queues.
        </h2>
        <Link
          to="/patient/all-providers"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          Talk to a Specialist
        </Link>
      </div>

      {/* FAQ Section */}
      <div className=" py-16 px-6 mt-24 text-blue-800">
        <h3 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h3>
        <div className="max-w-3xl mx-auto space-y-4  ">
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
              onClick={() => toggleFAQ(index)}
              className={`rounded-xl p-5 cursor-pointer transition-all duration-300  ${
                openFAQ === index ? "bg-white text-blue-900" : "bg-white/10"
              }`}
            >
              <div className="flex justify-between items-center ">
                <h4 className="text-lg font-semibold">{question}</h4>
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
      <div className="mt-24 px-6 md:px-20 py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
          {/* Promo Text */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Healthcare. Anywhere. Anytime.
            </h1>
            <p className="text-gray-700 mb-6 text-lg">
              Connect with top-rated doctors and specialists right from your
              device. No travel. No wait. Just care.
            </p>
            <Link
              to="/patient/all-providers"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Find a Doctor
            </Link>
          </div>

          {/* Promo Mockup */}
          <div className="relative w-72 h-[500px] bg-neutral-900 rounded-[2.5rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-900 rounded-t-[2rem]" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-900 rounded-full" />
              <div className="pt-12 px-4 h-full bg-gradient-to-b from-green-100 to-green-50 flex flex-col justify-between">
                <div className="h-36 rounded-xl overflow-hidden shadow">
                  <img
                    src={DoctorImage}
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-6 px-2">
                  <h2 className="text-xl font-semibold text-gray-800 leading-snug">
                    Bringing the service to your doorstep
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Anytime. Anywhere.
                  </p>
                </div>
                <div className="mb-6 text-center">
                  <button className="bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition">
                    Book Now
                  </button>
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
