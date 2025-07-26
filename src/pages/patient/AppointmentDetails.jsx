import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "../../services/api";
import ConfirmModal from "../../component/public/ConfirmModal";
import { format } from "date-fns";

const AppointmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await axios.get(`users/appointments/${id}`);
        setAppointment(res.data.appointment);
      } catch (err) {
        console.error("Failed to load appointment", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointment();
  }, [id]);

  const handleCancelAppointment = async () => {
    try {
      await axios.patch(`users/appointments/${id}/cancel`);
      setAppointment({ ...appointment, status: "cancelled" });
      setShowCancelModal(false);
    } catch (err) {
      console.error("Failed to cancel appointment", err);
    }
  };

  const renderActionButton = () => {
    if (!appointment) return null;

    if (
      appointment.status === "cancelled" ||
      appointment.status === "completed"
    ) {
      return null;
    }

    if (appointment.mode === "video") {
      const link =
        appointment.videoLink || "https://meet.google.com/tcd-qfwy-cxy";
      return (
        <div className="flex items-center gap-4 mt-6 flex-wrap">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Start Video
          </a>
          <button
            onClick={() => navigator.clipboard.writeText(link)}
            className="px-4 py-2 bg-gray-100 border rounded-lg text-sm hover:bg-gray-200 cursor-pointer"
          >
            Copy Link
          </button>
        </div>
      );
    }

    return (
      <div className="mt-6">
        <button
          onClick={() => navigate("/patient/consultation/:id")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Start Chat
        </button>
      </div>
    );
  };

  if (loading) return <div className="p-6">Loading appointment...</div>;
  if (!appointment)
    return <div className="p-6 text-red-500">Appointment not found.</div>;

  return (
    <div className="p-4 sm:p-6 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Appointment Details
      </h2>

      <div className="bg-white rounded-xl shadow border border-gray-300 p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Provider</p>
          <div className="flex items-center gap-4">
            <img
              src={
                appointment.serviceProvider.profilePhoto?.url ||
                "/default-avatar.png"
              }
              alt="Provider"
              className="w-12 h-12 rounded-full object-cover border-3 border-main-body"
            />
            <div>
              <p className="font-semibold text-gray-800">
                {appointment.serviceProvider.fullName}
              </p>
              <p className="text-sm text-gray-500 capitalize">
                {appointment.serviceProvider.specialization}
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 pt-2 text-sm text-gray-700">
          <p>
            <strong>Date:</strong> {format(new Date(appointment.date), "PPP")}
          </p>
          <p>
            <strong>Time:</strong> {appointment.timeSlot}
          </p>
          <p>
            <strong>Mode:</strong> {appointment.mode}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                appointment.status === "cancelled"
                  ? "bg-red-100 text-red-700"
                  : appointment.status === "completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {appointment.status}
            </span>
          </p>
          {appointment.notes && (
            <p className="col-span-2">
              <strong>Notes:</strong> {appointment.notes}
            </p>
          )}
        </div>

        {/* Actions */}
        {renderActionButton()}

        {appointment.status !== "cancelled" &&
          appointment.status !== "completed" && (
            <div className="mt-6">
              <button
                onClick={() => setShowCancelModal(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
              >
                Cancel Appointment
              </button>
            </div>
          )}
      </div>

      {/* Back link */}
      <div className="mt-6">
        <button
          onClick={() => navigate("/patient/appointments")}
          className="text-blue-600 hover:underline text-sm cursor-pointer"
        >
          ← Back to Appointments
        </button>
      </div>

      {/* Confirm Cancel Modal */}
      <ConfirmModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancelAppointment}
        title="Cancel Appointment"
        message="Are you sure you want to cancel this appointment?"
        confirmText="Yes, Cancel"
      />
    </div>
  );
};

export default AppointmentDetails;
