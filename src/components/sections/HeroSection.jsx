import portrait from "../../../assets/cyril-gautier-portrait.jpeg";
import ArrowIcon from "../icons/ArrowIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import PinIcon from "../icons/PinIcon";
import SparkIcon from "../icons/SparkIcon";
import ContactRow from "../ui/ContactRow";
import GlassPanel from "../ui/GlassPanel";

export default function HeroSection({ onDiscoverClick, content }) {
  return (
    <section className="hero-stage grid gap-5 py-3 sm:pt-12 lg:min-h-[calc(100vh-11rem)] lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.8fr)] lg:py-8 lg:pt-14">
      <GlassPanel className="reveal-up reveal-delay-1 flex flex-col justify-center rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-12 lg:p-16">
        <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold-500">
          <SparkIcon />
          {content.eyebrow}
        </p>
        <h1 className="max-w-[11ch] font-display text-[clamp(2.55rem,13vw,6.6rem)] leading-[0.93] tracking-[-0.04em] text-espresso-900 sm:max-w-[10ch]">
          {content.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[0.97rem] leading-7 text-espresso-700 sm:mt-6 sm:text-lg sm:leading-8">{content.body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:cyrilgautiercooks@gmail.com"
            className="button-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-espresso-900 px-6 text-sm text-sand-50"
          >
            <MailIcon />
            {content.ctaEmail}
          </a>
          <a
            href="tel:+33637251818"
            className="button-secondary-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-6 text-sm text-espresso-900"
          >
            <PhoneIcon />
            {content.ctaPhone}
          </a>
          <a
            href="#parcours"
            onClick={onDiscoverClick}
            className="button-secondary-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/55 px-6 text-sm text-espresso-900"
          >
            <ArrowIcon />
            {content.ctaDiscover}
          </a>
        </div>
      </GlassPanel>

      <div className="grid gap-4 self-end sm:gap-5">
        <GlassPanel className="reveal-up reveal-delay-2 image-depth overflow-hidden rounded-[2rem]">
          <figure className="min-h-[19rem] sm:min-h-[26rem]">
            <img src={portrait} alt={content.imageAlt} className="h-full w-full object-cover object-top" />
          </figure>
        </GlassPanel>

        <GlassPanel className="reveal-up reveal-delay-3 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,252,247,0.86),rgba(242,231,213,0.78))] p-5 sm:p-7">
          <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold-500">
            <SparkIcon />
            {content.asideEyebrow}
          </p>
          <p className="mb-6 font-display text-3xl leading-tight text-espresso-900">{content.asideTitle}</p>
          <div className="grid gap-3 text-sm leading-7 text-espresso-700 sm:text-base">
            <div className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/12 text-gold-600">
                <SparkIcon />
              </span>
              <span>{content.nationality}</span>
            </div>
            <div className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/12 text-gold-600">
                <SparkIcon />
              </span>
              <span>{content.birth}</span>
            </div>
            <ContactRow icon={<PinIcon />} href={null}>
              5 Rue Diderot, 92000 Nanterre
            </ContactRow>
            <ContactRow icon={<PhoneIcon />} href="tel:+33637251818">
              +33 6 37 25 18 18
            </ContactRow>
            <ContactRow icon={<MailIcon />} href="mailto:cyrilgautiercooks@gmail.com">
              cyrilgautiercooks@gmail.com
            </ContactRow>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
