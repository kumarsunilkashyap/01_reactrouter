import React from "react";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="container flex justify-center items-center min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
