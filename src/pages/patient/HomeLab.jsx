import React, { useState } from "react";

const Lab = () => {
  const [selectedTests, setSelectedTests] = useState([]);
  const [notes, setNotes] = useState("");
  const [requests, setRequests] = useState([]);
  const [confirmation, setConfirmation] = useState("");

  const availableTests = [
    "Full Blood Count",
    "Urinalysis",
    "COVID-19 PCR",
    "Malaria Parasite",
    "Liver Function Test",
    "Kidney Function Test",
  ];

  const handleTestChange = (test) => {
    setSelectedTests((prev) =>
      prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test]
    );
  };

  const submitRequest = () => {
    if (selectedTests.length === 0) {
      alert("Please select at least one lab test.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      tests: selectedTests,
      notes,
      date: new Date().toLocaleString(),
    };

    setRequests((prev) => [newRequest, ...prev]);
    setSelectedTests([]);
    setNotes("");
    setConfirmation("✅ Lab request submitted successfully!");
    setTimeout(() => setConfirmation(""), 4000);
  };

  return (
<div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
    <div className="max-w-xl mx-auto p-6">
      
      <div>
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Welcome to Our Lab Services
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Request a lab test from the comfort of your home. Our professionals will visit you,
          collect your samples, and deliver results to your dashboard.
        </p>
</div>
      <div className="mb-4">
        <p className="mb-2 font-semibold">Select Tests:</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {availableTests.map((test) => (
            <label key={test} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTests.includes(test)}
                onChange={() => handleTestChange(test)}
              />
              <span>{test}</span>
            </label>
          ))}
        </div>
      </div>

      <textarea
        className="w-full border p-2 rounded mb-4"
        placeholder="Any notes or doctor's referral..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        onClick={submitRequest}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit Request
      </button>

      {confirmation && <p className="mt-3 text-green-600">{confirmation}</p>}

      {requests.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Previous Requests</h3>
          <ul className="space-y-3">
            {requests.map((req) => (
              <li
                key={req.id}
                className="border p-3 rounded text-sm bg-gray-50"
              >
                <p><strong>Date:</strong> {req.date}</p>
                <p><strong>Tests:</strong> {req.tests.join(", ")}</p>
                {req.notes && <p><strong>Notes:</strong> {req.notes}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Lab;
// import React, { useState } from "react";

// const Lab = () => {
//   const [selectedTests, setSelectedTests] = useState([]);
//   const [notes, setNotes] = useState("");
//   const [requests, setRequests] = useState([]);
//   const [confirmation, setConfirmation] = useState("");

//   const availableTests = [
//     "Full Blood Count",
//     "Urinalysis",
//     "COVID-19 PCR",
//     "Malaria Parasite",
//     "Liver Function Test",
//     "Kidney Function Test",
//   ];

//   const handleTestChange = (test) => {
//     setSelectedTests((prev) =>
//       prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test]
//     );
//   };

//   const submitRequest = () => {
//     if (selectedTests.length === 0) {
//       alert("Please select at least one lab test.");
//       return;
//     }

//     const newRequest = {
//       id: Date.now(),
//       tests: selectedTests,
//       notes,
//       date: new Date().toLocaleString(),
//     };

//     setRequests((prev) => [newRequest, ...prev]);
//     setSelectedTests([]);
//     setNotes("");
//     setConfirmation("✅ Lab request submitted successfully!");
//     setTimeout(() => setConfirmation(""), 4000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
//       <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
//         <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
//           Request Lab Test
//         </h2>

//         <div className="mb-6">
//           <p className="mb-3 font-medium text-gray-700">Select Tests:</p>
//           <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
//             {availableTests.map((test) => (
//               <label
//                 key={test}
//                 className="flex items-center space-x-2 bg-gray-100 p-2 rounded hover:bg-blue-100 transition"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selectedTests.includes(test)}
//                   onChange={() => handleTestChange(test)}
//                 />
//                 <span>{test}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <textarea
//           className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Any notes or doctor's referral..."
//           value={notes}
//           onChange={(e) => setNotes(e.target.value)}
//         />

//         <button
//           onClick={submitRequest}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
//         >
//           Submit Request
//         </button>

//         {confirmation && (
//           <p className="mt-4 text-green-600 font-semibold text-center">
//             {confirmation}
//           </p>
//         )}

//         {requests.length > 0 && (
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold mb-3 text-gray-800">
//               Previous Requests
//             </h3>
//             <ul className="space-y-4">
//               {requests.map((req) => (
//                 <li
//                   key={req.id}
//                   className="border border-gray-200 p-4 rounded-lg bg-gray-50 shadow-sm"
//                 >
//                   <p>
//                     <strong>Date:</strong> {req.date}
//                   </p>
//                   <p>
//                     <strong>Tests:</strong> {req.tests.join(", ")}
//                   </p>
//                   {req.notes && (
//                     <p>
//                       <strong>Notes:</strong> {req.notes}
//                     </p>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Lab;

