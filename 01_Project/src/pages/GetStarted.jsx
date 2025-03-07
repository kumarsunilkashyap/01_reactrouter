import React from "react";
import { useHistory } from "react-router-dom";

const GetStarted = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/next-step");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Our Project</h1>
      <p className="text-lg mb-8 text-center">Let's get started with your journey!</p>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
