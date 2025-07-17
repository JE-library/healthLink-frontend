import { Outlet } from "react-router";
import Footer from "../component/public/Footer";
import Header from "../component/public/Header";

function PublicLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default PublicLayout;
