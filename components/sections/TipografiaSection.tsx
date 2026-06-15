"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";

const SCALE = [
  { name: "H1", size: "36px", sample: "Titulo principal", use: "Abertura e marcos" },
  { name: "H2", size: "24px", sample: "Titulo secundario", use: "Secoes do guia" },
  { name: "H3", size: "18px", sample: "Titulo terciario", use: "Cards e modulos" },
  { name: "Body", size: "14px", sample: "Texto de paragrafo com leitura confortavel.", use: "Interface" },
  { name: "Legenda", size: "11px", sample: "Texto auxiliar", use: "Metadados" },
];

export function TipografiaSection() {
  const [dense, setDense] = useState(false);

  return (
    <SectionShell
      id="tipografia"
      label="Tipografia"
      pill="Escala"
      intro="A serifada carrega a memoria editorial da marca. A sans segura os formularios, estados e leitura funcional."
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(280px,0.72fr)]">
        <div className="guide-panel rounded-[12px] p-5">
          <p className="text-[10px] font-bold uppercase text-[var(--color-gold)]">
            Familia tipografica
          </p>
          <div className="mt-6 space-y-7">
            <div>
              <p className="font-serif text-[62px] font-bold leading-none text-[var(--color-forest)]">
                Aa
              </p>
              <p className="mt-2 text-[12px] font-bold text-[var(--color-text)]">
                Playfair Display
              </p>
              <p className="text-[10.5px] text-[var(--color-neutral)]">
                Titulos e momentos de marca.
              </p>
            </div>
            <div>
              <p className="font-sans text-[48px] font-medium leading-none text-[var(--color-forest)]">
                Aa
              </p>
              <p className="mt-2 text-[12px] font-bold text-[var(--color-text)]">
                DM Sans
              </p>
              <p className="text-[10.5px] text-[var(--color-neutral)]">
                Campos, botoes e texto de interface.
              </p>
            </div>
          </div>
        </div>

        <div className="guide-panel rounded-[12px] p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[10px] font-bold uppercase text-[var(--color-gold)]">
              Hierarquia
            </p>
            <button
              type="button"
              onClick={() => setDense((current) => !current)}
              className="anverso-focus rounded-[999px] border border-[var(--color-border)] px-3 py-1 text-[10px] font-bold text-[var(--color-forest)] transition-all hover:border-[var(--color-forest)]"
            >
              {dense ? "Modo aberto" : "Modo denso"}
            </button>
          </div>

          <div className={dense ? "mt-4 space-y-2" : "mt-4 space-y-4"}>
            {SCALE.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-[54px_1fr_96px] items-baseline gap-4 border-b border-[var(--color-border-soft)] pb-3 last:border-b-0"
              >
                <p className="text-[11px] font-bold text-[var(--color-forest)]">
                  {item.name}
                </p>
                <p
                  className="truncate text-[var(--color-text)]"
                  style={{
                    fontFamily:
                      item.name === "Body" || item.name === "Legenda"
                        ? "var(--font-sans)"
                        : "var(--font-serif)",
                    fontSize: dense ? "14px" : item.size,
                    fontWeight: item.name.startsWith("H") ? 700 : 400,
                    lineHeight: 1.15,
                  }}
                >
                  {item.sample}
                </p>
                <p className="text-right text-[9.5px] text-[var(--color-neutral)]">
                  {item.use}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="guide-panel rounded-[12px] p-5">
          <p className="text-[10px] font-bold uppercase text-[var(--color-gold)]">
            Descricao com contexto
          </p>
          <p className="mt-5 font-serif text-[23px] font-bold leading-tight text-[var(--color-forest)]">
            Impacto positivo que floresce no tempo.
          </p>
          <p className="mt-3 text-[12px] leading-relaxed text-[var(--color-neutral)]">
            Aplicamos simplicidade e precisao no que comunicamos de impacto
            menor.
          </p>
          <button
            type="button"
            className="anverso-focus mt-5 inline-flex items-center gap-2 border-b border-[var(--color-gold)] pb-1 text-[12px] font-bold text-[var(--color-gold)] transition-all hover:gap-3"
          >
            Saiba mais
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
