import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}></Route>)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
