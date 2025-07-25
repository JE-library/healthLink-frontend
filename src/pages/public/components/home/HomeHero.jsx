import React from "react";
import heroImage from "../../../../assets/public/Home/hero-image.jpg";
import { FaCheckCircle, FaRegAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router";
import { FaUserDoctor } from "react-icons/fa6";
import { MdBookOnline } from "react-icons/md";

const HomeHero = () => {
  const cards = [
    {
      title: "See a Specialist",
      description:
        "Connect instantly with licensed specialists through secure video or chat consultations.",
      icon: <FaUserDoctor />,
    },
    {
      title: "Book an Appointment",
      description:
        "Skip the waiting room—schedule in-person or virtual consultations in just a few taps.",
      icon: <FaRegAddressBook />,
    },
    {
      title: "Online Consultation",
      description:
        "Chat with doctors, nutritionists, or therapists from the comfort of your home.",
      icon: <MdBookOnline />,
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="h-auto md:min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        className="p-4 relative bg-cover bg-center flex md:px-12"
      >
        <div className="absolute   top-0 left-0 h-full w-full z-0"></div>
        <div className=" bg-gradient-to-t from-white via-white to-transparent relative lg:w-[50%] md:w-[80%] flex flex-col items-center md:items-start gap-4 z-10 py-12 px-8">
          <h2 className="font-secondary-font text-5xl sm:text-7xl font-bold text-primary-body drop-shadow-md text-center md:text-left">
            Care Without <br /> the Wait
          </h2>
          <p className="text-lg text-primary-body/90 text-center md:text-left max-w-xl">
            Say goodbye to long queues and waiting rooms. With HealthLink, you
            can book virtual consultations, request lab tests at home, or even
            call an ambulance—all from your phone.
          </p>
          <button
            onClick={() => navigate("/signup/patient")}
            className="bg-primary-body text-white font-bold py-3 px-5 rounded-full hover:bg-white hover:text-primary-body transition duration-300 shadow-lg cursor-pointer hover:border-main-body border"
          >
            Talk to a Specialist
          </button>
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 text-sm font-bold text-primary-body mt-4">
            <p className="flex items-center gap-1">
              <FaCheckCircle />
              Available on Web & Mobile
            </p>
            <p className="flex items-center gap-1">
              <FaCheckCircle />
              Secure & Private
            </p>
            <p className="flex items-center gap-1">
              <FaCheckCircle />
              Trusted Professionals
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex md:flex-nowrap justify-evenly flex-wrap p-6 gap-6 bg-primary-body">
        {cards.map((card, index) => (
          <div
            onClick={() => {
              navigate("/signup/patient");
            }}
            key={index}
            className="max-w-[400px] group p-6 bg-white/90  text-primary-body rounded-2xl cursor-pointer hover:bg-main-body/80 transition duration-500 hover:text-white shadow-lg"
          >
            <div className="text-5xl mb-4  group-hover:text-white transition duration-500">
              {card.icon}
            </div>
            <h3 className="font-secondary-font font-bold text-2xl mb-2 group-hover:text-white transition">
              {card.title}
            </h3>
            <p className="text-sm font-medium group-hover:text-white transition">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
