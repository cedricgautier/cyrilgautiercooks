export default function SectionHeading({ eyebrow, title, titleClassName = "" }) {
  return (
    <div className="mb-10 grid gap-4 lg:grid-cols-[160px_minmax(0,1fr)] lg:items-start">
      <p className="text-xs uppercase tracking-[0.28em] text-gold-500">{eyebrow}</p>
      <h2 className={`max-w-4xl font-display text-3xl leading-none text-espresso-900 sm:text-5xl lg:text-6xl ${titleClassName}`}>
        {title}
      </h2>
    </div>
  );
}
