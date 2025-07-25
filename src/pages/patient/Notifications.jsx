import { BellIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "../../services/api";
import toast from "react-hot-toast";
import { formatDistanceToNow } from "date-fns";

const typeStyles = {
  info: "bg-blue-50 border border-blue-200 text-blue-700",
  alert: "bg-yellow-50 border border-yellow-200 text-yellow-700",
  warning: "bg-red-50 border border-red-200 text-red-700",
  reminder: "bg-purple-50 border border-purple-200 text-purple-700",
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch from backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axios.get("/notifications");
        setNotifications(data.notifications || []);
      } catch (err) {
        toast.error("Failed to load notifications.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (id) => {
    try {
      await axios.patch(`/notifications/${id}`);
    } catch (err) {
      console.error("Failed to mark as read", err);
    }
  };

  const handleNotificationClick = async (notification) => {
    if (!notification.read) {
      await markAsRead(notification._id);
      setNotifications((prev) =>
        prev.map((n) =>
          n._id === notification._id ? { ...n, read: true } : n
        )
      );
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <BellIcon className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">
          Your Notifications
        </h2>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading notifications...</p>
      ) : notifications.length === 0 ? (
        <p className="text-gray-500 text-sm">You have no new notifications.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((n) => (
            <div
              key={n._id}
              onClick={() => handleNotificationClick(n)}
              className={`cursor-pointer p-4 rounded-md shadow-sm hover:shadow-md transition border ${
                typeStyles[n.type] || "bg-gray-100 text-gray-800"
              } ${!n.read ? "font-semibold" : "opacity-70"}`}
            >
              <h3 className="text-sm mb-1">{n.title}</h3>
              <p className="text-sm">{n.message}</p>
              <p className="text-xs mt-2 text-gray-500">
                {formatDistanceToNow(new Date(n.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
