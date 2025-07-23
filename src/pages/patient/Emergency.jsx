import { useEffect, useState } from "react";
import { FaAmbulance, FaPhoneAlt } from "react-icons/fa";

const Emergency = () => {
  const [note, setNote] = useState("");
  const [location, setLocation] = useState(null);
  const [history, setHistory] = useState([]);

  // Get location on component load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Location access denied", error);
      }
    );
  }, []);

  const handleEmergencyCall = (type) => {
    alert(`Calling ${type}...`);
  };

  const handleSendRequest = () => {
    if (note.trim() === "") {
      alert("Please describe the emergency!");
      return;
    }

    const newRequest = {
      note,
      location: location || "Location not shared",
      timestamp: new Date().toLocaleString(),
    };

    // Notify specialist dashboard (simulate)
    console.log("🔔 Emergency Notification Sent to Specialist:", newRequest);

    // Save to local state
    setHistory((prev) => [newRequest, ...prev]);

    // Clear form
    setNote("");
    alert("Emergency request sent!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Emergency Help</h2>

      {/* Quick Call Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => handleEmergencyCall("Ambulance")}
          className="bg-red-500 text-white p-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-red-600"
        >
          <FaAmbulance />
          <span>Ambulance</span>
        </button>

        <button
          onClick={() => handleEmergencyCall("Doctor")}
          className="bg-blue-600 text-white p-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-700"
        >
          <FaPhoneAlt />
          <span>Call Doctor</span>
        </button>
      </div>

      {/* Emergency Note Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Describe the Emergency
        </label>
        <textarea
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Severe chest pain, bleeding, etc..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      {/* Send Request */}
      <button
        onClick={handleSendRequest}
        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
      >
        Send Emergency Request
      </button>

      {/* Location Note */}
      <div className="text-center mt-3 text-sm text-gray-600">
        Location:{" "}
        {location
          ? `Lat: ${location.lat.toFixed(4)}, Lng: ${location.lng.toFixed(4)}`
          : "Not shared"}
      </div>

      {/* Emergency History */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Past Emergency Requests</h3>
        {history.length === 0 ? (
          <p className="text-sm text-gray-500">No emergency history yet.</p>
        ) : (
          <ul className="space-y-2">
            {history.map((item, index) => (
              <li
                key={index}
                className="p-3 border border-gray-200 rounded-md bg-gray-50"
              >
                <div className="text-sm font-medium">{item.note}</div>
                <div className="text-xs text-gray-500">
                  {item.timestamp} –{" "}
                  {typeof item.location === "string"
                    ? item.location
                    : `(${item.location.lat.toFixed(2)}, ${item.location.lng.toFixed(2)})`}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Emergency;
// import React, { useState } from "react";

// const Emergency = () => {
//   const [location, setLocation] = useState(null);
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [history, setHistory] = useState([]);
//   const [message, setMessage] = useState("");

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((pos) => {
//         const coords = {
//           latitude: pos.coords.latitude,
//           longitude: pos.coords.longitude,
//         };
//         setLocation(coords);
//         notifySpecialist(coords);
//         logEmergency(coords);
//       });
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   const notifySpecialist = (coords) => {
//     // Simulate notification to backend/specialist dashboard
//     console.log("🔔 Notifying specialist with location:", coords);
//     setMessage("Specialist notified. Help is on the way.");
//   };

//   const logEmergency = (coords) => {
//     const entry = {
//       id: Date.now(),
//       name,
//       gender,
//       location: coords,
//       date: new Date().toLocaleString(),
//     };
//     setHistory((prev) => [entry, ...prev]);
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-red-700">Emergency Help</h2>

//       <div className="space-y-4 mb-6">
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select Gender</option>
//           <option value="Female">Female</option>
//           <option value="Male">Male</option>
//           <option value="Other">Other</option>
//         </select>
//         <button
//           onClick={getLocation}
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
//         >
//           Request Emergency Help
//         </button>
//         {message && <p className="text-green-600">{message}</p>}
//       </div>

//       <h3 className="text-lg font-semibold mb-2">Emergency History</h3>
//       <ul className="space-y-2">
//         {history.map((entry) => (
//           <li key={entry.id} className="border p-3 rounded text-sm">
//             <p><strong>Name:</strong> {entry.name}</p>
//             <p><strong>Gender:</strong> {entry.gender}</p>
//             <p><strong>Time:</strong> {entry.date}</p>
//             <p>
//               <strong>Location:</strong> {entry.location.latitude},{" "}
//               {entry.location.longitude}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Emergency;
