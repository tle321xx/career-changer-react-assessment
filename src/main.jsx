import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'
import Owner from "./Owner";
import Navbar from './navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Owner",
    element: <Owner />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
