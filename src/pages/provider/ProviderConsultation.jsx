import { useState } from "react";
import { FaVideo, FaPhone, FaComments, FaPaperPlane } from "react-icons/fa";

const ProviderConsultation = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "specialist", text: "Hello, how can I help you today?" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = () => {
    if (inputMessage.trim() !== "") {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), sender: "user", text: inputMessage },
      ]);
      setInputMessage("");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Specialist Info */}
      <div className="bg-white shadow p-4 rounded-lg flex items-center justify-between mb-6 border border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-blue-800">Dr. Nana Ama</h2>
          <p className="text-sm text-gray-600">Nutritionist & Dietician</p>
        </div>
        <div className="flex space-x-4 text-blue-700 text-lg">
          <FaComments title="Chat" />
          <FaVideo title="Video" />
          <FaPhone title="Audio" />
        </div>
      </div>

      {/* Chat Section */}
      <div className="bg-gray-50 p-4 rounded-lg h-96 overflow-y-scroll border border-gray-200 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-3 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-blue-100 text-right"
                  : "bg-gray-200 text-left"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          <FaPaperPlane />
        </button>
      </div>

      {/* End Consultation */}
      <div className="mt-6 text-center">
        <button className="text-sm text-red-600 hover:underline">
          End Consultation
        </button>
      </div>
    </div>
  );
};

export default ProviderConsultation;
