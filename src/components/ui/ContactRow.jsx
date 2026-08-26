export default function ContactRow({ icon, href, children }) {
  const content = (
    <span className="contact-row inline-flex w-full items-center gap-3 rounded-[1.15rem] border border-black/10 bg-white/50 px-4 py-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/12 text-gold-600">{icon}</span>
      <span className="min-w-0 text-sm leading-6 text-espresso-800 sm:text-base">{children}</span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="block w-full">
        {content}
      </a>
    );
  }

  return content;
}
