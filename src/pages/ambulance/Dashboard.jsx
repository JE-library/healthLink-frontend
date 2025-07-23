
const AmbulanceDashboard = () => {
  return (
    <div>
      <h3>Ambulance Dashboard</h3>
      <p>Track ambulance deployments, active requests, and response time.</p>

import React from "react";
import { Link } from "react-router";

const stats = [
  { label: "Total Requests", value: 120 },
  { label: "Active Requests", value: 8 },
  { label: "Completed", value: 100 },
  { label: "Cancelled", value: 12 },
];

const recentRequests = [
  {
    id: "REQ121",
    patient: "Akosua Osei",
    location: "Tema Hospital",
    date: "2025-07-21",
    status: "active",
  },
  {
    id: "REQ120",
    patient: "Kofi Mensah",
    location: "37 Military Hospital",
    date: "2025-07-20",
    status: "completed",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 ">
      <div className="m-[40px]">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome, Ambulance Services 🚑
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-sm text-gray-500">{stat.label}</h2>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Link
            to="/ambulance/requests"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            View Request History
          </Link>
          <Link
            to="/ambulance/profile"
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            View Profile
          </Link>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            + Add New Ambulance
          </button>
        </div>

        {/* Recent Requests */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Recent Requests
          </h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Patient</th>
                <th className="p-3">Location</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentRequests.map((req) => (
                <tr key={req.id} className="border-b">
                  <td className="p-3">{req.id}</td>
                  <td className="p-3">{req.patient}</td>
                  <td className="p-3">{req.location}</td>
                  <td className="p-3">{req.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        req.status === "active"
                          ? "bg-green-100 text-green-600"
                          : req.status === "completed"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default AmbulanceDashboard;

export default Dashboard;

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200">
//       <div className="max-w-7xl mx-auto bg-gray-100 shadow-xl rounded-lg p-8">
//         <div className="flex items-center space-x-6">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-800">
//               Speedy Rescue Ambulance
//             </h1>
//             <p className="text-gray-600">Available 24/7 across The Country</p>
//           </div>
//         </div>

//         <div className="mt-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Services</h2>
//           <ul className="list-disc ml-6 text-gray-700 space-y-1">
//             <li>Emergency Medical Response</li>
//             <li>Inter-Hospital Transfers</li>
//             <li>Event Standby Services</li>
//             <li>First Aid Support</li>
//           </ul>
//         </div>

//         <Link to="/ambulance/requests" className="dashboard-card">
//           {/* <FaUserMd className="text-2xl text-green-500" /> */}
//           <div>
//             <p className="text-sm text-gray-500">Requests</p>
//             <p className="text-lg font-semibold text-gray-800">3</p>
//           </div>
//         </Link>

//         <div className="mt-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Contact Info
//           </h2>
//           <p className="text-gray-700">📞 +233 20 123 4567</p>
//           <p className="text-gray-700">📍 Accra, Ghana</p>
//           <p className="text-gray-700">📧 support@speedyambulance.com</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

