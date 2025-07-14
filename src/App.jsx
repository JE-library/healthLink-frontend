import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Details from './pages/Ambulance/Details';
import PatientHome from './pages/patients/patientHome';
import LabHome from './pages/Labtech/LabHome';
import Appointments from './pages/Doctors/Appointments';
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



function App() {
 const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/blog",
    element: <Blogs/>
  },
  {
    path:"/contact",
    element: <Contacts/>,
  },

  {
    path: "/amb-details",
    element: <Details/>,
    
  },

  {
path: "/pat-home",
element: <PatientHome/>,
  },

  {
path: "/lab-home",
element: <LabHome/>,
  },

  {
    path: "/doc-appointments",
    element: <Appointments/>,
  },
  {
    path: "/derma-appointments",
    element: <Sessions/>,
  },

  {
    path: "/mental-slot",
    element: <MentalSlot/>,
  },

  {
    path: "/pysio-home",
    elemnet: <GymSessions/>
  },
  {
path: "/log-in",
element: <Login/>
  },

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

  return <RouterProvider router={router} />;
  
  
}

export default App
