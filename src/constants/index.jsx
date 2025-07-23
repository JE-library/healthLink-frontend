import {  FaStethoscope, FaCalendarAlt, FaCogs, FaUserMd, FaComments } from "react-icons/fa";

const K = {
  NAVLINKS: [
    {
      icon: <FaStethoscope />,
      text: "Overview",
      path: "/provider/dashboard",
    },
    {
  icon: <FaUserMd />,
  text: "Profile",
  path: "/provider/profile",
},
    
    {
      icon: <FaCalendarAlt />,
      text: "Appointments",
      path: "/provider/appointments",
    },
   {
  icon: <FaComments/>,
  text: "Patient Chat",
  path: "/provider/chat/1", // Just a sample — will be dynamic in the actual app
},
    {
      icon: <FaCogs />,
      text: "Settings",
      path: "/provider/settings",
    },






  ],
};

export default K;
