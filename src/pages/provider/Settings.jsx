import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Settings</h1>

      <div className="flex flex-col md:flex-row gap-[5px]">
        {/* Profile Edit Form */}
        <form className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Edit Profile
          </h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Profile
          </button>
        </form>

        {/* Change Password Form */}
        <form className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Change Password
          </h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-600">
              Old Password
            </label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter old password"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-600">
              New Password
            </label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter new password"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
