// src/pages/provider/AppointmentDetails.jsx

import { useParams, useNavigate } from "react-router";

const dummyAppointments = [
  {
    id: 1,
    patientName: "John Doe",
    date: "2025-07-08",
    time: "10:00 AM",
    status: "Scheduled",
    reason: "General Checkup",
    notes: "Patient has a history of high blood pressure.",
  },
  
 
];

const AppointmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const appointment = dummyAppointments.find(a => a.id === parseInt(id));

  if (!appointment) {
    return <p>Appointment not found.</p>;
  }

  const handleConsultation = (type) => {
    alert(`Starting ${type} consultation with ${appointment.patientName}`);
  
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
      <div className="bg-white p-4 rounded shadow-md space-y-2">
        <p><strong>Patient Name:</strong> {appointment.patientName}</p>
        <p><strong>Date:</strong> {appointment.date}</p>
        <p><strong>Time:</strong> {appointment.time}</p>
        <p><strong>Status:</strong> {appointment.status}</p>
        <p><strong>Reason:</strong> {appointment.reason}</p>
        <p><strong>Notes:</strong> {appointment.notes}</p>

        <div className="mt-4 space-x-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => handleConsultation("Audio")}
          >
            Audio Call
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleConsultation("Video")}
          >
            Video Call
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => handleConsultation("Chat")}
          >
            Chat
          </button>
        </div>
        <button
          className="mt-4 text-blue-600 underline"
          onClick={() => navigate("/provider/appointments")}
        >
          ← Back to Appointments
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetails;
