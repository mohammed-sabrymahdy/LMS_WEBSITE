import { Outlet } from "react-router-dom";
import Navbar from "../../components/educator/Navbar";
import Footer from "../../components/educator/Footer";

const Educator = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Educator;
