import React, { useEffect, useState } from "react";
import axios from "../../services/api";
import { useNavigate } from "react-router";
import { format } from "date-fns";
import ConfirmModal from "../../component/public/ConfirmModal";

const LabRequests = () => {
  const [labRequests, setLabRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLabRequests = async () => {
      try {
        const res = await axios.get("users/lab-service");
        setLabRequests(res.data.LabRequest || []);
      } catch (error) {
        console.error("Error fetching lab requests:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLabRequests();
  }, []);

  const handleCancel = async () => {
    try {
      await axios.delete(`users/lab-service/${selectedRequest._id}/cancel`);
      setLabRequests(prev =>
        prev.map(req =>
          req._id === selectedRequest._id ? { ...req, status: "cancelled" } : req
        )
      );
      setShowCancelModal(false);
    } catch (error) {
      console.error("Failed to cancel lab request", error);
    }
  };

  if (loading) return <div className="p-6">Loading lab requests...</div>;

  return (
    <div className="p-4 sm:p-6 md:px-16 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Lab Requests</h2>

      {labRequests.length === 0 ? (
        <p className="text-gray-500">You have no lab requests yet.</p>
      ) : (
        <div className="grid gap-4">
          {labRequests.map((request) => (
            <div
              key={request._id}
              className="bg-white shadow-sm border border-black/35 hover:shadow-md transition p-4 sm:p-6 rounded-xl cursor-pointer"
              onClick={() => navigate(`/patient/lab-requests/${request._id}`)}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={request.serviceProvider.profilePhoto?.url || "/default-avatar.png"}
                    alt="Provider"
                    className="w-12 h-12 rounded-full object-cover border-2 border-main-body"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {request.serviceProvider.fullName}
                    </p>
                    <p className="text-sm text-gray-500 capitalize">
                      {request.serviceProvider.specialization}
                    </p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(request.date), "PPP")} • {request.timeSlot}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <strong>Tests:</strong> {request.tests.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500">{request.notes}</p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        request.status === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : request.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </p>
                </div>
              </div>

              {request.status !== "cancelled" && request.status !== "completed" && (
                <div className="mt-4">
                  <button
                    className="px-2 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRequest(request);
                      setShowCancelModal(true);
                    }}
                  >
                    Cancel Request
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Cancel Confirmation Modal */}
      <ConfirmModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancel}
        title="Cancel Lab Request"
        message="Are you sure you want to cancel this lab request?"
        confirmText="Yes, Cancel"
      />
    </div>
  );
};

export default LabRequests;
