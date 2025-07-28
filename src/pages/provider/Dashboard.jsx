import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "../../services/api";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [provider, setProvider] = useState(null);
  const [stats, setStats] = useState([]);
  const [isAvailable, setIsAvailable] = useState(null);
  const [overview, setOverview] = useState(null);

  const fetchProvider = async () => {
    try {
      const res = await axios.get("/providers/profile");
      setProvider(res.data.provider);
    } catch (err) {
      console.error("Failed to fetch provider profile", err);
    }
  };

  const fetchOverview = async () => {
    try {
      const res = await axios.get("/providers/overview");
      setOverview(res.data.dashboardStats);
    } catch (err) {
      console.error("Error fetching dashboard stats", err);
    }
  };

  const toggleAvailability = async () => {
    try {
      const res = await axios.patch("/providers/is-available");
      setIsAvailable(res.data.serviceProviderAvailability);
      toast.success("Availability Status Changed");
    } catch (err) {
      console.error("Failed to toggle availability", err);
    }
  };

  useEffect(() => {
    fetchProvider();
    fetchOverview();
  }, []);

  useEffect(() => {
    if (!provider || !overview) return;

    const isLabTech =
      provider.specialization?.toLowerCase() === "lab technician";
    const data = isLabTech ? overview.labRequests : overview.appointments;

    const roleStats = [
      { title: "Total", value: data.total },
      { title: "Pending", value: data.pending },
      { title: "Cancelled", value: data.cancelled },
      { title: "Confirmed", value: data.confirmed },
      { title: "Completed", value: data.completed },
    ];

    const postStat = {
      title: "Posts",
      value: overview.posts?.total || 0,
    };

    setIsAvailable(provider.isAvailable);
    setStats([...roleStats, postStat]);
  }, [provider, overview]);

  const chartData = [
    { name: "Jan", count: 20 },
    { name: "Feb", count: 30 },
    { name: "Mar", count: 45 },
    { name: "Apr", count: 25 },
    { name: "May", count: 60 },
    { name: "Jun", count: 75 },
    { name: "Jul", count: 40 },
    { name: "Aug", count: 5 },
  ];

  const title =
    provider?.specialization?.toLowerCase() === "lab technician"
      ? "Lab Requests"
      : "Appointments";

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <button
            onClick={toggleAvailability}
            className={`px-4 py-2 rounded-md text-sm font-medium text-white cursor-pointer ${
              isAvailable ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {isAvailable ? "Available" : "Unavailable"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md border border-gray-200 p-4 text-center shadow-sm"
          >
            <p className="text-sm text-gray-500 mb-1">{item.title}</p>
            <p className="text-lg font-semibold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm">
        <h2 className="text-lg font-medium mb-4 text-gray-700">
          Monthly Overview
        </h2>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#2563eb"
              radius={[4, 4, 0, 0]}
              barSize={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
