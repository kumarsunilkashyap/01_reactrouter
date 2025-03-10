import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-gray-600 mb-6">
          Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of highly skilled professionals who are passionate about what they do. We believe in continuous improvement and always strive to exceed our clients' expectations.
        </p>
        <p className="text-gray-600">
          Our mission is to deliver high-quality products and services that bring value to our customers. We are committed to innovation, integrity, and excellence in everything we do. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

export default About;