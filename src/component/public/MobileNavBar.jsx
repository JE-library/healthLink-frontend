import React from "react";
import { NavLink } from "react-router";
import { X } from "lucide-react"; 

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Login", path: "/login" },
];

const MobileNav = ({ isNav, setIsNav }) => {
  return (
    <>
      {/* Overlay */}
      {isNav && (
        <div
          onClick={() => setIsNav(false)}
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
        />
      )}

      {/* Sidebar Menu */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white text-main-font shadow-lg transform transition-transform duration-300 ease-in-out rounded-l-2xl ${
          isNav ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-hidden={!isNav}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-primary-body font-primary-font">
            HealthLink
          </h2>
          <button
            onClick={() => setIsNav(false)}
            className="text-gray-600 hover:text-red-500 transition"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-lg font-medium font-secondary-font transition duration-200 ${
                  isActive
                    ? "bg-secondary-body text-primary-body"
                    : "text-main-font hover:bg-blue-50 hover:text-primary-body"
                }`
              }
              onClick={() => setIsNav(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
