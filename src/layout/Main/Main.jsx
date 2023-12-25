
import Footer from "../../components/Shared/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <>
      <Navbar />
      {/* <Nav/> */}
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default Main;
