import { useEffect, useRef, useState } from "react";
import DesktopNav from "./components/navigation/DesktopNav";
import MobileNav from "./components/navigation/MobileNav";
import baseNavItems from "./components/navigation/baseNavItems";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import ProfileSection from "./components/sections/ProfileSection";
import QuoteSection from "./components/sections/QuoteSection";
import SkillsSection from "./components/sections/SkillsSection";
import { siteContent } from "./data/siteContent";

export default function App() {
  const year = new Date().getFullYear();
  const [navVisible, setNavVisible] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [language, setLanguage] = useState("fr");
  const pageRef = useRef(null);
  const content = siteContent[language];
  const localizedNavItems = baseNavItems.map((item) => ({
    ...item,
    label: content.nav.find((entry) => entry.id === item.id)?.label ?? item.label
  }));

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileNavOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileNavOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const updateBreakpoint = () => {
      if (!mediaQuery.matches) {
        setNavVisible(true);
      }
    };

    mediaQuery.addEventListener("change", updateBreakpoint);

    return () => {
      mediaQuery.removeEventListener("change", updateBreakpoint);
    };
  }, []);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("site-language");
    if (storedLanguage === "fr" || storedLanguage === "en" || storedLanguage === "es") {
      setLanguage(storedLanguage);
      return;
    }

    const browserLocale = window.navigator.language.toLowerCase();
    const browserLanguage = browserLocale.startsWith("fr") ? "fr" : browserLocale.startsWith("es") ? "es" : "en";
    setLanguage(browserLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = content.locale;
    window.localStorage.setItem("site-language", language);
  }, [content.locale, language]);

  return (
    <div ref={pageRef} className="min-h-screen overflow-x-hidden bg-hero-glow text-espresso-900">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.55),transparent_80%)]" />
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="floating-orb floating-orb-a" />
        <div className="floating-orb floating-orb-b" />
        <div className="floating-orb floating-orb-c" />
      </div>
      <div className="mx-auto w-[min(1180px,calc(100%-1rem))] py-2 pb-24 sm:w-[min(1180px,calc(100%-2.5rem))] sm:py-3 sm:pb-3">
        <DesktopNav
          navVisible={navVisible}
          onShow={() => setNavVisible(true)}
          onHide={() => setNavVisible(false)}
          onTopClick={scrollToTop}
          onSectionClick={scrollToSection}
          navItems={localizedNavItems}
          brand={content.brand}
          language={language}
          languageLabels={content.languageSwitcher}
          onLanguageChange={setLanguage}
        />

        <main id="top">
          <HeroSection
            content={content.hero}
            onDiscoverClick={(event) => {
              event.preventDefault();
              scrollToSection("parcours");
            }}
          />
          <ProfileSection content={content.profile} />
          <ExperienceSection content={content.experience} />
          <SkillsSection content={content.skills} />
          <QuoteSection content={content.quote} />
          <ContactSection content={content.contact} />
        </main>

        <footer className="mt-7 flex flex-col gap-2 px-2 pt-4 text-sm text-espresso-700 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.footer.replace("{year}", year)}</p>
        </footer>
      </div>

      <MobileNav
        isOpen={mobileNavOpen}
        onToggle={() => setMobileNavOpen((value) => !value)}
        onSectionClick={scrollToSection}
        navItems={localizedNavItems}
        language={language}
        languageLabels={content.languageSwitcher}
        onLanguageChange={setLanguage}
      />
    </div>
  );
}
