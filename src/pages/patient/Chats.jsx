import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../services/api";
import { formatDistanceToNowStrict } from "date-fns";

const Chats = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get("/users/chats");
        setConversations(res.data.conversations || []);
      } catch (error) {
        console.error("Error fetching conversations", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className=" md:px-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Chats</h2>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading conversations...</p>
      ) : conversations.length === 0 ? (
        <p className="text-gray-500 text-sm">No chats yet.</p>
      ) : (
        <div className="space-y-4">
          {conversations.map((chat) => {
            const specialist = chat.serviceProvider;
            const profilePhoto =
              specialist?.profilePhoto?.url || "/default-avatar.png";
            const lastMsg = chat.lastMessage?.message || "No messages yet";
            const time =
              chat.lastMessage?.createdAt &&
              formatDistanceToNowStrict(new Date(chat.lastMessage.createdAt), {
                addSuffix: true,
              });

            return (
              <div
                key={chat._id}
                onClick={() => navigate(`/patient/consultation/${chat._id}`)}
                className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer flex items-center gap-4"
              >
                <img
                  src={profilePhoto}
                  alt={specialist?.fullName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-gray-800 font-medium">
                      {specialist?.fullName || "Unknown Specialist"}
                    </p>
                    <span className="text-xs text-gray-400">{time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{lastMsg}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Chats;
