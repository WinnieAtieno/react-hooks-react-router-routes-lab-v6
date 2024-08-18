import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

// Define the routes with path, element, and errorElement
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // Handles errors in Home route
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />, // Handles errors in Directors route
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />, // Handles errors in Actors route
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />, // Handles errors in Movie route
  },
  // Adding a wildcard route for handling undefined routes
  {
    path: "*",
    element: <ErrorPage />, // Renders ErrorPage for any undefined routes
  },
];

export default routes;
