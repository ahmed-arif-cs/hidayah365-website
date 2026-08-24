"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "./AppProvider";

const navItems = [
  { href: "/", label: "Home", labelUr: "ہوم" },
  { href: "/features", label: "Features", labelUr: "خصوصیات" },
  { href: "/privacy", label: "Privacy", labelUr: "پرائیویسی" },
  { href: "/roadmap", label: "Roadmap", labelUr: "روڈ میپ" },
  { href: "/download", label: "Download", labelUr: "ڈاؤن لوڈ" },
  { href: "/contact", label: "Contact", labelUr: "رابطہ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, language, toggleLanguage } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-lg shadow-primary-900/5 backdrop-blur-md"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/70 dark:border-gray-800/70"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-down">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center group">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl animated-gradient text-white font-bold text-sm mr-3 transition-transform duration-300 group-hover:scale-110">
              H
            </span>
            <span className="text-xl font-extrabold tracking-tight text-primary-700 dark:text-primary-300">
              HIDAYAH<span className="text-gold-500">365</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-primary-50/50 dark:hover:bg-gray-800"
                  }`}
                >
                  {language === "ur" ? item.labelUr : item.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-gold-500 animate-pulse-glow" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover:scale-105"
              aria-label="Toggle language"
            >
              <span>{language === "en" ? "🇬🇧" : "🇵🇰"}</span>
              <span>{language === "en" ? "English" : "اردو"}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 text-lg rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover:rotate-45 hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-4 h-0.5 bg-current rounded transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-current rounded transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-0" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-1 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-3 border border-gray-100 dark:border-gray-800">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {language === "ur" ? item.labelUr : item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}