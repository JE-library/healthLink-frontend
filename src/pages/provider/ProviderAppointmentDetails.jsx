import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "../../services/api";
import ConfirmModal from "../../component/public/ConfirmModal";
import { format } from "date-fns";
import { toast } from "react-toastify";

const ProviderAppointmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [meetLink, setMeetLink] = useState("");

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await axios.get(`providers/appointments/${id}`);
        setAppointment(res.data.appointment);
        setMeetLink(res.data.appointment.videoLink || "");
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
      await axios.delete(`providers/appointments/${id}/cancel`);
      setAppointment({ ...appointment, status: "cancelled" });
      setShowCancelModal(false);
      toast.success("Appointment cancelled");
    } catch (err) {
      console.error("Failed to cancel appointment", err);
      toast.error("Failed to cancel appointment");
    }
  };

  const handleConfirmAppointment = async () => {
    try {
      await axios.patch(`providers/appointments/${id}/confirm`, {
        videoLink: meetLink,
      });
      setAppointment({
        ...appointment,
        status: "confirmed",
        videoLink: meetLink,
      });
      setShowConfirmModal(false);
      toast.success("Appointment confirmed");
    } catch (err) {
      console.error("Failed to confirm appointment", err);
      toast.error("Failed to confirm appointment");
    }
  };
  const handleCreateChat = async () => {
    try {
      const res = await axios.post(`providers/appointments/${id}/chat`);
      if (res.data.success) {
        const chatId = res.data.conversation.conversation._id;
        console.log(res.data.conversation.conversation);

        navigate(`/provider/chat/${chatId}`);
      }
    } catch (err) {
      toast.error("Unable start chat");
      console.log(err);
    }
  };

  const handleCompleteAppointment = async () => {
    try {
      await axios.patch(`providers/appointments/${id}/complete`);
      setAppointment({ ...appointment, status: "completed" });
      toast.success("Appointment marked as completed");
    } catch (err) {
      console.error("Failed to complete appointment", err);
      toast.error("Failed to mark as completed");
    }
  };

  const renderActionButtons = () => {
    if (!appointment) return null;

    const { status, mode } = appointment;

    if (status === "pending") {
      return (
        <>
          {mode === "video" && (
            <div className="w-full">
              <label className="block text-sm text-gray-700 font-medium mb-1">
                Google Meet Link
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg text-sm"
                placeholder="Paste your Google Meet link here"
                value={meetLink}
                onChange={(e) => setMeetLink(e.target.value)}
              />
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-4">
            <button
              onClick={() => {
                if (mode === "video" && !meetLink.trim()) {
                  toast.warning(
                    "Please provide the Google Meet link before confirming."
                  );
                  return;
                }
                setShowConfirmModal(true);
              }}
              className="px-2 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
            >
              Confirm Appointment
            </button>
            <button
              onClick={() => setShowCancelModal(true)}
              className="px-2 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
            >
              Cancel Appointment
            </button>
          </div>
        </>
      );
    }

    if (status === "confirmed") {
      return (
        <div className="flex flex-wrap gap-4 mt-4">
          {mode === "chat" && (
            <button
              onClick={handleCreateChat}
              className="px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Start Chat
            </button>
          )}
          <button
            onClick={handleCompleteAppointment}
            className="px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Mark as Completed
          </button>
        </div>
      );
    }

    return null;
  };

  if (loading) return <div className="p-6">Loading appointment...</div>;
  if (!appointment)
    return <div className="p-6 text-red-500">Appointment not found.</div>;

  return (
    <div className="sm:p-6 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Appointment Details
      </h2>

      <div className="bg-white rounded-xl shadow border border-gray-300 p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Patient</p>
          <div className="flex items-center gap-4">
            <img
              src={appointment.user?.profilePhoto?.url || "/default-avatar.png"}
              alt="User"
              className="w-12 h-12 rounded-full object-cover border-3 border-main-body"
            />
            <div>
              <p className="font-semibold text-gray-800">
                {appointment.user?.fullName}
              </p>
              <p className="text-sm text-gray-500">{appointment.user?.email}</p>
              <p className="text-sm text-gray-500">
                {appointment.user?.phoneNumber}
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
                  : appointment.status === "confirmed"
                  ? "bg-blue-100 text-blue-700"
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

        {/* Action Buttons */}
        {renderActionButtons()}
      </div>

      {/* Back link */}
      <div className="mt-6">
        <button
          onClick={() => navigate("/provider/appointments")}
          className="text-blue-600 hover:underline text-sm"
        >
          ← Back to Appointments
        </button>
      </div>

      {/* Confirm Appointment Modal */}
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmAppointment}
        title="Confirm Appointment"
        message="Are you sure you want to confirm this appointment?"
        confirmText="Yes, Confirm"
        bgColour="bg-green-600"
      />

      {/* Cancel Appointment Modal */}
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

export default ProviderAppointmentDetails;
