import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Check } from "lucide-react";

const roadmap = [
  {
    phase: "Live today",
    title: "Core worship tools",
    status: "Released",
    items: [
      "Quran with translations, word-by-word, tafseer and recitation",
      "Hadith collections with bookmarks",
      "Prayer times, azan alarms with your masjid timings, Qibla and nearby mosques",
      "Duas, Azkar, Asma-ul-Husna and Masail Q&A",
    ],
  },
  {
    phase: "Live today",
    title: "Daily practice",
    status: "Released",
    items: [
      "Tasbeeh counter, Khatm tracker and prayer habit tracker",
      "Ramadan tools and Hijri calendar",
      "Zakat calculator and Hajj & Umrah guide",
      "English and Urdu, light and dark themes",
    ],
  },
  {
    phase: "Next",
    title: "Ideas we are considering",
    status: "Planned",
    items: [
      "More app languages",
      "Downloadable audio for offline listening",
      "An iOS version",
    ],
  },
];

const statusColors: Record<string, string> = {
  Released: "bg-primary-500/10 text-primary-600 dark:text-primary-300 border-primary-500/40",
  Planned: "bg-gold-500/15 text-gold-600 dark:text-gold-400 border-gold-500/40",
};

export default function Roadmap() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-primary-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 right-1/3 w-72 h-72 rounded-full bg-gold-400/15 blur-3xl animate-orb" />
        <div
          className="absolute bottom-1/4 -left-16 w-72 h-72 rounded-full bg-primary-400/20 blur-3xl animate-orb"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300">
              Where we are headed
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 dark:text-white text-balance">
              Development <span className="shimmer-text">roadmap</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              HIDAYAH365 is live on Google Play. Here is what is already in the app and what we are thinking about next.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {roadmap.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="card-hover h-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-7 hover-lift">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusColors[item.status]}`}
                  >
                    {item.status}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                    {item.phase}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h2>
                <ul className="mt-4 space-y-2">
                  {item.items.map((li) => (
                    <li key={li} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold-500" aria-hidden="true" />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500 italic">
            The ideas under &ldquo;Next&rdquo; are directions we are considering, not confirmed commitments.
          </p>
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Have an idea?{" "}
            <Link href="/contact" className="font-semibold text-primary-600 dark:text-primary-300 hover:underline">
              Tell us
            </Link>
          </p>
        </Reveal>
      </div>
    </div>
  );
}
