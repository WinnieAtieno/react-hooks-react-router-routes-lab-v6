import "./index.css";
import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

// Creating the router instance with the routes configuration
const router = createBrowserRouter(routes);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <RouterProvider router={router} />
  
);
