import React from "react";
import heroImage from "../../../../assets/public/Home/hero-image.jpg";
import { FaCheckCircle, FaRegAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router";
import { FaUserDoctor } from "react-icons/fa6";
import { MdBookOnline } from "react-icons/md";

const HomeHero = () => {
  const cards = [
    {
      title: "See a Doctor",
      description:
        "Connect instantly with licensed doctors through secure video or chat consultations.",
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
    <section className="h-auto md:min-h-screen bg-main-body px-4 sm:px-12 ">
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className="h-[100%] rounded-2xl p-4 relative bg-cover"
      >
        <div className="absolute bg-gradient-to-r from-black/30 to-transparent top-0 left-0 h-[100%] w-[100%]  rounded-2xl z-0 "></div>
        <div
          className="relative  lg:w-[50%] md:w-[80%] flex flex-col items-center md:items-start gap-4 z-10
        6+
        "
        >
          <h2 className="font-secondary-font text-5xl  sm:text-7xl font-black text-white text-shadow-lg text-center md:text-left">
            Care <br /> Without <br /> the Wait
          </h2>
          <p className="text-white font-bold mt-3 text-center md:text-left">
            Instant access to doctors, therapists, and wellness experts—anytime,
            anywhere.
          </p>
          <p className="text-sm text-white/80 text-center md:text-left">
            Say goodbye to long queues and waiting rooms. With HealthLink, you
            can book virtual consultations, request lab tests at home, or even
            call an ambulance—all from your phone.
          </p>
          <button
            onClick={() => navigate("/signup/patient")}
            className="shadow-2xl bg-white max-w-[200px] py-3 px-4 rounded-4xl text-main-font cursor-pointer hover:bg-primary-body font-bold transition duration-300 hover:text-white"
          >
            Talk to a Doctor
          </button>
          <div className="flex justify-between gap-4 text-sm font-bold text-white">
            <p className="flex items-center gap-1">
              <FaCheckCircle />
              Available on Web & Mobile
            </p>
            <p className="flex items-center gap-1">
              <FaCheckCircle />
              Secure & Private{" "}
            </p>
            <p className="flex items-center gap-1">
              <FaCheckCircle />
              Trusted Professionals
            </p>
          </div>
        </div>
        <div>hkd</div>
      </div>
      <div className="flex md:flex-nowrap justify-between flex-wrap   w-full p-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-[400px]  group p-5 bg-tertiary-body/30 rounded-2xl cursor-pointer hover:bg-white transition duration-400 flex gap-2 hover:text-main-font hover:shadow-2xl"
          >
            <div className="text-5xl text-white group-hover:text-main-body">
              {card.icon}
            </div>
            <div className="flex flex-col gap-1 ">
              <h3 className="font-bold text-3xl text-white group-hover:text-main-font">
                {card.title}
              </h3>
              <p className="font-medium text-white group-hover:text-main-font">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
