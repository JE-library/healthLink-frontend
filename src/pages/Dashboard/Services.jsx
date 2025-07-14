import { FaUserMd, FaSpa, FaFlask, FaStethoscope } from "react-icons/fa";

const Services = () => {
  const services = [
    { name: 'Doctor Consultation', icon: <FaUserMd />, description: 'Consult certified doctors anytime, anywhere.' },
    { name: 'Dermatologist', icon: <FaUserMd />, description: 'Get expert skin care advice and personalized dermatology consultations.' },
    { name: 'Physiotherapy', icon: <FaSpa />, description: 'Book sessions with expert physiotherapists.' },
    { name: 'Lab Tests at Home', icon: <FaFlask />, description: 'Schedule home sample collection easily.' },
    { name: 'Psychologist', icon: <FaStethoscope />, description: 'Access therapy and mental health support.' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
