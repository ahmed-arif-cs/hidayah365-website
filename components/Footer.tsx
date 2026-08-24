"use client";

import Link from "next/link";
import { useAppContext } from "./AppProvider";

export default function Footer() {
  const { language } = useAppContext();

  const ur = language === "ur";

  return (
    <footer className="bg-primary-900 dark:bg-gray-950 text-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 text-gold-400 font-bold text-sm mr-3">
                H
              </span>
              <span className="text-lg font-extrabold text-white">
                HIDAYAH<span className="text-gold-400">365</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed" lang={ur ? "ur" : "en"} dir={ur ? "rtl" : "ltr"}>
              {ur
                ? "روزمرہ کی اسلامی زندگی کا مکمل ساتھی — قرآن، اذان، قبلہ رخ، دعائیں اور مزید۔"
                : "Your complete daily Islamic companion — Quran, prayer times, Qibla, duas and more."}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-4">
              {ur ? "لنکس" : "Links"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home", ur: "ہوم" },
                { href: "/features", label: "Features", ur: "خصوصیات" },
                { href: "/privacy", label: "Privacy", ur: "پرائیویسی" },
                { href: "/roadmap", label: "Roadmap", ur: "روڈ میپ" },
                { href: "/download", label: "Download", ur: "ڈاؤن لوڈ" },
                { href: "/contact", label: "Contact", ur: "رابطہ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-1"
                  >
                    {ur ? link.ur : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-4">
              {ur ? "رابطہ" : "Contact"}
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              <a
                href="mailto:agcompanies.official@gmail.com"
                className="hover:text-white transition-colors"
              >
                agcompanies.official@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              {ur ? "ہم آپ کے سوالات کے جواب دینے میں خوش ہیں۔" : "We are happy to answer any questions you have."}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} HIDAYAH365. {ur ? "جملہ حقوق محفوظ ہیں۔" : "All rights reserved."}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              {ur ? "پرائیویسی پالیسی" : "Privacy Policy"}
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              {ur ? "رابطہ کریں" : "Contact"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}