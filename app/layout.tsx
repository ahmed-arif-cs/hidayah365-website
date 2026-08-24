import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/AppProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HIDAYAH365 - Your Daily Islamic Companion",
  description: "HIDAYAH365 is a comprehensive Islamic app featuring Quran, prayer times, Qibla direction, duas, hadith, and more.",
  keywords: ["Islamic app", "Quran", "Prayer times", "Qibla", "Duas", "Hadith", "HiDAYAH365"],
  authors: [{ name: "HIDAYAH365 Team" }],
  openGraph: {
    title: "HIDAYAH365 - Your Daily Islamic Companion",
    description: "Comprehensive Islamic app with Quran, prayer times, Qibla, duas, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <AppProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
