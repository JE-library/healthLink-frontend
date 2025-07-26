import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "../../services/api";
import { isTokenExpired } from "../../utility/checkTokenValidity";

const ServiceProviderProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);

  // checkif token is expired
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const res = await axios.get(`/providers/${id}`);
        if (res.data.success) {
          setProvider(res.data.provider);
        }
      } catch (err) {
        console.error("Error fetching provider:", err.response?.data || err);
      }
    };

    fetchProvider();
  }, [id]);

  if (!provider) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading profile...
      </div>
    );
  }

  const {
    profilePhoto,
    fullName,
    professionalTitle,
    specialization,
    experienceYears,
    status,
    rating,
    isAvailable,
    bio,
    consultationModes,
    availability,
    labTestsOffered,
  } = provider;

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8 lg:px-12 max-w-6xl mx-auto space-y-10 font-secondary-font">
      {/* Header */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div className="w-full sm:w-auto sm:mr-4">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline text-sm mb-4 sm:mb-0 cursor-pointer"
          >
            ← Back
          </button>
        </div>

        <img
          src={profilePhoto?.url}
          alt={fullName}
          className="w-32 h-32 rounded-full object-cover border-3 border-main-body"
        />

        <div className="flex-1 space-y-1 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-800">{fullName}</h1>
          <p className="text-sm text-gray-500 capitalize">{specialization}</p>
          <p className="text-xs text-gray-400">
            {experienceYears || 0} yrs experience &bull; Rating:{" "}
            {rating || "N/A"}
          </p>
          <span
            className={`text-xs px-3 py-1 rounded-full inline-block mt-2 font-semibold ${
              isAvailable
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {isAvailable
              ? "Available for Appointments"
              : "Currently Unavailable"}
          </span>
        </div>
      </div>

      {/* Bio Section */}
      <section className="bg-gray-50 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Bio</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {bio && bio !== "No Bio" ? bio : "No bio provided."}
        </p>
      </section>

      {/* Info & Skills Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Professional Info */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Professional Info
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <strong>Status:</strong> {status}
            </li>
            <li>
              <strong>Experience:</strong> {experienceYears} years
            </li>
            <li>
              <strong>Rating:</strong> {rating || "No rating yet"}
            </li>
          </ul>
        </div>

        {/* Modes / Lab Tests */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {specialization === "lab technician"
              ? "Lab Tests Offered"
              : "Consultation Modes"}
          </h3>

          {specialization === "lab technician" ? (
            labTestsOffered?.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {labTestsOffered.map((test, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >
                    {test}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No lab tests listed.</p>
            )
          ) : Object.values(consultationModes).some(Boolean) ? (
            <div className="flex flex-wrap gap-2">
              {Object.entries(consultationModes)
                .filter(([, isActive]) => isActive)
                .map(([mode]) => (
                  <span
                    key={mode}
                    className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full capitalize"
                  >
                    {mode}
                  </span>
                ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              No consultation modes listed.
            </p>
          )}
        </div>
      </div>

      {/* Weekly Availability */}
      <section className="bg-gray-50 p-6 rounded-2xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Weekly Availability
        </h3>
        {availability?.length > 0 ? (
          <div className="space-y-4">
            {availability.map(({ day, timeSlots, _id }) => (
              <div key={_id}>
                <p className="font-medium text-sm text-gray-700 mb-1">{day}</p>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No availability listed.</p>
        )}

        {/* Booking CTA */}
        {isAvailable && (
          <div className="mt-6">
            <button
              onClick={() =>
                navigate(
                  specialization === "lab technician"
                    ? `/patient/home-lab/${provider._id}`
                    : `/patient/book-consultation/${provider._id}`
                )
              }
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2 rounded-lg transition cursor-pointer"
            >
              {specialization === "lab technician"
                ? "Book a Home Lab"
                : "Book Appointment"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ServiceProviderProfile;
