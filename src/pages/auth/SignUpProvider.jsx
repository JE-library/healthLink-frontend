import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import PublicLayout from "../../layouts/PublicLayout";
import axios from "../../services/api";

const SPECIALTIES = [
  "nutritionist",
  "therapist",
  "dermatologist",
  "pharmacist",
  "lab technician",
  "physiotherapist",
];

const LAB_TESTS = [
  "Complete Blood Count (CBC)",
  "Urinalysis",
  "Lipid Panel",
  "Thyroid Function Test",
  "Liver Function Test",
  "Kidney Function Test",
  "X-ray",
  "MRI Scan",
  "CT Scan",
  "Blood Glucose Test",
  "COVID-19 Test",
  "Stool Test",
  "Malaria Parasite Test",
  "Blood Group Typing",
];

const SignUpProvider = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [labTests, setLabTests] = useState([]);
  const [consultationModes, setConsultationModes] = useState({
    video: false,
    chat: false,
    audio: false,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const specialization = watch("specialization");
  const isLabTech = specialization === "lab technician";

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setErrorMsg("");

      const formPayload = new FormData();

      for (const key in data) {
        if (key === "profilePhoto") {
          formPayload.append("profilePhoto", data.profilePhoto[0]);
        } else if (key === "certifications") {
          Array.from(data.certifications).forEach((file) => {
            formPayload.append("certifications", file);
          });
        } else {
          formPayload.append(key, data[key]);
        }
      }

      if (isLabTech) {
        formPayload.append("labTestsOffered", JSON.stringify(labTests));
      } else {
        formPayload.append("consultationModes", consultationModes);
      }

      await axios.post("/providers/register", formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/login");
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="bg-secondary-body min-h-screen py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md font-primary-font">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary-body">
            Professional Registration Form
          </h2>

          {errorMsg && (
            <p className="text-tertiary-font text-center mb-4">{errorMsg}</p>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { name: "fullName", label: "Full Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "password", label: "Password", type: "password" },
              { name: "phoneNumber", label: "Phone Number", type: "tel" },
              { name: "dateOfBirth", label: "Date of Birth", type: "date" },
              { name: "address", label: "Address", type: "textarea" },
              {
                name: "professionalTitle",
                label: "Professional Title",
                type: "text",
              },
              {
                name: "experienceYears",
                label: "Years of Experience",
                type: "number",
              },
              { name: "bio", label: "Bio", type: "textarea" },
            ].map((field) => (
              <div
                key={field.name}
                className={field.type === "textarea" ? "md:col-span-2" : ""}
              >
                <label className="block mb-1 text-main-font font-medium">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    {...register(field.name, { required: true })}
                    rows="2"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                ) : (
                  <input
                    type={field.type}
                    {...register(field.name, { required: true })}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                )}
              </div>
            ))}

            {/* Gender */}
            <div>
              <label className="block mb-1 font-medium text-main-font">
                Gender
              </label>
              <select
                {...register("gender", { required: true })}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Specialization */}
            <div>
              <label className="block mb-1 font-medium text-main-font">
                Specialization
              </label>
              <select
                {...register("specialization", { required: true })}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Select specialization</option>
                {SPECIALTIES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Profile Photo */}
            <div>
              <label className="block mb-1 font-medium text-main-font">
                Profile Photo
              </label>
              <input
                type="file"
                {...register("profilePhoto", { required: true })}
                accept="image/*"
              />
            </div>

            {/* Certifications */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-main-font">
                Certifications (max 5 files)
              </label>
              <input
                type="file"
                {...register("certifications")}
                accept=".pdf,.doc,.jpg,.png"
                multiple
              />
            </div>

            {/* Conditional */}
            {isLabTech ? (
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-main-font">
                  Lab Tests Offered
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {LAB_TESTS.map((test) => (
                    <label key={test} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={labTests.includes(test)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setLabTests([...labTests, test]);
                          } else {
                            setLabTests(labTests.filter((t) => t !== test));
                          }
                        }}
                      />
                      {test}
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-main-font">
                  Consultation Modes
                </label>
                <div className="flex gap-4">
                  {Object.keys(consultationModes).map((mode) => (
                    <label key={mode} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={consultationModes[mode]}
                        onChange={(e) =>
                          setConsultationModes((prev) => ({
                            ...prev,
                            [mode]: e.target.checked,
                          }))
                        }
                      />
                      {mode}
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary-body text-white px-8 py-2 rounded-2xl hover:bg-main-body disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default SignUpProvider;
