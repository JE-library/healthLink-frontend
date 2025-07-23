import { useState } from "react";

const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    doctor: "",
    date: "",
    time: "",
    condition: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    alert("Appointment booked successfully!");
    // Reset form or send to backend API here
    setFormData({
      fullName: "",
      email: "",
      doctor: "",
      date: "",
      time: "",
      condition: "",
      service: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-blue-800">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          placeholder="Brief description of your health condition"
          className="w-full p-2 border rounded"
          rows="3"
          required
        />
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          placeholder="Service or specialist needed (e.g., Nutritionist, Gynaecologist)"
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select a doctor</option>
          <option value="Dr. Kwame Mensah">Dr. Kwame Mensah</option>
          <option value="Dr. Akua Sarpong">Dr. Akua Sarpong</option>
          <option value="Dr. John Doe">Dr. John Doe</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <label>Appointment Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
