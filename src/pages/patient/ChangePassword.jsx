import { useState } from "react";
import axios from "../../services/api";
import ConfirmModal from "../../component/public/ConfirmModal";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.currentPassword)
      errs.currentPassword = "Current password is required.";
    if (!form.newPassword) errs.newPassword = "New password is required.";
    else if (form.newPassword.length < 6)
      errs.newPassword = "Password must be at least 6 characters.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors({});
    setSuccessMsg("");
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await axios.put("/users/password", form);
      setSuccessMsg("Password changed successfully.");
      setForm({ currentPassword: "", newPassword: "" });
      setTimeout(() => {
        navigate("/patient/profile"),
          toast.success("Password changed successfully.");
      }, 500);
    } catch (err) {
      const message =
        err?.response?.data?.message || "Failed to update password.";
      setErrors({ general: message });
    } finally {
      setLoading(false);
      setModalOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setModalOpen(true);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 ">
        Change Password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.general && (
          <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
            {errors.general}
          </div>
        )}
        {successMsg && (
          <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
            {successMsg}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.currentPassword && (
            <p className="text-xs text-red-600 mt-1">
              {errors.currentPassword}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.newPassword && (
            <p className="text-xs text-red-600 mt-1">{errors.newPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition"
          disabled={loading}
        >
          {loading ? "Updating..." : "Change Password"}
        </button>
      </form>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        bgColour="bg-blue-600"
        title="Confirm Password Change"
        message="Are you sure you want to change your password?"
        confirmText="Yes, Change"
      />
    </div>
  );
};

export default ChangePassword;
