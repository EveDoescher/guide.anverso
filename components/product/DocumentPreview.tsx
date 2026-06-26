"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Minus,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Toggle } from "@/components/ui/Toggle";

type PreviewPage = {
  id: number;
  label: string;
  title: string;
  type: "cover" | "summary" | "content";
};

type DocumentPreviewProps = {
  pages: PreviewPage[];
  currentPage: number;
  zoom: number;
  showGuides: boolean;
  onPageChange: (page: number) => void;
  onZoomChange: (zoom: number) => void;
  onToggleGuides: () => void;
  className?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function DocumentPreview({
  pages,
  currentPage,
  zoom,
  showGuides,
  onPageChange,
  onZoomChange,
  onToggleGuides,
  className = "",
}: DocumentPreviewProps) {
  const page = pages[currentPage];
  const scale = zoom / 100;

  function previousPage() {
    onPageChange(clamp(currentPage - 1, 0, pages.length - 1));
  }

  function nextPage() {
    onPageChange(clamp(currentPage + 1, 0, pages.length - 1));
  }

  function zoomOut() {
    onZoomChange(clamp(zoom - 10, 80, 120));
  }

  function zoomIn() {
    onZoomChange(clamp(zoom + 10, 80, 120));
  }

  return (
    <div
      className={[
        "rounded-[18px] border border-[var(--color-border)] bg-[var(--color-cream-soft)] p-4",
        className,
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-serif text-[22px] font-bold leading-tight text-[var(--color-forest)]">
            Prévia do documento
          </p>

          <p className="mt-1 text-[11px] text-[var(--color-neutral)]">
            Visualização aproximada antes da geração do arquivo final.
          </p>
        </div>

        <Badge tone="success">Perfil acadêmico</Badge>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-[14px] border border-[var(--color-border)] bg-[var(--color-paper-soft)] px-3 py-2">
        <div className="flex items-center gap-2">
          <IconButton
            variant="primary"
            icon={ChevronLeft}
            label="Página anterior"
            onClick={previousPage}
            disabled={currentPage === 0}
          />

          <span className="min-w-[82px] text-center text-[11px] font-bold text-[var(--color-text)]">
            Página {currentPage + 1}/{pages.length}
          </span>

          <IconButton
            variant="primary"
            icon={ChevronRight}
            label="Próxima página"
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
          />
        </div>

        <div className="flex items-center gap-2">
          <IconButton
            variant="primary"
            icon={Minus}
            label="Diminuir zoom"
            onClick={zoomOut}
          />

          <span className="min-w-[42px] text-center text-[11px] font-bold text-[var(--color-neutral)]">
            {zoom}%
          </span>

          <IconButton
            variant="primary"
            icon={Plus}
            label="Aumentar zoom"
            onClick={zoomIn}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col lg:grid lg:grid-cols-[1fr_260px] gap-4">
        <div className="flex min-h-[400px] md:min-h-[580px] items-center justify-center overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-[rgba(217,204,186,0.25)] p-5">
          <article
            className={[
              "relative h-[500px] w-[353px] origin-center overflow-hidden bg-[var(--color-paper)] shadow-[0_18px_42px_rgba(47,44,45,0.16)] transition-transform duration-200",
              showGuides
                ? "outline outline-1 outline-[rgba(63,91,74,0.22)]"
                : "",
            ].join(" ")}
            style={{ transform: `scale(${scale})` }}
          >
            {showGuides ? (
              <div className="pointer-events-none absolute inset-[24px] border border-dashed border-[rgba(63,91,74,0.25)]" />
            ) : null}

            <div className="flex h-full flex-col px-10 py-9 text-center text-[11px] md:text-[9px] leading-relaxed text-black">
              {page.type === "cover" ? (
                <>
                  <p className="font-bold uppercase">INSTITUIÇÃO DE ENSINO</p>
                  <p className="mt-7 uppercase">NOME DO AUTOR</p>

                  <div className="mt-16">
                    <p className="text-[11px] md:text-[10px] font-bold uppercase leading-snug">
                      {page.title}
                    </p>

                    <p className="mt-2">
                      Prévia gerada a partir do perfil de formatação selecionado.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <p>CIDADE</p>
                    <p>ANO</p>
                  </div>
                </>
              ) : null}

              {page.type === "summary" ? (
                <>
                  <p className="text-[11px] md:text-[10px] font-bold uppercase">SUMÁRIO</p>

                  <div className="mt-8 space-y-3 text-left">
                    {[
                      ["1 INTRODUÇÃO", "1"],
                      ["2 DESENVOLVIMENTO", "3"],
                      ["3 ANÁLISE", "6"],
                      ["4 CONSIDERAÇÕES FINAIS", "9"],
                      ["REFERÊNCIAS", "10"],
                    ].map(([label, number]) => (
                      <div key={label} className="flex items-end gap-1">
                        <span>{label}</span>
                        <span className="mb-[2px] flex-1 border-b border-dotted border-black/60" />
                        <span>{number}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              {page.type === "content" ? (
                <>
                  <p className="text-left text-[11px] md:text-[10px] font-bold uppercase">
                    {page.title}
                  </p>

                  <div className="mt-4 space-y-2 text-justify">
                    <p>
                      Este espaço representa um trecho de conteúdo acadêmico
                      usado apenas para demonstrar a organização visual da
                      página.
                    </p>

                    <p>
                      A prévia apresenta margens, hierarquia de títulos,
                      espaçamento e distribuição aproximada dos elementos no
                      documento.
                    </p>

                    <p>
                      O arquivo final é gerado com base nas informações
                      preenchidas e nas regras definidas pelo perfil de
                      formatação.
                    </p>
                  </div>

                  <p className="absolute top-6 right-9 text-[11px] md:text-[9px]">1</p>
                </>
              ) : null}
            </div>
          </article>
        </div>

        <aside className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-paper-soft)] p-3">
          <div className="flex items-center gap-2">
            <Eye size={15} className="text-[var(--color-green)]" />

            <p className="text-[12px] font-bold text-[var(--color-text)]">
              Estrutura
            </p>
          </div>

          <div className="mt-3 space-y-1.5">
            {pages.map((item, index) => {
              const isActive = index === currentPage;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onPageChange(index)}
                  className={[
                    "anverso-focus flex w-full items-center gap-2 rounded-[10px] border px-2.5 py-2 text-left transition-all",
                    isActive
                      ? "border-[var(--color-green)] bg-[rgba(63,91,74,0.08)]"
                      : "border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-paper)]",
                  ].join(" ")}
                >
                  <FileText
                    size={14}
                    className={
                      isActive
                        ? "text-[var(--color-green)]"
                        : "text-[var(--color-neutral)]"
                    }
                  />

                  <span className="min-w-0">
                    <span className="block truncate text-[11px] font-bold text-[var(--color-text)]">
                      {item.label}
                    </span>

                    <span className="block truncate text-[9.5px] text-[var(--color-neutral)]">
                      {item.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 border-t border-[var(--color-border)] pt-4">
            <Toggle
              label="Exibir margens"
              checked={showGuides}
              onCheckedChange={() => onToggleGuides()}
            />

            <Button
              variant="primary"
              size="sm"
              align="center"
              trailingIcon={false}
              icon={Download}
              className="mt-4 w-full"
            >
              Baixar DOCX
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}