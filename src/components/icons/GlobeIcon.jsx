import iconClassName from "./iconClassName";

export default function GlobeIcon({ className = iconClassName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 4.3c-1.4 2-2.2 4.7-2.2 7.7s.8 5.7 2.2 7.7" strokeLinecap="round" />
      <path d="M15.5 4.3c1.4 2 2.2 4.7 2.2 7.7s-.8 5.7-2.2 7.7" strokeLinecap="round" />
      <path d="M4 12h16" strokeLinecap="round" />
      <path d="M5.7 8.2h12.6" strokeLinecap="round" />
      <path d="M5.7 15.8h12.6" strokeLinecap="round" />
    </svg>
  );
}
