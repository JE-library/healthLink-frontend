import { FaUserMd, FaCalendarAlt, FaHeartbeat, FaCog } from "react-icons/fa";
import { Link } from "react-router";

const PatientHome = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Welcome to HealthLink, Josephine 👋</h1>

      {/* Summary Cards with Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <Link to="/pat-appointments" className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-xl transition">
          <FaCalendarAlt className="text-2xl text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Upcoming Appointments</p>
            <p className="text-lg font-semibold text-gray-800">2</p>
          </div>
        </Link>

        <Link to="/doc-appointments" className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-xl transition">
          <FaUserMd className="text-2xl text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Available Doctors</p>
            <p className="text-lg font-semibold text-gray-800">5</p>
          </div>
        </Link>

        <Link to="/dashboard/health-tips" className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-xl transition">
          <FaHeartbeat className="text-2xl text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Health Tips</p>
            <p className="text-lg font-semibold text-gray-800">New Today</p>
          </div>
        </Link>

        <Link to="/dashboard/settings" className="bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-xl transition">
          <FaCog className="text-2xl text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Settings</p>
            <p className="text-lg font-semibold text-gray-800">Update Info</p>
          </div>
        </Link>

      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/doc-appointments" className="bg-blue-600 text-white rounded-xl p-5 text-lg hover:bg-blue-700 transition text-center">
          Book a Doctor Appointment
        </Link>

        <Link to="/amb-details" className="bg-red-600 text-white rounded-xl p-5 text-lg hover:bg-red-700 transition text-center">
          Emergency / Call Ambulance
        </Link>
      </div>
    </div>
  );
};

export default PatientHome;
