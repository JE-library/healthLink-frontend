import React from "react";

const doctors = [
  { id: 1, name: "Dr. John Doe", profession: "Cardiologist", available: true },
  {
    id: 2,
    name: "Dr. Jane Smith",
    profession: "Pediatrician",
    available: false,
  },
  {
    id: 3,
    name: "Dr. Michael Brown",
    profession: "Orthopedic",
    available: true,
  },
];
const AvailableDoctors = () => {
  return (
    <div className="overflow-x-auto min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 ">
      <div className="m-[35px]">
        <h1 className="text-3xl font-bold text-blue-700 mb-[25px]">
          Welcome to HealthLink, Josephine 👋
        </h1>
        <h1 className="text-2xl font-bold text-blue-700 mb-[25px]">
          Available Doctors
        </h1>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Profession
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="border-b">
                <td className="px-6 py-4">{doctor.name}</td>
                <td className="px-6 py-4">{doctor.profession}</td>
                <td className="px-6 py-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => alert(`Viewing details for ${doctor.name}`)}
                  >
                    View Details
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
                    onClick={() => alert(`Starting chat with ${doctor.name}`)}
                  >
                    Start Chat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <div className="overflow-x-auto m-[35px]">
    //   <h1 className="text-3xl font-bold text-blue-700 mb-[25px]">
    //     Welcome to HealthLink, Josephine 👋
    //   </h1>
    //   <h1 className="text-2xl font-bold text-blue-700 mb-[25px]">
    //     Available Doctors
    //   </h1>
    //   <table className="min-w-full bg-white shadow-md rounded-lg">
    //     <thead>
    //       <tr className="bg-gray-200">
    //         <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
    //           Name
    //         </th>
    //         <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
    //           Profession
    //         </th>
    //         <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
    //           Availability
    //         </th>
    //         <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
    //           Actions
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {doctors.map((doctor) => (
    //         <tr key={doctor.id} className="border-b">
    //           <td className="px-6 py-4">{doctor.name}</td>
    //           <td className="px-6 py-4">{doctor.profession}</td>
    //           <td className="px-6 py-4">
    //             {doctor.available ? "Available" : "Not Available"}
    //           </td>
    //           <td className="px-6 py-4">
    //             <button
    //               className="bg-blue-500 text-white px-4 py-2 rounded-md"
    //               onClick={() => alert(`Viewing details for ${doctor.name}`)}
    //             >
    //               View Details
    //             </button>
    //             <button
    //               className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
    //               onClick={() => alert(`Starting chat with ${doctor.name}`)}
    //             >
    //               Start Chat
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default AvailableDoctors;
