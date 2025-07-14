import Sidebar from "../component/Sidebar"
import { Outlet } from "react-router"

const ProvidersDashboard = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar />

      <main className="bg-pink-50 w-full ml-60 p-10">
        <Outlet />
      </main></div>
  )
}

export default ProvidersDashboard