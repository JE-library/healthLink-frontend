import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000/api", // Replace with your actual base URL
  baseURL: "https://healthlink-backend01.onrender.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // or
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosInstance;
