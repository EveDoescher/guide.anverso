import type { ReactNode } from "react";

const SECTION_META: Record<string, { number: string; note: string }> = {
  marca: {
    number: "01",
    note: "Nome e bloco protagonista abrem o guia antes dos detalhes de apoio.",
  },
  cores: {
    number: "02",
    note: "Paleta, sinalizacao e exemplos de combinacao precisam aparecer juntos.",
  },
  tipografia: {
    number: "03",
    note: "Mostra familias, hierarquia e aplicacoes reais de leitura.",
  },
  componentes: {
    number: "04",
    note: "Composicao contextual dos componentes principais do produto.",
  },
  icones: {
    number: "05",
    note: "Galeria organizada por categorias e uso funcional.",
  },
  voz: {
    number: "06",
    note: "Principios, exemplos e frases que orientam o tom da marca.",
  },
};

export function SectionShell({
  id,
  label,
  pill,
  children,
  intro,
}: {
  id: string;
  label: string;
  pill?: string;
  intro?: string;
  children: ReactNode;
}) {
  const meta = SECTION_META[id] ?? { number: "00", note: "Bloco do guia." };

  return (
    <section id={id} className="relative z-10 scroll-mt-7 px-7 py-7 md:px-10 md:py-10">
      <div className="guide-container">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_168px]">
          <div className="guide-card rounded-[16px] p-4 md:p-5">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4 border-b border-[var(--color-border-soft)] pb-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[7px] bg-[var(--color-gold)] font-serif text-[13px] font-bold text-white shadow-[var(--shadow-gold)]">
                  {meta.number}
                </span>

                <div className="min-w-0">
                  <h2 className="font-serif text-[24px] font-bold leading-tight text-[var(--color-forest)] md:text-[28px]">
                    {label}
                  </h2>

                  {intro ? (
                    <p className="mt-1 max-w-[680px] text-[12px] leading-relaxed text-[var(--color-neutral)]">
                      {intro}
                    </p>
                  ) : null}
                </div>
              </div>

              {pill ? (
                <span className="rounded-[999px] border border-[rgba(168,117,36,0.32)] bg-[rgba(168,117,36,0.08)] px-3 py-1 text-[10px] font-bold uppercase text-[var(--color-gold)]">
                  {pill}
                </span>
              ) : null}
            </div>

            {children}
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-8 flex items-center gap-3 pt-14">
              <span className="guide-line h-px w-12 shrink-0" />
              <p className="text-[10px] leading-relaxed text-[var(--color-text)]">
                {meta.note}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
