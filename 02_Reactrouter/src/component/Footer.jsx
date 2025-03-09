import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Your Company</h2>
            <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/privacy-policy"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-of-service"
              className="text-gray-400 hover:text-white"
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/contact-us"
              className="text-gray-400 hover:text-white"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <Link to="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
