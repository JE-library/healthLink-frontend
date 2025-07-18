import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Blog from "./pages/public/Blog";
import NotFound from "./component/public/NotFound";

// Auth Pages
import Login from "./pages/auth/Login";
import SignUpPatient from "./pages/auth/SignUpPatient";
import SignUpProvider from "./pages/auth/SignUpProvider";
import SignUpAmbulance from "./pages/auth/SignUpAmbulance";

// Patient Pages
import PatientDashboard from "./pages/patient/Dashboard";
import BookConsultation from "./pages/patient/BookConsultation";
import Appointments from "./pages/patient/Appointments";
import AppointmentDetails from "./pages/patient/AppointmentDetails";
import Consultation from "./pages/patient/Consultation";
import HomeLab from "./pages/patient/HomeLab";
import Emergency from "./pages/patient/Emergency";
import Notifications from "./pages/patient/Notifications";
import Pharmacy from "./pages/patient/Pharmacy";
import PatientProfile from "./pages/patient/Profile";
import Support from "./pages/patient/Support";

// Provider Pages
import ProviderDashboard from "./pages/provider/Dashboard";
import ProviderAppointments from "./pages/provider/Appointments";
import ProviderAppointmentDetails from "./pages/provider/AppointmentDetails";
import ProviderChat from "./pages/provider/Chat";
import ProviderProfile from "./pages/provider/Profile";
import ProviderSettings from "./pages/provider/Settings";

// Ambulance Pages
import AmbulanceDashboard from "./pages/ambulance/Dashboard";
import AmbulanceRequests from "./pages/ambulance/Requests";
import AmbulanceProfile from "./pages/ambulance/Profile";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminAppointments from "./pages/admin/Appointments";
import AdminLabrequets from "./pages/admin/LabRequets";
import AdminBlogs from "./pages/admin/Blogs";
import AdminReports from "./pages/admin/Reports";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import PatientLayout from "./layouts/PatientLayout";
import ProviderLayout from "./layouts/ProviderLayout";
import AmbulanceLayout from "./layouts/AmbulanceLayout";
import AdminLayout from "./layouts/AdminLayout";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/login", element: <Login /> },
  { path: "/signup/patient", element: <SignUpPatient /> },
  { path: "/signup/provider", element: <SignUpProvider /> },
  { path: "/signup/ambulance", element: <SignUpAmbulance /> },

  {
    path: "/patient",
    element: <PatientLayout />,
    children: [
      { path: "dashboard", element: <PatientDashboard /> },
      { path: "book-consultation", element: <BookConsultation /> },
      { path: "appointments", element: <Appointments /> },
      { path: "appointments/:id", element: <AppointmentDetails /> },
      { path: "consultation/:id", element: <Consultation /> },
      { path: "home-lab", element: <HomeLab /> },
      { path: "emergency", element: <Emergency /> },
      { path: "notifications", element: <Notifications /> },
      { path: "pharmacy", element: <Pharmacy /> },
      { path: "profile", element: <PatientProfile /> },
      { path: "support", element: <Support /> },
    ],
  },
  {
    path: "/provider",
    element: <ProviderLayout />,
    children: [
      { path: "dashboard", element: <ProviderDashboard /> },
      { path: "appointments", element: <ProviderAppointments /> },
      { path: "appointments/:id", element: <ProviderAppointmentDetails /> },
      { path: "chat/:patientId", element: <ProviderChat /> },
      { path: "profile", element: <ProviderProfile /> },
      { path: "settings", element: <ProviderSettings /> },
    ],
  },
  {
    path: "/ambulance",
    element: <AmbulanceLayout />,
    children: [
      { path: "dashboard", element: <AmbulanceDashboard /> },
      { path: "requests", element: <AmbulanceRequests /> },
      { path: "profile", element: <AmbulanceProfile /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "users", element: <AdminUsers /> },
      { path: "appointments", element: <AdminAppointments /> },
      { path: "lab-requests", element: <AdminLabrequets /> },
      { path: "blogs", element: <AdminBlogs /> },
      { path: "reports", element: <AdminReports /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
