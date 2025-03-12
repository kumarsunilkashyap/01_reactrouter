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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Loginpage />}>
      <Route path="" element={<RootLayout />}>
        
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
