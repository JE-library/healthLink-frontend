import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <p>Doctor in your pocket.</p>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-300">
            {" "}
            Location
          </h3>
          <p>123 health Street</p>
          <p>Accra, Ghana</p>
          <p>Email: info@bookstore.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-amber-300">
            Stay healthy with us
          </h3>
          <ul>
            <li>Healthcare made easy</li>
            <li>Talk to a Doctor</li>
            <li>Book your appointments</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold  text-amber-300"> Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">
                <FaFacebook/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaXTwitter/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} JE- Healthlines. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
