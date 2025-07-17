import React from "react";
import { NavLink } from "react-router";

function MobileNav({ isNav }) {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`animate-navBar origin-right mt-15 h-screen bg-main-font w-[90%] max-w-[300px] right-0 top-0 md:hidden ${
        isNav ? "fixed" : "hidden"
      }`}
    >
      <ul className=" mt-12 flex flex-col  text-secondary-body font-bold ">
        {navLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.path}
            className={({ isActive }) =>
              isActive ? "underline text-primary-body bg-secondary-body " : ""
            }
          >
            <li className="p-2 pl-4 transition duration-300 hover:text-main-font hover:underline hover:bg-secondary-body w-[100%]">
              {link.label}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNav;
