import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Home Page</h2>
          <p className="text-lg md:text-xl mb-4">
            This is a professional and responsive home page designed with
            Tailwind CSS.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </section>
        <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside text-lg md:text-xl">
            <li className="mb-2">Responsive Design</li>
            <li className="mb-2">Interactive Elements</li>
            <li className="mb-2">Modern UI</li>
          </ul>
        </section>
        <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    
    </div>
  );
};

export default Home;
