import React from "react";
import { Link } from "react-router";
const Home = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-50 to-blue-200">
      <nav className="flex justify-between align-center py-5 bg-blue-200 text-white font-semibold font-serif rounded-4xl shadow-blue-300">
        {" "}
        <span className="flex m-[15px]">
          <strong>HEALTHLINE</strong>{" "}
        </span>{" "}
        <ul className="flex space-x-5 m-[15px]">
          {" "}
          <li>
            <Link to="/">Home</Link>{" "}
          </li>{" "}
          <li>
            <Link to="/about">About</Link>{" "}
          </li>{" "}
          <li>
            <Link to="/blog">Blogs</Link>{" "}
          </li>{" "}
          <li>
            <Link to="/contact">Contacts</Link>{" "}
          </li>{" "}
        </ul>{" "}
        <button>
          <Link
            to="sign-up"
            className="px-10 py-4 text-blue-700 font-medium border border-blue-500 rounded-2xl hover:bg-blue-100 transition duration-300"
          >
            Sign up
          </Link>
        </button>
        <button className="bg-gray-700py-4 px-10 rounded-2xl">
          {" "}
          <Link
            to="log-in"
            className="bg-blue-700 py-4 px-10 rounded-2xl font-medium"
          >
            Sign-in{" "}
          </Link>{" "}
        </button>{" "}
      </nav>
      <div className="grid grid-cols-2 m-[30px]">
        <div>
          <h1 className="text-[55px] text-blue-600 font-serif font-semibold tracking-tight justify-center text-center">
            Your Partner in Health and Wellness
          </h1>
          <h3 className="text-[25px] font-semibold font-serif">
            We are committed to providing you with the best medical and
            healthcare services to help you live healthier and happier.
          </h3>
        </div>
        <div>
          <h1>Image here</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 m-[30px]">
        <div>
          <h1>Image goes here</h1>
        </div>
        <div>
          <h1 className="text-[30px] text-blue-400 font-serif mb-[15px] font-semibold">
            About Us
          </h1>
          <h1 className="text-[40px] text-blue-500 font-serif font-semibold mb-[15px]">
            Healthlink is a team of experienced medical professionals
          </h1>
          <h3 className="text-[20px] font-serif font-semibold mb-[15px]">
            We are dedicated to providing top-quality healthcare services. We
            believe in a holistic approach to healthcare that focuses on
            treating the whole person, not just the illness or symptoms.
          </h3>
        </div>
      </div>

      <div className="felx flex-row text-center text-[40px] text-blue-500 font-semibold font-serif m-[15px]">
        <h1>Our Values</h1>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition ">
          <h1 className="text-xl font-semibold mb-2 text-blue-900">
            Compassion
          </h1>
          <h3 className=" text-[15px]">
            We understand that seeking medical care can be a stressful and
            emotional experience, and we strive to create a welcoming and
            supportive environment that puts our patients at ease and every one.
          </h3>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <h1 className="text-xl font-semibold mb-2 text-blue-900">
            Excellence
          </h1>
          <h3 className="text-[15px]">
            \We are committed to providing excellent medical care and services
            to our patients. We believe in continuously improving our skills,
            knowledge, and resources to ensure that we deliver the highest
            quality care possible
          </h3>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <h1 className="text-xl font-semibold mb-2 text-blue-900">
            Integrity
          </h1>
          <h3 className="text-[15px]">
            We believe in practicing medicine with integrity and honesty. We are
            transparent in our communication and decision-making processes, and
            we always put our patient's interests first & provide best solution.
          </h3>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <h1 className="text-xl font-semibold mb-2 text-blue-900">Respect</h1>
          <h3 className="text-[15px]">
            We treat all individuals with respect and dignity, regardless of
            their background, beliefs, or circumstances. We believe that every
            person deserves to be treated with compassion and kindness.
          </h3>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <h1 className="text-xl font-semibold mb-2 text-blue-900">Teamwork</h1>
          <h3 className="text-[15px]">
            We believe in working collaboratively with our team members and
            other healthcare professionals to provide comprehensive and
            effective care to our patients.
          </h3>
        </div>
      </section>

      <div>
        <h1 className="felx flex-row text-center text-[30px] text-blue-500 font-semibold font-serif m-[15px]">
          How it Works
        </h1>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* <!-- Card 1 --> */}
        <div className="bg-white w-full rounded-xl shadow-lg p-6 fade-up delay-1 grid grid-cols-2">
          <div>
            <h2 className="text-xl font-bold mb-2">Log In</h2>
            <p className="text-gray-600">Log In to our Services</p>
          </div>
          <div>
            <h1 className="text-[55px] font-semibold ml-[450px]">01</h1>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-blue-50 w-full rounded-xl shadow-lg p-6 fade-up delay-2 grid grid-cols-2">
          <div>
            <h1 className="text-[55px] font-semibold ">02</h1>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Book Your Appointments</h2>
            <p className="text-gray-600">
              Get the opportunity to book an appointment to talk to medical
              professionals
            </p>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-white w-full rounded-xl shadow-lg p-6 fade-up delay-1 grid grid-cols-2">
          <div>
            <h2 className="text-xl font-bold mb-2">Consultation</h2>
            <p className="text-gray-600">
              Get the opportunity to discuss medical issues with professionals
            </p>
          </div>
          <div>
            <h1 className="text-[55px] font-semibold ml-[450px]">03</h1>
          </div>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="bg-blue-50 w-full rounded-xl shadow-lg p-6 fade-up delay-2 grid grid-cols-2">
          <div>
            <h1 className="text-[55px] font-semibold ">04</h1>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Follow up Care</h2>
            <p className="text-gray-600">
              We will schedule any necessary follow-up appointments, tests, or
              procedures to ensure that you receive the best possible care.
            </p>
          </div>
        </div>

        <div className="bg-white w-full rounded-xl shadow-lg p-6 fade-up delay-1 grid grid-cols-2">
          <div>
            <h2 className="text-xl font-bold mb-2">Insurance and Billing</h2>
            <p className="text-gray-600">
              We accept most major insurance plans and our billing department
              will work with you to ensure that you understand your coverage and
              any out-of-pocket expenses.
            </p>
          </div>
          <div>
            <h1 className="text-[55px] font-semibold ml-[450px]">05</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <h1>Image goes here</h1>
        </div>
        <div>
          <h1 className="text-[40px] text-blue-600 font-serif font-semibold tracking-tight justify-center text-center">
            Don't Let Your Health Take a Backseat!
          </h1>
          <h3 className="text-[20px] font-serif font-semibold text-center justify-center ">
            Schedule an appointment with one of our experienced medical
            professionals today!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
