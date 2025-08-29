import React, { useState } from "react";
import { motion } from "framer-motion";
import { QrCode, Shirt } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";

function LandingPage() {
  const [darkMode] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen flex flex-col`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Laundry Made <span className="text-yellow-400">Simple</span> for
            BITSians
          </h2>
          <p className="text-lg text-gray-300">
            Scan, Submit, and Relax – Let your dhobi handle the rest. Track
            clothes and manage laundry with just a scan.
          </p>
          <div className="flex gap-4">
            {/* Navigate to Clothes Page */}
            <button
              onClick={() => navigate("/clothes")}
              className="bg-yellow-400 text-black hover:bg-yellow-300 rounded-xl px-6 py-3 flex items-center gap-2"
            >
              <QrCode /> Scan QR
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 rounded-xl px-6 py-3 flex items-center gap-2"
            onClick={() => navigate("/clothes")}>
              <Shirt /> Manage Clothes
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/855/677/original/laundry-flat-illustration-vector.jpg"
            alt="Laundry Illustration"
            className="w-72 md:w-96 drop-shadow-2xl"
          />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6 text-gray-400">
        © {new Date().getFullYear()} BIT Dhobi. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
