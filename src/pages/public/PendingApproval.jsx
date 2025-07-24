import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../../services/api";

const PendingPage = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const res = await axios.get(`/providers/${id}`);
        setProvider(res.data.provider);
      } catch (err) {
        console.error("Error fetching provider:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProvider();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Loading...
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-xl">
        Provider not found.
      </div>
    );
  }

  const {
    profilePhoto,
    fullName,
    email,
    phoneNumber,
    gender,
    professionalTitle,
    specialization,
    experienceYears,
    consultationModes,
    labTestsOffered,
    note,
    status,
  } = provider;

  return (
    <div className="min-h-screen bg-secondary-body py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md font-primary-font">
        <h2 className="text-2xl font-bold text-center text-primary-body mb-6">
          Application Status: <span className="capitalize">{status}</span>
        </h2>

        <div className="flex gap-6 items-center mb-8">
          <img
            src={profilePhoto?.url}
            alt={fullName}
            className="w-24 h-24 rounded-full object-cover border"
          />
          <div>
            <h3 className="text-xl font-semibold">{fullName}</h3>
            <p className="text-sm text-gray-500">{professionalTitle}</p>
            <p className="text-sm text-gray-500">{specialization}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phoneNumber}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Experience:</strong> {experienceYears} years
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Consultation Modes</h4>
          <ul className="list-disc list-inside text-sm">
            {Object.entries(consultationModes).map(
              ([mode, enabled]) =>
                enabled && (
                  <li key={mode}>
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </li>
                )
            )}
          </ul>
        </div>

        {labTestsOffered?.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Lab Tests Offered</h4>
            <ul className="list-disc list-inside text-sm">
              {labTestsOffered.map((test) => (
                <li key={test}>{test}</li>
              ))}
            </ul>
          </div>
        )}

        {note && (
          <div className="mt-8 bg-yellow-50 border border-yellow-300 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 mb-1">Admin Note</h4>
            <p className="text-sm text-yellow-900 mb-1">{note.message}</p>
            <p className="text-xs text-yellow-600">
              Last updated: {new Date(note.date).toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingPage;