"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import GooglePlayBadge from "@/components/GooglePlayBadge";
import { useAppContext } from "@/components/AppProvider";
import { PLAY_STORE_URL } from "../../lib/site";
import { ShieldCheck, Languages, Sparkles, Smartphone, Apple, Globe, ArrowRight } from "lucide-react";

const text = {
  en: {
    badge: "Now available",
    titleA: "Download",
    lead: "Free, private and built to enrich your daily worship. Install it from Google Play in one tap, with no account needed.",
    platforms: [
      { name: "Android", note: "Available on Google Play. Android 7.0 and above" },
      { name: "iOS", note: "Planned for a future release" },
      { name: "Web", note: "Companion site, this website" },
    ],
    howH: "How it works",
    steps: [
      { title: "1. Install from the Play Store", desc: "Tap the Google Play button above and press Install. The app is free." },
      { title: "2. Set your language", desc: "Choose English or Urdu, then allow location for accurate prayer times, Qibla and nearby mosques." },
      { title: "3. Start exploring", desc: "Read the Quran, track your prayers, make duas and build a daily routine with guidance at your side." },
    ],
    helpH: "Questions or feedback?",
    help: "We would love to hear from you. A review on Google Play also helps other Muslims find the app.",
    contact: "Contact the team",
    review: "Leave a review on Google Play",
  },
  ur: {
    badge: "اب دستیاب ہے",
    titleA: "ڈاؤن لوڈ",
    lead: "مفت، نجی اور آپ کی روزمرہ عبادت کو بہتر بنانے کے لیے۔ گوگل پلے سے ایک ٹیپ میں انسٹال کریں، اکاؤنٹ کی ضرورت نہیں۔",
    platforms: [
      { name: "اینڈرائیڈ", note: "گوگل پلے پر دستیاب۔ اینڈرائیڈ 7.0 اور اس سے اوپر" },
      { name: "iOS", note: "مستقبل کے ورژن میں شامل کرنے کا ارادہ ہے" },
      { name: "ویب", note: "ساتھی سائٹ، یہی ویب سائٹ" },
    ],
    howH: "یہ کیسے کام کرتی ہے",
    steps: [
      { title: "1. پلے اسٹور سے انسٹال کریں", desc: "اوپر گوگل پلے کے بٹن پر ٹیپ کریں اور انسٹال دبائیں۔ ایپ مفت ہے۔" },
      { title: "2. اپنی زبان منتخب کریں", desc: "انگریزی یا اردو چنیں، پھر درست نماز کے اوقات، قبلہ رخ اور قریبی مساجد کے لیے مقام کی اجازت دیں۔" },
      { title: "3. استعمال شروع کریں", desc: "قرآن پڑھیں، نمازوں کا حساب رکھیں، دعائیں کریں اور رہنمائی کے ساتھ اپنا روزانہ کا معمول بنائیں۔" },
    ],
    helpH: "سوال یا رائے؟",
    help: "ہمیں آپ سے سن کر خوشی ہوگی۔ گوگل پلے پر آپ کا ریویو دوسرے مسلمانوں کو ایپ تک پہنچنے میں مدد دیتا ہے۔",
    contact: "ٹیم سے رابطہ کریں",
    review: "گوگل پلے پر ریویو دیں",
  },
};

const stepIcons = [ShieldCheck, Languages, Sparkles];
const platformIcons = [Smartphone, Apple, Globe];

export default function Download() {
  const { language } = useAppContext();
  const t = text[language];
  const ur = language === "ur";

  return (
    <div
      dir={ur ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-primary-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
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
              {t.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 dark:text-white text-balance">
              {t.titleA} <span className="shimmer-text">HIDAYAH365</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.lead}</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex justify-center">
            <GooglePlayBadge className="animate-bounce-slow" />
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {t.platforms.map((p, i) => {
            const Icon = platformIcons[i];
            return (
              <Reveal key={p.name} delay={i * 120}>
                <div className="card-hover h-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 text-center hover-lift">
                  <div className="card-icon flex items-center justify-center text-primary-600 dark:text-primary-300 mb-3">
                    <Icon size={36} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{p.note}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <h2 className="mt-20 text-3xl font-bold text-center text-gray-900 dark:text-white">{t.howH}</h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {t.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal key={step.title} delay={i * 130}>
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-7 hover-lift">
                  <div
                    className="inline-flex items-center justify-center text-primary-600 dark:text-primary-300 animate-float"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    <Icon size={36} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-20 text-center bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-10 hover-lift">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{t.helpH}</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">{t.help}</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                {t.contact} <ArrowRight size={16} aria-hidden="true" className={ur ? "rotate-180" : ""} />
              </Link>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 dark:text-primary-400 font-semibold hover:underline"
              >
                {t.review}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
