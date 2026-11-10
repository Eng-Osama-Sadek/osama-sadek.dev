export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute -left-1/4 top-0 h-[60vh] w-[60vh] rounded-full bg-brand-electric/20 blur-[120px] animate-aurora" />
      <div className="absolute -right-1/4 top-1/3 h-[50vh] w-[50vh] rounded-full bg-brand-cyan/20 blur-[120px] animate-aurora [animation-delay:-8s]" />
      <div className="absolute bottom-0 left-1/3 h-[50vh] w-[50vh] rounded-full bg-brand-violet/20 blur-[120px] animate-aurora [animation-delay:-16s]" />
    </div>
  );
}