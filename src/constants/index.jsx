import { FaHome, FaStethoscope, FaCalendarAlt, FaCogs, FaHeartbeat } from "react-icons/fa";

const K = {
  NAVLINKS: [
    {
      icon: <FaStethoscope />,
      text: "All Services",
      path: "/dashboard",
    },
    
    {
      icon: <FaCalendarAlt />,
      text: "Appointments",
      path: "/dashboard/appointments",
    },
    {
      icon: <FaHeartbeat />,
      text: "Health Tips",
      path: "/dashboard/health-tips",
    },
    {
      icon: <FaCogs />,
      text: "Settings",
      path: "/dashboard/settings",
    },
  ],
};

export default K;
