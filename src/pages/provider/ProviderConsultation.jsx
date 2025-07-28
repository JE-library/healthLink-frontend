import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "../../services/api";
import { FaPaperPlane } from "react-icons/fa";
import { format } from "date-fns";
import pusher from "../../services/pusher";

const ProviderConsultation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef();

  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const res = await axios.get(`/providers/chats/${id}`);
        setConversation(res.data.conversation.conversation);
        setMessages(res.data.conversation.messages);
      } catch (err) {
        console.error("Failed to fetch conversation", err);
      } finally {
        setLoading(false);
      }
    };
    fetchConversation();
  }, [id]);

  useEffect(() => {
    // 1. Pusher instnace alredy defined
    // 2. Subscribe to a conversation channel
    const channel = pusher.subscribe(`chat-${id}`);
    // 3. Listen for new messages
    channel.bind("new-message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    // 4. Clean up on unmount
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    // // Optimistic update (optional enhancement)
    // const newMessage = {
    //   message: inputMessage,
    //   senderModel: "ServiceProvider",
    //   createdAt: new Date().toISOString(),
    // };
    // setMessages((prev) => [...prev, newMessage]);

    try {
      setInputMessage("");
      setSending(true);
      // TODO: Send message to backend
      await axios.post(`/providers/chats/${id}/send-message`, {
        message: inputMessage,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setSending(false);
    }
  };

  if (loading) return <div className="p-6">Loading chat...</div>;
  if (!conversation)
    return <div className="p-6 text-red-500">Conversation not found.</div>;

  const user = conversation.user;

  return (
    <div className=" sm:p-6 md:px-16 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline text-sm cursor-pointer"
      >
        ← Back
      </button>

      {/* user Info */}
      <div
        className="bg-white  p-4 rounded-lg flex items-center gap-4 mb-6 shadow border border-gray-300 cursor-pointer"
        onClick={() => navigate(`/patient/providers/${user._id}`)}
      >
        <img
          src={user?.profilePhoto?.url || "/default-avatar.png"}
          alt={user?.fullName}
          className="w-14 h-14 rounded-full object-cover border-3 border-main-body"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{user?.fullName}</h2>
          <p className="text-sm text-gray-500 capitalize">{user?.email}</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-gray-50 shadow border border-gray-300 rounded-lg h-96 p-4 overflow-y-auto mb-4 space-y-3">
        {messages.length === 0 && (
          <p className="text-sm text-gray-500">
            No messages yet. Start the conversation!
          </p>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.senderModel === "ServiceProvider"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`px-2 py-1 rounded-lg max-w-xs text-sm ${
                msg.senderModel === "ServiceProvider"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <p className="text-[16px]">{msg.message}</p>
              <p
                className={`text-[10px] text-gray-200${
                  msg.senderModel === "ServiceProvider"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.createdAt ? format(new Date(msg.createdAt), "p") : ""}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} className="flex justify-end">
          {sending ? "sending..." : ""}
        </div>
      </div>

      {/* Message Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          // disabled={!inputMessage.trim()}
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
        >
          <FaPaperPlane size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProviderConsultation;
