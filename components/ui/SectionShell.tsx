export function SectionShell({
  id, label, pill, children,
}: {
  id: string;
  label: string;
  pill?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="min-h-screen py-16 px-10 relative z-10">
      {/* Section topbar */}
      <div
        className="flex items-center justify-between mb-10 pb-4"
        style={{ borderBottom: "1px solid var(--color-sand)" }}
      >
        <h2
          className="text-3xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
        >
          {label}
        </h2>
        {pill && (
          <span
            className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: "var(--color-forest)", color: "var(--color-cream)" }}
          >
            {pill}
          </span>
        )}
      </div>
      {children}
    </section>
  );
}
