import React, { useState, useEffect } from "react";
import { apiGetProviderAppointments } from "../../services/health";
import { FaCalendarCheck } from "react-icons/fa";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await apiGetProviderAppointments();

        console.log("Appointments response:", res.data);

        const data = res.data;

        // Adjust based on API response shape
        if (Array.isArray(data)) {
          setAppointments(data);
        } else if (Array.isArray(data.appointments)) {
          setAppointments(data.appointments);
        } else {
          setAppointments([]);
        }

      } catch (err) {
        console.error("Failed to fetch appointments:", err);
        setError("Failed to load appointments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <div className="p-4">Loading appointments...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <FaCalendarCheck className="text-teal-600" />
        Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500">You have no upcoming appointments.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appointment, index) => (
            <li key={index} className="border p-4 rounded shadow-sm">
              <p><strong>Patient:</strong> {appointment.patientName || "N/A"}</p>
              <p><strong>Date:</strong> {appointment.date || "N/A"}</p>
              <p><strong>Time:</strong> {appointment.time || "N/A"}</p>
              <p><strong>Reason:</strong> {appointment.reason || "N/A"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Appointments;
