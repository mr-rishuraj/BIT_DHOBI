import React, { useState } from "react";

export default function ClothesInputPage() {
  const [clothes, setClothes] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You submitted ${clothes} clothes ✅`);
    // Later we can send this to a backend or Firebase
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Enter Clothes Count</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <input
          type="number"
          min="0"
          className="w-full p-3 rounded-xl text-black"
          placeholder="Number of clothes"
          value={clothes}
          onChange={(e) => setClothes(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black hover:bg-yellow-300 rounded-xl px-6 py-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
