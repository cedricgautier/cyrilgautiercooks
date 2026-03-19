import { useEffect, useState } from "react";
import portrait from "../assets/cyril-gautier-portrait.jpeg";

const experience = [
  {
    date: "Octobre 2023 · Août 2024",
    title: "Octopus · Apprenti / Commis de cuisine",
    description:
      "J'y ai assuré les préparations préliminaires, le respect des fiches techniques, la participation à l'envoi, la tenue du poste, l'entretien de la cuisine et l'application stricte des règles HACCP."
  },
  {
    date: "2024",
    title: "CAP Pâtisserie · Campus Belliard, Paris 18e",
    description:
      "J'ai suivi cette formation post-bac d'un an pour élargir ma maîtrise des textures, des équilibres et de la précision en pâtisserie."
  },
  {
    date: "2023 · 2024",
    title: "MAN BTS / CAP Cuisine · Lycée et CFA Belliard, Paris 18e",
    description:
      "Cette année de spécialisation m'a permis de consolider les bases professionnelles de la cuisine et de m'immerger dans le rythme de brigade."
  },
  {
    date: "2020 · 2022",
    title: "BTS Électrotechnique · Lycée Léonard de Vinci",
    description:
      "Ce parcours technique exigeant a renforcé ma rigueur, mon organisation et ma méthode de travail."
  },
  {
    date: "2019 · 2020",
    title: "Licence MIPI · Sorbonne Université",
    description:
      "Une première expérience universitaire, avant une réorientation assumée vers les métiers de bouche."
  }
];

const cuisines = [
  { name: "Française", level: "Intermédiaire", tone: "refined" },
  { name: "Filipino", level: "Intermédiaire", tone: "refined" },
  { name: "Américaine", level: "Intermédiaire", tone: "refined" },
  { name: "Italienne", level: "Débutant", tone: "emerging" },
  { name: "Chinoise", level: "Débutant", tone: "emerging" },
  { name: "Espagnole", level: "Débutant", tone: "emerging" },
  { name: "Japonaise", level: "Débutant", tone: "emerging" },
  { name: "Indonésienne", level: "Débutant", tone: "emerging" }
];

const languages = [
  { name: "Français", level: "Langue maternelle", accent: "Une langue maternelle ancrée dans le quotidien, la culture et la transmission." },
  { name: "Anglais", level: "Langue maternelle", accent: "Ma première langue parlée, avec une expression naturelle et spontanée." },
  { name: "Espagnol", level: "A2", accent: "Appris de façon scolaire en France, puis approfondi lors de mon immersion en Espagne." },
  { name: "Filipino", level: "Quelques notions", accent: "Repères culturels et expressions du quotidien." }
];

const trainings = [
  {
    date: "Mars 2026 · Viking Cruises",
    description: "J'y ai suivi une formation d'approfondissement de cuisine."
  },
  {
    date: "Novembre 2025 · Espace Japonais Manekineko de Montmartre",
    description: "J'y ai approfondi les bases du ramen, du bouillon et de l'assemblage."
  },
  {
    date: "Février 2025 · Le Cordon Bleu",
    description: "J'y ai travaillé la boulangerie : mini baguette, pain de campagne, fougasse."
  },
  {
    date: "Janvier 2025 · Le Cordon Bleu",
    description: "J'y ai réalisé un atelier de pâtisserie consacré aux macarons."
  }
];

const SectionHeading = ({ eyebrow, title, titleClassName = "" }) => (
  <div className="mb-10 grid gap-4 lg:grid-cols-[160px_minmax(0,1fr)] lg:items-start">
    <p className="text-xs uppercase tracking-[0.28em] text-gold-500">{eyebrow}</p>
    <h2 className={`max-w-4xl font-display text-3xl leading-none text-espresso-900 sm:text-5xl lg:text-6xl ${titleClassName}`}>
      {title}
    </h2>
  </div>
);

const GlassPanel = ({ children, className = "" }) => (
  <div className={`lux-card rounded-[2rem] border border-black/10 bg-white/55 shadow-luxury backdrop-blur-xl ${className}`}>
    {children}
  </div>
);

const iconClassName = "h-4 w-4 shrink-0";

const MailIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M4 7.5 12 13l8-5.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
  </svg>
);

const PhoneIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path
      d="M6.8 4.5h2.6c.4 0 .8.3.9.7l.7 3c.1.4 0 .8-.3 1.1l-1.4 1.4a14.8 14.8 0 0 0 4 4l1.4-1.4c.3-.3.7-.4 1.1-.3l3 .7c.4.1.7.5.7.9v2.6c0 .5-.4 1-.9 1A14.6 14.6 0 0 1 5.8 5.4c0-.5.5-.9 1-.9Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ArrowIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M5 12h14" strokeLinecap="round" />
    <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparkIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" strokeLinejoin="round" />
  </svg>
);

const InstagramIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const MenuIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
    {open ? (
      <>
        <path d="M6 6l12 12" strokeLinecap="round" />
        <path d="M18 6 6 18" strokeLinecap="round" />
      </>
    ) : (
      <>
        <path d="M4 7h16" strokeLinecap="round" />
        <path d="M4 12h16" strokeLinecap="round" />
        <path d="M4 17h16" strokeLinecap="round" />
      </>
    )}
  </svg>
);

const ContactRow = ({ icon, href, children }) => {
  const content = (
    <span className="contact-row inline-flex w-full items-center gap-3 rounded-[1.15rem] border border-black/10 bg-white/50 px-4 py-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/12 text-gold-600">{icon}</span>
      <span className="min-w-0 text-sm leading-6 text-espresso-800 sm:text-base">{children}</span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="block w-full">
        {content}
      </a>
    );
  }

  return content;
};

const levelToneClass = {
  refined: "bg-emerald-50/80 text-emerald-700 ring-1 ring-emerald-200/70",
  emerging: "bg-amber-50/80 text-amber-700 ring-1 ring-amber-200/70"
};

export default function App() {
  const year = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const closeMenu = () => setMenuOpen(false);

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

  return (
    <div className="min-h-screen overflow-x-hidden bg-hero-glow text-espresso-900">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.55),transparent_80%)]" />
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="floating-orb floating-orb-a" />
        <div className="floating-orb floating-orb-b" />
        <div className="floating-orb floating-orb-c" />
      </div>
      <div
        className="fixed inset-x-0 top-0 z-30 hidden h-12 sm:block"
        onMouseEnter={() => setNavVisible(true)}
      />

      <div className="mx-auto w-[min(1180px,calc(100%-1rem))] py-2 sm:w-[min(1180px,calc(100%-2.5rem))] sm:py-3">
        <header
          className={`liquid-nav z-20 mb-3 rounded-[1.45rem] px-3 py-3 transition duration-500 sm:fixed sm:left-1/2 sm:top-5 sm:mb-0 sm:w-[min(1180px,calc(100%-2.5rem))] sm:-translate-x-1/2 sm:rounded-full sm:px-4 sm:py-3 ${
            navVisible || menuOpen ? "sm:translate-y-0 sm:opacity-100" : "sm:-translate-y-[140%] sm:opacity-0"
          }`}
          onMouseEnter={() => setNavVisible(true)}
          onMouseLeave={() => {
            if (!menuOpen) {
              setNavVisible(false);
            }
          }}
        >
          <div className="flex items-center justify-between gap-3">
            <a href="#top" className="px-2 text-[0.78rem] tracking-[0.22em] text-espresso-900 sm:px-2 sm:text-[0.82rem] sm:tracking-[0.24em]">
              CYRIL GAUTIER
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMenuOpen((value) => !value)}
              className="menu-trigger inline-flex h-11 w-11 items-center justify-center rounded-full text-espresso-900 sm:hidden"
            >
              <MenuIcon open={menuOpen} />
            </button>
            <nav className="hidden sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:text-sm sm:text-espresso-700" aria-label="Navigation principale">
              <a href="#profil" className="desktop-nav-link">
                Profil
              </a>
              <a href="#parcours" className="desktop-nav-link">
                Parcours
              </a>
              <a href="#savoir-faire" className="desktop-nav-link">
                Savoir-faire
              </a>
              <a href="#contact" className="desktop-nav-link">
                Contact
              </a>
            </nav>
          </div>

          <nav
            id="mobile-nav"
            className={`mobile-menu sm:hidden ${menuOpen ? "mobile-menu-open" : "mobile-menu-closed"}`}
            aria-label="Navigation principale mobile"
          >
            <a href="#profil" className="mobile-nav-link" onClick={closeMenu}>
              Profil
            </a>
            <a href="#parcours" className="mobile-nav-link" onClick={closeMenu}>
              Parcours
            </a>
            <a href="#savoir-faire" className="mobile-nav-link" onClick={closeMenu}>
              Savoir-faire
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </header>

        <main id="top">
          <section className="hero-stage grid gap-5 py-3 sm:pt-12 lg:min-h-[calc(100vh-11rem)] lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.8fr)] lg:py-8 lg:pt-14">
            <GlassPanel className="reveal-up reveal-delay-1 flex flex-col justify-center rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-12 lg:p-16">
              <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold-500">
                <SparkIcon />
                Cuisine d'auteur · France
              </p>
              <h1 className="max-w-[11ch] font-display text-[clamp(2.55rem,13vw,6.6rem)] leading-[0.93] tracking-[-0.04em] text-espresso-900 sm:max-w-[10ch]">
                Une cuisine guidée par la précision, la curiosité et le goût du détail.
              </h1>
              <p className="mt-5 max-w-2xl text-[0.97rem] leading-7 text-espresso-700 sm:mt-6 sm:text-lg sm:leading-8">
                Je suis un cuisinier français formé à Paris, révélé par une première immersion en Espagne et animé par une recherche constante de
                saveurs, de textures et de cultures.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:cyrilgautiercooks@gmail.com"
                  className="button-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-espresso-900 px-6 text-sm text-sand-50"
                >
                  <MailIcon />
                  Entrer en contact
                </a>
                <a
                  href="tel:+34614186133"
                  className="button-secondary-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-6 text-sm text-espresso-900"
                >
                  <PhoneIcon />
                  Appeler maintenant
                </a>
                <a
                  href="#parcours"
                  className="button-secondary-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/55 px-6 text-sm text-espresso-900"
                >
                  <ArrowIcon />
                  Découvrir le parcours
                </a>
              </div>
            </GlassPanel>

            <div className="grid gap-4 self-end sm:gap-5">
              <GlassPanel className="reveal-up reveal-delay-2 image-depth overflow-hidden rounded-[2rem]">
                <figure className="min-h-[19rem] sm:min-h-[26rem]">
                  <img
                    src={portrait}
                    alt="Cyril Gautier en cuisine pendant le dressage de plusieurs assiettes."
                    className="h-full w-full object-cover object-top"
                  />
                </figure>
              </GlassPanel>

              <GlassPanel className="reveal-up reveal-delay-3 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,252,247,0.86),rgba(242,231,213,0.78))] p-5 sm:p-7">
                <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold-500">
                  <SparkIcon />
                  Basé en France
                </p>
                <p className="mb-6 font-display text-3xl leading-tight text-espresso-900">
                  Je construis une cuisine exigeante, sensible et déjà singulière.
                </p>
                <div className="grid gap-3 text-sm leading-7 text-espresso-700 sm:text-base">
                  <div className="inline-flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/12 text-gold-600">
                      <SparkIcon />
                    </span>
                    <span>Nationalité française</span>
                  </div>
                  <div className="inline-flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/12 text-gold-600">
                      <SparkIcon />
                    </span>
                    <span>Né le 20 décembre 2000</span>
                  </div>
                  <ContactRow icon={<PinIcon />} href={null}>
                    5 Rue Diderot, 92000 Nanterre
                  </ContactRow>
                  <ContactRow icon={<PhoneIcon />} href="tel:+34614186133">
                    +34 614 18 61 33
                  </ContactRow>
                  <ContactRow icon={<MailIcon />} href="mailto:cyrilgautiercooks@gmail.com">
                    cyrilgautiercooks@gmail.com
                  </ContactRow>
                </div>
              </GlassPanel>
            </div>
          </section>

          <GlassPanel className="reveal-up mt-6 rounded-[2rem] p-5 sm:mt-7 sm:p-10" id="profil">
            <SectionHeading eyebrow="Profil" title="Une trajectoire atypique tournée vers l'exigence culinaire." />
            <div className="grid gap-6 text-base leading-8 text-espresso-700 lg:grid-cols-2">
              <p>
                J'ai vécu à Paris jusqu'en août 2025, avant de passer plus de six mois à Malaga, en Espagne. Ce séjour m'a permis de voyager à
                travers le sud du pays pour découvrir plus profondément la cuisine espagnole, tout en gardant l'habitude d'explorer la gastronomie
                locale partout où je vais.
              </p>
              <p>
                J'ai commencé à cuisiner très jeune. Mon approche réunit créativité, autonomie, sérieux et engagement opérationnel. Je cherche
                aujourd'hui des maisons capables d'accueillir cette énergie et de la pousser vers une cuisine plus précise, plus personnelle et plus
                ambitieuse.
              </p>
            </div>
          </GlassPanel>

          <GlassPanel className="reveal-up mt-6 rounded-[2rem] p-5 sm:mt-7 sm:p-10" id="parcours">
            <SectionHeading eyebrow="Parcours" title="Expérience, formations et montée en gamme." />
            <div className="grid gap-4">
              {experience.map((item) => (
                <article key={item.title} className="lux-subcard rounded-[1.5rem] border border-black/10 bg-white/50 p-5 backdrop-blur-md">
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold-500">{item.date}</p>
                  <h3 className="mb-2 font-display text-2xl leading-tight text-espresso-900">{item.title}</h3>
                  <p className="text-espresso-700">{item.description}</p>
                </article>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="reveal-up mt-6 rounded-[2rem] p-5 sm:mt-7 sm:p-10" id="savoir-faire">
            <SectionHeading eyebrow="Savoir-faire" title="Une base française enrichie par des influences internationales." />
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="lux-subcard rounded-[1.75rem] border border-black/10 bg-white/50 p-6 backdrop-blur-md">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-500">Répertoires culinaires</p>
                  <h3 className="mt-3 max-w-[14ch] font-display text-3xl leading-tight text-espresso-900">Influences et terrains d'expression</h3>
                </div>
                <div className="grid gap-3">
                  {cuisines.map((item) => (
                    <div
                      key={item.name}
                      className="group flex flex-col items-start gap-3 rounded-[1.15rem] border border-white/50 bg-white/55 px-4 py-3 transition duration-300 hover:border-gold-500/20 hover:bg-white/72 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-[0_0_0_5px_rgba(180,148,93,0.08)]" />
                        <span className="text-sm font-medium text-espresso-900 sm:text-base">{item.name}</span>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] ${levelToneClass[item.tone]}`}>
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="lux-subcard rounded-[1.75rem] border border-black/10 bg-white/50 p-6 backdrop-blur-md">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-500">Langues</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-espresso-900">Voix, échanges et culture de service</h3>
                </div>
                <div className="grid gap-3">
                  {languages.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-[1.15rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.46))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div>
                          <p className="text-base font-medium text-espresso-900">{item.name}</p>
                          <p className="mt-1 text-sm leading-6 text-espresso-700">{item.accent}</p>
                        </div>
                        <span className="whitespace-nowrap rounded-full bg-[#f5ecdd] px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-gold-600 ring-1 ring-gold-500/10">
                          {item.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="lux-subcard rounded-[1.75rem] border border-black/10 bg-white/50 p-6 backdrop-blur-md lg:col-span-2">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold-500">Formations culinaires complémentaires</p>
                <div className="grid gap-5 md:grid-cols-2">
                  {trainings.map((item) => (
                    <div key={item.date}>
                      <h3 className="mb-2 font-display text-2xl leading-tight text-espresso-900">{item.date}</h3>
                      <p className="text-espresso-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </GlassPanel>

          <section className="reveal-up mt-6 sm:mt-7">
            <div className="quote-panel rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,rgba(22,19,16,0.92),rgba(69,53,31,0.88))] px-5 py-8 text-center text-sand-50 shadow-luxury sm:px-10 sm:py-14">
              <p className="font-display text-3xl leading-none sm:text-6xl lg:text-7xl">
                "Un monde sans limites de saveurs, de textures et de cultures."
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-sand-200/70">Ma devise</p>
            </div>
          </section>

          <GlassPanel className="reveal-up mt-6 rounded-[2rem] p-5 sm:mt-7 sm:p-10" id="contact">
            <SectionHeading
              eyebrow="Contact"
              title="Disponible pour rejoindre une maison exigeante."
              titleClassName="max-w-[18ch] lg:text-5xl"
            />
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-8 lg:items-stretch">
              <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.36))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-500">Échanger</p>
                  <h3 className="mt-3 max-w-[12ch] font-display text-3xl leading-tight text-espresso-900 sm:text-4xl">
                    Écrivons la suite autour d'une cuisine exigeante.
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-espresso-700">
                    Pour une opportunité en cuisine, en pâtisserie ou en restauration haut de gamme, vous pouvez me contacter directement.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="mailto:cyrilgautiercooks@gmail.com"
                    className="button-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-espresso-900 px-6 text-sm text-sand-50"
                  >
                    <MailIcon />
                    M'écrire
                  </a>
                  <a
                    href="tel:+34614186133"
                    className="button-secondary-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 text-sm text-espresso-900"
                  >
                    <PhoneIcon />
                    Me joindre
                  </a>
                  <a
                    href="https://www.instagram.com/gautiercooks/"
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 text-sm text-espresso-900"
                  >
                    <InstagramIcon />
                    Instagram
                  </a>
                </div>
              </div>

              <div className="grid gap-3 rounded-[1.5rem] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.34))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:rounded-[1.75rem] sm:p-5">
                <p className="px-2 pb-1 text-xs uppercase tracking-[0.28em] text-gold-500">Coordonnées</p>
                <ContactRow icon={<PinIcon />} href={null}>
                  5 Rue Diderot, 92000 Nanterre
                </ContactRow>
                <ContactRow icon={<MailIcon />} href="mailto:cyrilgautiercooks@gmail.com">
                  cyrilgautiercooks@gmail.com
                </ContactRow>
                <ContactRow icon={<PhoneIcon />} href="tel:+34614186133">
                  +34 614 18 61 33
                </ContactRow>
                <ContactRow icon={<InstagramIcon />} href="https://www.instagram.com/gautiercooks/">
                  @gautiercooks
                </ContactRow>
              </div>
            </div>
          </GlassPanel>
        </main>

        <footer className="mt-7 flex flex-col gap-2 px-2 pt-4 text-sm text-espresso-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Cyril Gautier</p>
        </footer>
      </div>
    </div>
  );
}
