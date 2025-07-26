import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import contactImage from "../../assets/public/contact/contacts-Image1.jpg";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <PublicLayout>
      <div className="bg-blue-50 text-gray-800">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 items-center px-8 py-16">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-blue-900">
              Contact Us
            </h1>
            <p className="text-lg max-w-md text-gray-700">
              Whether you have questions, need assistance, or want to learn more
              about our services, JE-HealthLink is just a message away.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={contactImage}
              alt="Contact"
              className="w-[90%] max-w-[450px] rounded-2xl shadow-md"
            />
          </div>
        </section>

        {/* Info Cards */}
        <section className="grid md:grid-cols-2 gap-8 px-8 pb-16">
          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-600">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              Get in Touch
            </h2>
            <p className="mb-6 text-gray-700">
              If you have any questions or need assistance, our team at
              JE-HealthLink is ready to help. Reach out today and take control
              of your well-being.
            </p>
            <button
              onClick={() => navigate("/signup/patient")}
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition cursor-pointer"
            >
              Talk to a Doctor
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-blue-600 ">
            <h2 className="text-2xl font-bold mb-2 text-blue-900">
              Customer Support
            </h2>
            <p className="text-gray-700">
              For general inquiries, please email:
              <br />
              <span className="font-medium text-blue-600">
                support@healthlink.online
              </span>
            </p>
          </div>
        </section>

        {/* Contact Form + Map */}
        <section className="grid md:grid-cols-2 gap-10 px-8 pb-20">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">
              Send Us A Message
            </h2>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 font-medium">
                Message
              </label>
              <textarea
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your message"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
            >
              Send
            </button>
          </form>

          {/* Map Section */}
          <div>
            <iframe
              title="Accra Location"
              className="w-full h-full min-h-[350px] rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.8697754922216!2d-0.1869645!3d5.5601876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdc8cb730c1736d%3A0xf9a62f2c999db1b3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1710765436000!5m2!1sen!2sgh"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-blue-900">
                Our Location
              </h3>
              <p className="text-gray-700">Accra, Ghana</p>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default Contact;
