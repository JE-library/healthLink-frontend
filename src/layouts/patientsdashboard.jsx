import { Outlet } from "react-router"; 
import Navbar from "../component/Navbar"; 
import Footer from "../component/Footer"; 

const PatientsDashboard = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-6 bg-gray-50">
        <Outlet />  
      </main>
      <Footer />
    </div>
  );
};

export default PatientsDashboard;
