import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PublicLayout from "../../layouts/PublicLayout";
import pictureImg1 from "../../assets/public/about/about-image2.jpg";
import bgImage from "../../assets/public/about/about-image1.jpg";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <PublicLayout>
      <div className="bg-gradient-to-r from-blue-50 to-blue-200">
        <section
          className="bg-cover bg-center bg-no-repeat h-screen"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="bg-black/50 h-full items-center justify-center text-white px-6 grid grid-cols-2">
            <div className="mb-[50px]">
              <h1 className="text-[55px] font-semibold font-primary-font text-blue-500 ">
                Welcome to HealthLink
              </h1>
              <h3 className="text-[25px] font-semibold font-secondary-font text-center ">
                Your Partner in Health and Wellness
              </h3>
            </div>
            <div></div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-6">
              <div className="flex flex-column  text-[20px] font-secondary-font text-main-body">
                <h1 className="text-[20px] font-serif font-semibold ml-[20px]">
                  Services
                </h1>
              </div>
              <div className="flex flex-column ">
                <h3 className="text-[55px] font-semibold text-primary-body font-primary-font ">
                  Our Best Services
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-secondary-body rounded-xl shadow-md p-6">
              <div className="bg-white p-6 rounded-2xl shadow-md relative">
                <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  📅
                </div>
                <h3 className="font-semibold text-[30px] font-primary-font text-primary-body">
                  Laboratory Services
                </h3>
                <p className="mt-2 text-[20px] font-secondary-font text-main-font">
                  Blood tests, imaging studies, and other tests to diagnose
                  health conditions
                </p>
                <div className="absolute bottom-0 right-0 m-4">
                  <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                    →
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-secondary-body rounded-xl shadow-md p-6">
              <div className="bg-white p-6 rounded-2xl shadow-md relative">
                <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  📅
                </div>
                <h3 className="font-semibold text-[30px] font-primary-font text-primary-body">
                  Rehabilitation services
                </h3>
                <p className="mt-2 text-[20px] font-secondary-font text-main-font">
                  Physical therapy, occupational therapy, and other services to
                  help patients recover from injuries
                </p>
                <div className="absolute bottom-0 right-0 m-4">
                  <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                    →
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-secondary-body rounded-xl shadow-md p-6">
              <div className="bg-white p-6 rounded-2xl shadow-md relative">
                <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  📅
                </div>
                <h3 className="font-semibold text-[30px] font-primary-font text-primary-body">
                  Ambulance Services
                </h3>
                <p className="mt-2 text-[20px] font-secondary-font text-main-font">
                  Fast Ambulace service resopnses incase of Emergencies
                </p>
                <div className="absolute bottom-0 right-0 m-4">
                  <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                    →
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-secondary-body rounded-xl shadow-md p-6">
              <div className="bg-white p-6 rounded-2xl shadow-md relative">
                <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  📅
                </div>
                <h3 className="font-semibold text-[30px] font-primary-font text-primary-body">
                  Treatment for acute and chronic conditions
                </h3>
                <p className="mt-2 text-[20px] font-secondary-font text-main-font">
                  Medication management, disease management, and other
                  treatments to improve health outcomes
                </p>
                <div className="absolute bottom-0 right-0 m-4">
                  <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                    →
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-secondary-body rounded-xl shadow-md p-6">
              <div className="bg-white p-6 rounded-2xl shadow-md relative">
                <div className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  📅
                </div>
                <h3 className="font-semibold text-[30px] font-primary-font text-primary-body">
                  Mental health services
                </h3>
                <p className="mt-2 text-[20px] font-secondary-font text-main-font">
                  Counseling, therapy, and other services to help patients
                  manage mental health conditions
                </p>
                <div className="absolute bottom-0 right-0 m-4">
                  <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-lg text-blue-600 text-xl">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-8 py-12">
          <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10 items-center">
            {/* <!-- Left Image --> */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md">
              <img src={pictureImg1} alt="" />
            </div>

            {/* <!-- Right Content --> */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-[55px] font-semibold text-primary-body font-primary-font">
                Why Choose Us
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* <!-- Card 1 --> */}
                <div>
                  <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                    💡
                  </div>
                  <h3 className="font-semibold text-[30px] font-primary-font text-main-font">
                    Experienced Medical Professionals
                  </h3>
                  <p className="mt-2 text-[20px] font-secondary-font text-main-font">
                    Our team includes experienced doctors, nurses, and other
                    healthcare professionals dedicated to excellent care.
                  </p>
                </div>

                {/* <!-- Card 2 --> */}
                <div>
                  <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                    🏥
                  </div>
                  <h3 className="font-semibold text-[30px] font-primary-font text-main-font">
                    Comprehensive Services
                  </h3>
                  <p className="mt-2 text-[20px] font-secondary-font text-main-font">
                    A wide range of healthcare services from preventive to
                    complex treatments.
                  </p>
                </div>

                {/* <!-- Card 3 --> */}
                <div>
                  <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                    🧑‍⚕️
                  </div>
                  <h3 className="font-semibold text-[30px] font-primary-font text-main-font">
                    Patient-centered
                  </h3>
                  <p className="mt-2 text-[20px] font-secondary-font text-main-font">
                    We put patients first with personalized attention and
                    compassionate care.
                  </p>
                </div>

                {/* <!-- Card 4 --> */}
                <div>
                  <div className="bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                    🧬
                  </div>
                  <h3 className="font-semibold text-[30px] font-primary-font text-main-font">
                    State-of-the-art Facilities
                  </h3>
                  <p className="mt-2 text-[20px] font-secondary-font text-main-font">
                    Our clinics and hospitals use the latest technology and
                    equipment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-[55px] font-semibold text-primary-body font-primary-font mb-[40px] ">
              Meet the Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* <!-- Person 1 --> */}
              <div>
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden mb-4">
                  {/* <img src="https://via.placeholder.com/150x150?text=Dr+1" alt="Dr. James Lee" className="object-cover w-full h-full"> */}
                </div>
                <h3 className="text-[25px] font-bold font-primary-font text-main-font">
                  Josephine Asiedu
                </h3>
                <p className="text-[20px] font-medium text-gray-700 mt-1">
                  Frontend Developer
                </p>
              </div>

              {/* <!-- Person 2 --> */}
              <div>
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden mb-4">
                  {/* <img src="https://via.placeholder.com/150x150?text=Dr+2" alt="Dr. John Smith" className="object-cover w-full h-full"> */}
                </div>
                <h3 className="text-[25px] font-bold font-primary-font text-main-font">
                  Efua Amissah-Mensah
                </h3>
                <p className="text-[20px] font-medium font-primary-font text-gray-700 mt-1">
                  Frontend Developer
                </p>
              </div>

              {/* <!-- Person 3 --> */}
              <div>
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden mb-4">
                  {/* <img src="https://via.placeholder.com/150x150?text=Dr+3" alt="Dr. Susan Bones" className="object-cover w-full h-full"> */}
                </div>
                <h3 className="text-[25px] font-bold font-primary-font text-main-font">
                  Jacqueline Osei-Bonsu
                </h3>
                <p className="text-[20px] font-medium text-gray-700 mt-1">
                  Backend Developer
                </p>
              </div>
              <div>
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center overflow-hidden mb-4">
                  {/* <img src="https://via.placeholder.com/150x150?text=Dr+3" alt="Dr. Susan Bones" className="object-cover w-full h-full"> */}
                </div>
                <h3 className="text-[25px] font-bold font-primary-font text-main-font">
                  Ebenezer Flintwood Brace
                </h3>
                <p className="text-[20px] font-medium text-gray-700 mt-1">
                  Backend Developer
                </p>
              </div>
            </div>
          </section>

          <div className="p-6">
            <div className="flex flex-column  items-center justify-center text-[20px] font-secondary-font text-main-body">
              <h1 className="text-[20px] font-serif font-semibold ml-[20px]">
                People's
              </h1>
            </div>
            <div className="flex flex-column items-center justify-center">
              <h3 className="text-[55px] font-semibold text-primary-body font-primary-font ">
                Frequently Asked Questions
              </h3>
            </div>
          </div>

          <div className="bg-secondary-body rounded-xl shadow-md p-6 mb-[40px]">
            <section className="bg-white py-12 px-6 rounded-2xl">
              <div className="max-w-3xl mx-auto space-y-4">
                {/* FAQ 1 */}
                <div
                  className={`border border-blue-200 rounded-xl p-4 transition-all duration-300 ${
                    openIndex === 0 ? "bg-blue-100" : "bg-white"
                  }`}
                  onClick={() => toggle(0)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-semibold">
                      What services does HealthLink offer?
                    </h3>
                    {openIndex === 0 ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {openIndex === 0 && (
                    <p className="mt-2 text-sm text-gray-700">
                      We offer virtual consultations, urgent care, mental health
                      services, and more.
                    </p>
                  )}
                </div>

                {/* FAQ 2 */}
                <div
                  className={`border border-blue-200 rounded-xl p-4 transition-all duration-300 ${
                    openIndex === 1 ? "bg-blue-100" : "bg-white"
                  }`}
                  onClick={() => toggle(1)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-semibold">
                      Do you accept insurance?
                    </h3>
                    {openIndex === 1 ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {openIndex === 1 && (
                    <p className="mt-2 text-sm text-gray-700">
                      Yes, we accept most major health insurance plans.
                    </p>
                  )}
                </div>

                {/* FAQ 3 */}
                <div
                  className={`border border-blue-200 rounded-xl p-4 transition-all duration-300 ${
                    openIndex === 2 ? "bg-blue-100" : "bg-white"
                  }`}
                  onClick={() => toggle(2)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="text- font-semibold">
                      What should I bring to my appointment?
                    </h3>
                    {openIndex === 2 ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {openIndex === 2 && (
                    <p className="mt-2 text-sm text-gray-700">
                      Your consultations will be seamlessBring your ID,
                      insurance card, and a list of medications.
                    </p>
                  )}
                </div>
              </div>
            </section>
          </div>

          <section className="bg-secondary-body py-16 px-6 rounded-2xl">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-[55px] font-semibold text-primary-body font-primary-font mb-[40px] ">
                What Our Patients Say About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                  <div className="text-3xl text-cyan-400 mb-4">❝</div>
                  <p className="font-semibold text-[20px] font-primary-font  text-main-font">
                    “The healthcare professionals were attentive, always
                    checking in on me, and the doctors were knowledgeable and
                    patient. It's rare to find an app that processes such great
                    qualities.”
                  </p>
                  <div className="flex items-center gap-4 mt-[10px]">
                    <img
                      src="/assets/samanta.jpg" // <-- Replace with actual path or import
                      alt="Samanta McGill"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[18px] text-gray-500 mt-[12px]">
                        App User
                      </p>
                      <p className="font-semibold text-[18px]">
                        Samanta McGill
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-xl shadow-lg text-left">
                  <div className="text-3xl text-cyan-400 mb-4">❝</div>
                  <p className="font-semibold text-[20px] font-primary-font  text-main-font">
                    "Booking an appointment was easy, and I was pleasantly
                    surprised by how quickly I was able to speak to a health
                    professional. Unlike other clinics where I have to wait to
                    see someone this app allows me to get healthcare
                    immediately.”
                  </p>
                  <div className="flex items-center gap-4 mt-[10px]">
                    <img
                      src="/assets/tina.jpg" // <-- Replace with actual path or import
                      alt="Tina Peterson"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[18px] text-gray-500 mt-[12px]">
                        {" "}
                        App User
                      </p>
                      <p className="font-semibold text-[18px]">Vanessa Smith</p>
                    </div>
                  </div>
                </div>
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
      </div>
    </PublicLayout>
  );
};

export default About;
