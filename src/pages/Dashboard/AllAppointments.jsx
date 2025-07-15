import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const AllAppointments = () => {
  const [search, setSearch] = useState("");
  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      service: "Doctor Consultation",
      date: "2024-07-10",
      time : "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patientName: "Sarah Lee",
      service: "Physiotherapy",
      date: "2024-07-12",
      time: "2:30 PM",
      status: "Pending",
    },
    {
      id: 3,
      patientName: "Michael Brown",
      service: "Mental Health",
      date: "2024-07-15",
      time: "4:00 PM",
      status: "Completed",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Appointments</h1>

      {/* Top Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center border rounded-lg px-3 py-1 w-full sm:w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search patient or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        

        
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time Slot</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app) => (
              <tr key={app.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{app.patientName}</td>
                <td className="p-3">{app.service}</td>
                <td className="p-3">{app.date}</td>
                <td className="p-3">{app.time}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs text-white ${
                      app.status === "Confirmed"
                        ? "bg-green-500"
                        : app.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <label className="text-sm text-gray-600">
            Rows per page:{" "}
            <select className="ml-2 border rounded p-1">
              <option>5</option>
              <option>10</option>
              <option>25</option>
            </select>
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <button className="text-sm px-3 py-1 border rounded">1</button>
          <button className="text-sm px-3 py-1 border rounded bg-blue-600 text-white">2</button>
          <button className="text-sm px-3 py-1 border rounded">3</button>
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
