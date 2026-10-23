import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {import.meta.env.VITE_HASH_ROUTER
      ? <HashRouter><App /></HashRouter>
      : <BrowserRouter basename={import.meta.env.BASE_URL}><App /></BrowserRouter>}
  </React.StrictMode>
);
