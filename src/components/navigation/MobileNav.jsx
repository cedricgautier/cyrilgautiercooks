import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import GlobeIcon from "../icons/GlobeIcon";

export default function MobileNav({ isOpen, onToggle, onSectionClick, navItems, language, languageLabels, onLanguageChange }) {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);
  const navGridColumnsClass =
    navItems.length === 4 ? "grid-cols-5" : navItems.length === 3 ? "grid-cols-4" : "grid-cols-3";

  useEffect(() => {
    if (!isOpen) {
      setLanguageMenuOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!languageMenuRef.current?.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-[max(1.15rem,calc(env(safe-area-inset-bottom)+0.35rem))] z-50 sm:hidden ${
        isOpen ? "left-1/2 w-[min(calc(100%-0.75rem),27rem)] -translate-x-1/2" : "right-4 w-[3.8rem] translate-x-0"
      }`}
    >
      <div
        className={`relative overflow-visible rounded-[1.35rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.16)),linear-gradient(135deg,rgba(246,239,228,0.76),rgba(255,250,244,0.42))] p-[0.18rem] shadow-[0_22px_52px_rgba(54,41,23,0.16),inset_0_1px_0_rgba(255,255,255,0.78),inset_0_-1px_0_rgba(255,255,255,0.24)] backdrop-blur-[24px] transition-[left,right,width,opacity,transform] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.7),transparent_24%),linear-gradient(115deg,rgba(255,255,255,0.28),transparent_30%,transparent_72%,rgba(255,255,255,0.08))] ${
          isOpen ? "pt-[1.15rem]" : "flex"
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Réduire la navigation" : "Ouvrir la navigation"}
            onClick={onToggle}
            className={`inline-flex shrink-0 items-center justify-center text-[rgba(23,19,15,0.86)] transition-[transform,background-color,box-shadow] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] active:scale-[1.06] ${
              isOpen
                ? "h-[4.5rem] w-[4.5rem] rounded-[1.8rem] bg-[linear-gradient(180deg,rgba(232,228,223,0.84),rgba(221,216,210,0.62))] shadow-[0_10px_28px_rgba(54,41,23,0.12),inset_0_1px_0_rgba(255,255,255,0.65)]"
                : "h-[3.2rem] w-[3.2rem] rounded-[1rem] bg-white/15"
            }`}
          >
            <ArrowIcon className={`transition duration-300 ${isOpen ? "h-[1.05rem] w-[1.05rem] rotate-0" : "h-4 w-4 rotate-180"}`} />
          </button>
        </div>

        <nav
          aria-label="Navigation mobile"
          className={`grid w-full ${navGridColumnsClass} gap-[0.16rem] overflow-hidden transition-[max-height,opacity,transform] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "max-h-32 scale-100 opacity-100" : "max-h-0 scale-[0.96] opacity-0"
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSectionClick(item.id)}
                className="group relative flex min-h-[4.55rem] min-w-0 flex-col items-center justify-center gap-[0.28rem] rounded-[1.2rem] bg-transparent px-[0.1rem] py-[0.45rem] text-center text-[rgba(23,19,15,0.88)] transition-[transform,color] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] active:scale-[1.06]"
              >
                <span className="absolute inset-[2px] rounded-[1.08rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.44),rgba(255,255,255,0.14))] opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)] transition duration-300 group-active:opacity-100" />
                <Icon className="relative z-[1] h-[1.25rem] w-[1.25rem]" />
                <span className="relative z-[1] text-[0.43rem] font-medium leading-none tracking-[0.01em]">{item.label}</span>
              </button>
            );
          })}

          <div ref={languageMenuRef} className="relative">
            <button
              type="button"
              aria-expanded={languageMenuOpen}
              aria-label={languageLabels.aria?.[language] ?? language.toUpperCase()}
              onClick={() => setLanguageMenuOpen((value) => !value)}
              className="group relative flex min-h-[4.55rem] min-w-0 flex-col items-center justify-center gap-[0.28rem] rounded-[1.2rem] bg-transparent px-[0.1rem] py-[0.45rem] text-center text-[rgba(23,19,15,0.88)] transition-[transform,color] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] active:scale-[1.06]"
            >
              <span className="absolute inset-[2px] rounded-[1.08rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.44),rgba(255,255,255,0.14))] opacity-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.66)]" />
              <GlobeIcon className="relative z-[1] h-[1.25rem] w-[1.25rem]" />
              <span className="relative z-[1] text-[0.43rem] font-medium leading-none tracking-[0.01em]">{language.toUpperCase()}</span>
            </button>

            <div
              className={`absolute bottom-[calc(100%+0.6rem)] left-1/2 z-20 w-[4.8rem] -translate-x-1/2 rounded-[1.05rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.58))] p-1.5 shadow-[0_22px_44px_rgba(54,41,23,0.16),inset_0_1px_0_rgba(255,255,255,0.84)] backdrop-blur-[24px] transition-[opacity,transform] duration-200 ${
                languageMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-1">
                {["fr", "en", "es"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      onLanguageChange(option);
                      setLanguageMenuOpen(false);
                    }}
                    className={`rounded-[0.85rem] px-2 py-2 text-center text-[0.68rem] font-medium tracking-[0.18em] transition ${
                      language === option ? "bg-espresso-900 text-sand-50" : "bg-white/0 text-espresso-700"
                    }`}
                  >
                    {languageLabels[option]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
