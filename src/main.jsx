import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routers/AppRouters";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/scrolling/ScrollToTop";
import ScrollToHash from "./components/scrolling/ScrollToHash";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToHash />
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);