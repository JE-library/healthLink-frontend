import React from "react";
import { useParams, Link } from "react-router";

const doctors = [
  { id: 1, name: "Dr. John Doe", profession: "Cardiologist", experience: "10 years" },
  { id: 2, name: "Dr. Jane Smith", profession: "Pediatrician", experience: "7 years" },
  { id: 3, name: "Dr. Michael Brown", profession: "Orthopedic", experience: "5 years" },
];

function DoctorDetails() {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <div className="p-4 text-red-500">Doctor not found</div>;
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="text-center">
        <img
          className="w-32 h-32 mx-auto rounded-full border"
          src="https://via.placeholder.com/150"
          alt="Doctor profile"
        />
        <h2 className="text-2xl font-bold mt-4">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.profession}</p>
        <p className="text-gray-500">{doctor.experience} of experience</p>
      </div>
      <div className="text-center">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md mr-2">
          Start Chat
        </button>
        <Link
          to="/"
          className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
}

export default DoctorDetails;
