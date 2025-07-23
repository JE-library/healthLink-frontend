import React from "react";
import { Link, NavLink } from "react-router";

const DesktopNav = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <nav className="w-[60%] max-w-[500px]">
      <ul className=" md:flex justify-evenly items-end text-white font-bold  hidden">
        {navLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.path}
            className={({ isActive }) =>
              isActive ? "border-b-2 text-primary-body" : ""
            }
          >
            <li className="px-4 text-center hover:border-b-1 hover:text-primary-body transition duration-200">
              {link.label}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
