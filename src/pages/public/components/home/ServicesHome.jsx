import React from "react";
import { Link } from "react-router";

import {
  FaStethoscope,
  FaUserMd,
  FaLeaf,
  FaBrain,
  FaRunning,
  FaPills,
  FaVial,
  FaSpa,
  FaAmbulance,
} from "react-icons/fa";

const specialties = [
  {
    title: "General Medicine",
    description:
      "Consult with certified general practitioners for everyday health concerns and prescriptions.",
    icon: FaStethoscope,
  },
  {
    title: "Dermatology",
    description:
      "Treat acne, eczema, rashes, and other skin conditions with expert dermatological care.",
    icon: FaUserMd,
  },
  {
    title: "Nutrition & Dietetics",
    description:
      "Get custom meal plans and dietary advice from licensed nutritionists and dieticians.",
    icon: FaLeaf,
  },
  {
    title: "Mental Health",
    description:
      "Talk privately to therapists and counselors for emotional support and mental clarity.",
    icon: FaBrain,
  },
  {
    title: "Physiotherapy",
    description:
      "Recover from injuries and manage pain through guided physical therapy sessions.",
    icon: FaRunning,
  },
  {
    title: "Pharmacy Services",
    description:
      "Get prescriptions filled and consult pharmacists about safe medication use.",
    icon: FaPills,
  },
  {
    title: "Lab Testing",
    description:
      "Book home sample collection and receive detailed lab reports online.",
    icon: FaVial,
  },
  {
    title: "Emergency Care",
    description:
      "Get urgent help fast with on-demand ambulance and emergency response options.",
    icon: FaAmbulance,
  },
];

const ServicesHome = () => {
  return (
    <section className="bg-secondary-body py-12 px-4 md:px-8 flex flex-col sm:flex-row ">
      <div className=" py-4  text-main-font text-center sm:w-[50%] sm:text-left sm:sticky sm:top-24 self-start">
        <h2 className="text-xl font-semibold text-main-body mb-2 font-secondary-font">
          Your Health, Our Priority
        </h2>
        <p className="text-4xl lg:text-5xl sm:text-3xl font-semibold text-main-font mb-4 font-secondary-font ">
          Explore HealthLink’s Trusted Specialist Services
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          At HealthLink, we bring healthcare to your fingertips. From certified
          doctors and therapists to nutritionists and lab technicians, our
          platform connects you to the right experts—securely, conveniently, and
          from anywhere. Whether it’s virtual consultations, home lab testing,
          or emergency care, we’re here to ensure quality medical support
          without the wait.
        </p>

        <Link
          to="/signup/patient"
          className="inline-block mt-4 bg-primary-body text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-white hover:text-main-font transition duration-200"
        >
          Find a Specialist
        </Link>
      </div>
      <div className="flex flex-col  gap-6">
        {specialties.map(({ title, description, icon: Icon }, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 sm:gap-4 sm:flex-row bg-white m-auto max-w-[500px] p-4  rounded-xl shadow-2xl group hover:bg-primary-body transition duration-400 cursor-pointer"
          >
            <div className="group group-hover:text-main-body group-hover:bg-white bg-main-body p-4 w-fit  rounded-full text-7xl text-primary-body md:mx-auto mb-3 transition duration-400">
              <Icon />
            </div>
            <div>
              <h4 className="group-hover:text-white text-2xl font-bold text-main-font font-secondary-font transition duration-400">
                {title}
              </h4>
              <p className="group-hover:text-white/80 text-sm text-main-font/80 mt-3 transition duration-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHome;
