import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "../components/scrollToTop";

const Layout = () => {
  return (
    <>
      <div className="flex h-full bg-white shadow w-full flex-col">
        <Navbar />

        <main className="flex-grow mt-16">
          <Outlet />
        </main>

        <Footer />
      </div>
      
      <ScrollToTop/>
    </>
  );
};

export default Layout;
