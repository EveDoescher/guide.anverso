"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";

const PRIMARY = [
  { name: "Floresta", hex: "#355744", token: "--color-forest" },
  { name: "Serrinto", hex: "#6E8B78", token: "--color-green" },
  { name: "Nevoa", hex: "#B7C3B8", token: "--color-success-soft" },
  { name: "Papel", hex: "#FFFBF6", token: "--color-paper" },
  { name: "Ouro", hex: "#A87524", token: "--color-gold" },
];

const SECONDARY = [
  { name: "Areia", hex: "#F7F0E4", token: "--color-cream" },
  { name: "Intemperie", hex: "#8BA9B0", token: "--color-info" },
  { name: "Erva seca", hex: "#B89779", token: "--color-warning" },
  { name: "Terracota", hex: "#844537", token: "--color-error" },
  { name: "Neutro", hex: "#DBD9D2", token: "--color-sand" },
];

const COMBOS = [
  {
    title: "Acao principal",
    bg: "#355744",
    fg: "#FFFBF6",
    accent: "#A87524",
    text: "Preparar DOCX",
  },
  {
    title: "Area de leitura",
    bg: "#FFFBF6",
    fg: "#355744",
    accent: "#DBD9D2",
    text: "Impacto positivo que floresce no tempo.",
  },
  {
    title: "Aviso suave",
    bg: "#FFF9F2",
    fg: "#8E5F19",
    accent: "#A87524",
    text: "Falta pouco para concluir.",
  },
];

function Swatch({
  name,
  hex,
  token,
}: {
  name: string;
  hex: string;
  token: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="anverso-focus group text-left"
      aria-label={`Copiar ${name}`}
    >
      <span className="block overflow-hidden rounded-[10px] border border-[var(--color-border)] bg-[var(--color-paper)] transition-all group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-soft)]">
        <span
          className="flex h-24 items-end p-2"
          style={{ backgroundColor: hex }}
        >
          <span className="inline-flex items-center gap-1 rounded-[7px] bg-[rgba(28,28,25,0.34)] px-2 py-1 text-[9px] font-bold text-white backdrop-blur">
            {copied ? <Check size={11} /> : <Copy size={11} />}
            {copied ? "Copiado" : hex}
          </span>
        </span>
        <span className="block p-3">
          <span className="block text-[12px] font-bold text-[var(--color-forest)]">
            {name}
          </span>
          <span className="mt-1 block font-mono text-[9.5px] text-[var(--color-neutral)]">
            {token}
          </span>
        </span>
      </span>
    </button>
  );
}

export function CoresSection() {
  return (
    <SectionShell
      id="cores"
      label="Cores"
      pill="Paleta"
      intro="A paleta trabalha com base botanica, papel e acentos de estado para criar uma interface calma, legivel e reconhecivel."
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
        <div className="guide-panel rounded-[12px] p-4">
          <p className="mb-3 text-[10px] font-bold uppercase text-[var(--color-gold)]">
            Paleta principal
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
            {PRIMARY.map((color) => (
              <Swatch key={color.token} {...color} />
            ))}
          </div>
        </div>

        <div className="guide-panel rounded-[12px] p-4">
          <p className="mb-3 text-[10px] font-bold uppercase text-[var(--color-gold)]">
            Cores secundarias
          </p>
          <div className="grid grid-cols-2 gap-3">
            {SECONDARY.map((color) => (
              <Swatch key={color.token} {...color} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {COMBOS.map((combo) => (
          <article
            key={combo.title}
            className="guide-panel overflow-hidden rounded-[12px] transition-all hover:-translate-y-1 hover:border-[rgba(63,91,74,0.32)]"
          >
            <div
              className="h-24 p-4"
              style={{ backgroundColor: combo.bg, color: combo.fg }}
            >
              <div
                className="mb-4 h-1 w-12 rounded-full"
                style={{ backgroundColor: combo.accent }}
              />
              <p className="font-serif text-[18px] font-bold leading-snug">
                {combo.text}
              </p>
            </div>
            <div className="p-4">
              <p className="text-[12px] font-bold text-[var(--color-forest)]">
                {combo.title}
              </p>
              <p className="mt-1 text-[10.5px] leading-relaxed text-[var(--color-neutral)]">
                Use contraste claro, poucos acentos e bastante respiro para
                que o produto pareca confiavel antes de parecer decorado.
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
