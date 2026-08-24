"use client";

import { useAppContext } from "./AppProvider";

/**
 * "Coming Soon" Google Play badge — the app has not been publicly released yet,
 * so this clearly communicates availability rather than linking to a dead store page.
 */
export default function GooglePlayBadge({ className = "" }: { className?: string }) {
  const { language } = useAppContext();
  const ur = language === "ur";

  return (
    <div
      className={`inline-flex flex-col items-center gap-3 ${className}`}
      role="img"
      aria-label={ur ? "گوگل پلے اسٹور پر جلد آرہا ہے" : "Coming soon on Google Play Store"}
    >
      <div className="inline-flex items-center gap-3 rounded-2xl bg-gray-900 dark:bg-black px-6 py-3.5 border-2 border-gray-700 hover:border-gold-500 transition-all duration-300 hover:scale-105 hover-lift-sm shadow-xl cursor-default">
        <svg
          viewBox="0 0 512 512"
          className="w-8 h-8"
          aria-hidden="true"
        >
          <path
            fill="#00c3ff"
            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
          />
        </svg>
        <div className="text-left">
          <div className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">
            {ur ? "گوگل پلے اسٹور پر" : "Get it on"}
          </div>
          <div className="text-lg font-bold text-white leading-tight">
            {ur ? "جلد آرہا ہے" : "Coming Soon"}
          </div>
        </div>
      </div>
      <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 border border-gold-500/40 px-4 py-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500" />
        </span>
        <span className="text-xs font-semibold text-gold-600 dark:text-gold-400">
          {ur ? "جاری ترقیاتی مرحلہ" : "Currently in active development"}
        </span>
      </div>
    </div>
  );
}