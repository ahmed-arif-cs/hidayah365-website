"use client";

import Reveal from "@/components/Reveal";
import { useAppContext } from "@/components/AppProvider";

const CONTACT_EMAIL = "agcompanies.official@gmail.com";

type Sec = { h: string; p?: string[]; items?: string[]; after?: string };

const content: Record<
  "en" | "ur",
  { badge: string; titleA: string; titleB: string; updated: string; contactIntro: string; sections: Sec[]; contactH: string }
> = {
  en: {
    badge: "Your trust matters",
    titleA: "Privacy",
    titleB: "Policy",
    updated: "Last updated: October 24, 2026",
    contactH: "Contact us",
    contactIntro: "If you have any questions about this Privacy Policy, please contact us at:",
    sections: [
      {
        h: "Introduction",
        p: [
          "HIDAYAH365 (“the app”) is an Islamic companion app. This policy explains what information the app handles, where it goes and what choices you have. By using the app you accept this policy.",
        ],
      },
      {
        h: "No accounts, no servers of ours",
        p: [
          "HIDAYAH365 has no sign-up, no login and no user profile. We do not run a server that collects or stores your personal data, and we never ask for your name, email address or phone number.",
        ],
      },
      {
        h: "Data stored on your device",
        p: ["The app keeps the following on your device only:"],
        items: [
          "Settings and preferences (language, theme, translation and tafseer choices)",
          "Bookmarks and your private notes on ayahs",
          "Tasbeeh counts, history and streaks",
          "Khatm-ul-Quran progress",
          "Prayer tracker and Ramadan fasting logs",
          "Masjid timings, alarm sounds and reminder choices that you set",
          "Hajj & Umrah packing checklist",
          "Downloaded (cached) Quran, tafseer and hadith content",
          "Your last known location, so prayer times keep working offline",
        ],
        after:
          "This data stays on your device. It is not uploaded to us and not shared with anyone. Uninstalling the app removes it.",
      },
      {
        h: "Location",
        p: [
          "The app asks for location permission (precise and approximate) only for features that need it: Prayer Times, Qibla and the Nearby Mosque Locator.",
        ],
        items: [
          "Prayer times and Qibla direction are calculated on your device. Your coordinates are not sent anywhere for these two features.",
          "Nearby Mosque Locator: when you use it, your approximate coordinates are sent to OpenStreetMap’s public Overpass API (servers such as overpass-api.de) to find mosques around you. No name, account or advertising ID is attached, but, like any web request, the server can see your IP address.",
          "To show your city name, Android’s built-in geocoding service may be used to turn coordinates into a place name.",
          "Only the last known coordinates are saved on your device, to keep prayer times working offline. No location history is kept.",
          "You can deny or withdraw location permission at any time in your phone’s settings. Features that depend on it may then be limited.",
        ],
      },
      {
        h: "Online content from third parties",
        p: [
          "To load Quran text, translations, tafseer, hadith, Q&A and recitation audio, the app connects to third-party services: Quran Foundation, HadithAPI, IslamHouse, Tarteel (QUL) audio, quran-tafseer.com and data files hosted on GitHub. These requests contain only what is needed to fetch the content, for example which surah or hadith chapter you opened. They do not include your name, email or advertising ID. As with any internet request, these services can see your IP address, and their own privacy policies apply.",
        ],
      },
      {
        h: "Advertising (Google AdMob)",
        items: [
          "The app shows ads (banner and interstitial) served by Google AdMob.",
          "AdMob may collect device identifiers such as the advertising ID and use them to show ads.",
          "Where required, we ask for your consent through Google’s User Messaging Platform before ads load.",
          "You can manage your ad choices in the consent prompt and in your Android ad settings, where you can also reset or delete your advertising ID. See Google’s policy: policies.google.com/technologies/partner-sites",
        ],
      },
      {
        h: "Notifications, alarms and background refresh",
        items: [
          "Prayer reminders and azan alarms are scheduled on your device. No notification data is sent to us.",
          "The app may refresh prayer times and the home-screen widget in the background from time to time (about every six hours, when you are online and the battery is not low).",
          "If you pick your own audio file as an alarm sound, it is read through Android’s file picker and stays on your device.",
        ],
      },
      {
        h: "Permissions",
        p: ["The app requests these permissions on Android:"],
        items: [
          "Precise and approximate location: for prayer times, Qibla and nearby mosques",
          "Internet: to load online content and ads",
          "Notifications: for prayer reminders and azan",
          "Exact alarms: so prayer alarms sound at the right minute",
          "Run at startup: to restore reminders after your phone restarts",
        ],
      },
      {
        h: "Retention and deletion",
        p: [
          "Because we hold no personal data on servers, there is nothing for us to delete on your behalf. You stay in control: use Settings → Data & Storage → Clear cached data to remove downloaded content (your bookmarks and settings are kept), or uninstall the app to remove everything stored on your device. Advertising data is managed by Google through your Android ad settings.",
        ],
      },
      {
        h: "Security",
        p: ["Connections to online services use HTTPS. We do not sell your data."],
      },
      {
        h: "Children’s privacy",
        p: [
          "HIDAYAH365 is designed for a general audience and does not knowingly collect personal information from children under 13. We do not direct the app at children under 13.",
        ],
      },
      {
        h: "This website",
        p: [
          "The contact form on this website sends your message and email address to us by email so that we can reply. We use it only to respond to you.",
        ],
      },
      {
        h: "Changes to this policy",
        p: [
          "We may update this policy from time to time. The new version will be published on this page with an updated “Last updated” date.",
        ],
      },
    ],
  },
  ur: {
    badge: "آپ کا اعتماد ہمارے لیے اہم ہے",
    titleA: "پرائیویسی",
    titleB: "پالیسی",
    updated: "آخری تازہ کاری: 24 اکتوبر 2026",
    contactH: "ہم سے رابطہ",
    contactIntro: "اس پرائیویسی پالیسی کے بارے میں کوئی سوال ہو تو براہ کرم ہم سے رابطہ کریں:",
    sections: [
      {
        h: "تعارف",
        p: [
          "HIDAYAH365 (”ایپ“) ایک اسلامی ساتھی ایپ ہے۔ یہ پالیسی بتاتی ہے کہ ایپ کون سی معلومات استعمال کرتی ہے، وہ کہاں جاتی ہیں اور آپ کے پاس کیا اختیارات ہیں۔ ایپ استعمال کرنے سے آپ اس پالیسی کو قبول کرتے ہیں۔",
        ],
      },
      {
        h: "کوئی اکاؤنٹ نہیں، ہمارا کوئی سرور نہیں",
        p: [
          "HIDAYAH365 میں نہ سائن اپ ہے، نہ لاگ اِن اور نہ کوئی صارف پروفائل۔ ہم کوئی ایسا سرور نہیں چلاتے جو آپ کا ذاتی ڈیٹا جمع یا محفوظ کرے، اور ہم آپ کا نام، ای میل ایڈریس یا فون نمبر کبھی نہیں مانگتے۔",
        ],
      },
      {
        h: "آپ کے آلے پر محفوظ ڈیٹا",
        p: ["ایپ درج ذیل چیزیں صرف آپ کے آلے پر رکھتی ہے:"],
        items: [
          "سیٹنگز اور ترجیحات (زبان، تھیم، ترجمہ اور تفسیر کا انتخاب)",
          "بک مارکس اور آیات پر آپ کے نجی نوٹس",
          "تسبیح کی گنتی، تاریخ اور تسلسل",
          "ختمِ قرآن کی پیش رفت",
          "نماز ٹریکر اور رمضان کے روزوں کا ریکارڈ",
          "آپ کے مقرر کردہ مسجد کے اوقات، الارم کی آوازیں اور یاددہانی کے انتخاب",
          "حج و عمرہ کی پیکنگ چیک لسٹ",
          "ڈاؤن لوڈ شدہ (کیش) قرآن، تفسیر اور حدیث کا مواد",
          "آخری معلوم مقام، تاکہ نماز کے اوقات آف لائن بھی چلیں",
        ],
        after:
          "یہ ڈیٹا آپ کے آلے پر ہی رہتا ہے۔ یہ ہمیں اپ لوڈ نہیں کیا جاتا اور نہ کسی کے ساتھ شیئر ہوتا ہے۔ ایپ ان انسٹال کرنے سے یہ ختم ہو جاتا ہے۔",
      },
      {
        h: "مقام",
        p: [
          "ایپ مقام کی اجازت (درست اور تقریبی) صرف ان فیچرز کے لیے مانگتی ہے جنہیں اس کی ضرورت ہے: نماز کے اوقات، قبلہ رخ اور قریبی مساجد۔",
        ],
        items: [
          "نماز کے اوقات اور قبلہ رخ کا حساب آپ کے آلے پر ہی ہوتا ہے۔ ان دونوں کے لیے آپ کے کوآرڈینیٹس کہیں نہیں بھیجے جاتے۔",
          "قریبی مساجد: یہ فیچر استعمال کرنے پر آپ کے تقریبی کوآرڈینیٹس OpenStreetMap کے عوامی Overpass API (مثلاً overpass-api.de جیسے سرورز) کو بھیجے جاتے ہیں تاکہ آپ کے آس پاس کی مساجد ملیں۔ اس کے ساتھ نام، اکاؤنٹ یا اشتہاری شناخت نہیں بھیجی جاتی، لیکن ہر انٹرنیٹ درخواست کی طرح سرور آپ کا IP ایڈریس دیکھ سکتا ہے۔",
          "آپ کے شہر کا نام دکھانے کے لیے اینڈرائیڈ کی بلٹ اِن جیو کوڈنگ سروس کوآرڈینیٹس کو مقام کے نام میں بدل سکتی ہے۔",
          "صرف آخری معلوم کوآرڈینیٹس آپ کے آلے پر محفوظ ہوتے ہیں تاکہ نماز کے اوقات آف لائن چلتے رہیں۔ مقام کی کوئی تاریخ نہیں رکھی جاتی۔",
          "آپ کسی بھی وقت فون کی سیٹنگز میں مقام کی اجازت روک یا واپس لے سکتے ہیں۔ اس صورت میں اس پر منحصر فیچرز محدود ہو سکتے ہیں۔",
        ],
      },
      {
        h: "تیسرے فریق سے آن لائن مواد",
        p: [
          "قرآن کا متن، تراجم، تفسیر، حدیث، مسائل اور تلاوت کی آڈیو لوڈ کرنے کے لیے ایپ تیسرے فریق کی خدمات سے رابطہ کرتی ہے: Quran Foundation، HadithAPI، IslamHouse، Tarteel (QUL) آڈیو، quran-tafseer.com اور GitHub پر موجود ڈیٹا فائلیں۔ ان درخواستوں میں صرف وہی ہوتا ہے جو مواد حاصل کرنے کے لیے ضروری ہے، مثلاً آپ نے کون سی سورت یا حدیث کا باب کھولا۔ ان میں آپ کا نام، ای میل یا اشتہاری شناخت شامل نہیں ہوتی۔ ہر انٹرنیٹ درخواست کی طرح یہ خدمات آپ کا IP ایڈریس دیکھ سکتی ہیں، اور ان پر ان کی اپنی پرائیویسی پالیسیاں لاگو ہوتی ہیں۔",
        ],
      },
      {
        h: "اشتہارات (Google AdMob)",
        items: [
          "ایپ میں Google AdMob کے ذریعے اشتہارات (بینر اور انٹرسٹیشل) دکھائے جاتے ہیں۔",
          "AdMob آلے کی شناختیں، جیسے اشتہاری شناخت (Advertising ID)، جمع کر کے اشتہارات دکھانے کے لیے استعمال کر سکتا ہے۔",
          "جہاں ضروری ہو، اشتہارات لوڈ ہونے سے پہلے ہم Google کے User Messaging Platform کے ذریعے آپ کی رضامندی لیتے ہیں۔",
          "آپ اپنی اشتہاری پسند رضامندی کے پیغام اور اپنی اینڈرائیڈ اشتہاری سیٹنگز میں سنبھال سکتے ہیں، جہاں اشتہاری شناخت ری سیٹ یا حذف بھی کی جا سکتی ہے۔ Google کی پالیسی: policies.google.com/technologies/partner-sites",
        ],
      },
      {
        h: "نوٹیفکیشنز، الارم اور پس منظر میں تازہ کاری",
        items: [
          "نماز کی یاددہانیاں اور اذان کے الارم آپ کے آلے پر شیڈول ہوتے ہیں۔ اس کے لیے کوئی ڈیٹا ہمیں نہیں بھیجا جاتا۔",
          "ایپ وقفے وقفے سے (آن لائن ہونے اور بیٹری کم نہ ہونے پر تقریباً ہر چھ گھنٹے بعد) نماز کے اوقات اور ہوم اسکرین ویجیٹ کو پس منظر میں اپ ڈیٹ کر سکتی ہے۔",
          "اگر آپ الارم کی آواز کے طور پر اپنی آڈیو فائل منتخب کریں تو وہ اینڈرائیڈ کے فائل پکر کے ذریعے پڑھی جاتی ہے اور آپ کے آلے پر ہی رہتی ہے۔",
        ],
      },
      {
        h: "اجازتیں",
        p: ["ایپ اینڈرائیڈ پر یہ اجازتیں مانگتی ہے:"],
        items: [
          "درست اور تقریبی مقام: نماز کے اوقات، قبلہ رخ اور قریبی مساجد کے لیے",
          "انٹرنیٹ: آن لائن مواد اور اشتہارات لوڈ کرنے کے لیے",
          "نوٹیفکیشنز: نماز کی یاددہانی اور اذان کے لیے",
          "درست الارم: تاکہ نماز کا الارم عین وقت پر بجے",
          "فون چالو ہونے پر چلنا: ری اسٹارٹ کے بعد یاددہانیاں بحال کرنے کے لیے",
        ],
      },
      {
        h: "ڈیٹا رکھنے اور حذف کرنے کا اختیار",
        p: [
          "چونکہ ہم سرورز پر آپ کا کوئی ذاتی ڈیٹا نہیں رکھتے، اس لیے آپ کی طرف سے حذف کرنے کو کچھ نہیں۔ اختیار آپ کے پاس ہے: سیٹنگز ← ڈیٹا اور اسٹوریج ← کیش شدہ ڈیٹا صاف کریں سے ڈاؤن لوڈ شدہ مواد ہٹائیں (آپ کے بک مارکس اور سیٹنگز برقرار رہتی ہیں)، یا ایپ ان انسٹال کر کے آلے پر محفوظ سب کچھ ختم کر دیں۔ اشتہاری ڈیٹا Google آپ کی اینڈرائیڈ اشتہاری سیٹنگز کے مطابق سنبھالتا ہے۔",
        ],
      },
      {
        h: "سیکیورٹی",
        p: ["آن لائن خدمات سے رابطے HTTPS کے ذریعے ہوتے ہیں۔ ہم آپ کا ڈیٹا فروخت نہیں کرتے۔"],
      },
      {
        h: "بچوں کی پرائیویسی",
        p: [
          "HIDAYAH365 عام صارفین کے لیے بنائی گئی ہے اور ہم 13 سال سے کم عمر بچوں کی ذاتی معلومات جان بوجھ کر جمع نہیں کرتے۔ ہم ایپ کو 13 سال سے کم عمر بچوں کی طرف براہ راست نہیں کرتے۔",
        ],
      },
      {
        h: "یہ ویب سائٹ",
        p: [
          "اس ویب سائٹ کے رابطہ فارم سے آپ کا پیغام اور ای میل ایڈریس ہمیں ای میل کے ذریعے پہنچتا ہے تاکہ ہم جواب دے سکیں۔ ہم اسے صرف آپ کو جواب دینے کے لیے استعمال کرتے ہیں۔",
        ],
      },
      {
        h: "پالیسی میں تبدیلیاں",
        p: [
          "ہم وقتاً فوقتاً اس پالیسی کو اپ ڈیٹ کر سکتے ہیں۔ نیا ورژن اسی صفحے پر ”آخری تازہ کاری“ کی نئی تاریخ کے ساتھ شائع کیا جائے گا۔",
        ],
      },
    ],
  },
};

export default function Privacy() {
  const { language } = useAppContext();
  const t = content[language];
  const ur = language === "ur";

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
            <span className="inline-block rounded-full border border-primary-200 dark:border-primary-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300">
              {t.badge}
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 dark:text-white text-balance">
              {t.titleA} <span className="shimmer-text">{t.titleB}</span>
            </h1>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{t.updated}</p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          {t.sections.map((s, i) => (
            <Reveal key={s.h} delay={(i % 4) * 80}>
              <div className="bg-white dark:bg-gray-800 p-7 sm:p-9 rounded-3xl shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{s.h}</h2>
                <div className="mt-4 text-gray-600 dark:text-gray-400">
                  {s.p?.map((para) => (
                    <p key={para} className="leading-relaxed mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                  {s.items && (
                    <ul className="mt-3 space-y-2 list-disc ps-5 marker:text-gold-500">
                      {s.items.map((item) => (
                        <li key={item} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.after && <p className="mt-4 leading-relaxed">{s.after}</p>}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="bg-white dark:bg-gray-800 p-7 sm:p-9 rounded-3xl shadow-lg shadow-gray-900/5 dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.contactH}</h2>
              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">{t.contactIntro}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-flex items-center gap-2 rounded-xl bg-primary-50 dark:bg-primary-900/30 px-4 py-2.5 font-semibold text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
