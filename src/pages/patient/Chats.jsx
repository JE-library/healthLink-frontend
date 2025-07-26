import React from "react";
import { useNavigate } from "react-router";

const Chats = () => {
  const navigate = useNavigate();

  const chatList = [
    {
      id: 1,
      name: "Dr. James Peterson",
      lastMessage: "Your results are ready.",
      time: "2h ago",
      profilePhoto: "/avatars/doc1.jpg",
    },
    {
      id: 2,
      name: "Lab Services",
      lastMessage: "Please confirm your home visit.",
      time: "1d ago",
      profilePhoto: "/avatars/lab1.png",
    },
    {
      id: 3,
      name: "Support Team",
      lastMessage: "Let us know if you need anything else.",
      time: "3d ago",
      profilePhoto: "", // Will fallback to default
    },
  ];

  return (
    <div className="p-6 md:px-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Chats</h2>

      <div className="space-y-4">
        {chatList.map((chat) => (
          <div
            onClick={() => navigate("/patient/consultation/:id")}
            key={chat.id}
            className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer flex items-center gap-4"
          >
            <img
              src={chat.profilePhoto || "/default-avatar.png"}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-main-body/50"
            />

            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-800 font-medium">{chat.name}</p>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {chat.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chats;
