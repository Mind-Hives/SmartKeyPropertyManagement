
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx" 
import HomePage from "../pages/HomePage.jsx";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-50 via-white to-slate-50 text-black">
      <Navbar />
         <Outlet />
      <Footer />
    </div>
  );
}
