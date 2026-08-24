import Reveal from "@/components/Reveal";
import GooglePlayBadge from "@/components/GooglePlayBadge";
import NotifyForm from "@/components/NotifyForm";

const steps = [
  {
    icon: "\u{1F6E1}\uFE0F",
    title: "1. Install from the Play Store",
    desc: "Once released, HIDAYAH365 will be available free on Google Play — one tap to install.",
  },
  {
    icon: "\u{1F4C1}",
    title: "2. Set your language",
    desc: "Choose English or Urdu, then set your location for accurate prayer times and Qibla.",
  },
  {
    icon: "\u{1F5A5}",
    title: "3. Start exploring",
    desc: "Read Quran, track prayers, make duas and build your daily routine with guidance at your side.",
  },
];

const platforms = [
  { name: "Android", icon: "\u{1F4F1}", note: "Primary platform — Android 7.0 and above" },
  { name: "iOS", icon: "\u{1F34E}", note: "Planned for a future release" },
  { name: "Web", icon: "\u{1F310}", note: "Companion preview site — this website" },
];

export default function Download() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-primary-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 -left-16 w-72 h-72 rounded-full bg-primary-400/20 blur-3xl animate-orb" />
        <div
          className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-gold-400/15 blur-3xl animate-orb"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300">
              Get started
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 dark:text-white text-balance">
              Download <span className="shimmer-text">HIDAYAH365</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Free, private and built to enrich your daily worship. Here is what to expect on launch.
            </p>
          </div>
        </Reveal>

        {/* Badge */}
        <Reveal delay={150}>
          <div className="mt-12 flex justify-center">
            <GooglePlayBadge className="animate-bounce-slow" />
          </div>
        </Reveal>

        {/* Platforms */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div className="card-hover h-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 text-center hover-lift">
                <div className="card-icon text-4xl mb-3">{p.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{p.name}</h3>
                <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* How to get started */}
        <Reveal>
          <h2 className="mt-20 text-3xl font-bold text-center text-gray-900 dark:text-white">
            How it works
          </h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 130}>
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-7 hover-lift">
                <div className="text-4xl animate-float" style={{ animationDelay: `${i * 0.6}s` }}>
                  {step.icon}
                </div>
                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Early access CTA */}
        <Reveal delay={100}>
          <div className="mt-20 text-center bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-10 hover-lift">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Want to know when we launch?
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Leave your email and we&apos;ll let you know the moment HIDAYAH365 is live on the Play Store.
            </p>
            <NotifyForm />
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-semibold hover:underline"
            >
              Or contact the team directly →
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
