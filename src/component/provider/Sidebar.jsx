import { NavLink, useNavigate } from "react-router";
import K from "../constants/index";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/log-in");
  };

  return (
    <div className="bg-white shadow-lg min-h-screen w-64 p-6 flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        <h1 className="text-2xl font-bold text-blue-700 mb-8">JE-HEALTHLINKS</h1>

        <div className="flex flex-col gap-4">
          {K.NAVLINKS.map(({ icon, text, path }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                  isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
              end
            >
              <span className="text-xl">{icon}</span>
              <span>{text}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-10 transition"
      >
        Logout
      </button>

    </div>
  );
};

export default Sidebar;
