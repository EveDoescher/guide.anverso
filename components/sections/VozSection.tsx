import { SectionShell } from "@/components/ui/SectionShell";
import { MessageCircle, AlertCircle, Wind, ArrowRight } from "lucide-react";

const PRINCIPLES = [
  { Icon: MessageCircle, title: "Fala como um colega", desc: "Não como um sistema. Sem jargão técnico, sem asteriscos vermelhos agressivos." },
  { Icon: AlertCircle,   title: "Oriente, não acuse",  desc: "\"Falta informar\" em vez de \"campo inválido\". O usuário quer resolver, não ser culpado." },
  { Icon: Wind,          title: "Respira junto",        desc: "Use imperativo suave: \"Respira.\", \"Vamos.\", \"Confira.\" — nunca \"ERRO:\"." },
  { Icon: ArrowRight,    title: "Mostre o próximo passo",desc: "Toda mensagem de erro deve terminar com uma ação possível, nunca num beco sem saída." },
];

const EXAMPLES = [
  { contexto: "Campo vazio obrigatório",  certo: "Falta informar a cidade para montarmos a capa.",                               errado: "Campo obrigatório não preenchido." },
  { contexto: "DOCX gerado com sucesso", certo: "Respira. Seu trabalho está formatado e pronto para entrega.",                   errado: "Documento gerado com sucesso." },
  { contexto: "Início do fluxo",          certo: "Vamos por partes. Primeiro, escolha o perfil do seu trabalho.",                errado: "Preencha o formulário abaixo." },
  { contexto: "Pendência antes de gerar", certo: "Quase pronto — só falta conferir a cidade da capa.",                           errado: "Erro: campo cidade vazio." },
  { contexto: "Dica inline",              certo: "Use caixa alta apenas se o perfil exigir. Dúvida? A norma já está configurada.",errado: "O campo deve estar em maiúsculas conforme ABNT NBR 14724:2011." },
  { contexto: "Estado de rascunho",       certo: "Salvo como rascunho. Continue quando quiser — seu progresso está aqui.",       errado: "Rascunho salvo. Status: DRAFT." },
];

export function VozSection() {
  return (
    <SectionShell id="voz" label="Tom de Voz" pill="Microcopy & Princípios">
      <div className="space-y-6">

        {/* Princípios */}
        <div className="grid grid-cols-4 gap-4">
          {PRINCIPLES.map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-xl p-5 border"
              style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: "var(--color-cream)" }}>
                <Icon size={16} style={{ color: "var(--color-green)" }} />
              </div>
              <h4 className="text-sm font-bold mb-1.5"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
                {title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-neutral)" }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Exemplos — contraste alto */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>
            Exemplos de Microcopy
          </p>
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--color-sand)" }}>
            {/* Header — fundo escuro, texto claro garantido */}
            <div className="grid grid-cols-[160px_1fr_1fr] px-5 py-3"
              style={{ backgroundColor: "var(--color-forest)" }}>
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(245,240,228,0.5)" }}>Contexto</span>
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7EC49A" }}>✓ Usar</span>
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#E8908E" }}>✕ Evitar</span>
            </div>

            {EXAMPLES.map(({ contexto, certo, errado }, i) => (
              <div key={contexto}
                className="grid grid-cols-[160px_1fr_1fr] px-5 py-4 border-b last:border-b-0 items-start"
                style={{
                  borderColor: "var(--color-sand)",
                  backgroundColor: i % 2 === 0 ? "#fff" : "var(--color-cream)",
                }}>
                <p className="text-[11px] font-medium pr-4" style={{ color: "var(--color-neutral)" }}>
                  {contexto}
                </p>
                <div className="pr-4 flex items-start gap-2">
                  <span className="flex-shrink-0 mt-0.5 text-[11px] font-bold" style={{ color: "var(--color-green)" }}>✓</span>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-forest)" }}>{certo}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-0.5 text-[11px] font-bold" style={{ color: "var(--color-error)" }}>✕</span>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-neutral)" }}>{errado}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote final */}
        <blockquote className="rounded-2xl p-8 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-forest)" }}>
          <p className="text-2xl italic leading-relaxed"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
            "Menos ansiedade, mais foco. Esse é o plano."
          </p>
          <p className="text-xs mt-3 font-medium" style={{ color: "var(--color-gold)" }}>
            — Prancha de identidade visual do Anverso
          </p>
        </blockquote>

      </div>
    </SectionShell>
  );
}
