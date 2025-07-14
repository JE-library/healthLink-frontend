import { useState } from 'react';

const HealthTips = () => {
  const initialTips = [
    { id: 1, title: "Stay Hydrated", category: "Nutrition", description: "Drink at least 8 glasses of water daily." },
    { id: 2, title: "Stretch Every Morning", category: "Physical Health", description: "Start your day with stretches." },
    { id: 3, title: "Limit Screen Time", category: "Mental Health", description: "Take regular breaks from screens." },
    { id: 4, title: "Eat More Veggies", category: "Nutrition", description: "Include colorful veggies in your meals." },
  ];

  const [tips, setTips] = useState(initialTips);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newTip, setNewTip] = useState({ title: '', category: '', description: '' });

  // Filtered Tips Logic
  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Add New Tip
  const handleAddTip = () => {
    if (!newTip.title || !newTip.category || !newTip.description) return;
    const newEntry = { ...newTip, id: tips.length + 1 };
    setTips([...tips, newEntry]);
    setNewTip({ title: '', category: '', description: '' });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Daily Health Tips</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search tips..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg w-full md:w-1/2"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-lg w-full md:w-1/4"
        >
          <option value="All">All Categories</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Physical Health">Physical Health</option>
          <option value="Mental Health">Mental Health</option>
        </select>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredTips.map((tip) => (
          <div key={tip.id} className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500">
            <span className="text-sm text-blue-600 uppercase font-semibold">{tip.category}</span>
            <h2 className="text-xl font-semibold mt-2 mb-1">{tip.title}</h2>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
        {filteredTips.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">No tips found.</p>
        )}
      </div>

      {/* Add New Tip Section */}
      <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto">
        <h2 className="text-lg font-semibold mb-4 text-blue-700">Add a New Tip</h2>

        <input
          type="text"
          placeholder="Title"
          value={newTip.title}
          onChange={(e) => setNewTip({ ...newTip, title: e.target.value })}
          className="border p-2 rounded-lg w-full mb-3"
        />

        <input
          type="text"
          placeholder="Category (e.g., Nutrition)"
          value={newTip.category}
          onChange={(e) => setNewTip({ ...newTip, category: e.target.value })}
          className="border p-2 rounded-lg w-full mb-3"
        />

        <textarea
          placeholder="Description"
          value={newTip.description}
          onChange={(e) => setNewTip({ ...newTip, description: e.target.value })}
          className="border p-2 rounded-lg w-full mb-3"
          rows="3"
        />

        <button
          onClick={handleAddTip}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Tip
        </button>
      </div>
    </div>
  );
};

export default HealthTips;
