"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
import {
  FileText, Eye, Download, Save, Trash2, Search, ChevronRight,
  ChevronDown, Calendar, Check, X, Info, AlertTriangle,
  Cloud, Bookmark, Edit2, MoreHorizontal, Plus, Leaf,
  BookOpen, ClipboardList, FileCheck, ArrowLeft, ArrowRight,
  CheckCircle2, Circle, AlertCircle, User,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { ShowcasePanel } from "@/components/showcase/ShowcasePanel";
import { ComponentSectionGroup } from "@/components/showcase/ComponentSectionGroup";
import { Chip } from "@/components/ui/Chip";
import { Toggle } from "@/components/ui/Toggle";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Radio } from "@/components/ui/Radio";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { SearchInput } from "@/components/ui/SearchInput";
import { DateInput } from "@/components/ui/DateInput";
import { Stepper } from "@/components/ui/Stepper";
import { StepDetailCard } from "@/components/ui/StepDetailCard";
import { Alert } from "@/components/ui/Alert";
import { ModalCard } from "@/components/ui/ModalCard";
import { ObservationBubble } from "@/components/ui/ObservationBubble";
import { EmptyState } from "@/components/product/EmptyState";
import { UploadDropzone } from "@/components/product/UploadDropzone";
import { AcademicWorkCard } from "@/components/product/AcademicWorkCard";
import { DocumentStructureCard } from "@/components/product/DocumentStructureCard";
import { ReferenceCard } from "@/components/product/ReferenceCard";
import { WorkFileCard } from "@/components/product/WorkFileCard";
import { ProjectProgressCard } from "@/components/product/ProjectProgressCard";
import { AdvisorNoteCard } from "@/components/product/AdvisorNoteCard";
import { AppNavigationRail } from "@/components/product/AppNavigationRail";
import type { AppNavigationItem } from "@/components/product/AppNavigationRail";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TabNavigation } from "@/components/ui/TabNavigation";
import { DocumentPreview } from "@/components/product/DocumentPreview";
import { SectionShell } from "@/components/ui/SectionShell";

/* ══════════════════════════════════════════════════════
   1. AÇÕES PRINCIPAIS
══════════════════════════════════════════════════════ */
function AcoesPrincipais() {
  const [saved, setSaved] = useState(false);

  const quickActions = [
    { Icon: Edit2, label: "Editar" },
    { Icon: Eye, label: "Visualizar" },
    { Icon: Download, label: "Baixar" },
    { Icon: Bookmark, label: "Favoritar" },
    { Icon: MoreHorizontal, label: "Mais" },
  ];

  return (
    <ShowcasePanel
      number={1}
      title="Ações Principais"
      className="w-full"
    >
      <div className="relative z-10 flex flex-col items-start gap-3">
        <Button variant="primary" size="lg" icon={FileText} className="w-[268px]">
          Preparar meu DOCX
        </Button>

        <Button variant="ghost" size="lg" trailingIcon={ChevronRight} className="w-[268px]">
          Ver perfis
        </Button>

        <Button
          variant="ghost"
          size="lg"
          icon={FileText}
          trailingIcon={false}
          className="w-[268px]"
          onClick={() => {
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
          }}
        >
          {saved ? "Salvo! ✓" : "Salvar rascunho"}
        </Button>

        <Button
          variant="danger"
          size="lg"
          icon={Trash2}
          trailingIcon={false}
          className="w-[268px] bg-[rgba(176,48,48,0.08)]"
        >
          Descartar alterações
        </Button>
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-2">
        {quickActions.map(({ Icon, label }) => (
          <IconButton key={label} icon={Icon} label={label} />
        ))}
      </div>
    </ShowcasePanel>
  );
}

/* ══════════════════════════════════════════════════════
   2. SELEÇÃO E FILTROS
══════════════════════════════════════════════════════ */
function SelecaoFiltros() {
  const availableChips = ["Normas", "Exemplos", "Citações", "ABNT", "Referências", "Modelos"];
  const [chips, setChips] = useState(["Normas", "Exemplos", "Citações"]);
  const [selectedChip, setSelectedChip] = useState("Normas");

  const [autoReview, setAutoReview] = useState(true);
  const [advisorNotes, setAdvisorNotes] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "done">("all");
  const [workType, setWorkType] = useState("academic");

  const [elements, setElements] = useState({
    cover: true,
    summary: true,
    references: true,
    illustrations: false,
  });

  function handleAddChip() {
    const nextChip = availableChips.find((chip) => !chips.includes(chip));

    if (!nextChip) return;

    setChips((current) => [...current, nextChip]);
    setSelectedChip(nextChip);
  }

  function handleRemoveChip(chipToRemove: string) {
    setChips((current) => {
      const nextChips = current.filter((chip) => chip !== chipToRemove);

      if (selectedChip === chipToRemove) {
        setSelectedChip(nextChips[0] ?? "");
      }

      return nextChips;
    });
  }

  const canAddChip = chips.length < availableChips.length;

  return (
    <ShowcasePanel
      number={2}
      title="Seleção e Filtros"
      className="w-full"
    >
      <div className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-8">
        <div>
          <p className="mb-3 text-[11px] font-medium text-[var(--color-neutral)]">
            Chips
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {chips.map((chip) => (
              <Chip
                key={chip}
                selected={selectedChip === chip}
                removable
                onRemove={() => handleRemoveChip(chip)}
                onClick={() => setSelectedChip(chip)}
              >
                {chip}
              </Chip>
            ))}

            {canAddChip ? (
              <Chip aria-label="Adicionar filtro" onClick={handleAddChip}>
                +
              </Chip>
            ) : null}
          </div>
        </div>

        <div>
          <p className="mb-3 text-[11px] font-medium text-[var(--color-neutral)]">
            Toggles
          </p>

          <div className="space-y-3">
            <Toggle
              label="Revisão automática"
              checked={autoReview}
              onCheckedChange={setAutoReview}
            />

            <Toggle
              label="Notas do orientador"
              checked={advisorNotes}
              onCheckedChange={setAdvisorNotes}
            />
          </div>
        </div>

        <div className="col-span-2">
          <p className="mb-3 text-[11px] font-medium text-[var(--color-neutral)]">
            Segmented control
          </p>

          <SegmentedControl
            value={filter}
            onChange={setFilter}
            options={[
              { label: "Tudo", value: "all" },
              { label: "Pendentes", value: "pending" },
              { label: "Concluídos", value: "done" },
            ]}
          />
        </div>

        <div>
          <p className="mb-3 text-[11px] font-medium text-[var(--color-neutral)]">
            Radio buttons
          </p>

          <div className="space-y-3">
            <Radio
              name="work-type"
              label="Trabalho acadêmico"
              value="academic"
              checked={workType === "academic"}
              onChange={(event) => setWorkType(event.target.value)}
            />

            <Radio
              name="work-type"
              label="Artigo científico"
              value="article"
              checked={workType === "article"}
              onChange={(event) => setWorkType(event.target.value)}
            />

            <Radio
              name="work-type"
              label="Relatório técnico"
              value="report"
              checked={workType === "report"}
              onChange={(event) => setWorkType(event.target.value)}
            />
          </div>
        </div>

        <div>
          <p className="mb-3 text-[11px] font-medium text-[var(--color-neutral)]">
            Checkboxes
          </p>

          <div className="space-y-3">
            <Checkbox
              label="Capa"
              checked={elements.cover}
              onChange={(event) =>
                setElements((current) => ({
                  ...current,
                  cover: event.target.checked,
                }))
              }
            />

            <Checkbox
              label="Sumário"
              checked={elements.summary}
              onChange={(event) =>
                setElements((current) => ({
                  ...current,
                  summary: event.target.checked,
                }))
              }
            />

            <Checkbox
              label="Referências"
              checked={elements.references}
              onChange={(event) =>
                setElements((current) => ({
                  ...current,
                  references: event.target.checked,
                }))
              }
            />

            <Checkbox
              label="Lista de ilustrações"
              checked={elements.illustrations}
              onChange={(event) =>
                setElements((current) => ({
                  ...current,
                  illustrations: event.target.checked,
                }))
              }
            />
          </div>
        </div>
      </div>
    </ShowcasePanel>
  );
}

/* ══════════════════════════════════════════════════════
   3. CAMPOS DE FORMULÁRIO
══════════════════════════════════════════════════════ */
function CamposFormulario() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [workType, setWorkType] = useState("");
  const [date, setDate] = useState("25/05/2026");
  const [search, setSearch] = useState("");
  const [phone, setPhone] = useState("");

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) return digits ? `(${digits}` : "";
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  return (
    <ShowcasePanel
      number={3}
      title="Campos de Formulário"
      className="w-full"
      overflow="visible"
    >
      <Input
        label="Texto"
        placeholder="Título do trabalho"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <SearchInput
        label="Busca"
        placeholder="Buscar normas, templates, exemplos..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <Textarea
        label="Área de texto"
        placeholder="Resumo do seu trabalho..."
        value={summary}
        maxLength={500}
        counter
        onChange={(event) => setSummary(event.target.value)}
      />

      <div className="space-y-4">
        <Input
          label="Campo com máscara"
          placeholder="(19) 99999-9999"
          value={phone}
          onChange={(event) => setPhone(formatPhone(event.target.value))}
        />

        <Input
          label="Campo desabilitado"
          value="Informação não editável"
          disabled
          readOnly
        />

        <div>
          <p className="mb-1.5 text-[11px] font-medium text-[var(--color-text)]">
            Texto de ajuda (helper)
          </p>

          <div className="flex items-start gap-2 text-[11px] text-[var(--color-text)]">
            <Info
              size={14}
              className="mt-0.5 shrink-0 text-[var(--color-neutral)]"
            />

            <span>Use o título principal em caixa alta.</span>
          </div>
        </div>
      </div>

      <Select
        label="Seleção (dropdown)"
        placeholder="Selecione o tipo de trabalho"
        value={workType}
        onValueChange={setWorkType}
        options={[
          { label: "Trabalho acadêmico", value: "academic-work" },
          { label: "Artigo científico", value: "scientific-article" },
          { label: "Relatório técnico", value: "technical-report" },
          { label: "Monografia", value: "monograph" },
        ]}
      />

      <DateInput
        label="Data"
        placeholder="25/05/2026"
        value={date}
        onValueChange={setDate}
      />
    </ShowcasePanel>
  );
}

/* ══════════════════════════════════════════════════════
   4. FLUXO GUIADO
══════════════════════════════════════════════════════ */
const STEP_DATA = [
  { label: "Perfil", sub: "Escolha o perfil", Icon: User, gold: false },
  { label: "Capa", sub: "Dados iniciais", Icon: FileText, gold: false },
  { label: "Conteúdo", sub: "Estruture o texto", Icon: BookOpen, gold: false },
  { label: "Revisão", sub: "Confirme os ajustes", Icon: ClipboardList, gold: false },
  { label: "DOCX", sub: "Arquivo pronto", Icon: FileCheck, gold: true },
];

function FluxoGuiado() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      label: "Perfil",
      description: "Escolha o perfil",
    },
    {
      label: "Capa",
      description: "Dados iniciais",
    },
    {
      label: "Conteúdo",
      description: "Estruture seu texto",
    },
    {
      label: "Revisão",
      description: "Confirme os ajustes",
    },
    {
      label: "DOCX",
      description: "Seu arquivo pronto",
    },
  ];

  const descriptions = [
    "Escolha qual perfil de normalização será usado para montar o documento.",
    "Informe os dados principais que vão aparecer na capa e na folha de rosto.",
    "Organize as seções do trabalho antes de gerar a estrutura final.",
    "Revise pendências, campos obrigatórios e ajustes antes de preparar o arquivo.",
    "Tudo pronto para gerar o DOCX com base nas configurações atuais.",
  ];

  return (
    <ShowcasePanel
      number={4}
      title="Fluxo Guiado"
      className="w-full"
      overflow="visible"
    >
      <div className="relative z-10">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />

        <StepDetailCard
          steps={steps}
          currentStep={currentStep}
          description={descriptions[currentStep]}
          onStepChange={setCurrentStep}
          className="mt-16"
        />
      </div>
    </ShowcasePanel>
  );
}

/* ══════════════════════════════════════════════════════
   5. CARDS
══════════════════════════════════════════════════════ */
const CARDS_DATA = [
  { title: "TCC — Marketing Digital", profile: "ABNT UNIP", progress: 65, status: { label: "Em andamento", bg: "#FEF3C7", text: "#8A5800" }, time: "Há 2 horas" },
  { title: "PIM III — Gestão de Projetos", profile: "PIM UNIP", progress: 88, status: { label: "Quase pronto", bg: "#FEF9EC", text: "#8A5800" }, time: "Ontem" },
  { title: "Relatório de Estágio", profile: "ABNT Genérico", progress: 100, status: { label: "Completo", bg: "#E3EDE6", text: "#2D5940" }, time: "3 dias atrás" },
  { title: "Artigo — Inteligência Art.", profile: "Artigo Cient.", progress: 20, status: { label: "Rascunho", bg: "#EDEADF", text: "#5A5040" }, time: "1 semana" },
];

function Cards() {
  const [selectedModel, setSelectedModel] = useState("academic");
  const [progress, setProgress] = useState(80);

  function advanceProgress() {
    setProgress((current) => (current >= 100 ? 35 : Math.min(100, current + 10)));
  }

  return (
    <ShowcasePanel
      number={5}
      title="Cards"
      className="w-full"
      overflow="visible"
    >
      <div className="relative z-10 space-y-5">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-neutral)]">
            Cards de acompanhamento
          </p>

          <div className="grid grid-cols-3 items-start gap-4">
            <WorkFileCard
              title="Trabalho de Conclusão de Curso.docx"
              updatedAt="25/05/2026"
              pages={24}
            />

            <ProjectProgressCard
              eyebrow="Projeto recente"
              title="TCC — Marketing Digital"
              meta="ABNT · salvo há 2 horas"
              progress={progress}
              onContinue={advanceProgress}
            />

            <AdvisorNoteCard
              title="Anotações do orientador"
              note="Ajustar a justificativa e revisar as referências."
              author="Prof. Amanda"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-neutral)]">
            Cards de configuração
          </p>

          <div className="grid grid-cols-2 gap-4">
            <AcademicWorkCard
              title="Trabalho acadêmico"
              description="Modelo completo para capa, folha de rosto, sumário, seções e referências."
              badge="UNIP"
              status="Mais usado"
              selected={selectedModel === "academic"}
              onSelect={() => setSelectedModel("academic")}
            />

            <AcademicWorkCard
              title="Artigo científico"
              description="Estrutura compacta para produção acadêmica com resumo, palavras-chave e referências."
              badge="ABNT"
              status="Modelo alternativo"
              selected={selectedModel === "article"}
              onSelect={() => setSelectedModel("article")}
            />

            <DocumentStructureCard
              title="Estrutura do documento"
              description="Acompanhe quais partes já estão prontas antes da geração."
              items={[
                { label: "Capa configurada", status: "done" },
                { label: "Folha de rosto pendente", status: "pending" },
                { label: "Sumário automático", status: "done" },
                { label: "Lista de ilustrações", status: "optional" },
              ]}
            />

            <div className="space-y-4">
              <ReferenceCard
                title="Manual de normalização"
                source="Referência institucional usada para conferir regras do perfil."
                status="valid"
              />

              <ReferenceCard
                title="Artigo sobre bancos NoSQL"
                source="Dados de autoria ainda precisam ser revisados."
                status="review"
              />
            </div>
          </div>
        </div>
      </div>
    </ShowcasePanel>
  );
}

/* ══════════════════════════════════════════════════════
   6. FEEDBACK E VALIDAÇÃO
══════════════════════════════════════════════════════ */
function FeedbackValidacao() {
  const [visibleAlerts, setVisibleAlerts] = useState({
    success: true,
    warning: true,
    info: true,
    error: true,
  });

  function dismissAndReturn(key: keyof typeof visibleAlerts) {
    setVisibleAlerts((current) => ({
      ...current,
      [key]: false,
    }));

    setTimeout(() => {
      setVisibleAlerts((current) => ({
        ...current,
        [key]: true,
      }));
    }, 1800);
  }

  const alerts = [
    {
      key: "success" as const,
      tone: "success" as const,
      title: "Seu trabalho está quase pronto!",
      description: "Revise os últimos detalhes e gere seu DOCX.",
    },
    {
      key: "warning" as const,
      tone: "warning" as const,
      title: "Falta apenas informar a cidade da capa.",
      description: "Esse dado é obrigatório para seguir em frente.",
    },
    {
      key: "info" as const,
      tone: "info" as const,
      title: "Dica: mantenha a coesão dos parágrafos.",
      description: "Use conectivos para fortalecer suas ideias.",
    },
    {
      key: "error" as const,
      tone: "error" as const,
      title: "Alguns pontos ainda precisam de ajuste.",
      description: "Veja as sugestões na revisão automática.",
    },
  ];

  return (
    <ShowcasePanel
      number={6}
      title="Feedback e Validação"
      className="w-full"
      overflow="visible"
    >
      <div className="relative z-10 grid grid-cols-2 gap-4">
        {alerts.map((alert) => {
          const visible = visibleAlerts[alert.key];

          return (
            <div
              key={alert.key}
              className={[
                "transition-all duration-300 ease-out",
                visible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "-translate-y-2 scale-[0.98] opacity-0",
              ].join(" ")}
            >
              <Alert
                tone={alert.tone}
                title={alert.title}
                description={alert.description}
                dismissible
                onDismiss={() => dismissAndReturn(alert.key)}
              />
            </div>
          );
        })}
      </div>
    </ShowcasePanel>
  );
}

/* ══════════════════════════════════════════════════════
   7. NAVEGAÇÃO
══════════════════════════════════════════════════════ */
const NAV_STEPS = [
  { label: "Perfil", sub: "ABNT UNIP", done: true, warn: false },
  { label: "Identificação", sub: "Todos os campos", done: true, warn: false },
  { label: "Capa", sub: "Falta a cidade", done: false, warn: true },
  { label: "Folha de Rosto", sub: "Todos os campos", done: true, warn: false },
  { label: "Elementos Iniciais", sub: "3 selecionados", done: true, warn: false },
  { label: "Conteúdo", sub: "Em andamento", done: false, warn: false },
  { label: "Referências", sub: "2 adicionadas", done: false, warn: false },
  { label: "Revisão", sub: "Pendente", done: false, warn: false },
  { label: "DOCX", sub: "Aguardando", done: false, warn: false },
];

function NavegacaoLateral() {
  const [activeArea, setActiveArea] = useState("trabalhos");
  const [activeTab, setActiveTab] = useState("visao-geral");

  const appItems: AppNavigationItem[] = [
    {
      id: "inicio",
      label: "Início",
      description: "Resumo do espaço",
    },
    {
      id: "trabalhos",
      label: "Meus trabalhos",
      description: "Documentos em criação",
      count: 4,
    },
    {
      id: "modelos",
      label: "Modelos",
      description: "Perfis e estruturas",
    },
    {
      id: "biblioteca",
      label: "Biblioteca",
      description: "Materiais salvos",
      count: 12,
    },
    {
      id: "referencias",
      label: "Referências",
      description: "Fontes e citações",
    },
    {
      id: "configuracoes",
      label: "Configurações",
      description: "Preferências do app",
    },
  ];

  const activeItem = appItems.find((item) => item.id === activeArea);

  return (
    <ShowcasePanel
      number={7}
      title="Navegação"
      className="w-full"
      overflow="visible"
    >
      <div className="relative z-10 grid grid-cols-[238px_1fr] gap-5">
        <AppNavigationRail
          items={appItems}
          activeId={activeArea}
          onChange={setActiveArea}
        />

        <div className="min-w-0 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-cream-soft)] p-5">
          <div className="flex justify-start">
            <Breadcrumb
              items={[
                { label: "Início" },
                { label: "Meus trabalhos" },
                { label: "TCC — Marketing Digital", current: true },
              ]}
            />
          </div>

          <div className="mt-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-green)]">
                Área selecionada
              </p>

              <p className="mt-2 font-serif text-[27px] font-bold leading-tight text-[var(--color-forest)]">
                {activeItem?.label}
              </p>

              <p className="mt-2 max-w-[330px] text-[12.5px] leading-relaxed text-[var(--color-neutral)]">
                {activeItem?.description}. Esta navegação pertence ao produto,
                não ao fluxo interno de criação do documento.
              </p>
            </div>

            <div className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-paper-soft)] px-3 py-2 text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-neutral)]">
                Atalhos
              </p>
              <p className="mt-1 text-[18px] font-bold text-[var(--color-green)]">
                {activeItem?.count ?? 0}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <TabNavigation
              items={[
                { id: "visao-geral", label: "Visão geral" },
                { id: "conteudo", label: "Conteúdo" },
                { id: "arquivos", label: "Arquivos", count: 3 },
                { id: "comentarios", label: "Comentários", count: 2 },
                { id: "historico", label: "Histórico" },
              ]}
              activeId={activeTab}
              onChange={setActiveTab}
            />
          </div>

          <div className="mt-5 rounded-[16px] border border-dashed border-[var(--color-border)] bg-[var(--color-paper-soft)] p-4">
            <p className="text-[13px] font-bold text-[var(--color-text)]">
              {activeTab === "visao-geral" && "Resumo do trabalho"}
              {activeTab === "conteudo" && "Estrutura textual"}
              {activeTab === "arquivos" && "Arquivos anexados"}
              {activeTab === "comentarios" && "Comentários e observações"}
              {activeTab === "historico" && "Histórico de alterações"}
            </p>

            <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--color-neutral)]">
              As abas organizam partes de uma mesma página. Elas não substituem
              o fluxo guiado; apenas ajudam a navegar dentro de uma área já
              aberta.
            </p>
          </div>
        </div>
      </div>
    </ShowcasePanel>
  );
}


/* ══════════════════════════════════════════════════════
   8. MODAIS E APOIO
══════════════════════════════════════════════════════ */
function ModaisApoio() {
  const [sectionsCount, setSectionsCount] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [saving, setSaving] = useState(false);

  function runTemporaryAction(
    setter: Dispatch<SetStateAction<boolean>>,
    duration = 1700,
  ) {
    setter(true);

    setTimeout(() => {
      setter(false);
    }, duration);
  }

  return (
    <ShowcasePanel
      number={8}
      title="Modais e Apoio"
      className="w-full"
      overflow="visible"
    >
      <div className="relative z-10 grid grid-cols-2 gap-4">
        <ModalCard
          title={generating ? "Preparando seu DOCX..." : "Gerar o DOCX agora?"}
          description={
            generating
              ? "Estamos organizando o documento com base nas configurações atuais."
              : "Seu documento será finalizado com base nas configurações atuais."
          }
          visual={
            <Image
              src="/icons/leaves.png"
              alt=""
              width={70}
              height={54}
              className="object-contain opacity-80"
              unoptimized
            />
          }
        >
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="ghost"
              size="sm"
              align="center"
              trailingIcon={false}
              disabled={generating}
              className="w-full"
            >
              Cancelar
            </Button>

            <Button
              variant="primary"
              size="sm"
              align="center"
              trailingIcon={false}
              loading={generating}
              onClick={() => runTemporaryAction(setGenerating)}
              className="w-full"
            >
              {generating ? "Gerando..." : "Gerar DOCX"}
            </Button>
          </div>
        </ModalCard>

        <ModalCard
          title={saving ? "Salvando seu progresso..." : "Deseja salvar seu progresso?"}
          description={
            saving
              ? "Guardando suas alterações para você continuar depois."
              : "Suas alterações serão mantidas para continuar depois."
          }
          visual={
            <Image
              src="/icons/diskette.png"
              alt=""
              width={42}
              height={42}
              className="object-contain opacity-65"
              unoptimized
            />
          }
        >
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="ghost"
              size="sm"
              align="center"
              trailingIcon={false}
              disabled={saving}
              className="w-full"
            >
              Agora não
            </Button>

            <Button
              variant="primary"
              size="sm"
              align="center"
              trailingIcon={false}
              loading={saving}
              onClick={() => runTemporaryAction(setSaving)}
              className="w-full"
            >
              {saving ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </ModalCard>

        <EmptyState
          title={
            sectionsCount === 0
              ? "Ainda não há seções aqui."
              : `${sectionsCount} seção adicionada.`
          }
          description={
            sectionsCount === 0
              ? "Comece adicionando o primeiro capítulo do seu trabalho."
              : "A estrutura inicial do trabalho já começou a ser montada."
          }
          imageSrc="/icons/xicara.png"
          actionLabel="Adicionar seção"
          onAction={() => setSectionsCount((current) => current + 1)}
        />

        <UploadDropzone
          title={
            uploaded
              ? "Arquivo recebido."
              : "Arraste arquivos aqui ou clique para enviar"
          }
          description={
            uploaded
              ? "O arquivo foi anexado à demonstração."
              : "PDF, DOCX, JPG ou PNG até 20MB"
          }
          iconSrc="/icons/cloud-computing.png"
          onClick={() => setUploaded(true)}
        />

        <div className="col-span-2 flex justify-end pb-1 pr-1">
          <ObservationBubble text="Clique para adicionar uma observação." />
        </div>
      </div>
    </ShowcasePanel>
  );
}

/* ══════════════════════════════════════════════════════
   9. PRÉVIA DO DOCUMENTO
══════════════════════════════════════════════════════ */
function PreviaDocumento() {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [showGuides, setShowGuides] = useState(true);

  const pages = [
    {
      id: 1,
      label: "Capa",
      title: "TÍTULO DO TRABALHO",
      type: "cover" as const,
    },
    {
      id: 2,
      label: "Sumário",
      title: "Estrutura automática",
      type: "summary" as const,
    },
    {
      id: 3,
      label: "Introdução",
      title: "1 INTRODUÇÃO",
      type: "content" as const,
    },
    {
      id: 4,
      label: "Desenvolvimento",
      title: "2 DESENVOLVIMENTO",
      type: "content" as const,
    },
  ];

  return (
    <ShowcasePanel
      number={9}
      title="Prévia do Documento"
      className="w-full"
      overflow="visible"
    >
      <div className="relative z-10">
        <DocumentPreview
          pages={pages}
          currentPage={currentPage}
          zoom={zoom}
          showGuides={showGuides}
          onPageChange={setCurrentPage}
          onZoomChange={setZoom}
          onToggleGuides={() => setShowGuides((current) => !current)}
        />
      </div>
    </ShowcasePanel>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════ */
export function ComponentesSection() {
  return (
    <div className="space-y-14">
      <ComponentSectionGroup
        eyebrow="Entrada e escolha"
        title="Começo da experiência"
        description="Ações, filtros e campos aparecem juntos como o primeiro contato do usuário com a criação do documento. O bloco prioriza escolha rápida, entrada de dados e clareza visual."
      >
        <div className="grid grid-cols-[320px_minmax(0,1fr)] items-start gap-5">
          <AcoesPrincipais />
          <SelecaoFiltros />
        </div>

        <div className="mt-5">
          <CamposFormulario />
        </div>
      </ComponentSectionGroup>

      <ComponentSectionGroup
        eyebrow="Construção do trabalho"
        title="Jornada e acompanhamento"
        description="O fluxo guiado mostra o passo a passo de criação, enquanto os cards simulam o acompanhamento real de documentos, projetos recentes, modelos e referências."
      >
        <div className="space-y-5">
          <FluxoGuiado />
          <Cards />
        </div>
      </ComponentSectionGroup>

      <ComponentSectionGroup
        eyebrow="Estados e apoio"
        title="Respostas do sistema"
        description="Feedbacks, confirmações, uploads, estados vazios e ajudas contextuais aparecem como apoio ao usuário, sem competir com o fluxo principal."
      >
        <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start gap-5">
          <FeedbackValidacao />
          <ModaisApoio />
        </div>
      </ComponentSectionGroup>

      <ComponentSectionGroup
        eyebrow="Navegação e resultado"
        title="Movimento pelo produto"
        description="A navegação organiza as áreas da plataforma, enquanto a prévia mostra o resultado visual do documento antes da geração final."
      >
        <div className="space-y-5">
          <NavegacaoLateral />
          <PreviaDocumento />
        </div>
      </ComponentSectionGroup>
    </div>
  );
}
