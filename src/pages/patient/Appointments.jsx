// Appointments.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../services/api";
import { FaVideo, FaUserMd } from "react-icons/fa";
import ConfirmModal from "../../component/public/ConfirmModal";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("/users/appointments");
      setAppointments(res.data.appointments);
    } catch (err) {
      console.error("Failed to fetch appointments", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    try {
      await axios.delete(`users/appointments/${selectedId}/cancel`);
      setAppointments((prev) =>
        prev.map((appt) =>
          appt._id === selectedId ? { ...appt, status: "cancelled" } : appt
        )
      );
    } catch (err) {
      console.error("Failed to cancel", err);
    } finally {
      setShowModal(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen md:px-12 py-10 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Appointments</h1>
      {loading ? (
        <p>Loading...</p>
      ) : appointments.length === 0 ? (
        <p className="text-gray-500">You have no appointments yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow rounded-xl overflow-hidden">
            <thead className="bg-blue-100 text-left text-sm text-gray-700">
              <tr>
                <th className="p-4">Provider</th>
                <th className="p-4">Date</th>
                <th className="p-4">Time</th>
                <th className="p-4">Mode</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {appointments.map((appt) => (
                <tr
                  key={appt._id}
                  className="hover:bg-blue-50 cursor-pointer border-b"
                  onClick={() => navigate(`/patient/appointments/${appt._id}`)}
                >
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={
                        appt.serviceProvider?.profilePhoto?.url ||
                        "https://via.placeholder.com/40"
                      }
                      alt={appt.serviceProvider?.fullName}
                      className="w-10 h-10 rounded-full object-cover border-2 border-main-body"
                    />
                    <div>
                      <p className="font-medium">
                        {appt.serviceProvider?.fullName}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">
                        {appt.serviceProvider?.specialization}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    {new Date(appt.date).toLocaleDateString()}
                  </td>
                  <td className="p-4">{appt.timeSlot}</td>
                  <td className="p-4 capitalize flex">
                    {appt.mode === "video" ? <FaVideo /> : <FaUserMd />}{" "}
                    {appt.mode}
                  </td>
                  <td className="p-4 capitalize text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-xs ${
                        appt.status === "pending"
                          ? "bg-yellow-500"
                          : appt.status === "completed"
                          ? "bg-green-500"
                          : appt.status === "cancelled"
                          ? "bg-red-500"
                          : "bg-gray-400"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </td>
                  <td
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!["completed", "cancelled"].includes(appt.status)) {
                        setSelectedId(appt._id);
                        setShowModal(true);
                      }
                    }}
                    className="p-4"
                  >
                    {!["completed", "cancelled"].includes(appt.status) && (
                      <button className="text-red-600 font-medium  px-2 py-1 hover:bg-red-500/20 rounded-full hover:underline  cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleCancel}
        title="Cancel Appointment"
        description="Are you sure you want to cancel this appointment?"
      />
    </div>
  );
};

export default Appointments;
