import Reveal from "@/components/Reveal";
import {
  BookOpen,
  Clock,
  Compass,
  HandHeart,
  Library,
  Target,
  Trophy,
  Bell,
  Calendar,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Complete Quran",
    desc: "Read the entire Quran with Arabic text, translations in multiple languages, and detailed tafseer.",
  },
  {
    icon: Clock,
    title: "Prayer Times",
    desc: "Accurate prayer times calculated based on your location with multiple calculation methods.",
  },
  {
    icon: Compass,
    title: "Qibla Direction",
    desc: "Find the Qibla direction accurately using your device's compass and GPS.",
  },
  {
    icon: HandHeart,
    title: "Duas & Dhikr",
    desc: "Comprehensive collection of duas and dhikr for all occasions with translations.",
  },
  {
    icon: Library,
    title: "Hadith Collection",
    desc: "Access authentic hadith collections with search functionality and categorization.",
  },
  {
    icon: Target,
    title: "Tasbeeh Counter",
    desc: "Digital tasbeeh counter to keep track of your dhikr and set daily goals.",
  },
  {
    icon: Trophy,
    title: "Khatm Tracker",
    desc: "Track your progress through Quran completions with personal goals and streaks.",
  },
  {
    icon: Bell,
    title: "Prayer Reminders",
    desc: "Get timely notifications so you never miss a prayer, with adjustable reminder settings.",
  },
  {
    icon: Calendar,
    title: "Islamic Calendar",
    desc: "Hijri calendar with Ramadan special events and Islamic dates throughout the year.",
  },
];

export default function Features() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-primary-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Animated orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-gold-400/15 blur-3xl animate-orb" />
        <div
          className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-primary-400/20 blur-3xl animate-orb"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300 animate-zoom-in">
              Powers of HIDAYAH365
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 dark:text-white text-balance">
              A complete toolkit for{" "}
              <span className="shimmer-text">every act of worship</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughtfully crafted features covering the Quran, prayer, remembrance and more.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 120}>
              <div className="card-hover group h-full bg-white dark:bg-gray-800 p-7 rounded-3xl shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 hover-lift">
                <div className="card-icon inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 mb-5">
                  <feature.icon size={24} aria-hidden="true" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">{feature.title}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-gold-500 rounded-full transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
