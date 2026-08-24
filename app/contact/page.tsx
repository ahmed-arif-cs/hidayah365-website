import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageCircle, Target } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "agcompanies.official@gmail.com",
    href: "mailto:agcompanies.official@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Response time",
    value: "We reply within 2–3 business days.",
  },
  {
    icon: Target,
    label: "Focus",
    value: "Support, feedback and partnership enquiries.",
  },
];

export default function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-primary-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 right-1/4 w-72 h-72 rounded-full bg-gold-400/15 blur-3xl animate-orb" />
        <div
          className="absolute bottom-10 -left-16 w-72 h-72 rounded-full bg-primary-400/20 blur-3xl animate-orb"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300">
              We are listening
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 dark:text-white text-balance">
              Get in <span className="shimmer-text">touch</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Questions, feedback or suggestions — we would love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, i) => (
              <Reveal key={item.label} delay={i * 110}>
                <div className="card-hover flex items-start gap-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 hover-lift-sm">
                  <span className="card-icon inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300">
                    <item.icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 font-semibold text-primary-600 dark:text-primary-300 hover:underline break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-gray-700 dark:text-gray-200 text-sm">{item.value}</div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
