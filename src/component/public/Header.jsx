import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNavBar";
import { useState } from "react";

const Header = () => {
  const [isNav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!isNav);
  };

  return (
    <header className="px-4 py-3 bg-primary-body flex justify-between items-center text-white font-secondary-font md:px-12 sticky top-0 z-50 shadow-md">
      {/* Logo & Brand */}
      <div
        className="cursor-pointer flex flex-col leading-tight"
        onClick={() => navigate("/")}
      >
        <h1 className="font-extrabold text-2xl">HealthLink</h1>
        <p className="text-xs text-white/80">Care Without the Wait</p>
      </div>

      {/* Navigation */}
      <DesktopNav />
      <MobileNav isNav={isNav} />

      {/* CTA Button (Hidden on Mobile) */}
      <button
        onClick={() => navigate("/signup/patient")}
        className="hidden md:block bg-white text-primary-body py-2 px-5 rounded-full font-bold transition duration-300 hover:bg-main-body hover:text-white cursor-pointer"
      >
        Talk to a Specialist
      </button>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="md:hidden text-white text-3xl z-50">
        {isNav ? (
          <MdClose
            onClick={handleNav}
            className="transition-transform duration-300"
          />
        ) : (
          <FiMenu
            onClick={handleNav}
            className="transition-transform duration-300"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
