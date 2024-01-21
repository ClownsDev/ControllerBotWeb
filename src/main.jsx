import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./components/assets/styles/_reset.scss";
import "./components/assets/styles/_global.scss";
import Router from "./components/Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router/>
);
