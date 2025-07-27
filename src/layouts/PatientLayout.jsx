import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router";
import {
  FaUser,
  FaStethoscope,
  FaFlask,
  FaBell,
  FaSignOutAlt,
  FaHome,
  FaCog,
  FaBlog,
  FaCommentMedical,
  FaAmbulance,
  FaBars,
  FaTimes,
  FaCalendarCheck,
} from "react-icons/fa";
import axios from "../services/api";
import { FaFlaskVial, FaUserDoctor } from "react-icons/fa6";

const PatientLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [noti, setNoti] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/users/profile");
        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get("notifications");
        setNoti(res.data.notifications);
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      }
    };
    fetchNotifications();
  }, [location]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const navLinks = [
    { to: "/patient/dashboard", icon: <FaHome />, label: "Dashboard" },
    {
      to: "/patient/all-providers",
      icon: <FaUserDoctor />,
      label: "Specialists",
    },
    {
      to: "/patient/appointments",
      icon: <FaCalendarCheck />,
      label: "Appointments",
    },
    {
      to: "/patient/lab-requests",
      icon: <FaFlaskVial />,
      label: "Lab Requests",
    },

    { to: "/patient/chats", icon: <FaCommentMedical />, label: "Messages" },
    { to: "/patient/wellness-blog", icon: <FaBlog />, label: "Wellness Blog" },
    { to: "/patient/notifications", icon: <FaBell />, label: "Notifications" },
    { to: "/patient/profile", icon: <FaCog />, label: "Settings" },
  ];

  const unreadNoti = noti.filter((n) => !n.read);

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
              onClick={() => setIsSidebarOpen(false)} // close on mobile nav click
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
          className="mt-auto flex items-center gap-2 text-white hover:text-red-500   text-xl bg-red-500 w-fit px-2 rounded "
        >
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Nav */}
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow border-b">
          <div className="flex items-center gap-4">
            {/* Mobile Toggle */}
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
              onClick={() => navigate("/patient/notifications")}
              className="text-gray-500 hover:text-blue-600 relative cursor-pointer"
            >
              {/* Notification count, only show if there are unread notifications */}
              {unreadNoti.length > 0 && (
                <p className="absolute top-0 right-0 text-xs text-white bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadNoti.length}
                </p>
              )}

              <FaBell size={25} />
            </button>

            {user && (
              <div className="flex items-center gap-3">
                <img
                  src={user?.profilePhoto?.url || "/default-avatar.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div className="text-sm text-right">
                  <p className="font-medium text-gray-800">{user.fullName}</p>
                  <p className="text-gray-500 text-xs">{user.email}</p>
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

export default PatientLayout;
