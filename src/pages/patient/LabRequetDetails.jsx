import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "../../services/api";
import { format } from "date-fns";
import ConfirmModal from "../../component/public/ConfirmModal";

const LabRequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [labRequest, setLabRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const { data } = await axios.get(`/users/lab-service/${id}`);
        setLabRequest(data?.LabRequest);
      } catch (error) {
        console.error("Failed to load lab request", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequest();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/users/lab-service/${id}`);
      navigate("/patient/home-lab");
    } catch (error) {
      console.error("Failed to delete request");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (!labRequest)
    return <p className="p-6 text-red-500">Lab Request not found.</p>;

  const { serviceProvider, tests, date, timeSlot, status, notes, labResult } =
    labRequest;

  const formattedDate = format(new Date(date), "MMMM dd, yyyy");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Lab Request Details
      </h2>

      <div className="bg-white rounded-lg shadow p-5 space-y-4">
        <div className="flex items-center gap-4">
          <img
            src={serviceProvider?.profilePhoto?.url}
            alt={serviceProvider?.fullName}
            className="w-16 h-16 rounded-full object-cover border-3 border-main-body"
          />
          <div>
            <p className="font-bold text-lg">{serviceProvider?.fullName}</p>
            <p className="text-sm text-gray-600 capitalize">
              {serviceProvider?.specialization}
            </p>
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

        {/* Lab result buttons */}
        {labResult?.url && (
          <div className="flex gap-4 mt-4">
            <a
              href={labResult.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Result
            </a>
            <a
              href={labResult.url}
              download
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download PDF
            </a>
          </div>
        )}

        {/* Delete Button */}
        {status !== "completed" && status !== "cancelled" && (
          <button
            onClick={() => setShowCancelModal(true)}
            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 mt-4 cursor-pointer"
          >
            Cancel Lab Request
          </button>
        )}

        <button
          className="mt-6 block text-blue-600 hover:underline"
          onClick={() => navigate("/patient/lab-requests")}
        >
          ← Back to Lab Requests
        </button>
      </div>




      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleDelete}
        title="Cancel Lab Request"
        message="Are you sure you want to cancel this lab request? This action cannot be undone."
        confirmText="Yes, Cancel"
      />
    </div>
  );
};

export default LabRequestDetails;
