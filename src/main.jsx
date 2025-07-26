import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContactProvider from "./context/ContactContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContactProvider>
        <App />
      </ContactProvider>
    </BrowserRouter>
  </StrictMode>
);
