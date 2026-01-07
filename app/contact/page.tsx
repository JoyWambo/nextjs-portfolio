"use client";

import Navigation from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    alert(`Thank you for your message, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="grow container mx-auto p-4 pt-20 bg-slate-900">
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Contact Me
          </h1>
          <form
            className="max-w-md mx-auto bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-300 dark:border-slate-600"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-left mb-2 text-white" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-left mb-2 text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-slate-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-left mb-2 text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-slate-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-800 text-white"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-2xl hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
