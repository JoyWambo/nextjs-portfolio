// app/contact/page.tsx or app/components/Contact.tsx
"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<null | "idle" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      // Replace with real submit logic
      await new Promise((res) => setTimeout(res, 500));
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center py-12 px-4">
      <section className="w-full max-w-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-white dark:text-slate-100 text-center">
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          className="
        bg-black/50
            backdrop-blur-md
            border border-white/10 dark:border-white/20
            rounded-2xl p-6 md:p-8
            shadow-2xl
            transition-colors duration-300
          "
          aria-describedby="contact-status"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-200 dark:text-slate-300 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/6 dark:bg-white/6
                border border-white/8 dark:border-white/10
                text-slate-900 dark:text-slate-100
                placeholder:text-white dark:placeholder:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                transition
              "
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-200 dark:text-slate-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/6 dark:bg-white/6
                border border-white/8 dark:border-white/10
                text-slate-900 dark:text-slate-100
                placeholder:text-white dark:placeholder:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                transition
              "
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-200 dark:text-slate-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="
                w-full px-4 py-3 rounded-xl resize-none
                bg-white/6 dark:bg-white/6
                border border-white/8 dark:border-white/10
                text-slate-900 dark:text-slate-100
                placeholder:text-white dark:placeholder:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                transition
              "
              placeholder="Write your message..."
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="
                inline-flex items-center justify-center
                bg-gradient-to-r from-blue-700 to-blue-600 text-white
                px-5 py-3 rounded-2xl
                shadow-lg hover:shadow-xl
                transition transform duration-200
                hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
              "
            >
              Send Message
            </button>

            <div id="contact-status" aria-live="polite" className="text-sm">
              {status === "sent" && (
                <span className="text-green-300">Message sent. Thank you.</span>
              )}
              {status === "error" && (
                <span className="text-rose-300">
                  Something went wrong. Try again.
                </span>
              )}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
