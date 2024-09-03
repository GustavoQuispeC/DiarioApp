import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DiarioApp } from "./DiarioApp.jsx";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DiarioApp />
    </BrowserRouter>
  </StrictMode>
);
