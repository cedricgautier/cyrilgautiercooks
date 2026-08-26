import GlassPanel from "../ui/GlassPanel";
import SectionHeading from "../ui/SectionHeading";

export default function ExperienceSection({ content }) {
  return (
    <GlassPanel className="reveal-up mt-6 rounded-[2rem] p-5 sm:mt-7 sm:p-10" id="parcours">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} />
      <div className="grid gap-4">
        {content.items.map((item) => (
          <article key={item.title} className="lux-subcard rounded-[1.5rem] border border-black/10 bg-white/50 p-5 backdrop-blur-md">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold-500">{item.date}</p>
            <h3 className="mb-2 font-display text-2xl leading-tight text-espresso-900">{item.title}</h3>
            {item.description && <p className="text-espresso-700">{item.description}</p>}
          </article>
        ))}
      </div>
    </GlassPanel>
  );
}
