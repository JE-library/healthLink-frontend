import { useEffect, useState } from "react";
import axios from "../../services/api";
import { toast } from "react-toastify";
import ConfirmModal from "../../component/public/ConfirmModal";

const Profile = () => {
  const [provider, setProvider] = useState(null);
  const [form, setForm] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("/providers/profile");
        setProvider(data.provider);

        setForm({
          fullName: data.provider.fullName || "",
          email: data.provider.email || "",
          phoneNumber: data.provider.phoneNumber || "",
          gender: data.provider.gender || "",
          dateOfBirth: data.provider.dateOfBirth?.split("T")[0] || "",
          address: data.provider.address || "",
          bio: data.provider.bio || "",
          professionalTitle: data.provider.professionalTitle || "",
          experienceYears: data.provider.experienceYears || "",
          labTestsOffered: data.provider.labTestsOffered?.join("\n") || "",
          consultationModes: {
            video: data.provider.consultationModes?.video || false,
            audio: data.provider.consultationModes?.audio || false,
            chat: data.provider.consultationModes?.chat || false,
          },
          isAvailable: data.provider.isAvailable || false,
        });
      } catch (err) {
        toast.error("Failed to load profile");
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("consultationModes.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        consultationModes: {
          ...prev.consultationModes,
          [key]: checked,
        },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const updatedData = {
        ...form,
        labTestsOffered:
          provider.specialization === "lab technician"
            ? form.labTestsOffered
                .split("\n")
                .map((test) => test.trim())
                .filter(Boolean)
            : undefined,
        consultationModes:
          provider.specialization !== "lab technician"
            ? form.consultationModes
            : undefined,
      };

      const { data } = await axios.put("/providers/profile", updatedData); // ✅ use PUT
      toast.success("Profile updated successfully");
      setProvider(data.provider);
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setShowConfirm(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-primary-body">
          Provider Profile
        </h2>
        {/* <button
          onClick={() => (window.location.href = "/provider/change-password")}
          className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow"
        >
          Change Password
        </button> */}
      </div>

      {provider ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowConfirm(true);
          }}
          className="space-y-4 bg-white p-6 rounded-md shadow-md"
        >
          <div className="flex items-center gap-4">
            <img
              src={provider.profilePhoto?.url || "/default-avatar.png"}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border"
            />
            <div>
              <h3 className="text-lg font-medium text-primary-body">
                {provider.fullName}
              </h3>
              <p className="text-sm text-gray-500 capitalize">
                {provider.specialization}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Full Name", name: "fullName", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone Number", name: "phoneNumber", type: "text" },
              { label: "Gender", name: "gender", type: "select" },
              { label: "Date of Birth", name: "dateOfBirth", type: "date" },
              { label: "Address", name: "address", type: "text" },
              {
                label: "Professional Title",
                name: "professionalTitle",
                type: "text",
              },
              {
                label: "Experience Years",
                name: "experienceYears",
                type: "number",
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium">
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500"
                  >
                    <option value="">-- Select --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500"
                  />
                )}
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Bio</label>
              <textarea
                name="bio"
                rows={3}
                value={form.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500"
              />
            </div>

            {provider.specialization === "lab technician" && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium">
                  Lab Tests Offered{" "}
                  <span className="text-xs text-gray-400">(One per line)</span>
                </label>
                <textarea
                  name="labTestsOffered"
                  rows={4}
                  value={form.labTestsOffered}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded border-b border-r outline-blue-400/50 border-gray-300 text-gray-500"
                />
              </div>
            )}

            {provider.specialization !== "lab technician" && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Consultation Modes
                </label>
                <div className="flex gap-4 flex-wrap text-sm text-gray-700">
                  {["video", "audio", "chat"].map((mode) => (
                    <label key={mode} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name={`consultationModes.${mode}`}
                        checked={form.consultationModes[mode]}
                        onChange={handleChange}
                      />
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 md:col-span-2">
              <input
                type="checkbox"
                name="isAvailable"
                checked={form.isAvailable}
                onChange={handleChange}
              />
              <label className="text-sm font-medium">
                Available for Appointments
              </label>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-primary-body text-white rounded hover:bg-primary-body/90"
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

export default Profile;
