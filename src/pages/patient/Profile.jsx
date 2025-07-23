// import React from "react";

// const specialists = [
//   {
//     id: 1,
//     name: "Dr. Akua Sarpong",
//     title: "Nutritionist",
//     bio: "Helps clients with weight management, fertility, and child nutrition.",
//   },
//   {
//     id: 2,
//     name: "Dr. Kwame Mensah",
//     title: "Gynecologist",
//     bio: "Specializes in women’s reproductive health and prenatal care.",
//   },
//   {
//     id: 3,
//     name: "Dr. Sarah Boateng",
//     title: "Pediatrician",
//     bio: "Focused on child health, vaccination, and growth monitoring.",
//   },
// ];

// const Specialists = () => {
//   const handleBook = (specialist) => {
//     alert(`Booking consultation with ${specialist.name}`);
//     // Optionally redirect to the appointment form with pre-filled specialist
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
//         Our Health Specialists
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {specialists.map((specialist) => (
//           <div
//             key={specialist.id}
//             className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">
//               {specialist.name}
//             </h3>
//             <p className="text-blue-600">{specialist.title}</p>
//             <p className="text-sm mt-2 text-gray-600">{specialist.bio}</p>
//             <button
//               onClick={() => handleBook(specialist)}
//               className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             >
//               Book Consultation
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Specialists;
import React from "react";

const patients = [
  {
    name: "Jane Doe",
    age: 29,
    gender: "Female",
    phone: "+233 24 123 4567",
    email: "jane.doe@example.com",
    address: "East Legon, Accra",
    bloodType: "O+",
    insurance: "NHIS - Active",
    nextOfKin: {
      name: "John Doe",
      relation: "Husband",
      contact: "+233 24 987 6543"
    },
  },
  {
    name: "Kwame Mensah",
    age: 34,
    gender: "Male",
    phone: "+233 20 987 1234",
    email: "kwame.mensah@example.com",
    address: "Kumasi, Ghana",
    bloodType: "A+",
    insurance: "Private - Active",
    nextOfKin: {
      name: "Ama Mensah",
      relation: "Wife",
      contact: "+233 26 456 7890"
    },
  },
  {
    name: "Efua Owusu",
    age: 41,
    gender: "Female",
    phone: "+233 27 333 4444",
    email: "efua.owusu@example.com",
    address: "Takoradi, Ghana",
    bloodType: "B-",
    insurance: "NHIS - Pending",
    nextOfKin: {
      name: "Kojo Owusu",
      relation: "Brother",
      contact: "+233 24 222 1111"
    },
  }
];

const Profile = () => {
  return (
    <div className="p-6 overflow-x-auto max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Patient Profiles
      </h1>

      <table className="min-w-full border border-gray-300 shadow-lg rounded bg-white">
        <thead className="bg-blue-100 text-blue-800">
          <tr>
            <th className="p-4 font-semibold text-left">Field</th>
            {patients.map((_, index) => (
              <th key={index} className="p-4 font-semibold text-center">
                Patient {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ["Full Name", "name"],
            ["Gender", "gender"],
            ["Age", "age"],
            ["Phone", "phone"],
            ["Email", "email"],
            ["Address", "address"],
            ["Blood Type", "bloodType"],
            ["Insurance", "insurance"],
            ["Next of Kin Name", "nextOfKin.name"],
            ["Next of Kin Relation", "nextOfKin.relation"],
            ["Next of Kin Contact", "nextOfKin.contact"]
          ].map(([label, key], rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="p-4 font-medium text-gray-700">{label}</td>
              {patients.map((patient, colIndex) => {
                const value = key.includes(".")
                  ? key.split(".").reduce((obj, k) => obj[k], patient)
                  : patient[key];
                return (
                  <td key={colIndex} className="p-4 text-center">
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;




