import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PublicLayout from "../../layouts/PublicLayout";
import pictureImg1 from "../../assets/public/about/about-image2.jpg";
import bgImage from "../../assets/public/about/about-image1.jpg";
import pictureImg2 from "../../assets/public/about/about-image3.jpg";

const services = [
  {
    title: "Laboratory Services",
    description:
      "Blood tests, imaging studies, and diagnostic procedures to detect health conditions.",
    icon: "🧪",
  },
  {
    title: "Rehabilitation Services",
    description:
      "Physical and occupational therapy to support recovery after injuries or surgeries.",
    icon: "🦾",
  },
  {
    title: "Ambulance Services",
    description:
      "Fast-response emergency transportation for critical medical needs.",
    icon: "🚑",
  },
  {
    title: "Acute & Chronic Care",
    description:
      "Medication management and treatment plans for ongoing health conditions.",
    icon: "💊",
  },
  {
    title: "Mental Health Services",
    description:
      "Counseling and therapy to support mental and emotional well-being.",
    icon: "🧠",
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <PublicLayout>
      <div className="bg-gradient-to-r from-blue-200 to-transparent">
        <section
          className="relative h-[50vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-500/40"></div>

          <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
            <div className="text-center max-w-3xl text-white space-y-6">
              <h1 className="text-4xl sm:text-6xl font-primary-font font-bold text-blue-100 drop-shadow-lg">
                Welcome to HealthLink
              </h1>
              <p className="text-lg sm:text-2xl font-secondary-font font-medium text-white/90">
                Your Partner in Health and Wellness
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-blue-600 font-secondary-font text-lg font-semibold tracking-wide">
                Services
              </p>
              <h2 className="text-4xl sm:text-5xl font-primary-font font-bold text-primary-body">
                Our Best Services
              </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 relative hover:shadow-lg transition"
                >
                  <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-primary-font font-semibold text-primary-body mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700 font-secondary-font">
                    {service.description}
                  </p>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-blue-100 w-8 h-8 rounded-lg flex items-center justify-center text-blue-600 text-xl hover:bg-blue-200 transition">
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className=" mx-auto px-4 sm:px-8 py-16 bg-gradient-to-r from-blue-50 to-blue-200">
          {/* --- WHY CHOOSE US --- */}
          <section className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={pictureImg1}
                alt="Why Choose Us"
                className="w-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl sm:text-5xl font-semibold text-primary-body font-primary-font mb-8">
                Why Choose Us
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: "💡",
                    title: "Experienced Medical Professionals",
                    desc: "Our team includes experienced doctors and healthcare providers dedicated to exceptional care.",
                  },
                  {
                    icon: "🏥",
                    title: "Comprehensive Services",
                    desc: "A wide range of healthcare offerings from preventive care to advanced treatments.",
                  },
                  {
                    icon: "🧑‍⚕️",
                    title: "Patient-Centered",
                    desc: "We prioritize personalized attention and compassionate care tailored to you.",
                  },
                  {
                    icon: "🧬",
                    title: "Seamless Consultations",
                    desc: "Easily schedule virtual or in-person consultations at your convenience.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3 text-xl">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold font-primary-font text-main-font">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-700 font-secondary-font">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- MEET THE TEAM --- */}
          <section className="text-center mt-20">
            <h2 className="text-4xl sm:text-5xl font-semibold text-primary-body font-primary-font mb-12">
              Meet the Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {[
                {
                  name: "Josephine Asiedu",
                  role: "Frontend Developer",
                },
                {
                  name: "Efua Amissah-Mensah",
                  role: "Frontend Developer",
                },
                {
                  name: "Jacqueline Osei-Bonsu",
                  role: "Backend Developer",
                },
                {
                  name: "Ebenezer Flintwood Brace",
                  role: "Backend Developer",
                },
              ].map((person, i) => (
                <div key={i}>
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden mb-4">
                    {/* Placeholder for profile image */}
                    {/* <img src="..." alt={person.name} className="w-full h-full object-cover" /> */}
                  </div>
                  <h3 className="text-lg font-bold font-primary-font text-main-font">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1">{person.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <section className="bg-gray-100 py-16 px-4 sm:px-6">
          {/* FAQ Section */}
          <div className="text-center mb-12">
            <h1 className="text-lg font-primary-font font-semibold text-blue-700">
              People's
            </h1>
            <h2 className="text-4xl font-semibold font-primary-font text-blue-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto mb-16">
            <div className="space-y-4">
              {[
                {
                  question: "What services does HealthLink offer?",
                  answer:
                    "We offer virtual consultations, urgent care, mental health services, and more.",
                },
                {
                  question: "Do you accept insurance?",
                  answer: "Yes, we accept most major health insurance plans.",
                },
                {
                  question: "How difficult would it be to book an appointment?",
                  answer:
                    "Your appointment booking and consultations will be seamless, bringing healthcare to your home.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border border-blue-200 rounded-xl p-4 transition-all cursor-pointer ${
                    openIndex === i ? "bg-blue-50" : "bg-white"
                  }`}
                  onClick={() => toggle(i)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-blue-900">
                      {item.question}
                    </h3>
                    {openIndex === i ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                  {openIndex === i && (
                    <p className="mt-2 text-sm text-gray-700">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4 rounded-2xl">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-semibold text-blue-900 font-primary-font mb-12">
                What Our Patients Say About Us
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {[
                  {
                    name: "Samanta McGill",
                    text: `“The healthcare professionals were attentive, always checking in on me, and the doctors were knowledgeable and patient. It's rare to find an app that processes such great qualities.”`,
                    image:
                      "https://media.gettyimages.com/id/1748173351/video/face-business-and-happy-black-woman-in-corporate-workplace-office-and-company-portrait-smile.jpg?s=640x640&k=20&c=kaW167IRjpuCO8Mw2L8b9bWoK-tDgqjzTtihf73xqvA=",
                  },
                  {
                    name: "Vanessa Smith",
                    text: `"Booking an appointment was easy, and I was pleasantly surprised by how quickly I was able to speak to a health professional. Unlike other clinics, this app allows immediate healthcare access."`,
                    image:
                      "https://t3.ftcdn.net/jpg/06/21/27/04/360_F_621270406_n7Vx7a5RuRJVmaI1AEltnsfA2SjkOrrr.jpg",
                  },
                ].map((testimonial, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-3xl text-cyan-400 mb-4">❝</div>
                    <p className="text-base font-medium text-gray-700 mb-4">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm text-gray-500">App User</p>
                        <p className="text-sm font-semibold">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-20 max-w-7xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={pictureImg2}
                alt="Doctor Consult"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl text-blue-900 font-primary-font font-semibold mb-4">
                Don't Let Your Health Take a Backseat!
              </h1>
              <h3 className="text-lg font-medium text-gray-700">
                Schedule an appointment with one of our experienced medical
                professionals today!
              </h3>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default About;
