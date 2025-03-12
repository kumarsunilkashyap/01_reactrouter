import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Loginpage from "./component/Loginpage";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Loginpage />} />
      <Route path="admin" element={<RootLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
