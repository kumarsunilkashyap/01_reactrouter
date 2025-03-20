import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import ContactForm from "./pages/ContactForm";
import Project from "./pages/Project";
import ContactLayout from "./layout/ContactLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<ContactLayout />} />
        <Route path="contact" element={<ContactLayout />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
