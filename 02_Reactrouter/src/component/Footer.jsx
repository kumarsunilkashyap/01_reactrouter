import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-gray-900 py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/privacy-policy"
              className="text-gray-900 hover:text-orange-500"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-of-service"
              className="text-gray-900 hover:text-orange-500"
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/contact-us"
              className="text-gray-900 hover:text-orange-500"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <Link to="#" className="text-gray-900 hover:text-orange-500">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#" className="text-gray-900 hover:text-orange-500">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#" className="text-gray-900 hover:text-orange-500">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" className="text-gray-900 hover:text-orange-500">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
