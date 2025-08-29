import React, { useState } from "react";
import Navbar from "./Components/Navbar";

export default function ManageClothes() {
  const [clothes, setClothes] = useState([]);
  const [input, setInput] = useState({ type: "", count: "" });

  const handleAdd = () => {
    if (!input.type || !input.count) return;
    setClothes([...clothes, { ...input, status: "Received" }]);
    setInput({ type: "", count: "" });
  };

  const updateStatus = (index, newStatus) => {
    const updated = [...clothes];
    updated[index].status = newStatus;
    setClothes(updated);
  };

  return (
    <>
    {/* Navbar */}
      <Navbar />

    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Manage Clothes</h1>

      {/* Add Clothes Form */}
      <div className="flex gap-2 mb-4">
        <input
          className="bg-gray-800 p-2 rounded"
          placeholder="Cloth Type"
          value={input.type}
          onChange={(e) => setInput({ ...input, type: e.target.value })}
        />
        <input
          type="number"
          className="bg-gray-800 p-2 rounded w-24"
          placeholder="Count"
          value={input.count}
          onChange={(e) => setInput({ ...input, count: e.target.value })}
        />
        <button
          className="bg-yellow-400 text-gray-900 px-4 rounded hover:bg-yellow-500"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {/* Clothes List */}
      <div className="space-y-3">
        {clothes.map((c, i) => (
          <div
            key={i}
            className="flex justify-between bg-gray-800 p-3 rounded items-center"
          >
            <div>
              <strong>{c.type}</strong> — {c.count} pcs
            </div>
            <select
              className="bg-gray-700 text-white p-1 rounded"
              value={c.status}
              onChange={(e) => updateStatus(i, e.target.value)}
            >
              <option>Received</option>
              <option>Washing</option>
              <option>Ready</option>
              <option>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
