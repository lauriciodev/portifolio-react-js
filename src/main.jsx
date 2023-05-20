import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/index.jsx";
import About from "./pages/About/index.jsx";
import Projects from "./pages/Pojects/index.jsx";
import Contact from "./pages/contact/index.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
