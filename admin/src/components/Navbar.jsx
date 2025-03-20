import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg">Admin Panel</div>
        <div>
          <Link
            to="dashboard"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Dashboard
          </Link>
          <Link
            to="profile"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded ml-4"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
