import iconClassName from "./iconClassName";

export default function BriefcaseIcon({ className = iconClassName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="4" y="7" width="16" height="11" rx="2.5" />
      <path d="M9 7V5.8C9 4.8 9.8 4 10.8 4h2.4C14.2 4 15 4.8 15 5.8V7" />
      <path d="M4 11.5h16" />
    </svg>
  );
}
