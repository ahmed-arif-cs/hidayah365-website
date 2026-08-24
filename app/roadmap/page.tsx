import Reveal from "@/components/Reveal";
import { Check } from "lucide-react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "In progress",
    items: [
      "Quran with tafseer and multiple translations",
      "Prayer times & Qibla direction",
      "Hadith collections with search",
      "Duas, Azkar and Tasbeeh counter",
    ],
  },
  {
    phase: "Phase 2",
    title: "Connect & Personalize",
    status: "Planned",
    items: [
      "User accounts and cloud sync",
      "Personal bookmarks and notes across devices",
      "Custom prayer calculation methods",
      "Home-screen widget for prayer times",
    ],
  },
  {
    phase: "Phase 3",
    title: "Community & Content",
    status: "Planned",
    items: [
      "Local mosque finder and directory",
      "Community features and daily reminders",
      "Additional tafsir and translation sources",
      "Full offline mode with downloadable audio",
    ],
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    status: "Vision",
    items: [
      "Hajj & Umrah guides and checklists",
      "Ruqyah and morning/evening adhkar",
      "Zakat calculator with Nisab support",
      "Advanced analytics and insights",
    ],
  },
];

const statusColors: Record<string, string> = {
  "In progress": "bg-gold-500/15 text-gold-600 dark:text-gold-400 border-gold-500/40 animate-pulse-glow",
  Planned: "bg-primary-500/10 text-primary-600 dark:text-primary-300 border-primary-500/40",
  Vision: "bg-gray-500/10 text-gray-600 dark:text-gray-300 border-gray-400/40",
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
              HIDAYAH365 is built phase by phase, with community feedback shaping what comes next.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 relative overflow-hidden rounded-3xl border-2 border-gold-400/50 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 p-8 sm:p-10 shadow-2xl shadow-primary-900/30">
            <div aria-hidden="true" className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gold-400/20 blur-3xl animate-pulse-glow" />
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/20 border border-gold-400/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
                  </span>
                  Confirmed next update
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-black text-white">September 27</h2>
                <p className="mt-1 text-primary-200 text-sm">The next HIDAYAH365 update arrives on this date.</p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-5xl sm:text-6xl font-black text-gold-400">27</div>
                <div className="text-primary-200 text-sm font-medium">September</div>
              </div>
            </div>
            <ul className="relative mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Fully working offline Quran reading, corrected from earlier connectivity issues",
                "Fixed Qibla direction and Nearest Mosque location detection",
                "One unified Bookmarks & Favorites hub for Ayahs, Hadith, Duas and Masail",
                "Complete Tafseer library with scholar selection",
                "Qaida & Tajweed lessons with letter-by-letter audio",
                "Full Urdu translation across every screen and guide",
                "Ramadan Companion fixes for the fasting and Taraweeh tracker",
                "Working prayer reminders with Quran and Hadith verses included",
              ].map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-primary-50">
                  <Check size={16} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="relative mt-16 space-y-10 before:absolute before:top-2 before:bottom-2 before:left-5 md:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:via-gold-500 before:to-primary-500">
          {roadmap.map((item, i) => (
            <Reveal key={item.phase} delay={i * 120}>
              <div className={`relative flex md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"} pl-14 md:pl-0 ${i % 2 === 1 ? "md:pl-12" : ""}`}>
                <span className="absolute left-2.5 top-6 md:left-auto md:-translate-x-1/2 md:translate-y-0 flex items-center justify-center w-5 h-5 rounded-full bg-gold-500 border-4 border-white dark:border-gray-900 animate-pulse">
                  {}
                </span>
                {}
                <div className="card-hover w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-7 hover-lift">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusColors[item.status]}`}>
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
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500 italic">
            Phases below are directional ideas we&apos;re considering, not confirmed commitments &mdash; only the
            September 27 update above is confirmed.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
