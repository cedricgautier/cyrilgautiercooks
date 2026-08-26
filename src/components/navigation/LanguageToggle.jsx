export default function LanguageToggle({ language, labels, onChange, className = "" }) {
  const options = ["fr", "en", "es"];

  return (
    <div className={`inline-flex items-center rounded-full border border-black/10 bg-white/45 p-1 backdrop-blur-md ${className}`}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-label={labels.aria?.[option] ?? labels[option]}
          className={`rounded-full px-2.5 py-1 text-[0.7rem] font-medium tracking-[0.18em] transition ${
            language === option ? "bg-espresso-900 text-sand-50" : "text-espresso-700"
          }`}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
}
