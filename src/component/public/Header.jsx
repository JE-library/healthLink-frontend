import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router";
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
    <header className="px-4 py-3 bg-main-body flex justify-between items-center text-white font-secondary-font md:px-12 sticky top-0 z-99">
      <span className=" cursor-pointer" onClick={() => navigate("/")}>
        <h1 className="font-extrabold text-2xl leading-4">HealthLink</h1>
        <p className="text-xs">Care Without the Wait</p>
      </span>

      <MobileNav isNav={isNav} />
      <DesktopNav />
      <button
        onClick={() => navigate("/signup/patient")}
        className="bg-tertiary-body/40 py-2 px-5 rounded-3xl cursor-pointer hover:bg-primary-body font-bold transition duration-300 hidden md:block"
      >
        Talk to a Specialist
      </button>
      {isNav ? (
        <MdClose
          onClick={handleNav}
          className="animate-navBar text-4xl cursor-pointer md:hidden"
        />
      ) : (
        <FiMenu
          onClick={handleNav}
          className="animate-navBar text-4xl cursor-pointer md:hidden"
        />
      )}
    </header>
  );
};

export default Header;
