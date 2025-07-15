import React from "react";
import { FaCalendarCheck, FaUserInjured, FaBell, FaCog } from "react-icons/fa";

const DoctorDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Welcome, Dr. Josephine 👨‍⚕️
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
          <FaCalendarCheck className="text-3xl text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Appointments Today</p>
            <p className="text-xl font-bold text-gray-800">4</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
          <FaUserInjured className="text-3xl text-red-400" />
          <div>
            <p className="text-sm text-gray-500">New Patients</p>
            <p className="text-xl font-bold text-gray-800">2</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
          <FaBell className="text-3xl text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Notifications</p>
            <p className="text-xl font-bold text-gray-800">3</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
          <FaCog className="text-3xl text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Profile Settings</p>
            <p className="text-xl font-bold text-gray-800">Update Info</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="">
        <button className="bg-blue-600 text-white rounded-xl p-3 text-lg hover:bg-blue-700 transition">
          View Appointment Schedule
        </button>

        <button className="bg-purple-600 text-white rounded-xl p-3 text-lg hover:bg-purple-700 transition">
          Check Patient Records
        </button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
