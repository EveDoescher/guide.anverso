import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";

const BRAND_CARDS = [
  {
    title: "Proposito",
    text: "Tirar peso da formatacao academica e devolver foco para o texto.",
    Icon: Sparkles,
  },
  {
    title: "Visao",
    text: "Ser o jeito tranquilo de preparar trabalhos com qualidade e criterio.",
    Icon: Leaf,
  },
  {
    title: "Valores",
    text: "Clareza, cuidado, confianca e uma sensacao constante de progresso.",
    Icon: ShieldCheck,
  },
  {
    title: "Personalidade",
    text: "Calma, precisa e humana. Guia o usuario sem parecer burocratica.",
    Icon: Heart,
  },
];

function BrandAsset({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="guide-panel rounded-[12px] p-4 transition-all hover:-translate-y-1 hover:border-[rgba(63,91,74,0.32)] hover:bg-[rgba(255,251,246,0.72)]">
      <div className="flex h-[98px] items-center justify-center rounded-[8px] border border-[var(--color-border-soft)] bg-[rgba(255,251,246,0.72)]">
        {children}
      </div>
      <p className="mt-3 text-[12px] font-bold text-[var(--color-forest)]">
        {title}
      </p>
      <p className="mt-1 text-[10.5px] leading-relaxed text-[var(--color-neutral)]">
        {description}
      </p>
    </div>
  );
}

export function MarcaSection() {
  return (
    <SectionShell
      id="marca"
      label="Marca"
      pill="Identidade"
      intro="A primeira dobra apresenta o nome como sinal principal e organiza os elementos de apoio em pequenas pecas reutilizaveis."
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.9fr)]">
        <div className="guide-panel relative min-h-[220px] overflow-hidden rounded-[12px] p-6">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(63,91,74,0.05),transparent_55%)]" />
          <div className="absolute -right-5 bottom-0 opacity-20">
            <Image
              src="/icons/leaves-3.png"
              alt=""
              width={170}
              height={170}
              unoptimized
            />
          </div>

          <div className="relative z-10 flex h-full min-h-[190px] flex-col items-center justify-center text-center">
            <Image
              src="/icons/Anverso-logo.png"
              alt="Anverso"
              width={360}
              height={150}
              className="object-contain"
              style={{ width: "min(78%, 360px)", height: "auto" }}
              loading="eager"
              unoptimized
            />
            <p className="mt-4 max-w-[420px] font-serif text-[18px] leading-snug text-[var(--color-forest)]">
              Impacto positivo que floresce no tempo.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[10px] font-bold uppercase text-[var(--color-gold)]">
              <span>Calma</span>
              <span className="h-px w-6 bg-[var(--color-border)]" />
              <span>Clareza</span>
              <span className="h-px w-6 bg-[var(--color-border)]" />
              <span>Confianca</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <BrandAsset
            title="Logotipo principal"
            description="Uso prioritario em abertura, capas e cabecalhos."
          >
            <Image
              src="/icons/Anverso-logo.png"
              alt="Anverso"
              width={160}
              height={70}
              className="object-contain"
              unoptimized
            />
          </BrandAsset>

          <BrandAsset
            title="Versao horizontal"
            description="Boa para barras, rodapes e espacos estreitos."
          >
            <Image
              src="/icons/Anverso-logo.png"
              alt="Anverso"
              width={128}
              height={58}
              className="object-contain"
              unoptimized
            />
          </BrandAsset>

          <BrandAsset
            title="Icone simbolo"
            description="Elemento de marca para estados vazios e apoio visual."
          >
            <Image
              src="/icons/xicara.png"
              alt=""
              width={58}
              height={58}
              className="object-contain"
              unoptimized
            />
          </BrandAsset>

          <BrandAsset
            title="Ramo grafico"
            description="Decorativo leve. Ajuda sem competir com a interface."
          >
            <Image
              src="/icons/leaves.png"
              alt=""
              width={78}
              height={78}
              className="object-contain opacity-80"
              unoptimized
            />
          </BrandAsset>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {BRAND_CARDS.map(({ title, text, Icon }) => (
          <article
            key={title}
            className="guide-panel rounded-[12px] p-4 transition-all hover:-translate-y-1 hover:border-[rgba(168,117,36,0.38)]"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[rgba(168,117,36,0.10)] text-[var(--color-gold)]">
                <Icon size={17} />
              </span>
              <div>
                <p className="text-[12px] font-bold text-[var(--color-forest)]">
                  {title}
                </p>
                <p className="mt-1 text-[10.5px] leading-relaxed text-[var(--color-neutral)]">
                  {text}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-[12px] border border-dashed border-[rgba(63,91,74,0.22)] bg-[rgba(255,251,246,0.40)] p-4">
        <ArrowRight size={15} className="text-[var(--color-gold)]" />
        <p className="text-[11px] leading-relaxed text-[var(--color-neutral)]">
          A marca deve aparecer primeiro como presenca calma, depois como sistema:
          logo, simbolo, valores e componentes trabalham como uma mesma linguagem.
        </p>
      </div>
    </SectionShell>
  );
}
