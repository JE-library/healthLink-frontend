import {
  FaUserMd,
  FaStethoscope,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

const Overview = () => {
  const [role, setRole] = useState("Doctor");
  const [stats, setStats] = useState([]);

  const appointmentStats = [
    {
      title: "Total Appointments",
      value: 120,
      icon: <FaCalendarAlt className="text-blue-500" />,
    },
    {
      title: "Pending Appointments",
      value: 85,
      icon: <FaUsers className="text-green-500" />,
    },
    {
      title: "Cancelled Appointments",
      value: 15,
      icon: <FaUserMd className="text-purple-500" />,
    },
    {
      title: "Confirmed Appointments",
      value: 8,
      icon: <FaStethoscope className="text-red-500" />,
    },
    {
      title: "Completed Appointments",
      value: 8,
      icon: <FaStethoscope className="text-red-500" />,
    },
  ];
  const labRequestStats = [
    {
      title: "Total Lab Requests",
      value: 120,
      icon: <FaCalendarAlt className="text-blue-500" />,
    },
    {
      title: "Pending Lab Requests",
      value: 85,
      icon: <FaUsers className="text-green-500" />,
    },
    {
      title: "Cancelled Lab Requests",
      value: 15,
      icon: <FaUserMd className="text-purple-500" />,
    },
    {
      title: "Confirmed Lab Requests",
      value: 8,
      icon: <FaStethoscope className="text-red-500" />,
    },
    {
      title: "Completed Lab Requests",
      value: 8,
      icon: <FaStethoscope className="text-red-500" />,
    },
  ];

  useEffect(() => {
    if (role == "Lab Technician") {
      setStats(labRequestStats);
    } else {
      setStats(appointmentStats);
    }
  }, [role]);

  const chartData = [
    { name: "Jan", appointments: 20 },
    { name: "Feb", appointments: 30 },
    { name: "Mar", appointments: 45 },
    { name: "Apr", appointments: 25 },
    { name: "May", appointments: 60 },
    { name: "Jun", appointments: 75 },
    { name: "Jul", appointments: 40 },
    { name: "Aug", appointments: 5 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Dashboard Overview
      </h1>

      {/* 🔢 Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4"
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 📊 Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Monthly Appointments</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="appointments" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
