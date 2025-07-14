import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center px-4">
      <form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 ">
          Let's Get You Logged In!
        </h2>
        <label
          htmlFor=""
          className="block text-[20px] font-medium text-blue-500"
        >
          Username Or Email
        </label>
        <br />
        <input
          type="text"
          name=""
          id=""
          className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username or email"
          required
        />
        <label
          htmlFor=""
          className="block text-[20px] font-medium text-blue-500 mt-[15px]"
        >
          Password
        </label>
        <input
          type="text"
          name=""
          id=""
          className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
          required
        />
        <button className="w-[150px] bg-blue-500 text-white mt-[30px] ml-[110px] p-[10px] justify-center rounded-[15px] hover:bg-blue-500/80 transition duration-200">
          Submit
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
