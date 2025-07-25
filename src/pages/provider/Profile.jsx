import { useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import {
  apiFetchProviderProfile,
  apiUpdateProviderProfile,
} from "../../services/health";


const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    bio: "",
    image: null,
  });

  // Set defaults to ensure all fields are controlled
  useEffect(() => {
    apiFetchProviderProfile()
      .then((res) => {
        const { name, email, phone, specialty, bio } = res.data;
        setProfile({
          name: name || "",
          email: email || "",
          phone: phone || "",
          specialty: specialty || "",
          bio: bio || "",
          image: null, // File inputs should not be controlled
        });
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0] || null;
    setProfile((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(profile).forEach(([key, value]) => {
      if (value !== null) {
        formData.append(key, value);
      }
    });

    try {
      await apiUpdateProviderProfile(formData);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-tertiary-body p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <FaUserEdit /> Provider Profile
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Profile Picture */}
        <div className="mb-4">
          <label>Upload Profile Picture</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Specialty */}
        <div className="mb-4">
          <label>Specialty</label>
          <select
            name="specialty"
            value={profile.specialty}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">--Select--</option>
            <option value="General Practitioner">General Practitioner</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Nutritionist">Nutritionist</option>
            <option value="Therapist">Therapist</option>
            <option value="Labtech">Lab Technician</option>
            <option value="Physiotherapist">Physiotherapist</option>
          </select>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label>Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
