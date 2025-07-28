import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "../../services/api";
import { format } from "date-fns";
import ConfirmModal from "../../component/public/ConfirmModal";

const LabRequestsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [labRequest, setLabRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [labResultUrl, setLabResultUrl] = useState("");
  const [labFile, setLabFile] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const { data } = await axios.get(`/providers/lab-service/${id}`);
        setLabRequest(data?.LabRequest);
      } catch (error) {
        console.error("Error fetching lab request details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequest();
  }, [id]);

  const handleConfirm = async () => {
    try {
      await axios.patch(`/providers/lab-service/${id}/confirm`);
      setLabRequest((prev) => ({ ...prev, status: "confirmed" }));
      setShowConfirmModal(false);
    } catch (error) {
      console.error("Failed to confirm lab request", error);
    }
  };

  const handleCancel = async () => {
    try {
      await axios.delete(`/providers/lab-service/${id}/cancel`);
      setLabRequest((prev) => ({ ...prev, status: "cancelled" }));
      setShowCancelModal(false);
    } catch (error) {
      console.error("Failed to cancel lab request", error);
    }
  };

  const handleLabResultSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (labFile) {
      formData.append("labResult", labFile);
    } else if (labResultUrl) {
      formData.append("labResult", labResultUrl);
    } else {
      return;
    }

    try {
      await axios.put(`/providers/lab-service/${id}/result`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate(`/provider/lab-requests/${id}`);
    } catch (error) {
      console.error("Failed to upload lab result", error);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!labRequest)
    return <div className="p-6 text-red-500">Request not found.</div>;

  const { user, tests, date, timeSlot, status, notes, labResult } = labRequest;

  const formattedDate = format(new Date(date), "MMMM dd, yyyy");

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Lab Request Details
      </h2>

      <div className="bg-white rounded-lg shadow p-5 space-y-4 border border-gray-300">
        <div className="flex items-center gap-4">
          <img
            src={user?.profilePhoto?.url || "/default-avatar.png"}
            alt={user?.fullName}
            className="w-16 h-16 rounded-full object-cover border-3 border-main-body"
          />
          <div>
            <p className="font-bold text-lg">{user?.fullName}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="font-medium">Tests Requested:</p>
            <ul className="list-disc ml-5">
              {tests.map((test, i) => (
                <li key={i}>{test}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-medium">Scheduled:</p>
            <p>
              {formattedDate} at {timeSlot}
            </p>
          </div>

          <div>
            <p className="font-medium">Status:</p>
            <p
              className={`capitalize font-semibold ${
                status === "completed"
                  ? "text-green-600"
                  : status === "cancelled"
                  ? "text-red-500"
                  : status === "confirmed"
                  ? "text-blue-600"
                  : "text-yellow-600"
              }`}
            >
              {status}
            </p>
          </div>

          {notes && (
            <div>
              <p className="font-medium">Notes:</p>
              <p>{notes}</p>
            </div>
          )}
        </div>

        {/* Confirm / Cancel Buttons */}
        {status !== "completed" && status !== "cancelled" && (
          <div className="flex gap-4 mt-4">
            {status !== "confirmed" && (
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                onClick={() => setShowConfirmModal(true)}
              >
                Confirm Request
              </button>
            )}
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
              onClick={() => setShowCancelModal(true)}
            >
              Cancel Request
            </button>
          </div>
        )}

        {/* Upload Lab Result */}
        {status === "confirmed" && (
          <form onSubmit={handleLabResultSubmit} className="mt-6 space-y-4">
            <p className="font-medium text-gray-800">Submit Lab Result:</p>
            <input
              type="text"
              placeholder="Paste lab result URL"
              value={labResultUrl}
              onChange={(e) => setLabResultUrl(e.target.value)}
              className="w-full border px-4 py-2 rounded shadow border-gray-300 outline-main-body"
            />
            <div className="text-center text-gray-500">or</div>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={(e) => setLabFile(e.target.files[0])}
              className="w-full border px-4 py-2 rounded shadow border-gray-300 outline-main-body/60 file:bg-main-body/50 file:p-1 file:rounded"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer "
            >
              Submit Result
            </button>
          </form>
        )}

        {/* Lab result viewer if already uploaded */}
        {labResult?.url && (
          <div className="flex gap-4 mt-6">
            <a
              href={labResult.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-body text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              View Result
            </a>
            <a
              href={labResult.url}
              download
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
            >
              Download PDF
            </a>
          </div>
        )}

        <button
          className="mt-6 block text-blue-600 hover:underline cursor-pointer"
          onClick={() => navigate("/provider/lab-requests")}
        >
          ← Back to Lab Requests
        </button>
      </div>

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirm}
        bgColour="bg-primary-body"
        title="Confirm Lab Request"
        message="Are you sure you want to confirm this lab request?"
        confirmText="Yes, Confirm"
      />

      {/* Cancel Modal */}
      <ConfirmModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancel}
        title="Cancel Lab Request"
        message="Are you sure you want to cancel this lab request? This action cannot be undone."
        confirmText="Yes, Cancel"
      />
    </div>
  );
};

export default LabRequestsDetails;
