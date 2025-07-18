import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const newMessages = [
  {
    text: "Hi there! How can I help you today?",
    sender: "doctor",
    createdAt: new Date("2025-07-17T08:30:00"),
  },
  {
    text: "I've been having headaches for the past few days.",
    sender: "patient",
    createdAt: new Date("2025-07-17T08:31:15"),
  },
  {
    text: "I see. Are they constant or do they come and go?",
    sender: "doctor",
    createdAt: new Date("2025-07-17T08:32:00"),
  },
  {
    text: "They come and go, usually worse in the mornings.",
    sender: "patient",
    createdAt: new Date("2025-07-17T08:32:45"),
  },
  {
    text: "Any nausea or vision problems with the headaches?",
    sender: "doctor",
    createdAt: new Date("2025-07-17T08:33:30"),
  },
  {
    text: "No nausea, but sometimes my vision is a bit blurry.",
    sender: "patient",
    createdAt: new Date("2025-07-17T08:34:10"),
  },
  {
    text: "Alright. Let's run a few checks. I’ll send you a quick symptom form.",
    sender: "doctor",
    createdAt: new Date("2025-07-17T08:35:00"),
  },
];

const Chat = () => {
  const [messages, setMessages] = useState(newMessages);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { text: input, sender: "patient", createdAt: new Date() },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-secondary-body text-main-font font-primary-font w-full">
      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-3 bg-white shadow-md">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-primary-body hover:text-main-body"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Profile Picture + Name */}
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with real doctor's image
            alt="Doctor Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-base font-semibold">Dr. Richard Honaker</h2>
            <p className="text-xs text-gray-500">typing...</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4  lg:px-12">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col py-1 px-2 rounded-lg max-w-[70%] w-fit ${
              msg.sender === "patient"
                ? "bg-main-body text-white self-end ml-auto"
                : "bg-white text-main-font self-start"
            }`}
          >
            <p className="text-sm">{msg.text}</p>
            <p
              className={`text-xs  text-gray-500 ${
                msg.sender === "patient" ? "self-end " : "self-start"
              }`}
            >
              {msg.createdAt.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center p-4 bg-white border-t border-gray-200">
        <textarea
          rows={1}
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="resize-none flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none text-sm"
        ></textarea>
        <button
          onClick={sendMessage}
          className="cursor-pointer ml-2 px-4 py-2 bg-main-body text-white rounded-full text-sm hover:bg-primary-body transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
