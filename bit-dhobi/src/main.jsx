import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ClothesInputPage from "./ClothesInputPage.jsx";
import "./index.css";
// import QrScannerPage from "./QrScannerPage.jsx";
import ManageClothes from "./ManageClothes.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import DhobiDashboard from "./DhobiDashboard.jsx";
import PreRegister from "./Preregister.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/clothes" element={<ClothesInputPage />} /> */}
        <Route path="/clothes" element={<ManageClothes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dhobi" element={<DhobiDashboard />} />
        <Route path="/pre-register" element={<PreRegister />} />






        {/* <Route path="/scan" element={<QrScannerPage />} /> */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
