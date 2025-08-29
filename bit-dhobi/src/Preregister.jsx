// src/pages/PreRegister.jsx
import React, { useState } from "react";
import { auth, db } from "./Firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function PreRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // optional if you want password
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2️⃣ Save email to Firestore (optional: for newsletter)
      await addDoc(collection(db, "pre-registers"), {
        uid: user.uid,
        email: user.email,
        timestamp: serverTimestamp(),
      });

      alert("Successfully subscribed!");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-yellow-400">
          Pre-Register for Updates
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 font-semibold"
          >
            {loading ? "Registering..." : "Pre-Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
