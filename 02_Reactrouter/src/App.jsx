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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />}>
          <Route path="Form" element={<ContactForm />} />
        </Route>
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
