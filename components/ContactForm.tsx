"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const CONTACT_EMAIL = "agcompanies.official@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }
    if (email.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("Please enter a valid email address (or leave it empty).");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          website,
        }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("sent");
        return;
      }

      // Backend reachable but not yet configured (e.g. no SMTP env vars set)
      // or the send failed — fall back to opening the user's own email app
      // rather than losing the message entirely.
      openMailtoFallback();
      setStatus("fallback");
    } catch {
      openMailtoFallback();
      setStatus("fallback");
    }
  }

  function openMailtoFallback() {
    const mailSubject = encodeURIComponent(
      subject.trim() || `HIDAYAH365 enquiry from ${name.trim()}`
    );
    const body = encodeURIComponent(
      `${message.trim()}\n\n---\nFrom: ${name.trim()}${
        email.trim() ? `\nEmail: ${email.trim()}` : ""
      }`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/60 focus:border-primary-500 transition-all duration-300";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-7 md:p-9 shadow-xl shadow-gray-900/5"
      noValidate
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Send us a message
      </h2>
      <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
        Your message goes straight to our team at {CONTACT_EMAIL}.
      </p>

      <div className="mt-6 space-y-5">
        {/* Honeypot field — hidden from real users, bots often fill it in */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5"
            >
              Your name <span className="text-gold-600">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ahmed"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5"
            >
              Email <span className="text-gray-400">(optional)</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5"
          >
            Subject <span className="text-gray-400">(optional)</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What's this about?"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5"
          >
            Message <span className="text-gold-600">*</span>
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="How can we help?"
            className={`${inputClass} resize-y min-h-32`}
            required
          />
        </div>

        {error && (
          <p className="text-sm font-medium text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl px-4 py-2.5">
            {error}
          </p>
        )}

        {status === "sent" && (
          <p className="text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 rounded-xl px-4 py-2.5 animate-fade-in">
            Thanks {name.trim()}! Your message has been sent. We look forward to
            reading it.
          </p>
        )}

        {status === "fallback" && (
          <p className="text-sm font-medium text-gold-700 dark:text-gold-400 bg-gold-50 dark:bg-gold-900/20 border border-gold-200 dark:border-gold-800 rounded-xl px-4 py-2.5 animate-fade-in">
            We couldn&apos;t send this automatically, so we&apos;ve opened your
            email app instead with your message ready to send to {CONTACT_EMAIL}.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="ripple-btn w-full rounded-full bg-primary-600 py-3.5 font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === "sending" ? (
            "Sending…"
          ) : (
            <span className="inline-flex items-center justify-center gap-2">
              Send message <Send size={16} aria-hidden="true" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}