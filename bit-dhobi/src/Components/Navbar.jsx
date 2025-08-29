import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Thanks for pre-registering, ${email}! 🚀`);
      setEmail("");
      setShowModal(false);
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-gray-800 sticky top-0 z-50">
        <h1
          className="text-2xl font-bold text-yellow-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          BIT Dhobi
        </h1>
        <div className="flex gap-6 text-white">
          <a
            className="hover:text-yellow-400 transition cursor-pointer"
            onClick={() => navigate("/services")}
          >
            Services
          </a>
          <a
            className="hover:text-yellow-400 transition cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About
          </a>
          <a
            className="hover:text-yellow-400 transition cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contact
          </a>
          <a
            className="hover:text-yellow-400 transition cursor-pointer"
            onClick={() => navigate("/dhobi")}
          >
            Dhobi
          </a>
        </div>
        <button
          onClick={() => navigate("/pre-register")}

          
          className="bg-yellow-400 text-black hover:bg-yellow-300 rounded-xl px-4 py-2"
        >
          Pre-Register
        </button>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">
              Pre-Register for Updates
            </h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSubscribe}
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
