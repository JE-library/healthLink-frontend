import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "../../services/api";
import ConfirmModal from "../../component/public/ConfirmModal";

const BookConsultation = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [mode, setMode] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState(null);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const res = await axios.get(`/providers/${id}`);
        if (res.data.success) setProvider(res.data.provider);
      } catch (err) {
        console.error("Failed to fetch provider:", err.response?.data);
      }
    };
    fetchProvider();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        mode,
        notes,
      };

      const res = await axios.post(`/users/book-appointment/${id}`, payload);
      if (res.data.success) {
        navigate("/patient/appointments");
      }
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <div className="bg-white py-10 px-4 min-h-screen font-secondary-font">
      {provider ? (
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline text-sm font-semibold cursor-pointer"
          >
            ← Back
          </button>

          {/* Provider Card */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm  flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img
              src={provider.profilePhoto?.url}
              alt={provider.fullName}
              className="w-24 h-24 rounded-full object-cover border-3 border-main-body"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-primary-body">
                {provider.fullName}
              </h2>
              <p className="text-sm text-main-font/80">
                {provider.specialization} | {provider.experienceYears} yrs exp.
              </p>
              <p className="text-sm text-main-font">
                Availability:{" "}
                {provider.isAvailable ? (
                  <span className="text-green-600 font-semibold">
                    Available
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Unavailable
                  </span>
                )}
              </p>
              {provider.bio && provider.bio !== "No Bio" && (
                <p className="text-xs italic text-main-font/70 mt-2">
                  “{provider.bio}”
                </p>
              )}
            </div>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowConfirm(true);
            }}
            className="bg-gray-50 rounded-2xl p-6 shadow-sm space-y-6"
          >
            <h3 className="text-lg font-semibold text-primary-body">
              Book Appointment
            </h3>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Date <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                min={today}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-white border border-black/30  outline-main-body/50"
                required
              />
            </div>

            {/* Time Slot */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Time Slot <span className="text-red-600">*</span>
              </label>
              <select
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-white border border-black/30  outline-main-body/50"
                required
              >
                <option value="">-- Select --</option>
                {provider.availability?.flatMap((day) =>
                  day.timeSlots.map((slot, idx) => (
                    <option key={`${day.day}-${idx}`} value={slot}>
                      {day.day} - {slot}
                    </option>
                  ))
                )}
              </select>
            </div>

            {/* Mode Selection */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Consultation Mode
              </label>
              <div className="flex flex-wrap gap-4">
                {Object.entries(provider.consultationModes).map(
                  ([key, value]) =>
                    value && (
                      <label key={key} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="mode"
                          value={key}
                          checked={mode === key}
                          onChange={(e) => setMode(e.target.value)}
                        />
                        <span className="capitalize">{key}</span>
                      </label>
                    )
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block mb-2 text-sm font-medium">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="3"
                className="w-full px-3 py-2 rounded-md bg-white border border-black/30  outline-main-body/50"
                placeholder="Optional notes about your concern..."
              />
            </div>

            {/* Error Message */}
            {message && (
              <div className="text-sm text-red-500 font-medium">{message}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-body text-white py-2 rounded-md hover:bg-primary-body/90 transition cursor-pointer"
              disabled={!provider.isAvailable}
            >
              Confirm Booking
            </button>
          </form>
        </div>
      ) : (
        <p className="text-center text-main-font mt-10">
          Loading provider details...
        </p>
      )}
      <ConfirmModal
        bgColour="bg-green-500"
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleSubmit}
        title="Confirm Appointment"
        message="Do you want to confirm this appointment with the specialist?"
        confirmText="Confirm Appointment"
      />
    </div>
  );
};

export default BookConsultation;
