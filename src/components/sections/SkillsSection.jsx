import { levelToneClass } from "../../data/siteContent";
import GlassPanel from "../ui/GlassPanel";
import SectionHeading from "../ui/SectionHeading";

export default function SkillsSection({ content }) {
  return (
    <GlassPanel className="reveal-up mt-6 rounded-[2rem] p-5 sm:mt-7 sm:p-10" id="savoir-faire">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} />
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="lux-subcard rounded-[1.75rem] border border-black/10 bg-white/50 p-6 backdrop-blur-md">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.28em] text-gold-500">{content.cuisinesEyebrow}</p>
            <h3 className="mt-3 max-w-[14ch] font-display text-3xl leading-tight text-espresso-900">{content.cuisinesTitle}</h3>
          </div>
          <div className="grid gap-3">
            {content.cuisines.map((item) => (
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
            <p className="text-xs uppercase tracking-[0.28em] text-gold-500">{content.languagesEyebrow}</p>
            <h3 className="mt-3 font-display text-3xl leading-tight text-espresso-900">{content.languagesTitle}</h3>
          </div>
          <div className="grid gap-3">
            {content.languages.map((item) => (
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
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold-500">{content.trainingsEyebrow}</p>
          <div className="grid gap-5 md:grid-cols-2">
            {content.trainings.map((item) => (
              <div key={item.date}>
                <h3 className="mb-2 font-display text-2xl leading-tight text-espresso-900">{item.date}</h3>
                <p className="text-espresso-700">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </GlassPanel>
  );
}
