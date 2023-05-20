import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About/index.jsx";
import Projects from "./pages/Pojects/index.jsx";
import Contact from "./pages/contact/index.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
