"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";
type Language = "en" | "ur";

type AppContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
};

const AppContext = createContext<AppContextValue>({
  theme: "light",
  toggleTheme: () => {},
  language: "en",
  toggleLanguage: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  // Lazy initializers read persisted preferences once; they run on the client
  // during hydration (typeof window guard keeps SSR output stable).
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("hidayah365-theme");
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem("hidayah365-lang");
    return stored === "ur" || stored === "en" ? stored : "en";
  });

  // Apply the theme class to <html> and persist changes (side effects only).
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("hidayah365-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("hidayah365-lang", language);
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
        language,
        toggleLanguage: () => setLanguage((l) => (l === "en" ? "ur" : "en")),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}