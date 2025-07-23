import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-primary-body text-white py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
        {/* Brand & Mission */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-3">HealthLink</h2>
          <p className="text-white/80">
            Your digital health companion. Consult with doctors, book lab tests,
            and stay well—all from your phone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-secondary-body">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-main-body">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-main-body">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-main-body">
              <Link to="/blog">Health Blog</Link>
            </li>
            <li className="hover:text-main-body">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-secondary-body">
            Services
          </h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-main-body">
              <Link to="/signup/patient">Talk to a Doctor</Link>
            </li>
            <li className="hover:text-main-body">
              <Link to="/signup/patient">Book Appointments</Link>
            </li>
            <li className="hover:text-main-body">
              <Link to="/signup/patient">Home Lab Services</Link>
            </li>
            <li className="hover:text-main-body">
              <Link to="/signup/patient">Mental Health Support</Link>
            </li>
          </ul>
        </div>

        {/* For Providers */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-secondary-body">
            For Specialists
          </h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-main-body">
              <Link to="/signup/provider">Join as a Specialist</Link>
            </li>
            <li className="hover:text-main-body">
              <Link to="/how-it-works">How It Works</Link>
            </li>
            <li className="hover:text-main-body">
              <Link to="/support">Provider Support</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-secondary-body">
            Contact
          </h3>
          <p>
            123 Health Street
            <br />
            Accra, Ghana
          </p>
          <p className="mt-2 hover:text-main-body">
            Email:{" "}
            <a href="mailto:info@healthlink.com" className="text-primary">
              info@healthlink.com
            </a>
          </p>

          <div className="flex gap-4 mt-4 text-xl text-white/80">
            <a href="#">
              <FaFacebook className="hover:text-primary transition hover:text-main-body" />
            </a>
            <a href="#">
              <FaXTwitter className="hover:text-primary transition hover:text-main-body" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-primary transition hover:text-main-body" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} HealthLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
