import { SectionShell } from "@/components/ui/SectionShell";

const SCALE = [
  { name: "Display / H1", size: "48px", weight: "900", sample: "Trabalho de Conclusão", family: "display", usage: "Hero, títulos de página" },
  { name: "H2",           size: "32px", weight: "700", sample: "Escolha seu perfil",    family: "display", usage: "Cabeçalhos de seção" },
  { name: "H3",           size: "24px", weight: "600", sample: "Capa do trabalho",      family: "display", usage: "Subtítulos, cards" },
  { name: "Body",         size: "16px", weight: "400", sample: "Seu trabalho está quase pronto. Revise os últimos detalhes antes de gerar o DOCX.", family: "body", usage: "Parágrafos, descrições" },
  { name: "Small",        size: "14px", weight: "400", sample: "ABNT UNIP · Atualizado há 2 horas", family: "body", usage: "Metadados, labels secundários" },
  { name: "Label",        size: "11px", weight: "600", sample: "CAMPOS DE FORMULÁRIO", family: "body", usage: "Labels de seção (uppercase + tracking)" },
];

export function TipografiaSection() {
  return (
    <SectionShell id="tipografia" label="Tipografia" pill="Escala & Fontes">

      {/* Font pairing */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div
          className="rounded-xl p-6 border"
          style={{ backgroundColor: "var(--color-white)", borderColor: "var(--color-sand)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
             style={{ color: "var(--color-gold)" }}>Display & Headings</p>
          <p className="text-5xl font-black" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)", lineHeight: 1 }}>
            Playfair Display
          </p>
          <p className="text-2xl font-normal italic mt-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral)" }}>
            Títulos acolhedores
          </p>
          <p className="text-xs mt-4" style={{ color: "var(--color-neutral)" }}>
            Serif · Pesos 400, 600, 700, 900 · Regular + Italic
          </p>
        </div>
        <div
          className="rounded-xl p-6 border"
          style={{ backgroundColor: "var(--color-white)", borderColor: "var(--color-sand)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
             style={{ color: "var(--color-gold)" }}>Body & UI</p>
          <p className="text-5xl font-light" style={{ fontFamily: "var(--font-body)", color: "var(--color-forest)", lineHeight: 1 }}>
            DM Sans
          </p>
          <p className="text-2xl mt-1" style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral)" }}>
            Texto claro e legível
          </p>
          <p className="text-xs mt-4" style={{ color: "var(--color-neutral)" }}>
            Humanista sans · Pesos 300, 400, 500, 600 · Variable
          </p>
        </div>
      </div>

      {/* Type scale */}
      <div
        className="rounded-xl border overflow-hidden"
        style={{ borderColor: "var(--color-sand)" }}
      >
        {SCALE.map(({ name, size, weight, sample, family, usage }, i) => (
          <div
            key={name}
            className="flex items-center gap-6 px-6 py-4 border-b last:border-b-0"
            style={{ borderColor: "var(--color-sand)", backgroundColor: i % 2 === 0 ? "var(--color-white)" : "var(--color-cream)" }}
          >
            {/* Meta */}
            <div className="w-28 flex-shrink-0">
              <p className="text-xs font-semibold" style={{ color: "var(--color-forest)" }}>{name}</p>
              <p className="text-[10px]" style={{ color: "var(--color-neutral)" }}>{size} · {weight}</p>
            </div>
            {/* Sample */}
            <div className="flex-1 min-w-0">
              <p
                className="truncate"
                style={{
                  fontFamily: family === "display" ? "var(--font-display)" : "var(--font-body)",
                  fontSize: Math.min(parseInt(size), 28) + "px",
                  fontWeight: weight,
                  color: "var(--color-forest)",
                  lineHeight: 1.2,
                  letterSpacing: name === "Label" ? "0.1em" : undefined,
                  textTransform: name === "Label" ? "uppercase" : undefined,
                }}
              >
                {sample}
              </p>
            </div>
            {/* Usage */}
            <div className="w-36 flex-shrink-0 text-right">
              <p className="text-[10px]" style={{ color: "var(--color-neutral)" }}>{usage}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
