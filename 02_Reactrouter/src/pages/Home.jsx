import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:items-start">
          <div className="max-w-xl space-y-8 text-center sm:text-left sm:mr-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Welcome to My Portfolio
              <span className="hidden sm:block text-4xl">I'm Sunil Kumar Kashyap</span>
            </h2>
            <p className="text-lg">
              I am a [Your Profession] with experience in [Your Skills]. I love
              creating beautiful and functional web applications.
            </p>
            <button
              onClick={() => navigate("project")}
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/portfolio"
            >
              
               View My Work
            </button>
          </div>

          <div className="sm:ml-10 mt-10 sm:mt-0">
            <img className="w-96" src={image} alt="image1" />
          </div>
        </div>
      </aside>
    </div>
  );
}
