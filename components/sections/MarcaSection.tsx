import Image from "next/image";
import { SectionShell } from "@/components/ui/SectionShell";
import { Heart, Layers, Shield, ArrowRight, X } from "lucide-react";

const PILLARS = [
  { Icon: Heart,  word: "Calma",     desc: "O processo acadêmico é estressante. O Anverso não precisa ser." },
  { Icon: Layers, word: "Clareza",   desc: "Cada etapa tem um propósito. Sem formulários confusos." },
  { Icon: Shield, word: "Confiança", desc: "O usuário entrega sabendo que está correto." },
];

const AVOID = [
  "Visual frio e institucional",
  "Asteriscos vermelhos agressivos",
  "Jargão técnico (\"renderização\", \"payload\")",
  "Tons púrpura, neon, gradientes de SaaS",
  "Mensagens de erro robotizadas",
  "Fontes genéricas (Inter, Roboto, Arial)",
];

export function MarcaSection() {
  return (
    <SectionShell id="marca" label="Marca" pill="Identidade Visual">

      {/* Hero — logo grande centralizada */}
      <div className="rounded-2xl relative overflow-hidden mb-8"
        style={{ border: "1px solid var(--color-sand)", backgroundColor: "rgba(245,240,228,0.5)", minHeight: 220 }}>
        {/* Folhagem decorativa */}
        <div className="absolute top-0 right-0 pointer-events-none opacity-30">
          <Image src="/icons/leaves.png" alt="" width={200} height={200} />
        </div>
        <div className="absolute bottom-0 left-0 pointer-events-none opacity-15" style={{ transform: "scaleX(-1)" }}>
          <Image src="/icons/leaves-3.png" alt="" width={130} height={130} />
        </div>
        <div className="flex flex-col items-center py-14 relative z-10">
          <Image src="/icons/Anverso-logo.png" alt="Anverso" width={420} height={200}
            className="object-contain" style={{ maxHeight: 180 }} />
          <p className="mt-5 text-base font-medium tracking-wide" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}>
            Seu trabalho em ordem, sem complicação.
          </p>
          <div className="flex items-center gap-3 mt-3 text-sm" style={{ color: "var(--color-neutral)" }}>
            <span>Calma</span>
            <span style={{ color: "var(--color-sand)", fontFamily: "var(--font-display)" }}>·</span>
            <span>Clareza</span>
            <span style={{ color: "var(--color-sand)", fontFamily: "var(--font-display)" }}>·</span>
            <span>Confiança</span>
          </div>
        </div>
      </div>

      {/* Elementos da identidade — xícara + logotipo explicados */}
      <div className="rounded-2xl mb-6 p-6"
        style={{ backgroundColor: "var(--color-forest)", border: "1px solid var(--color-forest)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "rgba(184,149,74,0.9)" }}>
          Elementos da identidade
        </p>
        <div className="grid grid-cols-3 gap-6">

          {/* Xícara isolada */}
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl flex items-center justify-center"
              style={{ width: 96, height: 96, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Image src="/icons/xicara.png" alt="xícara" width={60} height={60} className="object-contain" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                Xícara
              </p>
              <p className="text-[10px] leading-relaxed" style={{ color: "rgba(245,240,228,0.5)" }}>
                Símbolo de pausa, café, estudo. Remete ao momento do aluno — não à burocracia.
              </p>
            </div>
          </div>

          {/* Logo completa branca */}
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl flex items-center justify-center px-6"
              style={{ width: "100%", height: 96, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Image src="/icons/Anverso-logo.png" alt="Anverso logo" width={180} height={72}
                className="object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }} />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                Logo completa
              </p>
              <p className="text-[10px] leading-relaxed" style={{ color: "rgba(245,240,228,0.5)" }}>
                Versão invertida para fundos escuros. Ícone + wordmark em Playfair Display.
              </p>
            </div>
          </div>

          {/* Logo sobre fundo claro */}
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl flex items-center justify-center px-6"
              style={{ width: "100%", height: 96, backgroundColor: "var(--color-cream)", border: "1px solid var(--color-sand)" }}>
              <Image src="/icons/Anverso-logo.png" alt="Anverso logo" width={180} height={72}
                className="object-contain" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                Logo sobre creme
              </p>
              <p className="text-[10px] leading-relaxed" style={{ color: "rgba(245,240,228,0.5)" }}>
                Versão padrão para fundos claros e textura de papel.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Essência */}
        <div className="rounded-2xl p-6 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-forest)" }}>
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <Image src="/icons/leaves-2.png" alt="" width={140} height={140} />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(184,149,74,0.8)" }}>
            Essência da marca
          </p>
          <div className="space-y-3">
            {[
              { label: "Calma",            desc: "Transforma a parte mais cansativa em leveza." },
              { label: "Acolhimento",      desc: "Interface que guia, não pressiona." },
              { label: "Estrutura",        desc: "Cada etapa tem propósito claro." },
              { label: "Confiança",        desc: "Entrega sabendo que está correto." },
              { label: "Progresso guiado", desc: "Vamos por partes, um passo por vez." },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-2">
                <ArrowRight size={11} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-gold)" }} />
                <div>
                  <span className="text-xs font-semibold" style={{ color: "var(--color-cream)" }}>{label} — </span>
                  <span className="text-xs" style={{ color: "rgba(245,240,228,0.45)" }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilares */}
        <div className="flex flex-col gap-3">
          {PILLARS.map(({ Icon, word, desc }) => (
            <div key={word} className="rounded-xl px-4 py-3.5 border flex items-start gap-3 flex-1"
              style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--color-cream)" }}>
                <Icon size={15} style={{ color: "var(--color-green)" }} />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>{word}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-neutral)" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Evitar */}
        <div className="rounded-xl p-5 border"
          style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-error)" }}>
            Evitar sempre
          </p>
          <ul className="space-y-2.5">
            {AVOID.map(item => (
              <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "var(--color-neutral)" }}>
                <X size={11} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-error)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
