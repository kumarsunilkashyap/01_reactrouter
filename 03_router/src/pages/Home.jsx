import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl md:text-5xl">Welcome to Our Website</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Home Page</h2>
          <p className="text-lg md:text-xl mb-4">
            This is a professional and responsive home page designed with
            Tailwind CSS.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
