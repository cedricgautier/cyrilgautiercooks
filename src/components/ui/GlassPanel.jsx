export default function GlassPanel({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={`lux-card rounded-[2rem] border border-black/10 bg-white/55 shadow-luxury backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
