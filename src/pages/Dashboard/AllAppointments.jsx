import React from 'react'

const AllAppointments = () => {
  const appointments =[
    {
      id: 1,
      patientName: "John Doe",
      service: "Doctor Consultation",
      date: "2024-07-10",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      patientName: "Sarah Lee",
      service: "Physiotherapy",
      date: "2024-07-12",
      time: "2:30 PM",
      status: "Pending",
    },
    {
      id: 3,
      patientName: "Michael Brown",
      service: "Mental Health",
      date: "2024-07-15",
      time: "4:00 PM",
      status: "Completed",
    },
  ];
  
  return (
    <div className='p-6'>
       <h1 className="text-3xl font-bold mb-6 text-blue-700">Appointments</h1>

       <div className='overflow-x-auto'>
         <table className="w-full table-auto border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Patient Name</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b hover:bg-gray-100">
                <td className="p-4">{appointment.patientName}</td>
                <td className="p-4">{appointment.service}</td>
                <td className="p-4">{appointment.date}</td>
                <td className="p-4">{appointment.time}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-white text-xs ${
                    appointment.status === "Confirmed" ? "bg-green-500" :
                    appointment.status === "Pending" ? "bg-yellow-500" :
                    "bg-gray-500"
                  }`}>
                    {appointment.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-700 text-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
    </div>
  )
}

export default AllAppointments