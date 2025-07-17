import { FaHome, FaStethoscope, FaCalendarAlt, FaCogs, FaHeartbeat } from "react-icons/fa";

const K = {
  NAVLINKS: [
    {
      icon: <FaStethoscope />,
      text: "Overview",
      path: "/provider/dashboard",
    },
    
    {
      icon: <FaCalendarAlt />,
      text: "Appointments",
      path: "/provider/appointments",
    },
    {
      icon: <FaHeartbeat />,
      text: "Health Tips",
      path: "/dashboard/health-tips",
    },
    {
      icon: <FaCogs />,
      text: "Settings",
      path: "/provider/settings",
    },
  ],
};

export default K;
