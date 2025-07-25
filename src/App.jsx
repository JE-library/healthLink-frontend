import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Blog from "./pages/public/Blog";
import NotFound from "./component/public/NotFound";
import ServiceProviderProfile from "./pages/public/ServiceProviderProfile";

// Auth Pages
import Login from "./pages/auth/Login";
import SignUpPatient from "./pages/auth/SignUpPatient";
import SignUpProvider from "./pages/auth/SignUpProvider";
import SignUpAmbulance from "./pages/auth/SignUpAmbulance";

// Patient Pages
import PatientDashboard from "./pages/patient/Dashboard";
import BookConsultation from "./pages/patient/BookConsultation";
import WellnessBlog from "./pages/patient/WellnessBlog";
import Appointments from "./pages/patient/Appointments";
import AppointmentDetails from "./pages/patient/AppointmentDetails";
import Consultation from "./pages/patient/Consultation";
import Chats from "./pages/patient/Chats";
import HomeLab from "./pages/patient/HomeLab";
import Emergency from "./pages/patient/Emergency";
import Notifications from "./pages/patient/Notifications";
import Pharmacy from "./pages/patient/Pharmacy";
import PatientProfile from "./pages/patient/Profile";
import EditPatientProfile from "./pages/patient/EditPatientProfile";
import Support from "./pages/patient/Support";
import AllProviders from "./pages/patient/AllProviders";
import LabRequets from "./pages/patient/LabRequets";
import LabRequetDetails from "./pages/patient/LabRequetDetails";

// Provider Pages
import ProviderDashboard from "./pages/provider/Dashboard";
import ProviderAppointments from "./pages/provider/ProviderAppointments";
import ProviderAppointmentDetails from "./pages/provider/ProviderAppointmentDetails";
import ProviderProfile from "./pages/provider/Profile";
import ProviderSettings from "./pages/provider/Settings";
import PendingApproval from "./pages/public/PendingApproval";
import ProviderNotifications from "./pages/provider/ProviderNotifications";
import ProviderChats from "./pages/provider/ProviderChats";
import ProviderConsultation from "./pages/provider/ProviderConsultation";

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
import AvailableDoctors from "./pages/patient/AvailableDoctors";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/login", element: <Login /> },
  { path: "/signup/patient", element: <SignUpPatient /> },
  { path: "/signup/provider", element: <SignUpProvider /> },
  { path: "/pending-approval/:id", element: <PendingApproval /> },
  { path: "/providers/:id", element: <ServiceProviderProfile /> },
  { path: "/signup/ambulance", element: <SignUpAmbulance /> },

  {
    path: "/patient",
    element: <PatientLayout />,
    children: [
      { path: "dashboard", element: <PatientDashboard /> },
      { path: "all-providers", element: <AllProviders /> },
      { path: "wellness-blog", element: <WellnessBlog /> },
      { path: "book-consultation/:id", element: <BookConsultation /> },
      { path: "appointments", element: <Appointments /> },
      { path: "appointments/:id", element: <AppointmentDetails /> },
      { path: "chats", element: <Chats /> },
      { path: "consultation/:id", element: <Consultation /> },
      { path: "home-lab/:id", element: <HomeLab /> },
      { path: "lab-requests", element: <LabRequets /> },
      { path: "lab-requests/:id", element: <LabRequetDetails /> },
      { path: "providers/:id", element: <ServiceProviderProfile /> },
      { path: "emergency", element: <Emergency /> },
      { path: "notifications", element: <Notifications /> },
      { path: "pharmacy", element: <Pharmacy /> },
      { path: "profile", element: <PatientProfile /> },
      { path: "edit-profile", element: <EditPatientProfile /> },
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
      { path: "chats", element: <ProviderChats /> },
      { path: "chat/:id", element: <ProviderConsultation /> },
      { path: "profile", element: <ProviderProfile /> },
      { path: "settings", element: <ProviderSettings /> },
      { path: "notifications", element: <ProviderNotifications /> },
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
