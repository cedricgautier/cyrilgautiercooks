import GlassPanel from "../ui/GlassPanel";
import SectionHeading from "../ui/SectionHeading";

export default function ProfileSection({ content }) {
  return (
    <GlassPanel className="reveal-up mt-6 rounded-[2rem] p-5 sm:mt-7 sm:p-10" id="profil">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} />
      <div className="grid gap-6 text-base leading-8 text-espresso-700 lg:grid-cols-2">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </GlassPanel>
  );
}
