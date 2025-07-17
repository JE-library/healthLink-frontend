import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function PagesLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PagesLayout;
