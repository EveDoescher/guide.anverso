"use client";

import { useState } from "react";
import { ArrowRight, HeartHandshake, Lightbulb, MessageCircle, ShieldCheck } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";

const PRINCIPLES = [
  {
    title: "Clareza",
    text: "Fale de forma simples, direta e sem jargao tecnico.",
    Icon: MessageCircle,
  },
  {
    title: "Empatia",
    text: "Oriente a pessoa sem culpa, pressa ou tom de erro.",
    Icon: HeartHandshake,
  },
  {
    title: "Credibilidade",
    text: "Comunique com seguranca, criterio e transparencia.",
    Icon: ShieldCheck,
  },
  {
    title: "Inspirar acao",
    text: "Sempre indique o proximo passo possivel.",
    Icon: Lightbulb,
  },
];

const EXAMPLES = [
  {
    situation: "Erro de envio",
    use: "Falte de novo? Vamos tentar reenviar agora.",
    avoid: "Falha no upload. Erro 500.",
  },
  {
    situation: "Confirmacao",
    use: "Tudo funcionando. Seu progresso esta salvo.",
    avoid: "Operacao concluida com sucesso.",
  },
  {
    situation: "Atencao",
    use: "Falta informar a cidade para montarmos a capa.",
    avoid: "Campo obrigatorio nao preenchido.",
  },
  {
    situation: "Geracao",
    use: "Respira. Seu DOCX esta pronto para baixar.",
    avoid: "Arquivo gerado.",
  },
];

const PHRASES = [
  "Impacto positivo que floresce no tempo.",
  "Fortalecemos para transformar o tempo em regeneracao.",
  "Juntos, cuidamos do futuro possivel.",
];

export function VozSection() {
  const [activePhrase, setActivePhrase] = useState(0);

  return (
    <SectionShell
      id="voz"
      label="Tom de Voz"
      pill="Microcopy"
      intro="O texto do Anverso deve reduzir ansiedade, mostrar criterio e transformar pendencias em passos claros."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {PRINCIPLES.map(({ title, text, Icon }) => (
          <article
            key={title}
            className="guide-panel rounded-[12px] p-4 transition-all hover:-translate-y-1"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-[999px] border border-[rgba(168,117,36,0.32)] bg-[rgba(168,117,36,0.08)] text-[var(--color-gold)]">
              <Icon size={18} />
            </span>
            <p className="mt-4 text-[13px] font-bold text-[var(--color-forest)]">
              {title}
            </p>
            <p className="mt-1 text-[10.5px] leading-relaxed text-[var(--color-neutral)]">
              {text}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
        <div className="guide-panel overflow-hidden rounded-[12px]">
          <div className="grid grid-cols-[150px_1fr_1fr] bg-[var(--color-forest)] px-4 py-3 text-[10px] font-bold uppercase text-white">
            <span>Situacao</span>
            <span>Como comunicar</span>
            <span>Evitar</span>
          </div>
          {EXAMPLES.map((example, index) => (
            <div
              key={example.situation}
              className="grid grid-cols-[150px_1fr_1fr] gap-3 border-b border-[var(--color-border-soft)] px-4 py-4 last:border-b-0"
              style={{
                backgroundColor:
                  index % 2 === 0
                    ? "rgba(255,251,246,0.46)"
                    : "rgba(247,240,228,0.40)",
              }}
            >
              <p className="text-[11px] font-bold text-[var(--color-text)]">
                {example.situation}
              </p>
              <p className="text-[11px] leading-relaxed text-[var(--color-forest)]">
                {example.use}
              </p>
              <p className="text-[11px] leading-relaxed text-[var(--color-neutral)]">
                {example.avoid}
              </p>
            </div>
          ))}
        </div>

        <aside className="guide-panel rounded-[12px] p-4">
          <p className="text-[10px] font-bold uppercase text-[var(--color-gold)]">
            Frases de exemplo
          </p>
          <div className="mt-4 space-y-2">
            {PHRASES.map((phrase, index) => (
              <button
                key={phrase}
                type="button"
                onClick={() => setActivePhrase(index)}
                className={[
                  "anverso-focus flex w-full items-center justify-between gap-3 rounded-[10px] border px-3 py-3 text-left text-[11px] transition-all",
                  activePhrase === index
                    ? "border-[var(--color-forest)] bg-[rgba(63,91,74,0.08)] text-[var(--color-forest)]"
                    : "border-[var(--color-border)] bg-[var(--color-paper-soft)] text-[var(--color-neutral)]",
                ].join(" ")}
              >
                <span>{phrase}</span>
                <ArrowRight size={13} />
              </button>
            ))}
          </div>

          <blockquote className="mt-5 rounded-[12px] bg-[var(--color-forest)] p-5">
            <p className="font-serif text-[21px] italic leading-snug text-[var(--color-paper)]">
              "{PHRASES[activePhrase]}"
            </p>
          </blockquote>
        </aside>
      </div>
    </SectionShell>
  );
}
