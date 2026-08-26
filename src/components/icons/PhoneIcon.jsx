import iconClassName from "./iconClassName";

export default function PhoneIcon({ className = iconClassName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path
        d="M6.8 4.5h2.6c.4 0 .8.3.9.7l.7 3c.1.4 0 .8-.3 1.1l-1.4 1.4a14.8 14.8 0 0 0 4 4l1.4-1.4c.3-.3.7-.4 1.1-.3l3 .7c.4.1.7.5.7.9v2.6c0 .5-.4 1-.9 1A14.6 14.6 0 0 1 5.8 5.4c0-.5.5-.9 1-.9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
