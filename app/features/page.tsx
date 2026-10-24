"use client";

import Reveal from "@/components/Reveal";
import GooglePlayBadge from "@/components/GooglePlayBadge";
import { useAppContext } from "@/components/AppProvider";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Headphones,
  Languages,
  Layers,
  Library,
  HandHeart,
  Sparkles,
  MessageCircleQuestion,
  Clock,
  Bell,
  Compass,
  MapPin,
  Calendar,
  Target,
  Trophy,
  ListChecks,
  Moon,
  GraduationCap,
  Heart,
  Plane,
  Calculator,
  Search,
  Share2,
} from "lucide-react";

type Feature = { icon: LucideIcon; en: [string, string]; ur: [string, string] };
type Category = { en: string; ur: string; features: Feature[] };

const categories: Category[] = [
  {
    en: "Quran",
    ur: "قرآن",
    features: [
      {
        icon: BookOpen,
        en: ["Read the Quran", "The full Quran with several Quranic script styles and a mushaf-style view."],
        ur: ["قرآن پڑھیں", "پورا قرآن مختلف قرآنی رسم الخط اور مصحف طرز کے منظر کے ساتھ۔"],
      },
      {
        icon: Languages,
        en: ["Translations & word by word", "Verse translations and word-by-word meanings to understand every ayah."],
        ur: ["ترجمہ اور لفظ بہ لفظ", "ہر آیت سمجھنے کے لیے ترجمہ اور لفظ بہ لفظ معنی۔"],
      },
      {
        icon: Library,
        en: ["Tafseer", "Read tafseer by surah and ayah, in your chosen tafseer language."],
        ur: ["تفسیر", "سورت اور آیت کے لحاظ سے تفسیر، اپنی منتخب زبان میں۔"],
      },
      {
        icon: Headphones,
        en: ["Recitation", "Listen to Quran recitation from a choice of reciters."],
        ur: ["تلاوت", "مختلف قاریوں کی تلاوت سنیں۔"],
      },
      {
        icon: Layers,
        en: ["Topics & similar ayahs", "Explore ayahs by topic, find similar ayahs and read background on every surah."],
        ur: ["موضوعات اور ملتی جلتی آیات", "موضوع کے لحاظ سے آیات دیکھیں، ملتی جلتی آیات تلاش کریں اور ہر سورت کا تعارف پڑھیں۔"],
      },
    ],
  },
  {
    en: "Hadith & Duas",
    ur: "حدیث اور دعائیں",
    features: [
      {
        icon: Library,
        en: ["Hadith collections", "Browse Bukhari, Muslim, Abu Dawood, Tirmidhi, Nasa’i and Ibn Majah by book and chapter."],
        ur: ["احادیث کے مجموعے", "بخاری، مسلم، ابو داؤد، ترمذی، نسائی اور ابن ماجہ کو کتاب اور باب کے لحاظ سے پڑھیں۔"],
      },
      {
        icon: HandHeart,
        en: ["Duas & Azkar", "Duas and azkar for daily life, organised by occasion."],
        ur: ["دعائیں اور اذکار", "روزمرہ زندگی کی دعائیں اور اذکار، مواقع کے لحاظ سے۔"],
      },
      {
        icon: Sparkles,
        en: ["Asma-ul-Husna", "The 99 Names of Allah with their meanings."],
        ur: ["اسمائے حسنیٰ", "اللہ تعالیٰ کے 99 نام معانی کے ساتھ۔"],
      },
      {
        icon: MessageCircleQuestion,
        en: ["Masail (Q&A)", "Urdu questions and answers on everyday matters, sourced from IslamHouse."],
        ur: ["مسائل (سوال و جواب)", "روزمرہ مسائل پر اردو سوال و جواب، IslamHouse سے ماخوذ۔"],
      },
    ],
  },
  {
    en: "Prayer & Qibla",
    ur: "نماز اور قبلہ",
    features: [
      {
        icon: Clock,
        en: ["Prayer times", "Prayer times for your location, calculated on your device and available offline."],
        ur: ["نماز کے اوقات", "آپ کے مقام کے مطابق نماز کے اوقات، آپ کے آلے پر حساب ہوتے ہیں اور آف لائن بھی چلتے ہیں۔"],
      },
      {
        icon: Bell,
        en: ["Azan & masjid timings", "Set your own masjid’s timings and get an azan alarm for each prayer, with a choice of azan sounds or your own audio."],
        ur: ["اذان اور مسجد کے اوقات", "اپنی مسجد کے اوقات مقرر کریں اور ہر نماز کے لیے اذان کا الارم پائیں؛ اذان کی مختلف آوازیں یا اپنی آڈیو منتخب کریں۔"],
      },
      {
        icon: Compass,
        en: ["Qibla direction", "Find the Qibla using your phone’s compass."],
        ur: ["قبلہ رخ", "فون کے کمپاس سے قبلہ رخ معلوم کریں۔"],
      },
      {
        icon: MapPin,
        en: ["Nearby mosques", "Find mosques around you using OpenStreetMap data."],
        ur: ["قریبی مساجد", "OpenStreetMap کے ڈیٹا سے اپنے قریب کی مساجد تلاش کریں۔"],
      },
      {
        icon: Calendar,
        en: ["Hijri calendar", "The Hijri calendar with Islamic dates and occasions."],
        ur: ["ہجری کیلنڈر", "اسلامی تاریخوں اور مواقع کے ساتھ ہجری کیلنڈر۔"],
      },
    ],
  },
  {
    en: "Daily worship tracking",
    ur: "روزانہ عبادت کا حساب",
    features: [
      {
        icon: Target,
        en: ["Tasbeeh counter", "Digital tasbeeh with dhikr presets, haptic feedback, history and streaks."],
        ur: ["تسبیح کاؤنٹر", "اذکار کے پریسیٹس، ہیپٹک فیڈبیک، تاریخ اور تسلسل کے ساتھ ڈیجیٹل تسبیح۔"],
      },
      {
        icon: Trophy,
        en: ["Khatm tracker", "Track your Khatm-ul-Quran progress."],
        ur: ["ختم ٹریکر", "ختمِ قرآن کی پیش رفت کا حساب رکھیں۔"],
      },
      {
        icon: ListChecks,
        en: ["Prayer habit tracker", "Log your prayers and keep your consistency."],
        ur: ["نماز کی عادت کا ٹریکر", "اپنی نمازوں کا ریکارڈ رکھیں اور تسلسل برقرار رکھیں۔"],
      },
      {
        icon: Moon,
        en: ["Ramadan tools", "Ramadan countdown, sehri and iftar timetable, fasting tracker and Ramadan duas."],
        ur: ["رمضان کے ٹولز", "رمضان کاؤنٹ ڈاؤن، سحر و افطار کا نظام الاوقات، روزوں کا ٹریکر اور رمضان کی دعائیں۔"],
      },
    ],
  },
  {
    en: "Learn & guides",
    ur: "سیکھیں اور رہنمائی",
    features: [
      {
        icon: GraduationCap,
        en: ["Qaida & Tajweed", "Learn the basics of reading the Quran with Qaida and Tajweed lessons."],
        ur: ["قاعدہ اور تجوید", "قاعدہ اور تجوید کے اسباق سے قرآن پڑھنے کی بنیاد سیکھیں۔"],
      },
      {
        icon: Heart,
        en: ["Six Kalmas & Shahada", "The Six Kalmas and the Shahada, always at hand."],
        ur: ["چھ کلمے اور کلمۂ شہادت", "چھ کلمے اور کلمۂ شہادت ہر وقت آپ کے ہاتھ میں۔"],
      },
      {
        icon: Plane,
        en: ["Hajj & Umrah guide", "A step-by-step ritual guide and a packing checklist."],
        ur: ["حج و عمرہ گائیڈ", "مناسک کی مرحلہ وار رہنمائی اور پیکنگ چیک لسٹ۔"],
      },
    ],
  },
  {
    en: "Everyday tools",
    ur: "روزمرہ سہولیات",
    features: [
      {
        icon: Calculator,
        en: ["Zakat calculator", "Work out your zakat with a simple calculator."],
        ur: ["زکوٰۃ کیلکولیٹر", "آسان کیلکولیٹر سے اپنی زکوٰۃ کا حساب لگائیں۔"],
      },
      {
        icon: Search,
        en: ["Search, bookmarks & notes", "Search across the app, bookmark favourites and keep private notes on ayahs."],
        ur: ["تلاش، بک مارکس اور نوٹس", "پوری ایپ میں تلاش کریں، پسندیدہ مواد بک مارک کریں اور آیات پر نجی نوٹس رکھیں۔"],
      },
      {
        icon: Share2,
        en: ["Share beautifully", "Share ayahs, hadith and duas as text or as a styled image."],
        ur: ["خوبصورت شیئرنگ", "آیات، احادیث اور دعائیں متن یا خوبصورت تصویر کی صورت میں شیئر کریں۔"],
      },
      {
        icon: Languages,
        en: ["English & Urdu, light & dark", "English by default with full Urdu support, plus light and dark themes."],
        ur: ["انگریزی، اردو، لائٹ اور ڈارک", "ڈیفالٹ انگریزی اور مکمل اردو سپورٹ، لائٹ اور ڈارک تھیم کے ساتھ۔"],
      },
    ],
  },
];

const copy = {
  en: {
    badge: "Inside HIDAYAH365",
    titleA: "A complete toolkit for",
    titleB: "every act of worship",
    lead: "Free on Google Play, with no account needed. Here is everything the app offers today.",
    cta: "Get HIDAYAH365 on Google Play",
  },
  ur: {
    badge: "HIDAYAH365 کے اندر",
    titleA: "ہر عبادت کے لیے",
    titleB: "مکمل ٹول کٹ",
    lead: "گوگل پلے پر مفت، اکاؤنٹ کی ضرورت نہیں۔ ایپ آج جو کچھ پیش کرتی ہے وہ سب یہاں ہے۔",
    cta: "گوگل پلے سے HIDAYAH365 حاصل کریں",
  },
};

export default function Features() {
  const { language } = useAppContext();
  const ur = language === "ur";
  const c = copy[language];

  return (
    <div
      dir={ur ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-primary-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
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
            <span className="inline-block rounded-full border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300">
              {c.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 dark:text-white text-balance">
              {c.titleA} <span className="shimmer-text">{c.titleB}</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{c.lead}</p>
          </div>
        </Reveal>

        {categories.map((cat) => (
          <section key={cat.en} className="mt-16">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {ur ? cat.ur : cat.en}
              </h2>
            </Reveal>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.features.map((f, i) => {
                const [title, desc] = ur ? f.ur : f.en;
                const Icon = f.icon;
                return (
                  <Reveal key={f.en[0]} delay={(i % 3) * 100}>
                    <div className="card-hover group h-full bg-white dark:bg-gray-800 p-7 rounded-3xl shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 hover-lift">
                      <div className="card-icon inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 mb-5">
                        <Icon size={24} aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                      <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-gold-500 rounded-full transition-all duration-500" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        ))}

        <Reveal delay={100}>
          <div className="mt-20 text-center">
            <p className="mb-5 text-lg font-semibold text-gray-800 dark:text-gray-200">{c.cta}</p>
            <GooglePlayBadge />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
