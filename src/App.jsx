import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';

// Public Pages
import Home from './pages/Landing/Home';
import About from './pages/Landing/About';
import Blogs from './pages/Landing/Blogs';
import Contacts from './pages/Landing/Contacts';
import Login from './auth/Login';
import SignUp from './auth/Signup';

// Patient-Specific Pages
import PatientHome from './pages/patients/PatientHome';
import PatientProfile from './pages/patients/PatientProfile';
import PatientsDashboard from './layouts/PatientsDashboard';

// Service Provider Pages
import Details from './pages/Ambulance/Details';
import LabHome from './pages/Labtech/LabHome';
import DocAppointments from './pages/Doctors/DocAppointments';
import Sessions from './pages/Dermatologist/Sessions';
import MentalSlot from './pages/Therapist/MentalSlot';
import GymSessions from './pages/Physiotherapist/GymSessions';
import ServiceProfile from './pages/ServiceProfile';
import ProvidersDashboard from './layouts/ProvidersDashboard';

// Dashboard Features
import AllAppointments from './pages/Dashboard/AllAppointments';
import HealthTips from './pages/Dashboard/HealthTips';
import Settings from './pages/Dashboard/Settings';
import Overview from './pages/Dashboard/Overview';
import EditTip from './pages/Dashboard/EditTip';
import ViewTip from './pages/Dashboard/ViewTips';
import DoctorDashboard from './pages/Doctors/DoctorsDasboard';

// Create routes
const router = createBrowserRouter([
  // 🌐 Public Routes
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blogs /> },
  { path: "/contact", element: <Contacts /> },
  { path: "/log-in", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },

  // 🧍‍♂️ Patient Dashboard Routes (with layout)
  {
    path: "/patient-dashboard",
    element: <PatientsDashboard />,
    children: [
      { index: true, 
        element: <PatientHome /> },

      { path: "profile", 
        element: <PatientProfile /> },
    ],
  },

  // 👨‍⚕️ Service Provider Dashboard (with sidebar/layout)
  {
    path: "/dashboard",
    element: <ProvidersDashboard />,
    children: [
      { index: true, 
        element: <Overview /> },

      { path: "appointments", element: <AllAppointments /> },
      { path: "health-tips", element: <HealthTips /> },
      { path: "health-tips/edit/:id", element: <EditTip /> },
      { path: "health-tips/view/:id", element: <ViewTip /> },
      { path: "settings", element: <Settings /> },
      { path: "stats", element: <Overview /> }, // Optional: "stats" and "overview" point to same page
    ],
  },

  // 🏥 Independent Service Provider Pages (NO layout)
  { path: "/amb-details", element: <Details /> },
  { path: "/lab-home", element: <LabHome /> },
  { path: "/doctor-dashboard", element: <DoctorDashboard /> },
  { path: "/doc-appointments", element: <DocAppointments /> },
  { path: "/derma-appointments", element: <Sessions /> },
  { path: "/mental-slot", element: <MentalSlot /> },
  { path: "/pysio-home", element: <GymSessions /> },
  { path: "/service-profile", element: <ServiceProfile /> },
]);

// App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
