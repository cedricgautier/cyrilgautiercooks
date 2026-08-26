export default function QuoteSection({ content }) {
  return (
    <section className="reveal-up mt-6 sm:mt-7">
      <div className="quote-panel rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,rgba(22,19,16,0.92),rgba(69,53,31,0.88))] px-5 py-8 text-center text-sand-50 shadow-luxury sm:px-10 sm:py-14">
        <p className="font-display text-3xl leading-none sm:text-6xl lg:text-7xl">{content.text}</p>
        <p className="mt-5 text-xs uppercase tracking-[0.28em] text-sand-200/70">{content.label}</p>
      </div>
    </section>
  );
}
