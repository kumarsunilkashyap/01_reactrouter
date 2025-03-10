import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-auto ">{Outlet}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
