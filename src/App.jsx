import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';  // ✅ FIXED: react-router-dom
import Details from './pages/Ambulance/Details';
import PatientHome from './pages/patients/patientHome';
import LabHome from './pages/Labtech/LabHome';
import DocAppointments from './pages/Doctors/DocAppointments';
import Sessions from './pages/Dermatologist/Sessions';
import MentalSlot from './pages/Therapist/MentalSlot';
import GymSessions from './pages/Physiotherapist/GymSessions';
import Login from './auth/Login';
import SignUp from './auth/Signup';
import Home from './pages/Landing/Home';
import About from './pages/Landing/About';
import Blogs from './pages/Landing/Blogs';
import Contacts from './pages/Landing/Contacts';

import PatientProfile from './pages/patients/PatientProfile';
import ServiceProfile from './pages/ServiceProfile';
import ProvidersDashboard from './layouts/ProvidersDashboard';
import PatientsDashboard from './layouts/patientsdashboard';


// Dashboard Pages:
import Services from './pages/Dashboard/Services';
import AllAppointments from './pages/Dashboard/AllAppointments';
import HealthTips from './pages/Dashboard/HealthTips';
import Settings from './pages/Dashboard/Settings';

const router = createBrowserRouter([
  // 🌐 Public Routes (No Sidebar)
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/contact",
    element: <Contacts />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },

  // 🏥 Independent Service Provider Pages (No Sidebar)
  {
    path: "/amb-details",
    element: <Details />,
  },
  {
    path: "/pat-home",
    element: <PatientHome />,
  },
  {
    path: "/lab-home",
    element: <LabHome />,
  },
  {
    path: "/doc-appointments",
    element: <DocAppointments />,
  },
  {
    path: "/derma-appointments",
    element: <Sessions />,
  },
  {
    path: "/mental-slot",
    element: <MentalSlot />,
  },
  {
    path: "/pysio-home",
    element: <GymSessions />,
  },

  // 💻 Dashboard Routes (WITH Sidebar inside ProvidersDashboard layout)
  {

    path: "/sign-up",
    element: <SignUp/>
  }, 
  {
    path: "patient-profile",
    element: <PatientProfile/>
  },
  {
    path: "service-profile",
    element: <ServiceProfile/>
  }
 ])

    path: "/dashboard",
    element: <ProvidersDashboard />,  // This is where Sidebar lives
    children: [
      {
        index: true,                // /dashboard → shows Services
        element: <Services />,
      },
      {
        path: "appointments",       // /dashboard/appointments
        element: <AllAppointments />,
      },
      {
        path: "health-tips",        // /dashboard/health-tips
        element: <HealthTips />,
      },
      {
        path: "settings",           // /dashboard/settings
        element: <Settings />,
      },
      {
        path: "services",           // Optional extra route: /dashboard/services
        element: <Services />,
      },

    

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
