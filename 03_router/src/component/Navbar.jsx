import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    navigate("");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/home" className="text-gray-300 hover:text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="text-gray-300 hover:text-white">
            About
          </NavLink>
          <NavLink to="/services" className="text-gray-300 hover:text-white">
            Services
          </NavLink>
          <NavLink to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </NavLink>
        </div>
        <button
          onClick={handleLogout}
          className="text-gray-300 hover:text-white"
        >
          Logout
        </button>
        <div className="md:hidden"></div>
        <button className="text-gray-300 hover:text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
