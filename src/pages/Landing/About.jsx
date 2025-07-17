import React from "react";
import PagesLayout from "../../layouts/PagesLayout";

const About = () => {
  return (
    <PagesLayout>
      <div className="bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="grid grid-cols-2">
        <div>
          <h1>Image does here</h1>
        </div>
        <div>
          <h1 className="text-[55px] font-semibold font-serif text-center justify-center text-blue-500 ">
            Welcome to HealthLink
          </h1>
          <h3 className="text-[25px] font-semibold font-serif mb-[25px]">
            Your Partner in Health and Wellness
          </h3>
        </div>
      </div>

      <div className="flex flex-column items-center justify-center">
        <h1 className="text-[15px] font-serif font-semibold">
          Services
        </h1>
      </div>
      <div className="flex flex-column items-center justify-center">
        <h3 className="text-[30px] font-serif font-semibold text-blue-500 ">
          Our Best Services
        </h3>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Service Card --> */}
          <div className="bg-white p-6 rounded-2xl shadow-md relative">
            <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
              📅
            </div>
            <h3 className="font-semibold text-lg">Laboratory Services</h3>
            <p className="mt-2 text-sm">
              Blood tests, imaging studies, and other tests to diagnose health
              conditions
            </p>
            <div className="absolute bottom-0 right-0 m-4">
              <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                →
              </div>
            </div>
          </div>

          {/* <!-- Repeat this card with different content --> */}
          <div className="bg-white p-6 rounded-2xl shadow-md relative">
            <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
              📅
            </div>
            <h3 className="font-semibold text-lg">Rehabilitation services</h3>
            <p className="mt-2 text-sm">
              Physical therapy, occupational therapy, and other services to help
              patients recover from injuries
            </p>
            <div className="absolute bottom-0 right-0 m-4">
              <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                →
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md relative">
            <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
              📅
            </div>
            <h3 className="font-semibold text-lg">Ambulance Services</h3>
            <p className="mt-2 text-sm">
              Fast Ambulace service resopnses incase of Emergencies
            </p>
            <div className="absolute bottom-0 right-0 m-4">
              <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                →
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md relative">
            <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
              📅
            </div>
            <h3 className="font-semibold text-lg">
              Treatment for acute and chronic conditions
            </h3>
            <p className="mt-2 text-sm">
              Medication management, disease management, and other treatments to
              improve health outcomes
            </p>
            <div className="absolute bottom-0 right-0 m-4">
              <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                →
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md relative">
            <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
              📅
            </div>
            <h3 className="font-semibold text-lg">Mental health services</h3>
            <p className="mt-2 text-sm">
              Counseling, therapy, and other services to help patients manage
              mental health conditions
            </p>
            <div className="absolute bottom-0 right-0 m-4">
              <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                →
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10 items-center">
        {/* <!-- Left Image --> */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md">
          {/* <img src="https://via.placeholder.com/600x400?text=Medical+Team" alt="Doctors and Patients" className="w-full h-full object-cover"> */}
        </div>

        {/* <!-- Right Content --> */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* <!-- Card 1 --> */}
            <div>
              <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                💡
              </div>
              <h3 className="font-semibold text-[25px]">
                Experienced Medical Professionals
              </h3>
              <p className="text-[18px] mt-1">
                Our team includes experienced doctors, nurses, and other
                healthcare professionals dedicated to excellent care.
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div>
              <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                🏥
              </div>
              <h3 className="font-semibold text-[25px]">Comprehensive Services</h3>
              <p className="text-[18px] mt-1">
                A wide range of healthcare services from preventive to complex
                treatments.
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div>
              <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                🧑‍⚕️
              </div>
              <h3 className="font-semibold text-[25px]">Patient-centered</h3>
              <p className="text-[18px] mt-1">
                We put patients first with personalized attention and
                compassionate care.
              </p>
            </div>

            {/* <!-- Card 4 --> */}
            <div>
              <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                🧬
              </div>
              <h3 className="font-semibold text-[25px]">
                State-of-the-art Facilities
              </h3>
              <p className="text-[18px] mt-1">
                Our clinics and hospitals use the latest technology and
                equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-blue-600 font-semibold uppercase mb-2">Meet Our</p>
        <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* <!-- Person 1 --> */}
          <div>
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden mb-4">
              {/* <img src="https://via.placeholder.com/150x150?text=Dr+1" alt="Dr. James Lee" className="object-cover w-full h-full"> */}
            </div>
            <h3 className="text-[25px] font-bold">Josephine Asiedu</h3>
            <p className="text-[20px] font-medium text-gray-700 mt-1">
              Frontend Developer
            </p>
            
          </div>

          {/* <!-- Person 2 --> */}
          <div>
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden mb-4">
              {/* <img src="https://via.placeholder.com/150x150?text=Dr+2" alt="Dr. John Smith" className="object-cover w-full h-full"> */}
            </div>
            <h3 className="text-[25px] font-bold">Efua Amissah-Mensah</h3>
            <p className="text-[20px] font-medium text-gray-700 mt-1">
              Frontend Developer
            </p>
            
          </div>

          {/* <!-- Person 3 --> */}
          <div>
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden mb-4">
              {/* <img src="https://via.placeholder.com/150x150?text=Dr+3" alt="Dr. Susan Bones" className="object-cover w-full h-full"> */}
            </div>
            <h3 className="text-[25px] font-bold">Jacqueline Osei-Bonsu</h3>
            <p className="text-[20px] font-medium text-gray-700 mt-1">
              Backend Developer
            </p>
            
          </div>
          <div>
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden mb-4">
              {/* <img src="https://via.placeholder.com/150x150?text=Dr+3" alt="Dr. Susan Bones" className="object-cover w-full h-full"> */}
            </div>
            <h3 className="text-[25px] font-bold">Ebenezer Flintwood Brace</h3>
            <p className="text-[20px] font-medium text-gray-700 mt-1">
              Backend Developer
            </p>
            
          </div>
        </div>
      </section>
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
    </PagesLayout>
  );
};

export default About;
