export const NAV_IDS = {
  profile: "profil",
  experience: "parcours",
  skills: "savoir-faire",
  contact: "contact"
};

export const siteContent = {
  fr: {
    locale: "fr",
    brand: "CYRIL GAUTIER",
    nav: [
      { id: NAV_IDS.profile, label: "Profil" },
      { id: NAV_IDS.experience, label: "Parcours" },
      { id: NAV_IDS.skills, label: "Savoir-faire" },
      { id: NAV_IDS.contact, label: "Contact" }
    ],
    languageSwitcher: {
      fr: "FR",
      en: "EN",
      es: "ES",
      aria: {
        fr: "Passer le site en français",
        en: "Passer le site en anglais",
        es: "Passer le site en espagnol"
      }
    },
    hero: {
      eyebrow: "Ma Cuisine · France",
      title: "Une cuisine guidée par la précision, la curiosité et le goût du détail.",
      body: "Je suis un cuisinier français formé à Paris, révélé par une première immersion en Espagne et animé par une recherche constante de saveurs, de textures et de cultures.",
      ctaEmail: "Entrer en contact",
      ctaPhone: "Appeler maintenant",
      ctaDiscover: "Découvrir le parcours",
      imageAlt: "Cyril Gautier en cuisine pendant le dressage de plusieurs assiettes.",
      asideEyebrow: "Basé en France",
      asideTitle: "Je construis une cuisine exigeante, sensible et déjà singulière.",
      nationality: "Nationalité française",
      birth: "Né le 20 décembre 2000"
    },
    profile: {
      eyebrow: "Profil",
      title: "Une trajectoire atypique tournée vers l'exigence culinaire.",
      paragraphs: [
        "J'ai vécu à Paris jusqu'en août 2025, avant de passer plus de six mois à Malaga, en Espagne. Ce séjour m'a permis de voyager à travers le sud du pays pour découvrir plus profondément la cuisine espagnole, tout en gardant l'habitude d'explorer la gastronomie locale partout où je vais.",
        "J'ai commencé à cuisiner très jeune. Mon approche réunit créativité, autonomie, sérieux et engagement opérationnel."
      ]
    },
    experience: {
      eyebrow: "Parcours",
      title: "Expérience, formations et montée en gamme.",
      items: [
        {
          date: "Avril 2026 · Présent",
          title: "Pullman La Défense · Commis de cuisine",
          description:
            "Polyvalent et réactif, j'assure la préparation des ingrédients (épluchage, découpe), le dressage des assiettes et l'aide sur les différents postes (chaud, froid). Rigoureux sur les normes d'hygiène (HACCP), je m'adapte rapidement au rythme du service pour soutenir efficacement l'équipe en brigade."
        },
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
            "J'ai suivi cette formation post-bac pendant quelques mois pour élargir ma maîtrise des textures, des équilibres et de la précision en pâtisserie."
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
          description: "Ce parcours technique exigeant a renforcé ma rigueur, mon organisation et ma méthode de travail."
        },
        {
          date: "2019 · 2020",
          title: "Licence MIPI · Sorbonne Université",
          description: "Une première expérience universitaire, avant une réorientation assumée vers les métiers de bouche."
        }
      ]
    },
    skills: {
      eyebrow: "Savoir-faire",
      title: "Une base française enrichie par des influences internationales.",
      cuisinesEyebrow: "Répertoires culinaires",
      cuisinesTitle: "Influences et terrains d'expression",
      languagesEyebrow: "Langues",
      languagesTitle: "Voix, échanges et culture de service",
      trainingsEyebrow: "Formations culinaires complémentaires",
      cuisines: [
        { name: "Française", level: "Intermédiaire", tone: "refined" },
        { name: "Philippine", level: "Intermédiaire", tone: "refined" },
        { name: "Américaine", level: "Intermédiaire", tone: "refined" },
        { name: "Italienne", level: "Débutant", tone: "emerging" },
        { name: "Chinoise", level: "Débutant", tone: "emerging" },
        { name: "Espagnole", level: "Débutant", tone: "emerging" },
        { name: "Japonaise", level: "Débutant", tone: "emerging" },
        { name: "Indonésienne", level: "Débutant", tone: "emerging" }
      ],
      languages: [
        { name: "Français", level: "Langue maternelle", accent: "Une langue maternelle ancrée dans le quotidien, la culture et la transmission." },
        { name: "Anglais", level: "Langue maternelle", accent: "Ma première langue parlée, avec une expression naturelle et spontanée." },
        { name: "Espagnol", level: "A2", accent: "Appris de façon scolaire en France, puis approfondi lors de mon immersion en Espagne." },
        { name: "Filipino", level: "Quelques notions", accent: "Repères culturels et expressions du quotidien." }
      ],
      trainings: [
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
      ]
    },
    quote: {
      text: '"Un monde sans limites de saveurs, de textures et de cultures."',
      label: "Ma devise"
    },
    contact: {
      exchangeEyebrow: "Échanger",
      exchangeTitle: "Écrivons la suite autour d'une cuisine exigeante.",
      ctaEmail: "M'écrire",
      ctaPhone: "Me joindre",
      ctaInstagram: "Instagram",
      detailsEyebrow: "Coordonnées",
      instagramHandle: "@gautiercooks"
    },
    footer: "© {year} Cyril Gautier"
  },
  en: {
    locale: "en",
    brand: "CYRIL GAUTIER",
    nav: [
      { id: NAV_IDS.profile, label: "Profile" },
      { id: NAV_IDS.experience, label: "Experience" },
      { id: NAV_IDS.skills, label: "Expertise" },
      { id: NAV_IDS.contact, label: "Contact" }
    ],
    languageSwitcher: {
      fr: "FR",
      en: "EN",
      es: "ES",
      aria: {
        fr: "Switch website to French",
        en: "Switch website to English",
        es: "Switch website to Spanish"
      }
    },
    hero: {
      eyebrow: "My cuisine · France",
      title: "A cuisine shaped by precision, curiosity, and a taste for detail.",
      body: "I am a French chef trained in Paris, sharpened by an early immersion in Spain, and driven by a constant search for flavor, texture, and culture.",
      ctaEmail: "Get in touch",
      ctaPhone: "Call now",
      ctaDiscover: "Discover my path",
      imageAlt: "Cyril Gautier plating multiple dishes in the kitchen.",
      asideEyebrow: "Based in France",
      asideTitle: "I am building a cuisine that is demanding, sensitive, and already distinctive.",
      nationality: "French nationality",
      birth: "Born on December 20, 2000"
    },
    profile: {
      eyebrow: "Profile",
      title: "An unconventional path shaped by culinary standards.",
      paragraphs: [
        "I lived in Paris until August 2025, then spent more than six months in Malaga, Spain. That period allowed me to travel across the south of the country to explore Spanish cuisine more deeply, while keeping the habit of discovering local food everywhere I go.",
        "I started cooking at a very young age. My approach combines creativity, autonomy, discipline, and operational commitment."
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "Hands-on work, training, and professional progression.",
      items: [
        {
          date: "April 2026 · Present",
          title: "Pullman La Défense · Commis Chef",
          description:
            "Versatile and responsive, I handle ingredient prep (peeling, cutting), plating, and support across the different stations (hot, cold). Rigorous about hygiene standards (HACCP), I adapt quickly to the pace of service to effectively support the brigade."
        },
        {
          date: "October 2023 · August 2024",
          title: "Octopus · Apprentice / Line Cook Assistant",
          description:
            "I handled prep work, followed technical recipes, supported service, maintained my station, kept the kitchen in order, and applied HACCP standards rigorously."
        },
        {
          date: "2024",
          title: "CAP Pastry · Campus Belliard, Paris 18th",
          description:
            "I completed this one-year post-baccalaureate program to deepen my understanding of textures, balance, and precision in pastry."
        },
        {
          date: "2023 · 2024",
          title: "Preparatory Year for BTS / CAP Cuisine · Lycée and CFA Belliard, Paris 18th",
          description: "This specialization year strengthened my professional culinary foundations and immersed me in the rhythm of a brigade."
        },
        {
          date: "2020 · 2022",
          title: "BTS Electrotechnics · Lycée Léonard de Vinci",
          description: "This demanding technical background reinforced my rigor, organization, and work method."
        },
        {
          date: "2019 · 2020",
          title: "MIPI Degree · Sorbonne University",
          description: "An initial university path before a deliberate shift toward culinary professions."
        }
      ]
    },
    skills: {
      eyebrow: "Expertise",
      title: "A French foundation enriched by international influences.",
      cuisinesEyebrow: "Culinary repertoire",
      cuisinesTitle: "Influences and areas of expression",
      languagesEyebrow: "Languages",
      languagesTitle: "Communication, service culture, and exchange",
      trainingsEyebrow: "Additional culinary training",
      cuisines: [
        { name: "French", level: "Intermediate", tone: "refined" },
        { name: "Filipino", level: "Intermediate", tone: "refined" },
        { name: "American", level: "Intermediate", tone: "refined" },
        { name: "Italian", level: "Beginner", tone: "emerging" },
        { name: "Chinese", level: "Beginner", tone: "emerging" },
        { name: "Spanish", level: "Beginner", tone: "emerging" },
        { name: "Japanese", level: "Beginner", tone: "emerging" },
        { name: "Indonesian", level: "Beginner", tone: "emerging" }
      ],
      languages: [
        { name: "French", level: "Native", accent: "A native language rooted in everyday life, culture, and transmission." },
        { name: "English", level: "Native", accent: "My first spoken language, with a natural and instinctive command of it." },
        { name: "Spanish", level: "A2", accent: "Learned academically in France, then developed further during my immersion in Spain." },
        { name: "Filipino", level: "Basic notions", accent: "Cultural references and everyday expressions." }
      ],
      trainings: [
        {
          date: "March 2026 · Viking Cruises",
          description: "I completed an advanced culinary training session there."
        },
        {
          date: "November 2025 · Espace Japonais Manekineko de Montmartre",
          description: "I deepened my foundations in ramen, broth work, and final assembly."
        },
        {
          date: "February 2025 · Le Cordon Bleu",
          description: "I worked on bakery techniques: mini baguette, country loaf, and fougasse."
        },
        {
          date: "January 2025 · Le Cordon Bleu",
          description: "I attended a pastry workshop focused on macarons."
        }
      ]
    },
    quote: {
      text: '"A world without limits of flavor, texture, and culture."',
      label: "My motto"
    },
    contact: {
      exchangeEyebrow: "Connect",
      exchangeTitle: "Let’s shape what comes next around a demanding cuisine.",
      ctaEmail: "Email me",
      ctaPhone: "Call me",
      ctaInstagram: "Instagram",
      detailsEyebrow: "Details",
      instagramHandle: "@gautiercooks"
    },
    footer: "© {year} Cyril Gautier"
  },
  es: {
    locale: "es",
    brand: "CYRIL GAUTIER",
    nav: [
      { id: NAV_IDS.profile, label: "Perfil" },
      { id: NAV_IDS.experience, label: "Trayectoria" },
      { id: NAV_IDS.skills, label: "Competencias" },
      { id: NAV_IDS.contact, label: "Contacto" }
    ],
    languageSwitcher: {
      fr: "FR",
      en: "EN",
      es: "ES",
      aria: {
        fr: "Cambiar el sitio al francés",
        en: "Cambiar el sitio al inglés",
        es: "Cambiar el sitio al español"
      }
    },
    hero: {
      eyebrow: "Mi cocina · Francia",
      title: "Una cocina guiada por la precisión, la curiosidad y el gusto por el detalle.",
      body: "Soy un cocinero francés formado en París, marcado por una primera inmersión en España y movido por una búsqueda constante de sabores, texturas y culturas.",
      ctaEmail: "Ponerse en contacto",
      ctaPhone: "Llamar ahora",
      ctaDiscover: "Descubrir la trayectoria",
      imageAlt: "Cyril Gautier emplatando varios platos en la cocina.",
      asideEyebrow: "Con base en Francia",
      asideTitle: "Estoy construyendo una cocina exigente, sensible y ya singular.",
      nationality: "Nacionalidad francesa",
      birth: "Nacido el 20 de diciembre de 2000"
    },
    profile: {
      eyebrow: "Perfil",
      title: "Una trayectoria atípica orientada hacia la exigencia culinaria.",
      paragraphs: [
        "Viví en París hasta agosto de 2025, antes de pasar más de seis meses en Málaga, España. Esa etapa me permitió viajar por el sur del país para descubrir más a fondo la cocina española, manteniendo al mismo tiempo el hábito de explorar la gastronomía local allí donde voy.",
        "Empecé a cocinar desde muy joven. Mi enfoque reúne creatividad, autonomía, rigor y compromiso operativo."
      ]
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia, formación y evolución profesional.",
      items: [
        {
          date: "Abril de 2026 · Presente",
          title: "Pullman La Défense · Ayudante de cocina",
          description:
            "Polivalente y reactivo, me encargo de la preparación de los ingredientes (pelado, corte), del emplatado y del apoyo en las distintas partidas (caliente, frío). Riguroso con las normas de higiene (HACCP), me adapto rápidamente al ritmo del servicio para apoyar eficazmente a la brigada."
        },
        {
          date: "Octubre de 2023 · Agosto de 2024",
          title: "Octopus · Aprendiz / Ayudante de cocina",
          description:
            "Me encargué de las preparaciones previas, del respeto de las fichas técnicas, del apoyo durante el servicio, del mantenimiento de mi partida, del orden de la cocina y de la aplicación rigurosa de las normas HACCP."
        },
        {
          date: "2024",
          title: "CAP Pastelería · Campus Belliard, París 18.º",
          description:
            "Seguí esta formación posbachillerato de un año para ampliar mi dominio de las texturas, los equilibrios y la precisión en pastelería."
        },
        {
          date: "2023 · 2024",
          title: "Año preparatorio BTS / CAP Cocina · Lycée y CFA Belliard, París 18.º",
          description:
            "Este año de especialización me permitió consolidar las bases profesionales de la cocina e integrarme en el ritmo de una brigada."
        },
        {
          date: "2020 · 2022",
          title: "BTS Electrotecnia · Lycée Léonard de Vinci",
          description: "Esta formación técnica exigente reforzó mi rigor, mi organización y mi método de trabajo."
        },
        {
          date: "2019 · 2020",
          title: "Licenciatura MIPI · Universidad Sorbona",
          description: "Una primera experiencia universitaria, antes de una reorientación decidida hacia los oficios de la cocina."
        }
      ]
    },
    skills: {
      eyebrow: "Competencias",
      title: "Una base francesa enriquecida por influencias internacionales.",
      cuisinesEyebrow: "Repertorios culinarios",
      cuisinesTitle: "Influencias y campos de expresión",
      languagesEyebrow: "Idiomas",
      languagesTitle: "Comunicación, servicio e intercambio cultural",
      trainingsEyebrow: "Formaciones culinarias complementarias",
      cuisines: [
        { name: "Francesa", level: "Intermedio", tone: "refined" },
        { name: "Filipina", level: "Intermedio", tone: "refined" },
        { name: "Estadounidense", level: "Intermedio", tone: "refined" },
        { name: "Italiana", level: "Principiante", tone: "emerging" },
        { name: "China", level: "Principiante", tone: "emerging" },
        { name: "Española", level: "Principiante", tone: "emerging" },
        { name: "Japonesa", level: "Principiante", tone: "emerging" },
        { name: "Indonesia", level: "Principiante", tone: "emerging" }
      ],
      languages: [
        { name: "Francés", level: "Lengua materna", accent: "Una lengua materna arraigada en la vida cotidiana, la cultura y la transmisión." },
        { name: "Inglés", level: "Lengua materna", accent: "Mi primera lengua hablada, con una expresión natural y espontánea." },
        {
          name: "Español",
          level: "A2",
          accent: "Aprendido en Francia en un contexto escolar y desarrollado después durante mi inmersión en España."
        },
        { name: "Filipino", level: "Nociones básicas", accent: "Referencias culturales y expresiones de la vida cotidiana." }
      ],
      trainings: [
        {
          date: "Marzo de 2026 · Viking Cruises",
          description: "Allí seguí una formación culinaria de profundización."
        },
        {
          date: "Noviembre de 2025 · Espace Japonais Manekineko de Montmartre",
          description: "Profundicé en las bases del ramen, los caldos y el montaje final."
        },
        {
          date: "Febrero de 2025 · Le Cordon Bleu",
          description: "Trabajé técnicas de panadería: mini baguette, pan de campo y fougasse."
        },
        {
          date: "Enero de 2025 · Le Cordon Bleu",
          description: "Realicé un taller de pastelería dedicado a los macarons."
        }
      ]
    },
    quote: {
      text: '"Un mundo sin límites de sabores, texturas y culturas."',
      label: "Mi lema"
    },
    contact: {
      exchangeEyebrow: "Hablemos",
      exchangeTitle: "Escribamos lo que viene alrededor de una cocina exigente.",
      ctaEmail: "Escribirme",
      ctaPhone: "Llamarme",
      ctaInstagram: "Instagram",
      detailsEyebrow: "Datos",
      instagramHandle: "@gautiercooks"
    },
    footer: "© {year} Cyril Gautier"
  }
}

export const levelToneClass = {
  refined: "bg-emerald-50/80 text-emerald-700 ring-1 ring-emerald-200/70",
  emerging: "bg-amber-50/80 text-amber-700 ring-1 ring-amber-200/70"
};
