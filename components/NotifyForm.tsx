"use client";

import { useState, type FormEvent } from "react";
import { useAppContext } from "./AppProvider";

const text = {
  en: {
    placeholder: "you@example.com",
    button: "Notify me",
    sending: "Sending\u2026",
    success: "You're on the list \u2014 we'll email you the moment HIDAYAH365 launches.",
    invalid: "Please enter a valid email address.",
    fail: "Something went wrong. Please try again, or email us directly.",
  },
  ur: {
    placeholder: "you@example.com",
    button: "مجھے آگاہ کریں",
    sending: "بھیجا جا رہا ہے\u2026",
    success: "آپ کا نام فہرست میں شامل ہو گیا \u2014 لانچ ہوتے ہی ہم آپ کو ای میل کریں گے۔",
    invalid: "براہ کرم ایک درست ای میل ایڈریس درج کریں۔",
    fail: "کچھ غلط ہو گیا۔ دوبارہ کوشش کریں یا ہمیں براہ راست ای میل کریں۔",
  },
};

export default function NotifyForm() {
  const { language } = useAppContext();
  const t = text[language];
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setStatus("error");
      setErrorMsg(t.invalid);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || t.fail);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t.fail);
    }
  }

  if (status === "success") {
    return (
      <p className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-50 dark:bg-primary-900/30 px-5 py-3 text-sm font-medium text-primary-700 dark:text-primary-300">
        <span aria-hidden="true">{"\u2713"}</span> {t.success}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
    >
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
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.placeholder}
        className="w-full sm:w-auto flex-1 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-5 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/60 focus:border-primary-500 transition-all duration-300"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary-600/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === "sending" ? t.sending : t.button}
      </button>
      {status === "error" && (
        <p className="w-full text-center sm:text-left text-sm text-red-600 dark:text-red-400">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
