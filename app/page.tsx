import Link from "next/link";
import Reveal from "@/components/Reveal";
import GooglePlayBadge from "@/components/GooglePlayBadge";
import { BookOpen, Landmark, HandHeart, Download } from "lucide-react";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Quran & Tafseer",
    desc: "Read the Holy Quran with translations, tafseer, and audio recitations.",
  },
  {
    icon: Landmark,
    title: "Prayer Times & Qibla",
    desc: "Accurate prayer times and Qibla direction based on your location.",
  },
  {
    icon: HandHeart,
    title: "Duas & Dhikr",
    desc: "Comprehensive collection of duas and dhikr for daily life.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-primary-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Animated background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 -left-20 w-72 h-72 rounded-full bg-primary-400/20 blur-3xl animate-orb" />
        <div
          className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-gold-400/20 blur-3xl animate-orb"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="absolute bottom-24 left-1/3 w-72 h-72 rounded-full bg-primary-600/10 blur-3xl animate-orb"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300 animate-zoom-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            Your Daily Islamic Companion
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight text-balance">
            <span className="shimmer-text">HIDAYAH365</span>{" "}
            <span className="text-primary-700 dark:text-primary-300">Guide for Every Day</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed text-balance">
            Quran, prayer times, Qibla direction, duas, hadith and more — one beautiful, easy-to-use app for the way you live.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/download"
              className="ripple-btn group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-600/40 animate-zoom-in"
            >
              <Download size={18} className="group-hover:animate-pulse" aria-hidden="true" />
              Download Now
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 dark:text-primary-300 dark:border-primary-400 px-8 py-3.5 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300 hover:-translate-y-1 animate-zoom-in delay-100"
            >
              <span className="inline-flex items-center gap-2">
                View Features <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={400}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: "114", label: "Surahs" },
              { value: "6,236", label: "Verses" },
              { value: "5", label: "Daily Prayers" },
              { value: "365", label: "Days a Year" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/70 dark:bg-gray-900/70 backdrop-blur rounded-2xl border border-gray-100 dark:border-gray-800 p-4 hover-lift-sm animate-fade-in-up"
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                <div className="text-3xl font-black text-primary-600 dark:text-primary-300">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Highlights */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
            Everything you need, <span className="text-primary-600 dark:text-primary-400">one app</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 150}>
              <div className="card-hover group h-full bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl shadow-gray-900/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 hover-lift">
                <div className="card-icon inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 mb-5">
                  <item.icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-gold-500 rounded-full transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="animated-gradient rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl shadow-primary-900/20">
            <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow">
              Begin your journey today
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              HIDAYAH365 is now live on Google Play. Free to download, no account needed.
            </p>
            <div className="mt-8 flex flex-col items-center">
              <GooglePlayBadge className="animate-bounce-slow" />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
