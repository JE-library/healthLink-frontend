import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

// Dummy data (same as in HealthTips.jsx)
const healthTips = [
  {
    id: 1,
    Author: "Nut Josephine",
    title: "Stay Hydrated",
    category: "Nutrition",
    description: "Drinking water regularly helps maintain your body's fluid balance and supports digestion, circulation, and more.",
  },
  {
    id: 2,
    Author: "Dr. Josh",
    title: "Daily Exercise",
    category: "Fitness",
    description: "At least 30 minutes of physical activity a day improves heart health, boosts mood, and increases energy.",
  },
  {
    id: 3,
    Author: "Fitness coach Eben",
    title: "Sleep 7-8 Hours",
    category: "Mental Health",
    description: "Proper sleep is essential for mental clarity, emotional balance, and immune function.",
  },
];

const ViewTip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tip = healthTips.find((tip) => tip.id === parseInt(id));

  if (!tip) {
    return (
      <div className="p-6">
        <p className="text-red-600 font-semibold">Tip not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
      >
        <FaArrowLeft /> Back to Tips
      </button>

      <h1 className="text-3xl font-bold text-blue-700 mb-2">{tip.title}</h1>
      <p className="text-gray-600 mb-6"><strong>Author:</strong> {tip.name}</p>
      <p className="text-gray-600 mb-1"><strong>Category:</strong> {tip.category}</p>
      

      <div className="bg-white p-6 rounded-xl shadow text-gray-800">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p>{tip.description}</p>
      </div>
    </div>
  );
};

export default ViewTip;
