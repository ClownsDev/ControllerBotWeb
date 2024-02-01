import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./components/assets/styles/_reset.scss";
import "./components/assets/styles/_global.module.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
