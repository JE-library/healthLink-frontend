import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "../../services/api";
import PublicLayout from "../../layouts/PublicLayout";
import { isTokenExpired } from "../../utility/checkTokenValidity";

const ServiceProviderProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);

  //   checkif token is not expired
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token || isTokenExpired(token)) {
  //     localStorage.removeItem("token");
  //     navigate("/login");
  //   }
  // }, []);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const res = await axios.get(`/providers/${id}`);
        if (res.data.success) {
          setProvider(res.data.provider);
        }
      } catch (err) {
        console.error("Error fetching provider:", err.response.data);
      }
    };

    fetchProvider();
  }, [id]);

  if (!provider) {
    return (
      <PublicLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <p className="text-main-font">Loading profile...</p>
        </div>
      </PublicLayout>
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
  } = provider;

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white py-12 px-6 max-w-5xl mx-auto space-y-10 font-secondary-font">
        {/* Header */}
        <div className="bg-tertiary-body/70 p-6 rounded-lg shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={profilePhoto?.url}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border"
          />
          <div className="flex-1 space-y-1">
            <h1 className="text-3xl font-bold text-primary-body">
              {professionalTitle} {fullName}
            </h1>
            <p className="text-main-font text-lg capitalize">
              {specialization}
            </p>
            <p className="text-sm text-main-font/70">
              {experienceYears} yrs experience | Rating: {rating || "N/A"}
            </p>
            <span
              className={`text-sm px-3 py-1 rounded-full font-medium inline-block mt-2 ${
                isAvailable
                  ? "bg-green-200 text-green-700"
                  : "bg-red-200 text-red-600"
              }`}
            >
              {isAvailable ? "Available for Appointments" : "Not Available"}
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-tertiary-body/50 p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold text-primary-body mb-2">Bio</h2>
          <p className="text-main-font text-sm leading-relaxed">
            {bio && bio !== "No Bio" ? bio : "No bio provided."}
          </p>
        </div>

        {/* Info Sections */}
        <div className="flex flex-wrap gap-8">
          {/* Professional Info */}
          <div className="bg-tertiary-body/50 p-6 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold text-primary-body mb-4">
              Professional Info
            </h2>
            <ul className="text-sm text-main-font space-y-1">
              <li>
                <strong>Status:</strong>{" "}
                <span className="capitalize">{status}</span>
              </li>
              <li>
                <strong>Experience:</strong> {experienceYears} years
              </li>
              <li>
                <strong>Rating:</strong> {rating || "No rating yet"}
              </li>
            </ul>
          </div>

          {/* Conditional: Lab Tests OR Consultation Modes */}
          {specialization === "lab technician" ? (
            <div className="bg-tertiary-body/50 p-6 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-primary-body mb-4">
                Lab Tests Offered
              </h2>
              {provider.labTestsOffered?.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {provider.labTestsOffered.map((test, index) => (
                    <span
                      key={index}
                      className="bg-main-body/50 text-main-font text-xs px-4 py-1 rounded-full border border-main-font/10"
                    >
                      {test}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-main-font/70 text-sm">
                  No lab tests listed.
                </p>
              )}
            </div>
          ) : (
            <div className="bg-tertiary-body/50 p-6 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold text-primary-body mb-4">
                Consultation Modes
              </h2>
              {Object.entries(consultationModes).filter(([, active]) => active)
                .length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {Object.entries(consultationModes)
                    .filter(([, active]) => active)
                    .map(([mode]) => (
                      <span
                        key={mode}
                        className="bg-main-body/50 text-main-font text-xs px-4 py-1 rounded-full border border-main-font/10 capitalize"
                      >
                        {mode}
                      </span>
                    ))}
                </div>
              ) : (
                <p className="text-main-font/70 text-sm">
                  No consultation modes listed.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Availability & Booking */}
        <div className="bg-tertiary-body/50 p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold text-primary-body mb-4">
            Weekly Availability
          </h2>
          {availability?.length ? (
            <div className="space-y-4">
              {availability.map(({ day, timeSlots, _id }) => (
                <div key={_id}>
                  <p className="text-sm font-medium text-main-font mb-1">
                    {day}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot, idx) => (
                      <span
                        key={idx}
                        className="bg-main-body/50 text-main-font text-xs px-3 py-1 rounded-full hover:bg-main-body/20 transition"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-main-font/70 text-sm">No availability listed.</p>
          )}

          {isAvailable && (
            <div className="mt-6">
              {specialization === "lab technician" ? (
                <button
                  onClick={() => navigate(`/patient/home-lab/${provider._id}`)}
                  className="bg-primary-body text-white px-6 py-2 rounded-lg hover:bg-primary-body/90 transition text-sm cursor-pointer"
                >
                  Book a Home Lab
                </button>
              ) : (
                <button
                  onClick={() =>
                    navigate(`/patient/book-consultation/${provider._id}`)
                  }
                  className="bg-primary-body text-white px-6 py-2 rounded-lg hover:bg-primary-body/90 transition text-sm cursor-pointer"
                >
                  Book Appointment
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </PublicLayout>
  );
};

export default ServiceProviderProfile;
