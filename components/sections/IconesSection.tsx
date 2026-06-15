"use client";

import Image from "next/image";
import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import {
  AlertTriangle,
  Bookmark,
  Calendar,
  Check,
  ChevronDown,
  Cloud,
  Download,
  Edit2,
  Eye,
  FileText,
  Info,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { Chip } from "@/components/ui/Chip";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const PNG_ASSETS = [
  { file: "docs-icon.png", name: "Documento", category: "Funcional" },
  { file: "bookmark.png", name: "Favorito", category: "Funcional" },
  { file: "edit.png", name: "Editar", category: "Funcional" },
  { file: "delete.png", name: "Excluir", category: "Funcional" },
  { file: "download.png", name: "Download", category: "Funcional" },
  { file: "calendar.png", name: "Data", category: "Funcional" },
  { file: "OK.png", name: "Sucesso", category: "Estado" },
  { file: "ATENTION.png", name: "Atencao", category: "Estado" },
  { file: "INFORMATION.png", name: "Informacao", category: "Estado" },
  { file: "check-box-on.png", name: "Checkbox on", category: "Input" },
  { file: "radio-btn-on.png", name: "Radio on", category: "Input" },
  { file: "leaves.png", name: "Folhas", category: "Marca" },
  { file: "leaves-2.png", name: "Folhas 2", category: "Marca" },
  { file: "xicara.png", name: "Xicara", category: "Marca" },
];

const LUCIDE: { Icon: IconComponent; name: string; category: string }[] = [
  { Icon: FileText, name: "FileText", category: "Documento" },
  { Icon: Eye, name: "Eye", category: "Acao" },
  { Icon: Download, name: "Download", category: "Acao" },
  { Icon: Edit2, name: "Edit2", category: "Acao" },
  { Icon: Trash2, name: "Trash2", category: "Acao" },
  { Icon: Search, name: "Search", category: "Campo" },
  { Icon: Calendar, name: "Calendar", category: "Campo" },
  { Icon: ChevronDown, name: "ChevronDown", category: "Campo" },
  { Icon: Bookmark, name: "Bookmark", category: "Acao" },
  { Icon: MoreHorizontal, name: "MoreHorizontal", category: "Acao" },
  { Icon: Info, name: "Info", category: "Estado" },
  { Icon: AlertTriangle, name: "AlertTriangle", category: "Estado" },
  { Icon: Cloud, name: "Cloud", category: "Upload" },
  { Icon: Check, name: "Check", category: "Estado" },
  { Icon: Plus, name: "Plus", category: "Acao" },
  { Icon: MessageCircle, name: "MessageCircle", category: "Voz" },
];

function PngCard({ file, name, category }: { file: string; name: string; category: string }) {
  return (
    <article className="guide-panel rounded-[10px] p-3 text-center transition-all hover:-translate-y-1">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[8px] bg-[rgba(255,251,246,0.62)]">
        <Image
          src={`/icons/${file}`}
          alt=""
          width={28}
          height={28}
          className="object-contain"
          unoptimized
        />
      </div>
      <p className="mt-2 text-[10.5px] font-bold text-[var(--color-forest)]">
        {name}
      </p>
      <p className="text-[9px] text-[var(--color-neutral)]">{category}</p>
    </article>
  );
}

function LucideCard({ Icon, name, category }: { Icon: IconComponent; name: string; category: string }) {
  return (
    <article className="guide-panel rounded-[10px] p-3 text-center transition-all hover:-translate-y-1">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[8px] bg-[rgba(63,91,74,0.07)] text-[var(--color-forest)]">
        <Icon size={23} />
      </div>
      <p className="mt-2 text-[10.5px] font-bold text-[var(--color-forest)]">
        {name}
      </p>
      <p className="text-[9px] text-[var(--color-neutral)]">{category}</p>
    </article>
  );
}

export function IconesSection() {
  const [mode, setMode] = useState<"marca" | "ui">("marca");
  const [filter, setFilter] = useState("Todos");

  const categories =
    mode === "marca"
      ? ["Todos", ...Array.from(new Set(PNG_ASSETS.map((item) => item.category)))]
      : ["Todos", ...Array.from(new Set(LUCIDE.map((item) => item.category)))];

  const pngItems =
    filter === "Todos"
      ? PNG_ASSETS
      : PNG_ASSETS.filter((item) => item.category === filter);

  const lucideItems =
    filter === "Todos" ? LUCIDE : LUCIDE.filter((item) => item.category === filter);

  function changeMode(nextMode: "marca" | "ui") {
    setMode(nextMode);
    setFilter("Todos");
  }

  return (
    <SectionShell
      id="icones"
      label="Icones"
      pill="Galeria"
      intro="Icones de marca entram como assinatura visual. Icones Lucide resolvem a maior parte das acoes e controles da interface."
    >
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <aside className="guide-panel rounded-[12px] p-4">
          <p className="text-[10px] font-bold uppercase text-[var(--color-gold)]">
            Categorias e filtros
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => changeMode("marca")}
              className={[
                "anverso-focus rounded-[9px] border px-3 py-2 text-[11px] font-bold transition-all",
                mode === "marca"
                  ? "border-[var(--color-forest)] bg-[var(--color-forest)] text-white"
                  : "border-[var(--color-border)] bg-[var(--color-paper-soft)] text-[var(--color-neutral)]",
              ].join(" ")}
            >
              Marca
            </button>
            <button
              type="button"
              onClick={() => changeMode("ui")}
              className={[
                "anverso-focus rounded-[9px] border px-3 py-2 text-[11px] font-bold transition-all",
                mode === "ui"
                  ? "border-[var(--color-forest)] bg-[var(--color-forest)] text-white"
                  : "border-[var(--color-border)] bg-[var(--color-paper-soft)] text-[var(--color-neutral)]",
              ].join(" ")}
            >
              UI
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Chip
                key={category}
                selected={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </Chip>
            ))}
          </div>

          <p className="mt-5 text-[10.5px] leading-relaxed text-[var(--color-neutral)]">
            Regra: use assets de marca para momentos expressivos; use Lucide
            para acoes repetidas, campos e navegacao.
          </p>
        </aside>

        <div className="guide-panel rounded-[12px] p-4">
          <p className="mb-4 text-[10px] font-bold uppercase text-[var(--color-gold)]">
            Galeria selecionada
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {mode === "marca"
              ? pngItems.map((item) => <PngCard key={`${item.file}-${item.name}`} {...item} />)
              : lucideItems.map((item) => <LucideCard key={item.name} {...item} />)}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
