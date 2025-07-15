import Sidebar from "../component/Sidebar";
import { Outlet } from "react-router";

const ProvidersDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default ProvidersDashboard;
