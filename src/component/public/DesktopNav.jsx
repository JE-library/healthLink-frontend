import React from "react";
import { NavLink } from "react-router";

const DesktopNav = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
  ];

  return (
    <nav className="hidden md:flex items-center bg-white px-6 py-3 rounded-full shadow-md">
      <ul className="flex gap-6 font-medium text-blue-900">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `transition duration-200 px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-main-body text-white"
                    : "hover:text-white hover:bg-primary-body"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
