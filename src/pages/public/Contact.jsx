import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import contactImage from "../../assets/public/contact/contacts-Image1.jpg";

const Contact = () => {
  return (
    <PublicLayout>
      <div className="bg-[#d1f4fa] text-gray-800 font-serif">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 items-center px-10 py-16">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-primary-body font-primary-font">Contact Us</h1>
            <p className="text-lg text-main-font max-w-md font-secondary-font">
              Whether you have questions, need assistance, or want to learn more
              about our services, JE-HealthLink is just a message away.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={contactImage}
              alt="Hero"
              className="w-[90%] max-w-[450px] rounded-2xl shadow"
            />
          </div>
        </section>

        {/* Info Cards */}
        <section className="grid md:grid-cols-2 gap-8 px-10 pb-16">
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#005792]">
            <h2 className="text-2xl font-bold mb-4 text-primary-body font-primary-font">Get in Touch</h2>
            <p className="mb-6 text-main-font font-secondary-font">
              If you have any questions or need assistance, our team at
              JE-HealthLink is ready to provide the support you need. Reach out
              today and let us help you take control of your well-being.
            </p>
            <button className="bg-[#53cde2] text-white font-secondary-font py-2 px-5 rounded-full hover:bg-[#d86660] transition duration-200">
              Talk to a doctor
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-[#005792] text-center">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold mb-2 font-primary-font text-primary-body">
              Contact Customer Support
            </h2>
            <p className="font-secondary-font text-main-font">
              For general and other inquiries, please email us <br />
              <span className=" font-medium font-secondary-font text-main-font">
                support@yourdoctors.online
              </span>
            </p>
          </div>
        </section>

        {/* Contact Form + Map */}
        <section className="grid md:grid-cols-2 gap-10 px-10 pb-20">
          <form className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-main-font font-primary-font">
              Send Us A Message
            </h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium font-secondary-font text-main-font ">Name</label>
              <input
                type="text"
                className="w-full border font-secondary-font px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium font-secondary-font text-main-font">Email</label>
              <input
                type="email"
                className="w-full border px-4 py-2 font-secondary-font rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium font-secondary-font text-main-font">Message</label>
              <textarea
                className="w-full border px-4 py-2 font-secondary-font rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your message"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#53cde2] font-secondary-font text-white py-2 px-6 rounded-full hover:bg-[#d86660] transition"
            >
              Send
            </button>
          </form>

          <div>
            <iframe
              title="Accra Location"
              className="w-full h-full min-h-[350px] rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.8697754922216!2d-0.1869645!3d5.5601876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdc8cb730c1736d%3A0xf9a62f2c999db1b3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1710765436000!5m2!1sen!2sgh"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h3 className="mt-4 font-bold text-lg font-secondary-font text-main-font">Our Location</h3>
            <p className="font-secondary-font text-main-font">Accra, Ghana</p>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default Contact;
