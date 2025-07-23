import { BellIcon } from "lucide-react";
import React, { useEffect, useState } from "react";


const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate patient notifications
    const sample = [
      {
        id: 1,
        type: "success",
        message: "Your appointment with Dr. Aboagye has been confirmed.",
        time: "Just now",
      },
      {
        id: 2,
        type: "info",
        message: "A specialist is now available for consultation.",
        time: "3 min ago",
      },
      {
        id: 3,
        type: "alert",
        message: "Your lab test results are now available.",
        time: "10 min ago",
      },
    ];

    setTimeout(() => {
      setNotifications(sample);
    }, 1000);
  }, []);

  const typeColor = {
    success: "bg-green-100 text-green-800",
    info: "bg-blue-100 text-blue-800",
    alert: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <BellIcon className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Patient Notifications</h2>
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-500 text-sm">You have no new notifications.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-md shadow ${typeColor[n.type]} transition duration-300`}
            >
              <p className="font-medium">{n.message}</p>
              <p className="text-xs text-gray-500">{n.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
