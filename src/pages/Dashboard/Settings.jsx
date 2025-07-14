import { useState } from "react";

const Settings = () => {
  const [user, setUser] = useState({
    name: "RPHN. Josephine Asiedu",
    email: "josephine@healthlink.com",
    role: "Service Provider",
    specialty: "Public Health Nutritionist",
    licenseNumber: "HL-2024-5678",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handlePasswordChange = () => {
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      alert("All password fields are required.");
      return;
    }

    if (passwords.new !== passwords.confirm) {
      alert("New passwords do not match.");
      return;
    }

    alert("Password updated successfully! (simulation)");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handleProfileUpdate = () => {
    alert("Profile updated successfully! (simulation)");
    // Here you can add API call to save to backend
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Provider Settings</h1>

      {/* 👩‍⚕️ Editable Provider Profile */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Professional Profile</h2>

        <div className="space-y-3 text-gray-600">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Specialty:</label>
            <input
              type="text"
              value={user.specialty}
              onChange={(e) => setUser({ ...user, specialty: e.target.value })}
              className="border p-2 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">License Number:</label>
            <input
              type="text"
              value={user.licenseNumber}
              onChange={(e) => setUser({ ...user, licenseNumber: e.target.value })}
              className="border p-2 rounded-lg w-full"
            />
          </div>

          <button
            onClick={handleProfileUpdate}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* 🔒 Change Password */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Change Password</h2>

        <input
          type="password"
          placeholder="Current Password"
          value={passwords.current}
          onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
          className="border p-2 rounded-lg w-full mb-3"
        />

        <input
          type="password"
          placeholder="New Password"
          value={passwords.new}
          onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
          className="border p-2 rounded-lg w-full mb-3"
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={passwords.confirm}
          onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
          className="border p-2 rounded-lg w-full mb-3"
        />

        <button
          onClick={handlePasswordChange}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Settings;
