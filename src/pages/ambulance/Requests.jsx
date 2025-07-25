import React from "react";

const requests = [
  {
    id: "REQ001",
    patientName: "John Doe",
    location: "Tema General Hospital",
    date: "2025-07-20",
    status: "active",
  },
  {
    id: "REQ002",
    patientName: "Sarah Mensah",
    location: "Korle Bu",
    date: "2025-07-18",
    status: "completed",
  },
  {
    id: "REQ003",
    patientName: "Kwame Appiah",
    location: "37 Military Hospital",
    date: "2025-07-15",
    status: "cancelled",
  },
];

const statusStyles = {
  active: "text-green-600 bg-green-100",
  completed: "text-blue-600 bg-blue-100",
  cancelled: "text-red-600 bg-red-100",
};
const Requests = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Ambulance Request History
        </h1>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Request ID</th>
              <th className="p-3">Patient</th>
              <th className="p-3">Location</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-b">
                <td className="p-3">{req.id}</td>
                <td className="p-3">{req.patientName}</td>
                <td className="p-3">{req.location}</td>
                <td className="p-3">{req.date}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      statusStyles[req.status]
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
  );
};

export default Requests;
