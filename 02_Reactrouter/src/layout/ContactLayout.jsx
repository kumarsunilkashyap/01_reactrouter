import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact";

function ContactLayout() {
  return (
    <div className="font-sans p-5 max-w-4xl mx-auto">
      <header className="border-b border-gray-300 mb-5 pb-2">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="text-gray-600">
          We'd love to hear from you. Please reach out with any questions or
          feedback.
        </p>
      </header>
      <main>
        <Outlet />
        <Contact/>
      </main>
    </div>
  );
}

export default ContactLayout;
