import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import {
  FaBell,
  FaSignOutAlt,
  FaCalendarCheck,
  FaFlask,
  FaBars,
  FaTimes,
  FaCog,
  FaCommentDots,
  FaHome,
} from "react-icons/fa";
import axios from "../services/api";

const ProviderLayout = () => {
  const [provider, setProvider] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const res = await axios.get("/providers/profile");
        setProvider(res.data.provider);
      } catch (err) {
        console.error("Failed to fetch provider profile:", err);
      }
    };
    fetchProvider();
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  // Build sidebar links dynamically
  const navLinks = [
    {
      to: "/provider/dashboard",
      icon: <FaHome />,
      label: "Dashboard",
    },
    {
      to: "/provider/appointments",
      icon: <FaCalendarCheck />,
      label: "Appointments",
    },
    {
      to: "/provider/chats",
      icon: <FaCommentDots />,
      label: "Messages",
    },
    {
      to: "/provider/notifications",
      icon: <FaBell />,
      label: "Notifications",
    },
    {
      to: "/provider/profile",
      icon: <FaCog />,
      label: "Settings",
    },
  ];

  if (provider?.specialization?.toLowerCase() === "lab technician") {
    navLinks.splice(2, 0, {
      to: "/provider/lab-requests",
      icon: <FaFlaskVial />,
      label: "Lab Requests",
    });
  }

  return (
    <div className="flex h-screen bg-gray-50 font-primary-font overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-blue-900 text-white flex flex-col p-6 space-y-6 shadow-lg transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:relative lg:z-0`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">HealthLink</h1>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="space-y-4 text-lg font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-white bg-main-body p-2 rounded-lg font-semibold"
                  : "flex items-center gap-2 hover:text-blue-300"
              }
            >
              {link.icon} {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={logout}
          className="mt-auto flex items-center gap-2 text-white hover:text-red-500 text-xl bg-red-500 w-fit px-2 rounded"
        >
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Nav */}
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow border-b">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-700"
            >
              <FaBars size={22} />
            </button>
            <span className="text-lg font-semibold text-gray-700">
              Welcome back!
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/provider/notifications")}
              className="text-gray-500 hover:text-blue-600 relative"
            >
              <FaBell size={20} />
            </button>

            {provider && (
              <div className="flex items-center gap-3">
                <img
                  src={provider?.profilePhoto?.url || "/default-avatar.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div className="text-sm text-right">
                  <p className="font-medium text-gray-800">
                {provider.fullName}
                  </p>
                  <p className="text-gray-500 text-xs">{provider.email}</p>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProviderLayout;
