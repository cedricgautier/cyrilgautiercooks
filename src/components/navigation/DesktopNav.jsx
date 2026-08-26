import LanguageToggle from "./LanguageToggle";

export default function DesktopNav({
  navVisible,
  onShow,
  onHide,
  onTopClick,
  onSectionClick,
  navItems,
  brand,
  language,
  languageLabels,
  onLanguageChange
}) {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-20 hidden h-12 sm:block" onMouseEnter={onShow} />
      <header
        className={`liquid-nav z-30 mb-3 hidden rounded-[1.45rem] px-3 py-3 transition duration-500 sm:fixed sm:left-1/2 sm:top-5 sm:z-40 sm:mb-0 sm:block sm:w-[min(1180px,calc(100%-2.5rem))] sm:-translate-x-1/2 sm:rounded-full sm:px-4 sm:py-3 ${
          navVisible ? "sm:translate-y-0 sm:opacity-100" : "sm:-translate-y-[140%] sm:opacity-0"
        }`}
        onMouseEnter={onShow}
        onMouseLeave={onHide}
      >
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onTopClick}
            className="px-2 text-[0.78rem] tracking-[0.22em] text-espresso-900 sm:px-2 sm:text-[0.82rem] sm:tracking-[0.24em]"
          >
            {brand}
          </button>
          <div className="hidden items-center gap-3 sm:flex">
            <nav className="hidden sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:text-sm sm:text-espresso-700" aria-label="Navigation principale">
              {navItems.map((item) => (
                <button key={item.id} type="button" onClick={() => onSectionClick(item.id)} className="desktop-nav-link">
                  {item.label}
                </button>
              ))}
            </nav>
            <LanguageToggle language={language} labels={languageLabels} onChange={onLanguageChange} />
          </div>
        </div>
      </header>
    </>
  );
}
