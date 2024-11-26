import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollRoTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton"
const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollRoTop />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
