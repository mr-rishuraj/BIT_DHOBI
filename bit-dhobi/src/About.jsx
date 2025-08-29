import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

export default function AboutPage() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-3 py-1 text-sm font-medium border border-neutral-800">
          <span className="h-2 w-2 rounded-full bg-yellow-500" />
          Student-led side project
        </div>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
          About <span className="text-yellow-500">Bit Dhobi</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-300">
          Bit Dhobi was started by <strong>two first-year BITS Pilani students</strong> 
          who had just joined college and immediately faced the everyday chaos of campus laundry. 
          We believed something as basic as dhobi service shouldn’t be this hard—so we decided to fix it.
        </p>
      </section>

      {/* Highlight Banner */}
      <section className="bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Free for all campus students
              </h2>
              <p className="mt-2 text-neutral-400">
                Bit Dhobi will always be <strong>free for students</strong> across colleges. 
                We’re building this for the community we’re a part of.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm bg-yellow-600 text-white hover:bg-yellow-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Story */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-neutral-800 p-6 md:p-8 bg-neutral-900 shadow-sm">
            <h3 className="text-xl font-bold text-white">Our Story</h3>
            <p className="mt-3 text-neutral-400 leading-relaxed">
              We’re two freshers who just got into BITS and found ourselves juggling classes, clubs, 
              and a laundry routine that simply didn’t work. Instead of complaining, we built Bit Dhobi—
              a simple tool to make laundry tracking, handoffs, and returns smoother for students and dhobis alike.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 p-6 md:p-8 bg-neutral-900 shadow-sm">
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="mt-3 text-neutral-400 leading-relaxed">
              We aim to <strong>connect and modernize dhobi services</strong> across campuses by creating a reliable 
              network of dhobis and an easy-to-use student interface. The goal: 
              <strong> fast, transparent, and student-friendly laundry</strong> everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Side Project Note */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pb-16">
        <div className="rounded-2xl border border-neutral-800 p-6 md:p-8 bg-neutral-900 shadow-sm">
          <h3 className="text-xl font-bold text-white">Built with love, run on the side</h3>
          <p className="mt-3 text-neutral-400 leading-relaxed">
            Bit Dhobi is still a <strong>side project</strong>. We’re shipping improvements between classes and club meetings. 
            If something feels rough around the edges, tell us—we’ll fix it. Your feedback shapes our roadmap.
          </p>
          <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-neutral-800 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            Two first-year founders @ BITS Pilani
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="bg-yellow-600 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Join the network or give feedback
              </h3>
              <p className="mt-3 text-yellow-100">
                Are you a campus dhobi or a student volunteer who wants to help? 
                Reach out—we’d love to collaborate.
              </p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a
                href="mailto:team@bitdhobi.com"
                className="rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-100 transition shadow"
                aria-label="Email the Bit Dhobi team"
              >
                Email Us
              </a>
              <a
                href="#get-started"
                className="rounded-2xl bg-neutral-950 text-white px-5 py-3 font-semibold hover:bg-neutral-800 transition shadow"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-neutral-500 py-6 bg-neutral-950">
        © {year} Bit Dhobi • Built by students, for students
      </footer>
    </main>
    </>
    

  );
}
