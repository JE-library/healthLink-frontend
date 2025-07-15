import { useNavigate } from 'react-router';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';

const healthTips = [
  {
    id: 1,
    title: "Stay Hydrated",
    category: "Nutrition",
    date: "2024-07-01",
  },
  {
    id: 2,
    title: "Daily Exercise",
    category: "Fitness",
    date: "2024-07-03",
  },
  {
    id: 3,
    title: "Sleep 7-8 Hours",
    category: "Mental Health",
    date: "2024-07-05",
  },
];

const HealthTips = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/dashboard/health-tips/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/dashboard/health-tips/view/${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tip?");
    if (confirmDelete) {
      alert(`Deleted Tip ID: ${id}`);
      // Here you'd typically update the state to remove it from the UI
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Health Tips</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Date Added</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {healthTips.map((tip) => (
              <tr key={tip.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{tip.title}</td>
                <td className="p-4">{tip.category}</td>
                <td className="p-4">{tip.date}</td>
                <td className="p-4 flex gap-3 items-center">
                  <button
                    onClick={() => handleView(tip.id)}
                    className="text-blue-600 hover:text-blue-800"
                    title="View"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleEdit(tip.id)}
                    className="text-green-600 hover:text-green-800"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(tip.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}

            {healthTips.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No health tips available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthTips;
