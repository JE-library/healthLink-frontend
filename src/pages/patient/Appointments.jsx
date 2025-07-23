import { FaEye, FaComments, FaPhone, FaVideo } from "react-icons/fa";

const appointments = [
  {
    id: 1,
    patientName: "John Doe",
    date: "2025-07-08",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    date: "2025-07-09",
    time: "2:30 PM",
    status: "Completed",
  },

  {
    id: 1,
    patientName: "John Doe",
    date: "2025-07-08",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    date: "2025-07-08",
    time: "11:00 AM",
    status: "Scheduled",
  },
  {
    id: 3,
    patientName: "Michael Johnson",
    date: "2025-07-09",
    time: "09:30 AM",
    status: "Completed",
  },
  {
    id: 4,
    patientName: "Emily Davis",
    date: "2025-07-09",
    time: "01:00 PM",
    status: "Scheduled",
  },
  {
    id: 5,
    patientName: "David Wilson",
    date: "2025-07-10",
    time: "02:15 PM",
    status: "Cancelled",
  },
  {
    id: 6,
    patientName: "Sarah Brown",
    date: "2025-07-10",
    time: "03:00 PM",
    status: "Scheduled",
  },
  {
    id: 7,
    patientName: "Chris Martin",
    date: "2025-07-11",
    time: "10:45 AM",
    status: "Scheduled",
  },
  {
    id: 8,
    patientName: "Olivia Taylor",
    date: "2025-07-11",
    time: "11:30 AM",
    status: "Completed",
  },
  {
    id: 9,
    patientName: "Daniel Anderson",
    date: "2025-07-12",
    time: "01:45 PM",
    status: "Scheduled",
  },
  {
    id: 10,
    patientName: "Sophia Thomas",
    date: "2025-07-12",
    time: "02:30 PM",
    status: "Cancelled",
  },
  {
    id: 11,
    patientName: "James Jackson",
    date: "2025-07-13",
    time: "09:00 AM",
    status: "Scheduled",
  },
];


const Appointments = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Appointment List</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200 rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-t">
                <td className="p-3">{appt.patientName}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.time}</td>
                <td className="p-3">{appt.status}</td>
                <td className="p-3 flex gap-2 flex-wrap">
                  <button
                    className=" bg-pink-500 text-white px-2 py-1 rounded text-sm hover:bg-pink-600"
                   
                  //  "bg-secondary-body text-red-600 px-2 py-1 rounded text-sm hover:bg-blue-600
                    onClick={() =>
                      (window.location.href = `/provider/appointments/${appt.id}`)
                    }
                  >
                    <FaEye className="inline mr-1" /> View
                  </button>
                  <button
                    className="bg-purple-500 text-white px-2 py-1 rounded text-sm hover:bg-purple-600"
                    
                    // "bg-main-body text-red-600 px-2 py-1 rounded text-sm hover:to-blue-800
                    onClick={() =>
                      (window.location.href = `/provider/chat/${appt.id}`)
                    }
                  >
                    <FaComments className="inline mr-1" /> Chat
                  </button>
                  <button
                    className="bg-pink-500 text-white px-2 py-1 rounded text-sm hover:bg-pink-600"
                    // bg-tertiary-body text-red-600 px-2 py-1 rounded text-sm hover:bg-blue-800
                    onClick={() => alert("Start audio call...")}
                  >
                    <FaPhone className="inline mr-1" /> Audio
                  </button>
                  <button
                    className= "bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
                    // className="bg-primary-body text-red-600 px-2 py-1 rounded text-sm hover:bg-blue-950"
                    onClick={() => alert("Start video call...")}

                  >
                    <FaVideo className="inline mr-1" /> Video
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
