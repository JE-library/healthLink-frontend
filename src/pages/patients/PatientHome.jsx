import { FaUserMd, FaCalendarAlt, FaHeartbeat, FaCog } from "react-icons/fa";

const PatientHome = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Welcome to HealthLink, Josephine 👋</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
          <FaCalendarAlt className="text-2xl text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Upcoming Appointments</p>
            <p className="text-lg font-semibold text-gray-800">2</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
          <FaUserMd className="text-2xl text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Available Doctors</p>
            <p className="text-lg font-semibold text-gray-800">5</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
          <FaHeartbeat className="text-2xl text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Health Tips</p>
            <p className="text-lg font-semibold text-gray-800">New Today</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4">
          <FaCog className="text-2xl text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Settings</p>
            <p className="text-lg font-semibold text-gray-800">Update Info</p>
          </div>
        </div>
      </div>

      {/* Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="bg-blue-600 text-white rounded-xl p-5 text-lg hover:bg-blue-700 transition">
          Book a Doctor Appointment
        </button>

        <button className="bg-red-600 text-white rounded-xl p-5 text-lg hover:bg-red-700 transition">
          Emergency / Call Ambulance
        </button>
      </div>
    </div>
  );
};

export default PatientHome;
