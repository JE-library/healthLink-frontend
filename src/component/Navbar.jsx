import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between align-center py-5 bg-blue-200 text-white font-semibold font-serif rounded-4xl shadow-blue-300">
          {" "}
          <span className="flex m-[15px]">
            <strong>HEALTHLINE</strong>{" "}
          </span>{" "}
          <ul className="flex space-x-5 m-[15px]">
            {" "}
            <li>
              <Link to="/">Home</Link>{" "}
            </li>{" "}
            <li>
              <Link to="/about">About</Link>{" "}
            </li>{" "}
            <li>
              <Link to="/blog">Blogs</Link>{" "}
            </li>{" "}
            <li>
              <Link to="/contact">Contacts</Link>{" "}
            </li>{" "}
          </ul>{" "}
          <button>
            <Link
              to="sign-up"
              className="px-10 py-4 text-blue-700 font-medium border border-blue-500 rounded-2xl hover:bg-blue-100 transition duration-300"
            >
              Sign up
            </Link>
          </button>
          <button className="bg-gray-700py-4 px-10 rounded-2xl">
            {" "}
            <Link
              to="log-in"
              className="bg-blue-700 py-4 px-10 rounded-2xl font-medium"
            >
              Sign-in{" "}
            </Link>{" "}
          </button>{" "}
        </nav>
    </div>
  )
}

export default Navbar