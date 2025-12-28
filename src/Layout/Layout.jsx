import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav.jsx";
import Footer from "../Components/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
