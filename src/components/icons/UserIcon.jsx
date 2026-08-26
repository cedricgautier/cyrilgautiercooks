import iconClassName from "./iconClassName";

export default function UserIcon({ className = iconClassName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c1.8-3 4.1-4.5 6.5-4.5s4.7 1.5 6.5 4.5" strokeLinecap="round" />
    </svg>
  );
}
