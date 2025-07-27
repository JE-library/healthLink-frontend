// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // use 'auto' if you want it to jump instantly
    });
  }, [pathname]);

  return null; // this component does not render anything
};

export default ScrollToTop;
