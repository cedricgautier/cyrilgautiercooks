import InstagramIcon from "../icons/InstagramIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import PinIcon from "../icons/PinIcon";
import ContactRow from "../ui/ContactRow";
import GlassPanel from "../ui/GlassPanel";

export default function ContactSection({ content }) {
  return (
    <GlassPanel className="reveal-up mt-6 rounded-[2rem] p-5 sm:mt-7 sm:p-10" id="contact">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-stretch lg:gap-8">
        <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.36))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold-500">{content.exchangeEyebrow}</p>
            <h3 className="mt-3 max-w-[12ch] font-display text-3xl leading-tight text-espresso-900 sm:text-4xl">{content.exchangeTitle}</h3>
          </div>

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
              className="button-secondary-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 text-sm text-espresso-900"
            >
              <PhoneIcon />
              {content.ctaPhone}
            </a>
            <a
              href="https://www.instagram.com/gautiercooks/"
              target="_blank"
              rel="noreferrer"
              className="button-secondary-luxury inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 text-sm text-espresso-900"
            >
              <InstagramIcon />
              {content.ctaInstagram}
            </a>
          </div>
        </div>

        <div className="grid gap-3 rounded-[1.5rem] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.34))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:rounded-[1.75rem] sm:p-5">
          <p className="px-2 pb-1 text-xs uppercase tracking-[0.28em] text-gold-500">{content.detailsEyebrow}</p>
          <ContactRow icon={<PinIcon />} href={null}>
            5 Rue Diderot, 92000 Nanterre
          </ContactRow>
          <ContactRow icon={<MailIcon />} href="mailto:cyrilgautiercooks@gmail.com">
            cyrilgautiercooks@gmail.com
          </ContactRow>
          <ContactRow icon={<PhoneIcon />} href="tel:+33637251818">
            +33 6 37 25 18 18
          </ContactRow>
          <ContactRow icon={<InstagramIcon />} href="https://www.instagram.com/gautiercooks/">
            {content.instagramHandle}
          </ContactRow>
        </div>
      </div>
    </GlassPanel>
  );
}
