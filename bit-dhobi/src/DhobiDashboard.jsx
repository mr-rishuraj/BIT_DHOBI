import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export default function DhobiDashboard() {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    studentName: "",
    roomNumber: "",
    clothes: "",
    email: "",
  });

  // Fetch orders from Firestore
  const fetchOrders = async () => {
    const q = query(collection(db, "orders"), orderBy("timestamp", "asc"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Add new order
  const addOrder = async (e) => {
    e.preventDefault();
    if (
      !newOrder.studentName ||
      !newOrder.roomNumber ||
      !newOrder.clothes ||
      !newOrder.email
    ) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        ...newOrder,
        status: "pending",
        timestamp: serverTimestamp(),
      });
      alert("Order added successfully!");
      setNewOrder({ studentName: "", roomNumber: "", clothes: "", email: "" });
      fetchOrders();
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  // Update order status
  const updateStatus = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, "orders", id), { status: newStatus });
      alert(`Order marked as ${newStatus}!`);
      fetchOrders();
      // TODO: send email to student using Firebase Functions or EmailJS
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Dhobi Dashboard</h1>

      {/* Add Order Form */}
      <div className="bg-gray-800 rounded-2xl p-6 shadow-md mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Add New Order</h2>
        <form className="flex flex-col gap-3" onSubmit={addOrder}>
          <input
            type="text"
            placeholder="Student Name"
            value={newOrder.studentName}
            onChange={(e) =>
              setNewOrder({ ...newOrder, studentName: e.target.value })
            }
            className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Room Number"
            value={newOrder.roomNumber}
            onChange={(e) =>
              setNewOrder({ ...newOrder, roomNumber: e.target.value })
            }
            className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Clothes Description"
            value={newOrder.clothes}
            onChange={(e) =>
              setNewOrder({ ...newOrder, clothes: e.target.value })
            }
            className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Student Email"
            value={newOrder.email}
            onChange={(e) =>
              setNewOrder({ ...newOrder, email: e.target.value })
            }
            className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 font-semibold"
          >
            Add Order
          </button>
        </form>
      </div>

      {/* Orders List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-gray-800 rounded-2xl p-6 shadow-md flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{order.studentName}</h2>
              <p className="text-gray-300">Room: {order.roomNumber}</p>
              <p className="text-gray-300 mt-2">Clothes: {order.clothes}</p>
              <p className="mt-2">
                Status:{" "}
                <span
                  className={`font-bold ${
                    order.status === "done"
                      ? "text-green-400"
                      : order.status === "picked_up"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {order.status}
                </span>
              </p>
            </div>
            <div className="mt-4 flex gap-3">
              {order.status === "pending" && (
                <button
                  onClick={() => updateStatus(order.id, "picked_up")}
                  className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-xl font-semibold"
                >
                  Mark Picked Up
                </button>
              )}
              {order.status !== "done" && (
                <button
                  onClick={() => updateStatus(order.id, "done")}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
                >
                  Mark Done
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
