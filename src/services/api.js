import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000/api", // Replace with your actual base URL
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // or
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosInstance;
