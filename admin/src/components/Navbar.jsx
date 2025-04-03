import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-lg font-bold">Admin Panel</div>
        <button
          className="text-gray-300 hover:text-white md:hidden"
          onClick={toggleMenu}
        >
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
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4`}
        >
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded ${
                isActive ? "bg-gray-700 text-white" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded ${
                isActive ? "bg-gray-700 text-white" : ""
              }`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded ${
                isActive ? "bg-gray-700 text-white" : ""
              }`
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
