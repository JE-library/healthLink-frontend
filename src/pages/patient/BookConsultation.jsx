
// import { useState } from "react";

// const BookAppointmentForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     doctor: "",
//     date: "",
//     time: "",
//     condition: "",
//     service: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Appointment booked:", formData);
//     alert("Appointment booked successfully!");
//     // Reset form or send to backend API here
//     setFormData({
//       fullName: "",
//       email: "",
//       doctor: "",
//       date: "",
//       time: "",
//       condition: "",
//       service: "",
//     });
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
//       <h2 className="text-xl font-semibold mb-4 text-blue-800">Book an Appointment</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full p-2 border rounded"
//           required
//         />
//         <textarea
//           name="condition"
//           value={formData.condition}
//           onChange={handleChange}
//           placeholder="Brief description of your health condition"
//           className="w-full p-2 border rounded"
//           rows="3"
//           required
//         />
//         <input
//           type="text"
//           name="service"
//           value={formData.service}
//           onChange={handleChange}
//           placeholder="Service or specialist needed (e.g., Nutritionist, Gynaecologist)"
//           className="w-full p-2 border rounded"
//           required
//         />
//         <select
//           name="doctor"
//           value={formData.doctor}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value="">Select a doctor</option>
//           <option value="Dr. Kwame Mensah">Dr. Kwame Mensah</option>
//           <option value="Dr. Akua Sarpong">Dr. Akua Sarpong</option>
//           <option value="Dr. John Doe">Dr. John Doe</option>
//         </select>
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <label>Appointment Time</label>
//         <input
//           type="time"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Book Appointment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookAppointmentForm;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "../../services/api";
import PublicLayout from "../../layouts/PublicLayout";

const BookConsultation = () => {
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
        console.error("Failed to fetch provider:", err.response.data);
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
      console.log(err);
      setMessage(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <PublicLayout>
      <div className="bg-white py-10 px-4 min-h-screen">
        {provider ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-tertiary-body/50 p-6 rounded-md shadow mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={provider.profilePhoto?.url}
                  alt="Provider"
                  className="w-20 h-20 rounded-full object-cover border"
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
                <p className="text-sm text-main-font italic">
                  "{provider.bio}"
                </p>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-tertiary-body/50 p-6 rounded-md shadow"
            >
              <h3 className="text-lg font-semibold text-primary-body mb-4">
                Book Appointment
              </h3>

              {/* Date */}

              <div>
                <label className="block text-sm font-medium mb-1">
                  Select Date <span className="text-red-600">*</span>
                </label>
                <input
                  min={today}
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-white border border-black/40"
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
                  className="w-full px-3 py-2 rounded bg-white border border-black/40 "
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

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Consultation Mode
                </label>
                <div className="flex gap-4">
                  {Object.entries(provider.consultationModes).map(
                    ([key, value]) =>
                      value && (
                        <label
                          key={key}
                          className="flex items-center space-x-2"
                        >
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

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium ">
                  Notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows="3"
                  className="w-full border px-3 py-2 rounded bg-white"
                ></textarea>
              </div>

              {message && (
                <div className="mb-4 text-sm text-red-500 font-medium">
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="bg-primary-body hover:bg-primary-body/90 text-white px-6 py-2 rounded shadow"
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
      </div>
    </PublicLayout>
  );
};

export default BookConsultation;

