import React from "react";
import { Truck, Shirt, Users, Zap } from "lucide-react";
import Navbar from "./Components/Navbar";

export default function Services() {
  const services = [
    {
      title: "Laundry Pickup & Delivery",
      description:
        "Easily track when your clothes are picked up and returned — no more confusion with your dhobi.",
      icon: <Truck className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Clothes Management",
      description:
        "Keep a digital record of the clothes you’ve given, so nothing gets misplaced.",
      icon: <Shirt className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Campus Dhobi Network",
      description:
        "Connects students with trusted dhobis inside campus, making laundry hassle-free.",
      icon: <Users className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Free for Students",
      description:
        "A side project by BITS first-years, offered completely free for all campus students.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-gray-700 transition-all"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-gray-500 text-sm text-center">
        We aim to make dhobi services revolutionary 🚀 <br />
        Starting from BITS campus and growing into a student-first network.
      </p>
    </div>
    </>
  );
}
