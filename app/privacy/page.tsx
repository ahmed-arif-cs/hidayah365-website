"use client";

import type React from "react";
import Reveal from "@/components/Reveal";
import { useAppContext } from "@/components/AppProvider";

const content = {
  en: {
    badge: "Your trust matters",
    titleA: "Privacy",
    titleB: "Policy",
    updated: "Last updated: August 23, 2026",
    introH: "Introduction",
    intro:
      "HIDAYAH365 is committed to protecting your privacy. This Privacy Policy explains how our mobile application handles information when you use our app.",
    dataH: "Data Collection and Storage",
    dataServer:
      "No Server-Side Data Storage: HIDAYAH365 does not collect, transmit, or store any personal user data on external servers. All user data remains entirely on your device.",
    dataLocal:
      "Local Storage: The app stores the following data locally on your device using SQLite database and SharedPreferences:",
    dataItems: [
      "Bookmarks (Quran verses, hadith, duas)",
      "Personal notes on Ayahs",
      "Prayer tracking history",
      "Ramadan fasting logs",
      "Tasbeeh/Dhikr counts",
      "Khatm (Quran completion) goals",
      "Zakat calculation history",
      "App settings and preferences",
      "Last known location for offline prayer times",
    ],
    dataNone:
      "None of this locally stored data is transmitted to our servers or shared with third parties.",
    locH: "Location Access",
    locIntro: "HIDAYAH365 accesses your device\u2019s location only when needed for specific features:",
    locItems: [
      "Foreground Only: Location is accessed only when the app is open and you are actively using features that require it (Prayer Times, Qibla direction, or Mosque search).",
      "No Background Access: The app never accesses your location when running in the background or when closed.",
      "No Location History: Location data is used transiently for calculations and is not stored as a history. Only the last known coordinates are saved locally to enable offline prayer time calculations.",
      "Permission: The app requests ACCESS_FINE_LOCATION permission, which you can grant or deny.",
    ],
    permH: "Permissions",
    permIntro: "The app requests the following permissions on Android:",
    permItems: [
      "ACCESS_FINE_LOCATION - For accurate prayer times and Qibla direction",
      "INTERNET - For downloading Quran content, updates, and ads",
      "SCHEDULE_EXACT_ALARM - For prayer time notifications",
    ],
    thirdH: "Third-Party Services",
    thirdAdmob:
      "AdMob: The app integrates Google AdMob for displaying advertisements. AdMob may collect advertising identifiers and use cookies to serve personalized ads. You can opt out of personalized advertising in your device settings.",
    thirdApi:
      "Content APIs: The app fetches Quran, Tafseer, and Hadith content from third-party APIs. These are read-only content sources; no user data is sent to these services.",
    childH: "Children\u2019s Privacy",
    child:
      "HIDAYAH365 is designed for a general audience and does not knowingly collect personal information from children under 13. We do not direct the app at children under 13.",
    changeH: "Changes to This Policy",
    change:
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the Last updated date. You are advised to review this Privacy Policy periodically for any changes.",
    contactH: "Contact Us",
    contactIntro:
      "If you have any questions about this Privacy Policy, please contact us at:",
    contactEmail: "agcompanies.official@gmail.com",
  },
  ur: {
    badge: "آپ کا اعتماد ہمارے لیے اہم ہے",
    titleA: "پرائیویسی",
    titleB: "پالیسی",
    updated: "آخری تازہ کاری: 23 اگست 2026",
    introH: "تعارف",
    intro:
      "HIDAYAH365 آپ کی پرائیویسی کے تحفظ کا پابند ہے۔ یہ پرائیویسی پالیسی واضح کرتی ہے کہ ہماری موبائل ایپ آپ کے استعمال کے دوران معلومات کیسے ہینڈل کرتی ہے۔",
    dataH: "ڈیٹا کا حصول اور ذخیرہ",
    dataServer:
      "سرور پر کوئی ڈیٹا محفوظ نہیں: HIDAYAH365 کسی بھی قسم کا ذاتی ڈیٹا بیرونی سرورز پر جمع، منتقل یا محفوظ نہیں کرتی۔ آپ کا سارا ڈیٹا مکمل طور پر آپ کے آلے پر رہتا ہے۔",
    dataLocal:
      "مقامی ذخیرہ: ایپ درج ذیل معلومات آپ کے آلے پر SQLite ڈیٹا بیس اور SharedPreferences کے ذریعے محفوظ کرتی ہے:",
    dataItems: [
      "بک مارکس (قرآن آیات، حدیث، دعائیں)",
      "آیات پر ذاتی نوٹس",
      "نماز کی ترقی کی تاریخ",
      "رمضان کے روزوں کا ریکارڈ",
      "تسبیح/ذکر کی گنتی",
      "ختم قرآن کے اہداف",
      "زکوۃ کی حساب کی تاریخ",
      "ایپ کی سیٹنگز اور ترجیحات",
      "آف لائن اوقات نماز کے لیے آخری معلوم مقام",
    ],
    dataNone:
      "ان میں سے کوئی بھی مقامی ڈیٹا ہمارے سرورز کو منتقل نہیں کیا جاتا اور نہ کسی تیسرے فریق کو دیا جاتا ہے۔",
    locH: "مقام تک رسائی",
    locIntro:
      "HIDAYAH365 صرف مخصوص فیچرز کی ضرورت کے وقت آپ کے آلے کا مقام استعمال کرتی ہے:",
    locItems: [
      "صرف foreground میں: مقام صرف اس وقت استعمال ہوتا ہے جب ایپ کھلی ہو اور آپ اس فیچر کو استعمال کر رہے ہوں (نماز کے اوقات، قبلہ رخ، یا مسجد کی تلاش)",
      "background میں کوئی رسائی نہیں: ایپ کبھی بھی پس منظر میں یا بند ہونے پر آپ کا مقام استعمال نہیں کرتی۔",
      "مقام کی تاریخ محفوظ نہیں کی جاتی: مقام کا ڈیٹا صرف حساب کے لیے عارضی طور پر استعمال ہوتا ہے۔ صرف آخری معلوم کوآرڈینیٹ آف لائین نماز کے اوقات کے لیے مقامی طور پر محفوظ کیے جاتے ہیں۔",
      "اجازت: ایپ ACCESS_FINE_LOCATION کی اجازت مانگتی ہے، جو آپ قبول یا مسترد کر سکتے ہیں۔",
    ],
    permH: "اجازتیں",
    permIntro: "ایپ درج ذیل اجازتیں Android پر درخواست کرتی ہے:",
    permItems: [
      "ACCESS_FINE_LOCATION - درست نماز کے اوقات اور قبلہ رخ کے لیے",
      "INTERNET - قرآن کا مواد، اپ ڈیٹس اور اشتہارات ڈاؤن لوڈ کرنے کے لیے",
      "SCHEDULE_EXACT_ALARM - نماز کے اوقات کی اطلاعوں کے لیے",
    ],
    thirdH: "تیسرے فریق کی خدمات",
    thirdAdmob:
      "AdMob: ایپ اشتہارات دکھانے کے لیے Google AdMob کو استعمال کرتی ہے۔ AdMob اشتہاری شناخت اور کوکیز جمع کر سکتا ہے تاکہ ذاتی نوعیت کے اشتہارات دکھائے جا سکیں۔ آپ اپنی ڈیوائس کی ترتیبات میں ذاتی اشتہارات کو بند کر سکتے ہیں۔",
    thirdApi:
      "مواد کی APIs: ایپ قرآن، تفسیر اور حدیث کا مواد تیسرے فریق کی APIs سے حاصل کرتی ہے۔ یہ صرف پڑھنے کے لیے مواد کے ذرائع ہیں؛ صارف کا کوئی ڈیٹا ان خدمات کو نہیں بھیجا جاتا۔",
    childH: "بچوں کی پرائیویسی",
    child:
      "HIDAYAH365 عام صارفین کے لیے بنائی گئی ہے اور 13 سال سے کم عمر بچوں کی ذاتی معلومات جان بوجھ کر جمع نہیں کرتی۔ ہم ایپ براہ راست 13 سال سے کم عمر بچوں کو نشانہ نہیں بناتے۔",
    changeH: "پالیسی میں تبدیلیاں",
    change:
      "ہم وقتاً فوقتاً اس پرائیویسی پالیسی کو اپڈیٹ کر سکتے ہیں۔ تبدیلیوں کے بارے میں آپ کو اس صفحے پر نئی پالیسی شائع کر کے آگاہ کیا جائے گا اور \u201cآخری تازہ کاری\u201d کی تاریخ بھی اپڈیٹ کی جائے گی۔ آپ کو مشورہ دیا جاتا ہے کہ اس پالیسی کا وقتاً فوقتاً جائزہ لیتے رہیں۔",
    contactH: "ہم سے رابطہ",
    contactIntro:
      "اگر اس پرائیویسی پالیسی کے بارے میں کوئی سوال ہو تو بریہ کرم ہم سے رابطہ کریں:",
    contactEmail: "agcompanies.official@gmail.com",
  },
};

export default function Privacy() {
  const { language } = useAppContext();
  const t = content[language];
  const ur = language === "ur";

  const sections: { h: string; body: React.ReactNode }[] = [
    { h: t.introH, body: <p className="leading-relaxed">{t.intro}</p> },
    {
      h: t.dataH,
      body: (
        <>
          <p className="leading-relaxed font-semibold text-primary-700 dark:text-primary-300">
            {t.dataServer}
          </p>
          <p className="mt-4 leading-relaxed">{t.dataLocal}</p>
          <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-gold-500">
            {t.dataItems.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed">{t.dataNone}</p>
        </>
      ),
    },
    {
      h: t.locH,
      body: (
        <>
          <p className="leading-relaxed">{t.locIntro}</p>
          <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-gold-500">
            {t.locItems.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      h: t.permH,
      body: (
        <>
          <p className="leading-relaxed">{t.permIntro}</p>
          <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-gold-500">
            {t.permItems.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      h: t.thirdH,
      body: (
        <>
          <p className="leading-relaxed">{t.thirdAdmob}</p>
          <p className="mt-3 leading-relaxed">{t.thirdApi}</p>
        </>
      ),
    },
    { h: t.childH, body: <p className="leading-relaxed">{t.child}</p> },
    { h: t.changeH, body: <p className="leading-relaxed">{t.change}</p> },
    {
      h: t.contactH,
      body: (
        <>
          <p className="leading-relaxed">{t.contactIntro}</p>
          <a
            href={`mailto:${t.contactEmail}`}
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-primary-50 dark:bg-primary-900/30 px-4 py-2.5 font-semibold text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-300"
          >
            {t.contactEmail}
          </a>
        </>
      ),
    },
  ];

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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300 animate-zoom-in">
              {t.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 dark:text-white text-balance">
              {t.titleA} <span className="shimmer-text">{t.titleB}</span>
            </h1>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{t.updated}</p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.h} delay={(i % 4) * 90}>
              <div className="bg-white dark:bg-gray-800 p-7 sm:p-9 rounded-3xl shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{section.h}</h2>
                <div className="mt-4 text-gray-600 dark:text-gray-400">{section.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
