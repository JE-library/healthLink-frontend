import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "../../services/api";
import toast from "react-hot-toast";
import ConfirmModal from "../../component/public/ConfirmModal";

const HomeLab = () => {
  const { id } = useParams();
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [notes, setNotes] = useState("");
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const { data } = await axios.get(`/providers/${id}`);
        setProvider(data.provider);
      } catch (err) {
        toast.error("Failed to load lab technician.");
      }
    };
    fetchProvider();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTests.length || !selectedDate || !selectedTimeSlot) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      const payload = {
        tests: selectedTests,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        notes,
      };

      const res = await axios.post(`/users/book-lab-service/${id}`, payload);
      if (res.data.success) {
        navigate("/patient/lab-requests");
      }
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || "An error occurred";
      toast.error(msg, { duration: 5000 });
    }
  };

  const handleTestToggle = (test) => {
    setSelectedTests((prev) =>
      prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test]
    );
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4">
      {provider ? (
        <div className="max-w-3xl mx-auto">
          {/* Provider Info */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={provider.profilePhoto?.url}
                alt="Lab Provider"
                className="w-20 h-20 rounded-full object-cover border-2 border-main-body"
              />
              <div>
                <h2 className="text-xl font-bold text-primary-body">
                  {provider.fullName}
                </h2>
                <p className="text-main-font/80">
                  {provider.specialization} | {provider.experienceYears} yrs
                  exp.
                </p>
              </div>
            </div>

            <p className="text-main-font mb-2">
              Availability:{" "}
              {provider.isAvailable ? (
                <span className="text-green-600 font-semibold">Available</span>
              ) : (
                <span className="text-red-600 font-semibold">Unavailable</span>
              )}
            </p>

            {provider.bio && provider.bio !== "No Bio" && (
              <p className="text-sm italic text-main-font">"{provider.bio}"</p>
            )}
          </div>

          {/* Booking Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowConfirm(true);
            }}
            className="bg-gray-50 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-primary-body mb-4">
              Book a Lab Service
            </h3>

            {/* Tests */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Select Tests <span className="text-red-600">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {provider.labTestsOffered?.map((test, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => handleTestToggle(test)}
                    className={`px-4 py-2 rounded-full border border-black/20 text-sm transition duration-200 ${
                      selectedTests.includes(test)
                        ? "bg-primary-body text-white"
                        : "bg-main-body/30 hover:bg-primary-body/60 hover:text-white"
                    }`}
                  >
                    {test}
                  </button>
                ))}
              </div>
            </div>

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
                className="w-full px-3 py-2 rounded bg-white border border-black/30 outline-main-body/50"
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
                className="w-full px-3 py-2 rounded bg-white border border-black/30 outline-main-body/50"
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

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 rounded bg-white border border-black/30 outline-main-body/50"
                rows={3}
                placeholder="Any extra information..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary-body text-white px-6 py-2 rounded-md hover:bg-primary-body/90 transition cursor-pointer"
            >
              Submit Request
            </button>
          </form>

          {/* Back Button */}
          <div className="mt-6">
            <button
              onClick={() => navigate(-1)}
              className="text-blue-600 hover:underline text-lg font-bold cursor-pointer"
            >
              ← Back
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-main-font mt-10">
          Loading provider info...
        </p>
      )}
      <ConfirmModal
        bgColour="bg-green-500"
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleSubmit}
        title="Confirm Lab Request"
        message="Do you want to confirm your lab request with the technician?"
        confirmText="Confirm Lab Request"
      />
    </div>
  );
};

export default HomeLab;
