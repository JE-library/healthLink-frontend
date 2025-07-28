import { useEffect, useState } from "react";
import axios from "../../services/api";
import { toast } from "react-toastify";
import ConfirmModal from "../../component/public/ConfirmModal";

const PatientProfile = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("/users/profile");
        setUser(data.user);

        setForm({
          fullName: data.user.fullName || "",
          email: data.user.email || "",
          phoneNumber: data.user.phoneNumber || "",
          gender: data.user.gender || "",
          dateOfBirth: data.user.dateOfBirth?.split("T")[0] || "",
          address: data.user.address || "",
        });
      } catch (err) {
        toast.error("Failed to load profile");
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.put("/users/profile", form);
      toast.success("Profile updated successfully");
      setUser(data.user);
    } catch (err) {
      const msg = err.response?.data?.message || "Update failed";
      toast.error(msg);
    } finally {
      setShowConfirm(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-primary-body">My Profile</h2>
        <button
          onClick={() => (window.location.href = "/patient/change-password")}
          className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow cursor-pointer"
        >
          Change Password
        </button>
      </div>

      {user ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowConfirm(true);
          }}
          className="space-y-4 bg-white p-6 rounded-md shadow-md"
        >
          <div className="flex items-center gap-4">
            <img
              src={user.profilePhoto?.url}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border"
            />
            <div>
              <h3 className="text-lg font-medium text-primary-body">
                {user.fullName}
              </h3>
              <p className="text-sm text-gray-500">Patient</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500"
              >
                <option value="">-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-primary-body text-white rounded hover:bg-primary-body/90 cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <p>Loading profile...</p>
      )}

      <ConfirmModal
        bgColour="bg-green-500"
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleSubmit}
        title="Confirm Profile Changes"
        message="Are you sure you want to update your profile with these changes?"
        confirmText="Yes, Update"
      />
    </div>
  );
};

export default PatientProfile;
