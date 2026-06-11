"use client";

import { useState } from "react";
import { SectionShell } from "@/components/ui/SectionShell";

const PALETTE_MAIN = [
  { name: "Verde Floresta",  hex: "#3B4535", token: "--color-forest", uso: "Sidebar, textos primários, fundo escuro" },
  { name: "Verde Meio",      hex: "#4A7C59", token: "--color-green",  uso: "CTA primário, sucesso, bordas de foco" },
  { name: "Dourado",         hex: "#B8954A", token: "--color-gold",   uso: "Labels de seção, step DOCX, acento" },
  { name: "Creme Papel",     hex: "#F5F0E4", token: "--color-cream",  uso: "Background global — evoca folha de papel" },
  { name: "Areia",           hex: "#E0D9C8", token: "--color-sand",   uso: "Bordas, divisores, superfícies suaves" },
];

const PALETTE_STATE = [
  { name: "Sucesso",  hex: "#4A7C59", token: "--color-green",   bg: "#E3EDE6", text: "#2D5940",  label: "Completo, válido" },
  { name: "Atenção",  hex: "#C07A1A", token: "--color-warning", bg: "#FEF3C7", text: "#7A4800",  label: "Quase pronto, pendente" },
  { name: "Erro",     hex: "#B03030", token: "--color-error",   bg: "#FAE5E5", text: "#7A2020",  label: "Inválido, campo faltante" },
  { name: "Info",     hex: "#3A6EA8", token: "--color-info",    bg: "#E8F0FB", text: "#1E3A5F",  label: "Dica, ajuda contextual" },
  { name: "Neutro",   hex: "#7A7565", token: "--color-neutral", bg: "#EDEADF", text: "#4A4840",  label: "Rascunho, inativo" },
];

function Swatch({ name, hex, token, uso }: { name: string; hex: string; token: string; uso: string }) {
  const [copied, setCopied] = useState(false);
  const isLight = ["#F5F0E4", "#E0D9C8"].includes(hex);

  return (
    <button onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="group rounded-2xl overflow-hidden transition-all duration-200 hover:scale-[1.03] hover:shadow-xl text-left w-full"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: isLight ? "1px solid var(--color-sand)" : "none" }}>
      {/* Color block — tall */}
      <div className="relative flex flex-col justify-end" style={{ height: 110, backgroundColor: hex }}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1.5 rounded-lg text-white"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            {copied ? "✓ Copiado!" : hex}
          </span>
        </div>
        {/* Token badge at bottom */}
        <div className="m-2">
          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded"
            style={{ backgroundColor: isLight ? "rgba(59,69,53,0.08)" : "rgba(0,0,0,0.25)", color: isLight ? "var(--color-forest)" : "rgba(255,255,255,0.85)" }}>
            {token}
          </span>
        </div>
      </div>
      {/* Info */}
      <div className="px-4 py-3" style={{ backgroundColor: "#fff" }}>
        <p className="text-xs font-bold mb-0.5" style={{ color: "var(--color-forest)" }}>{name}</p>
        <p className="text-[10px] leading-relaxed" style={{ color: "var(--color-neutral)" }}>{uso}</p>
      </div>
    </button>
  );
}

export function CoresSection() {
  return (
    <SectionShell id="cores" label="Cores" pill="Paleta & Estados">
      <div className="space-y-10">

        {/* Paleta principal — cards grandes e visuais */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-gold)" }}>
            Paleta Principal
          </p>
          <div className="grid grid-cols-5 gap-4">
            {PALETTE_MAIN.map(c => <Swatch key={c.hex} {...c} />)}
          </div>
          <p className="text-[10px] mt-3 flex items-center gap-1.5" style={{ color: "var(--color-neutral)" }}>
            <span style={{ color: "var(--color-gold)" }}>✦</span> Clique em qualquer cor para copiar o hex
          </p>
        </div>

        {/* Cores de estado — faixa de demonstração + badge */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-gold)" }}>
            Cores de Estado
          </p>
          <div className="grid grid-cols-5 gap-4">
            {PALETTE_STATE.map(({ name, hex, token, bg, text, label }) => (
              <div key={hex} className="rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)", border: "1px solid var(--color-sand)" }}>
                {/* Gradient: sólida → bg de estado */}
                <div className="h-16 relative" style={{ background: `linear-gradient(135deg, ${hex} 0%, ${bg} 100%)` }}>
                  <div className="absolute bottom-2 left-3">
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "rgba(255,255,255,0.9)" }}>
                      {token}
                    </span>
                  </div>
                </div>
                <div className="px-4 py-3" style={{ backgroundColor: "#fff" }}>
                  {/* Badge de estado */}
                  <span className="inline-flex items-center text-[10px] font-semibold px-2.5 py-1 rounded-full mb-2"
                    style={{ backgroundColor: bg, color: text }}>
                    {name}
                  </span>
                  <p className="text-[10px] leading-relaxed" style={{ color: "var(--color-neutral)" }}>{label}</p>
                  <p className="text-[10px] font-mono mt-1.5 font-bold" style={{ color: "var(--color-neutral)", opacity: 0.6 }}>{hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uso em contexto — mini preview */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)" }}>
            Combinações em Contexto
          </p>
          <div className="grid grid-cols-3 gap-4">
            {/* Forest sobre cream */}
            <div className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ backgroundColor: "var(--color-forest)", border: "1px solid var(--color-forest)" }}>
              <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: "var(--color-gold)" }}>Forest + Cream</p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                Seu trabalho em ordem, sem complicação.
              </p>
              <div className="flex gap-2 mt-auto">
                <span className="text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-forest)" }}>
                  Sidebar
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}>
                  Headers
                </span>
              </div>
            </div>

            {/* Green sobre white */}
            <div className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ backgroundColor: "#fff", border: "1px solid var(--color-sand)" }}>
              <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: "var(--color-gold)" }}>Green + White</p>
              <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--color-green)" }}>Preparar DOCX</button>
              <button className="w-full py-2.5 rounded-xl text-sm font-semibold border-2"
                style={{ borderColor: "var(--color-green)", color: "var(--color-green)" }}>Ver perfis</button>
            </div>

            {/* Gold accent */}
            <div className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-sand)" }}>
              <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: "var(--color-gold)" }}>Gold como acento</p>
              <div className="h-px w-full" style={{ backgroundColor: "var(--color-gold)" }} />
              <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
                Dourado reservado para <strong style={{ color: "var(--color-forest)" }}>labels</strong>, step DOCX e <strong style={{ color: "var(--color-forest)" }}>acentos tipográficos</strong>. Nunca como fundo de grandes áreas.
              </p>
              <span className="text-[9px] px-3 py-1 rounded-full font-bold self-start"
                style={{ backgroundColor: "var(--color-gold)", color: "#fff" }}>
                DOCX · label
              </span>
            </div>
          </div>
        </div>

      </div>
    </SectionShell>
  );
}
