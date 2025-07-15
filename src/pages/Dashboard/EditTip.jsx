import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

// Dummy tips data
const dummyTips = [
  {
    id: 1,
    title: "Stay Hydrated",
    category: "Nutrition",
    description: "Drinking at least 8 cups of water daily helps maintain body function.",
  },
  {
    id: 2,
    title: "Daily Exercise",
    category: "Fitness",
    description: "Regular movement boosts energy, mood, and heart health.",
  },
  {
    id: 3,
    title: "Sleep 7-8 Hours",
    category: "Mental Health",
    description: "Getting enough rest improves memory and reduces stress.",
  },
];

const EditTip = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [tip, setTip] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const selectedTip = dummyTips.find((t) => t.id === parseInt(id));
    if (selectedTip) {
      setTip(selectedTip);
    } else {
      setTip({ title: "", category: "", description: "" }); // fallback
    }
  }, [id]);

  const handleChange = (e) => {
    setTip({ ...tip, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Tip updated successfully!");

    // Simulate redirect after 2 seconds
    setTimeout(() => {
      navigate("/dashboard/health-tips");
    }, 2000);
  };

  if (!tip) return <p className="p-6 text-gray-600">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Edit Post</h1>

      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={tip.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={tip.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Description</label>
          <textarea
            name="description"
            value={tip.description}
            onChange={handleChange}
            rows="4"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter a brief health tip description..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditTip;
