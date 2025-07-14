import { Outlet } from "react-router"; // ✅ Use react-router-dom
import Navbar from "../component/Navbar"; // ✅ Ensure it's in components folder
import Footer from "../component/Footer"; // ✅ Same here

const PatientsDashboard = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-6 bg-gray-50">
        <Outlet />  {/* ✅ This loads nested route content like PatientHome */}
      </main>
      <Footer />
    </div>
  );
};

export default PatientsDashboard;
