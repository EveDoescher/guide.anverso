"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FileText, Eye, Download, Save, Trash2, Search, Calendar,
  Bookmark, Edit2, MoreHorizontal, Info, AlertTriangle, Cloud,
  ChevronRight, Check, X, CheckCircle2, Circle,
  Leaf, ArrowRight, Plus,
  BookOpen, ClipboardList, FileCheck, User, Tag,
  AlertCircle, MessageCircle, Wind, ArrowLeft, ChevronDown,
} from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";

const PNG_FUNCTIONAL = [
  { file: "docs-icon.png",        name: "docs-icon",       uso: "Arquivo de trabalho" },
  { file: "bookmark.png",         name: "bookmark",        uso: "Salvar / favorito"   },
  { file: "edit.png",             name: "edit",            uso: "Editar conteúdo"     },
  { file: "delete.png",           name: "delete",          uso: "Excluir item"        },
  { file: "download.png",         name: "download",        uso: "Baixar DOCX"         },
  { file: "diskette.png",         name: "diskette",        uso: "Salvar rascunho"     },
  { file: "cloud-computing.png",  name: "cloud",           uso: "Upload / sync"       },
  { file: "search-symbol.png",    name: "search",          uso: "Busca"               },
  { file: "view.png",             name: "view",            uso: "Visualizar prévia"   },
  { file: "calendar.png",         name: "calendar",        uso: "Data de entrega"     },
  { file: "more.png",             name: "more (···)",      uso: "Menu de ações"       },
  { file: "info.png",             name: "info",            uso: "Dica rápida"         },
  { file: "warning.png",          name: "warning",         uso: "Atenção / pendência" },
  { file: "right-arrow-icon.png", name: "right-arrow",     uso: "Avançar etapa"       },
];
const PNG_STATE = [
  { file: "OK.png",          name: "OK",          uso: "Etapa completa",   size: 32 },
  { file: "ATENTION.png",    name: "ATENTION",    uso: "Precisa revisão",  size: 32 },
  { file: "INFORMATION.png", name: "INFORMATION", uso: "Dica informativa", size: 32 },
];
const PNG_INPUT = [
  { file: "check-box-on.png",  name: "checkbox-on",  uso: "Selecionado"     },
  { file: "check-box-off.png", name: "checkbox-off", uso: "Não selecionado" },
  { file: "radio-btn-on.png",  name: "radio-on",     uso: "Opção ativa"     },
  { file: "radio-btn-off.png", name: "radio-off",    uso: "Opção inativa"   },
];
const PNG_DECO = [
  { file: "leaves.png",   name: "leaves",   uso: "Decorativo canto",  size: 40 },
  { file: "leaves-2.png", name: "leaves-2", uso: "Decorativo var. 2", size: 40 },
  { file: "leaves-3.png", name: "leaves-3", uso: "Decorativo var. 3", size: 40 },
  { file: "xicara.png",   name: "xícara",   uso: "Ícone de marca",    size: 40 },
  { file: "line.png",     name: "line",     uso: "Divisor decorativo", size: 48 },
];

const LUCIDE_ICONS = [
  { Icon: FileText,       name: "FileText",       uso: "Documento / trabalho" },
  { Icon: Eye,            name: "Eye",            uso: "Visualizar"           },
  { Icon: Download,       name: "Download",       uso: "Baixar"               },
  { Icon: Save,           name: "Save",           uso: "Salvar"               },
  { Icon: Trash2,         name: "Trash2",         uso: "Excluir (destrutivo)" },
  { Icon: Search,         name: "Search",         uso: "Campo de busca"       },
  { Icon: Calendar,       name: "Calendar",       uso: "Campo de data"        },
  { Icon: Bookmark,       name: "Bookmark",       uso: "Favoritar"            },
  { Icon: Edit2,          name: "Edit2",          uso: "Editar"               },
  { Icon: MoreHorizontal, name: "MoreHorizontal", uso: "Menu ···"             },
  { Icon: Info,           name: "Info",           uso: "Helper text"          },
  { Icon: AlertTriangle,  name: "AlertTriangle",  uso: "Alerta inline"        },
  { Icon: AlertCircle,    name: "AlertCircle",    uso: "Erro / pendência"     },
  { Icon: Cloud,          name: "Cloud",          uso: "Upload"               },
  { Icon: ChevronRight,   name: "ChevronRight",   uso: "Avançar / nav"        },
  { Icon: ChevronDown,    name: "ChevronDown",    uso: "Dropdown / expand"    },
  { Icon: Check,          name: "Check",          uso: "Confirmar / done"     },
  { Icon: X,              name: "X",              uso: "Fechar / dismiss"     },
  { Icon: CheckCircle2,   name: "CheckCircle2",   uso: "Estado completo"      },
  { Icon: Circle,         name: "Circle",         uso: "Radio button"         },
  { Icon: Plus,           name: "Plus",           uso: "Adicionar"            },
  { Icon: ArrowRight,     name: "ArrowRight",     uso: "Próximo passo"        },
  { Icon: ArrowLeft,      name: "ArrowLeft",      uso: "Voltar / anterior"    },
  { Icon: User,           name: "User",           uso: "Etapa Perfil"         },
  { Icon: BookOpen,       name: "BookOpen",       uso: "Etapa Conteúdo"       },
  { Icon: ClipboardList,  name: "ClipboardList",  uso: "Etapa Revisão"        },
  { Icon: FileCheck,      name: "FileCheck",      uso: "Etapa DOCX"           },
  { Icon: Leaf,           name: "Leaf",           uso: "Dica rápida"          },
  { Icon: Tag,            name: "Tag",            uso: "Perfis / categorias"  },
  { Icon: MessageCircle,  name: "MessageCircle",  uso: "Tom de Voz"           },
  { Icon: Wind,           name: "Wind",           uso: "Princípio: Respira"   },
];

function PngCard({ file, name, uso, size = 24 }: { file: string; name: string; uso: string; size?: number }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:shadow-sm transition-all group"
      style={{ backgroundColor: "#fff", border: "1px solid var(--color-sand)" }}>
      <div className="w-10 h-10 flex items-center justify-center">
        <Image src={`/icons/${file}`} alt={name} width={size} height={size}
          className="object-contain group-hover:scale-110 transition-transform" unoptimized />
      </div>
      <p className="text-[9px] font-semibold text-center leading-tight" style={{ color: "var(--color-forest)" }}>{name}</p>
      <p className="text-[8px] text-center leading-tight" style={{ color: "var(--color-neutral)" }}>{uso}</p>
    </div>
  );
}

/* Lucide sem fundo — ícone nu, maior, no centro */
function LucideCard({ Icon, name, uso }: { Icon: React.FC<{ size?: number; color?: string }>; name: string; uso: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:shadow-sm transition-all group cursor-default"
      style={{ backgroundColor: "#fff", border: "1px solid var(--color-sand)" }}>
      <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon size={22} color="var(--color-forest)" />
      </div>
      <p className="text-[9px] font-semibold text-center leading-tight" style={{ color: "var(--color-forest)" }}>{name}</p>
      <p className="text-[8px] text-center leading-tight" style={{ color: "var(--color-neutral)" }}>{uso}</p>
    </div>
  );
}

export function IconesSection() {
  const [tab, setTab] = useState<"png" | "lucide">("png");

  return (
    <SectionShell id="icones" label="Ícones" pill="Assets & Biblioteca">
      <div className="space-y-8">

        {/* Fonte dos Ícones */}
        <div className="rounded-2xl border p-6" style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-gold)" }}>
            Fonte dos Ícones
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-xl p-5 relative overflow-hidden"
              style={{ backgroundColor: "var(--color-forest)", border: "none" }}>
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Image src="/icons/leaves-2.png" alt="" width={90} height={90} />
              </div>
              <p className="text-[9px] uppercase tracking-widest mb-1 font-bold" style={{ color: "rgba(184,149,74,0.8)" }}>
                Ícones Funcionais de UI
              </p>
              <p className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}>
                Lucide React
              </p>
              <p className="text-[11px] mb-3 leading-relaxed" style={{ color: "rgba(245,240,228,0.6)" }}>
                Open-source, consistente, tree-shakeable. Cobre toda interação de UI.
              </p>
              <code className="text-[10px] px-2.5 py-1 rounded-lg font-mono block mb-1"
                style={{ backgroundColor: "rgba(0,0,0,0.3)", color: "var(--color-gold)" }}>
                npm install lucide-react
              </code>
              <code className="text-[10px] px-2.5 py-1 rounded-lg font-mono block"
                style={{ backgroundColor: "rgba(0,0,0,0.3)", color: "rgba(245,240,228,0.7)" }}>
                {"import { FileText } from 'lucide-react'"}
              </code>
            </div>
            <div className="rounded-xl p-5"
              style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-sand)" }}>
              <p className="text-[9px] uppercase tracking-widest mb-1 font-bold" style={{ color: "var(--color-neutral)" }}>
                Ícones de Marca / Status
              </p>
              <p className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
                PNGs Customizados
              </p>
              <p className="text-[11px] mb-3 leading-relaxed" style={{ color: "var(--color-neutral)" }}>
                Criados para o Anverso. Estilo orgânico, traços à mão — não existe equivalente no Lucide.
              </p>
              <code className="text-[10px] px-2.5 py-1 rounded-lg font-mono block mb-1"
                style={{ backgroundColor: "var(--color-sand)", color: "var(--color-forest)" }}>
                /public/icons/*.png
              </code>
              <code className="text-[10px] px-2.5 py-1 rounded-lg font-mono block"
                style={{ backgroundColor: "var(--color-sand)", color: "var(--color-neutral)" }}>
                {"<Image src='/icons/OK.png' width={20} height={20} />"}
              </code>
            </div>
          </div>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2">
          {(["png", "lucide"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className="px-5 py-2 rounded-xl text-xs font-semibold transition-all"
              style={{
                backgroundColor: tab === t ? "var(--color-forest)" : "#fff",
                color: tab === t ? "#fff" : "var(--color-neutral)",
                border: `1px solid ${tab === t ? "var(--color-forest)" : "var(--color-sand)"}`,
              }}>
              {t === "png" ? "PNGs customizados do Anverso" : "Lucide React — ícones de UI"}
            </button>
          ))}
        </div>

        {tab === "png" && (
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>Funcionais</p>
              <div className="grid grid-cols-7 gap-3">
                {PNG_FUNCTIONAL.map(p => <PngCard key={p.file} {...p} />)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>Estado / Status</p>
                <div className="grid grid-cols-3 gap-3">
                  {PNG_STATE.map(p => <PngCard key={p.file} {...p} />)}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>Inputs</p>
                <div className="grid grid-cols-4 gap-3">
                  {PNG_INPUT.map(p => <PngCard key={p.file} {...p} size={20} />)}
                </div>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>Decorativos & Marca</p>
              <div className="grid grid-cols-5 gap-3">
                {PNG_DECO.map(p => <PngCard key={p.file} {...p} />)}
              </div>
            </div>
          </div>
        )}

        {tab === "lucide" && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>
              Ícones Lucide React usados no Anverso
            </p>
            <div className="grid grid-cols-8 gap-3">
              {LUCIDE_ICONS.map(({ Icon, name, uso }) => (
                <LucideCard key={name}
                  Icon={Icon as React.FC<{ size?: number; color?: string }>}
                  name={name} uso={uso} />
              ))}
            </div>
          </div>
        )}

      </div>
    </SectionShell>
  );
}
