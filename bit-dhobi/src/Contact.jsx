import React from "react";
import { MessageCircle, Mail } from "lucide-react";
import Navbar from "./Components/Navbar";

export default function Contact() {
  const whatsappNumber = "9131786701"; // replace with your WhatsApp Business number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Bit%20Dhobi%20Team!`;

  return (

    <>
    <Navbar />
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-300 mb-8">
          Have a question, feedback, or just want to say hi?  
          We’re here for you — reach out anytime!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          {/* Email Button */}
          <a
            href="mailto:team@bitdhobi.com"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg transition-all"
          >
            <Mail className="w-5 h-5" />
            Send an Email
          </a>
        </div>

        <p className="mt-10 text-gray-500 text-sm">
          We’ll get back to you as soon as possible 🚀
        </p>
      </div>
    </div>
    </>
  );
}
