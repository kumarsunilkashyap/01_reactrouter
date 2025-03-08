import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Navbar />
      <div className="container flex justify-center items-center min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
