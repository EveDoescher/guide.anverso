"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText, Eye, Download, Save, Trash2, Search, ChevronRight,
  ChevronDown, Calendar, Check, X, Info, AlertTriangle,
  Cloud, Bookmark, Edit2, MoreHorizontal, Plus, Leaf,
  BookOpen, ClipboardList, FileCheck, ArrowLeft, ArrowRight,
  CheckCircle2, Circle, AlertCircle, User,
} from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";

/* ══════════════════════════════════════════════════════
   1. AÇÕES PRINCIPAIS
══════════════════════════════════════════════════════ */
function AcoesPrincipais() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="rounded-2xl border p-6 relative overflow-hidden h-full flex flex-col"
      style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-35">
        <Image src="/icons/leaves-2.png" alt="" width={120} height={160} />
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-gold)" }}>
        1. Ações Principais
      </p>
      <div className="flex flex-col gap-2.5 flex-1">
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 active:scale-[0.98]"
          style={{ backgroundColor: "var(--color-green)" }}>
          <FileText size={14} />
          Preparar meu DOCX
          <ChevronRight size={13} className="ml-auto" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all hover:bg-green-50 active:scale-[0.98]"
          style={{ borderColor: "var(--color-green)", color: "var(--color-green)", backgroundColor: "transparent" }}>
          <Eye size={13} />
          Ver perfis
          <ChevronRight size={13} className="ml-auto" />
        </button>
        <button onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all hover:bg-gray-50 active:scale-[0.98]"
          style={{ borderColor: "var(--color-sand)", color: "var(--color-forest)", backgroundColor: "transparent" }}>
          <Save size={13} style={{ opacity: 0.6 }} />
          {saved ? "Salvo! ✓" : "Salvar rascunho"}
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border-2 transition-all hover:bg-red-50 active:scale-[0.98]"
          style={{ borderColor: "var(--color-error)", color: "var(--color-error)", backgroundColor: "transparent" }}>
          <Trash2 size={13} />
          Descartar alterações
        </button>
      </div>

      {/* Icon strip — botões maiores */}
      <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--color-sand)" }}>
        <p className="text-[9px] uppercase tracking-widest mb-3 font-semibold" style={{ color: "var(--color-neutral)" }}>Ações rápidas</p>
        <div className="flex items-center gap-2">
          {[
            { Icon: Edit2,          tip: "Editar" },
            { Icon: Eye,            tip: "Visualizar" },
            { Icon: Download,       tip: "Baixar" },
            { Icon: Save,           tip: "Salvar" },
            { Icon: Bookmark,       tip: "Favoritar" },
            { Icon: MoreHorizontal, tip: "Mais" },
          ].map(({ Icon, tip }) => (
            <button key={tip} title={tip}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 group relative border"
              style={{ backgroundColor: "var(--color-cream)", borderColor: "var(--color-sand)" }}>
              <Icon size={17} style={{ color: "var(--color-forest)" }} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] bg-gray-800 text-white px-2 py-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                {tip}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   2. SELEÇÃO E FILTROS
══════════════════════════════════════════════════════ */
function SelecaoFiltros() {
  const [chips, setChips] = useState(["Normas", "Exemplos", "Citações"]);
  const [toggles, setToggles] = useState({ revisao: true, notas: false });
  const [segmented, setSegmented] = useState("Tudo");
  const [radio, setRadio] = useState("Trabalho acadêmico");
  const [checks, setChecks] = useState({ capa: true, sumario: true, referencias: false, ilustracoes: false });
  const EXTRAS = ["Referências", "Resumo", "Abstract"];

  return (
    <div className="rounded-2xl border p-6 h-full"
      style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-gold)" }}>
        2. Seleção e Filtros
      </p>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-2 font-semibold" style={{ color: "var(--color-neutral)" }}>Chips</p>
          <div className="flex flex-wrap gap-1.5">
            <button onClick={() => { const next = EXTRAS.find(e => !chips.includes(e)); if (next) setChips(p => [...p, next]); }}
              className="w-6 h-6 rounded-full flex items-center justify-center text-white transition-all hover:brightness-110"
              style={{ backgroundColor: "var(--color-green)" }}>
              <Plus size={12} />
            </button>
            {chips.map(c => (
              <span key={c} className="flex items-center gap-1 pl-3 pr-1.5 py-1 rounded-full text-xs font-medium border"
                style={{ backgroundColor: "var(--color-cream)", borderColor: "var(--color-sand)", color: "var(--color-forest)" }}>
                {c}
                <button onClick={() => setChips(p => p.filter(x => x !== c))}
                  className="w-4 h-4 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <X size={9} />
                </button>
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-2 font-semibold" style={{ color: "var(--color-neutral)" }}>Toggles</p>
          <div className="flex flex-col gap-3">
            {(["revisao", "notas"] as const).map(k => (
              <div key={k} className="flex items-center justify-between">
                <span className="text-xs" style={{ color: "var(--color-forest)" }}>
                  {k === "revisao" ? "Revisão automática" : "Notas do orientador"}
                </span>
                <button onClick={() => setToggles(p => ({ ...p, [k]: !p[k] }))}
                  className="relative w-10 h-5 rounded-full transition-all duration-300 flex-shrink-0"
                  style={{ backgroundColor: toggles[k] ? "var(--color-green)" : "var(--color-sand)" }}>
                  <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
                    style={{ left: toggles[k] ? "22px" : "2px" }} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Segmented control — fiel ao Frame-1: pills sem fundo nos inativos */}
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-2 font-semibold" style={{ color: "var(--color-neutral)" }}>Segmented control</p>
          <div className="inline-flex rounded-xl p-1 gap-1 w-full" style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-sand)" }}>
            {["Tudo", "Pendentes", "Concluídos"].map(opt => (
              <button key={opt} onClick={() => setSegmented(opt)}
                className="flex-1 text-[11px] py-1.5 px-2 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: segmented === opt ? "var(--color-forest)" : "transparent",
                  color: segmented === opt ? "#fff" : "var(--color-neutral)",
                  boxShadow: segmented === opt ? "0 1px 6px rgba(0,0,0,0.15)" : "none",
                }}>
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-2 font-semibold" style={{ color: "var(--color-neutral)" }}>Radio</p>
            {["Trabalho acadêmico", "Artigo científico", "Relatório técnico"].map(opt => (
              <label key={opt} className="flex items-center gap-2 mb-2 cursor-pointer" onClick={() => setRadio(opt)}>
                {radio === opt
                  ? <CheckCircle2 size={15} style={{ color: "var(--color-green)", flexShrink: 0 }} />
                  : <Circle size={15} style={{ color: "var(--color-sand)", flexShrink: 0 }} />}
                <span className="text-[11px]" style={{ color: "var(--color-forest)" }}>{opt}</span>
              </label>
            ))}
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-2 font-semibold" style={{ color: "var(--color-neutral)" }}>Checkbox</p>
            {(Object.keys(checks) as (keyof typeof checks)[]).map(k => (
              <label key={k} className="flex items-center gap-2 mb-2 cursor-pointer"
                onClick={() => setChecks(p => ({ ...p, [k]: !p[k] }))}>
                {checks[k]
                  ? <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--color-green)" }}>
                      <Check size={10} color="#fff" />
                    </div>
                  : <div className="w-4 h-4 rounded border-2 flex-shrink-0" style={{ borderColor: "var(--color-sand)" }} />}
                <span className="text-[11px]" style={{ color: "var(--color-forest)" }}>
                  {{ capa: "Capa", sumario: "Sumário", referencias: "Referências", ilustracoes: "Ilustrações" }[k]}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   3. CAMPOS DE FORMULÁRIO
══════════════════════════════════════════════════════ */
function CamposFormulario() {
  const [focus, setFocus] = useState<string | null>(null);
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [tel, setTel] = useState("");
  const [tipo, setTipo] = useState("");
  const [data, setData] = useState("");
  const [cidade, setCidade] = useState("");
  const [dropOpen, setDropOpen] = useState(false);
  const [showCal, setShowCal] = useState(false);
  const [calMonth, setCalMonth] = useState(4);
  const [calYear, setCalYear] = useState(2026);

  const TIPOS = ["TCC", "Artigo Científico", "Relatório Técnico", "PIM", "Monografia"];
  const MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
  const getDays = (m: number, y: number) => new Date(y, m + 1, 0).getDate();
  const getFirst = (m: number, y: number) => new Date(y, m, 1).getDay();
  const fmtTel = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (!d) return "";
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 7) return `(${d.slice(0,2)}) ${d.slice(2)}`;
    return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
  };
  const iStyle = (name: string, err = false) => ({
    borderColor: err ? "var(--color-error)" : focus === name ? "var(--color-green)" : "var(--color-sand)",
    boxShadow: focus === name ? "0 0 0 3px rgba(74,124,89,0.12)" : err ? "0 0 0 3px rgba(176,48,48,0.1)" : "none",
    backgroundColor: err ? "#FEF8F8" : "#fff",
    outline: "none", transition: "all 0.15s",
    color: "var(--color-forest)",
    fontFamily: "var(--font-body)",
  });
  const cls = "w-full text-xs px-3 py-2.5 rounded-xl border";

  return (
    <div className="rounded-2xl border p-6" style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-gold)" }}>
        3. Campos de Formulário
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-1 font-semibold" style={{ color: "var(--color-neutral)" }}>Texto</p>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-forest)" }}>Título do trabalho</label>
          <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Ex: Marketing Digital para PMEs"
            className={cls} style={iStyle("titulo")}
            onFocus={() => setFocus("titulo")} onBlur={() => setFocus(null)} />
          {titulo.length > 0 && <p className="text-[10px] mt-1 text-right" style={{ color: "var(--color-green)" }}>{titulo.length} caracteres</p>}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-1 font-semibold" style={{ color: "var(--color-neutral)" }}>Busca</p>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-forest)" }}>Buscar normas</label>
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--color-neutral)", opacity: 0.5 }} />
            <input placeholder="Buscar normas, templates, exemplos..."
              className={cls} style={{ ...iStyle("busca"), paddingLeft: 32 }}
              onFocus={() => setFocus("busca")} onBlur={() => setFocus(null)} />
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-1 font-semibold" style={{ color: "var(--color-neutral)" }}>Área de texto</p>
          <textarea value={resumo} onChange={e => setResumo(e.target.value.slice(0, 500))}
            placeholder="Resumo do seu trabalho..." rows={4}
            className="w-full text-xs px-3 py-2.5 rounded-xl border resize-none"
            style={iStyle("resumo")}
            onFocus={() => setFocus("resumo")} onBlur={() => setFocus(null)} />
          <p className="text-[10px] text-right mt-0.5" style={{ color: resumo.length > 450 ? "var(--color-warning)" : "var(--color-neutral)" }}>
            {resumo.length}/500
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-1 font-semibold" style={{ color: "var(--color-neutral)" }}>Seleção (dropdown)</p>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-forest)" }}>Tipo de trabalho</label>
          <div className="relative">
            <button onClick={() => setDropOpen(p => !p)}
              className="w-full flex items-center justify-between text-xs px-3 py-2.5 rounded-xl border transition-all text-left"
              style={{ ...iStyle("drop"), color: tipo ? "var(--color-forest)" : "var(--color-neutral)" }}>
              <span>{tipo || "Selecione o tipo de trabalho"}</span>
              <ChevronDown size={14} style={{ color: "var(--color-neutral)", transition: "transform 0.2s", transform: dropOpen ? "rotate(180deg)" : "none" }} />
            </button>
            {dropOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border shadow-lg z-20 overflow-hidden"
                style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
                {TIPOS.map(t => (
                  <button key={t} onClick={() => { setTipo(t); setDropOpen(false); }}
                    className="w-full text-left px-3 py-2.5 text-xs flex items-center justify-between hover:bg-gray-50 transition-colors"
                    style={{ color: tipo === t ? "var(--color-green)" : "var(--color-forest)", fontWeight: tipo === t ? 600 : 400 }}>
                    {t} {tipo === t && <Check size={12} style={{ color: "var(--color-green)" }} />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-1 font-semibold" style={{ color: "var(--color-neutral)" }}>Campo com máscara</p>
          <input value={tel} onChange={e => setTel(fmtTel(e.target.value))}
            placeholder="(19) 99999-9999"
            className={cls} style={{ ...iStyle("tel"), fontFamily: "monospace", letterSpacing: "0.04em" }}
            onFocus={() => setFocus("tel")} onBlur={() => setFocus(null)} />
          {tel.replace(/\D/g,"").length === 11 && (
            <p className="text-[10px] mt-1 flex items-center gap-1" style={{ color: "var(--color-green)" }}>
              <Check size={11} /> Número válido
            </p>
          )}
        </div>
        <div className="relative">
          <p className="text-[10px] uppercase tracking-widest mb-1 font-semibold" style={{ color: "var(--color-neutral)" }}>Data</p>
          <button onClick={() => setShowCal(p => !p)}
            className="w-full flex items-center justify-between text-xs px-3 py-2.5 rounded-xl border transition-all text-left"
            style={{ ...iStyle("data"), color: data ? "var(--color-forest)" : "var(--color-neutral)" }}>
            <span className="flex items-center gap-2">
              <Calendar size={13} style={{ color: "var(--color-neutral)", opacity: 0.6 }} />
              {data || "25/05/2026"}
            </span>
            <ChevronDown size={13} style={{ color: "var(--color-neutral)", transition: "transform 0.2s", transform: showCal ? "rotate(180deg)" : "none" }} />
          </button>
          {showCal && (
            <div className="absolute top-full left-0 mt-1 rounded-2xl border shadow-xl z-30 p-4"
              style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)", width: 232 }}>
              <div className="flex items-center justify-between mb-3">
                <button onClick={() => { const d = new Date(calYear, calMonth - 1); setCalMonth(d.getMonth()); setCalYear(d.getFullYear()); }}
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-100">
                  <ArrowLeft size={13} />
                </button>
                <span className="text-xs font-semibold" style={{ color: "var(--color-forest)" }}>{MESES[calMonth]} {calYear}</span>
                <button onClick={() => { const d = new Date(calYear, calMonth + 1); setCalMonth(d.getMonth()); setCalYear(d.getFullYear()); }}
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-gray-100">
                  <ArrowRight size={13} />
                </button>
              </div>
              <div className="grid grid-cols-7 mb-1">
                {["D","S","T","Q","Q","S","S"].map((d, i) => (
                  <span key={i} className="text-center text-[9px] font-semibold py-1" style={{ color: "var(--color-neutral)" }}>{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-0.5">
                {Array.from({ length: getFirst(calMonth, calYear) }).map((_, i) => <span key={`e${i}`} />)}
                {Array.from({ length: getDays(calMonth, calYear) }, (_, i) => i + 1).map(d => {
                  const ds = `${String(d).padStart(2,"0")}/${String(calMonth+1).padStart(2,"0")}/${calYear}`;
                  const sel = data === ds;
                  return (
                    <button key={d} onClick={() => { setData(ds); setShowCal(false); }}
                      className="w-7 h-7 rounded-lg text-[11px] font-medium transition-all hover:scale-105"
                      style={{ backgroundColor: sel ? "var(--color-green)" : "transparent", color: sel ? "#fff" : "var(--color-forest)" }}>
                      {d}
                    </button>
                  );
                })}
              </div>
              <button onClick={() => { setData(""); setShowCal(false); }}
                className="w-full mt-2 text-[10px] py-1 rounded-lg hover:bg-gray-50 transition-colors"
                style={{ color: "var(--color-neutral)" }}>
                Limpar
              </button>
            </div>
          )}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-1 font-semibold" style={{ color: "var(--color-neutral)" }}>Campo desabilitado</p>
          <input value="Informação não editável" disabled className={cls}
            style={{ borderColor: "var(--color-sand)", backgroundColor: "#F5F3EE", color: "var(--color-neutral)", cursor: "not-allowed" }} />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-1 font-semibold" style={{ color: "var(--color-error)" }}>Campo com erro</p>
          <input value={cidade} onChange={e => setCidade(e.target.value)} placeholder="Ex: Limeira"
            className={cls} style={iStyle("cidade", cidade.length === 0)}
            onFocus={() => setFocus("cidade")} onBlur={() => setFocus(null)} />
          {cidade.length === 0 && (
            <p className="text-[10px] mt-1 flex items-center gap-1" style={{ color: "var(--color-error)" }}>
              <AlertTriangle size={11} /> Falta informar a cidade para montarmos a capa.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   4. FLUXO GUIADO
══════════════════════════════════════════════════════ */
const STEP_DATA = [
  { label: "Perfil",   sub: "Escolha o perfil",   Icon: User,          gold: false },
  { label: "Capa",     sub: "Dados iniciais",      Icon: FileText,      gold: false },
  { label: "Conteúdo", sub: "Estruture o texto",   Icon: BookOpen,      gold: false },
  { label: "Revisão",  sub: "Confirme os ajustes", Icon: ClipboardList, gold: false },
  { label: "DOCX",     sub: "Arquivo pronto",      Icon: FileCheck,     gold: true  },
];

function FluxoGuiado() {
  const [active, setActive] = useState(1);
  return (
    <div className="rounded-2xl border p-6" style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-8" style={{ color: "var(--color-gold)" }}>
        4. Fluxo Guiado
      </p>
      <div className="flex items-start mb-8 px-4">
        {STEP_DATA.map(({ label, sub, Icon, gold }, i) => (
          <div key={label} className="flex items-center flex-1">
            <button onClick={() => setActive(i)} className="flex flex-col items-center gap-2 group">
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: i < active
                    ? "var(--color-green)"
                    : i === active
                      ? (gold ? "var(--color-gold)" : "var(--color-forest)")
                      : "transparent",
                  border: i >= active
                    ? `2px solid ${i === active ? (gold ? "var(--color-gold)" : "var(--color-forest)") : "var(--color-sand)"}`
                    : "none",
                  transform: i === active ? "scale(1.15)" : "scale(1)",
                  boxShadow: i === active ? `0 4px 16px ${gold ? "rgba(184,149,74,0.35)" : "rgba(59,69,53,0.25)"}` : "none",
                }}>
                {i < active
                  ? <Check size={18} color="#fff" />
                  : <Icon size={16} color={i === active ? "#fff" : "var(--color-neutral)"} />}
              </div>
              <p className="text-xs font-semibold text-center leading-tight"
                style={{ color: i === active && gold ? "var(--color-gold)" : i <= active ? "var(--color-forest)" : "var(--color-neutral)" }}>
                {label}
              </p>
              <p className="text-[9px] text-center" style={{ color: "var(--color-neutral)" }}>{sub}</p>
            </button>
            {i < STEP_DATA.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 mt-[-44px] transition-all duration-300"
                style={{ backgroundColor: i < active ? "var(--color-green)" : "var(--color-sand)" }} />
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-3 justify-center">
        <button onClick={() => setActive(p => Math.max(0, p - 1))} disabled={active === 0}
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border text-xs font-medium transition-all hover:bg-gray-50 disabled:opacity-30"
          style={{ borderColor: "var(--color-sand)", color: "var(--color-forest)" }}>
          <ArrowLeft size={13} /> Anterior
        </button>
        <button onClick={() => setActive(p => Math.min(STEP_DATA.length - 1, p + 1))} disabled={active === STEP_DATA.length - 1}
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:brightness-110 disabled:opacity-40"
          style={{ backgroundColor: active === STEP_DATA.length - 2 ? "var(--color-gold)" : "var(--color-green)" }}>
          Próximo <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   5. CARDS — 2×2
══════════════════════════════════════════════════════ */
const CARDS_DATA = [
  { title: "TCC — Marketing Digital",       profile: "ABNT UNIP",    progress: 65,  status: { label: "Em andamento", bg: "#FEF3C7", text: "#8A5800" }, time: "Há 2 horas" },
  { title: "PIM III — Gestão de Projetos",  profile: "PIM UNIP",     progress: 88,  status: { label: "Quase pronto",  bg: "#FEF9EC", text: "#8A5800" }, time: "Ontem" },
  { title: "Relatório de Estágio",          profile: "ABNT Genérico",progress: 100, status: { label: "Completo",      bg: "#E3EDE6", text: "#2D5940" }, time: "3 dias atrás" },
  { title: "Artigo — Inteligência Art.",    profile: "Artigo Cient.",progress: 20,  status: { label: "Rascunho",      bg: "#EDEADF", text: "#5A5040" }, time: "1 semana" },
];

function WorkCards() {
  const [menu, setMenu] = useState<number | null>(null);
  return (
    <div className="rounded-2xl border p-6" style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--color-gold)" }}>5. Cards</p>
        <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-white hover:brightness-110 transition-all"
          style={{ backgroundColor: "var(--color-green)" }}>
          <Plus size={12} /> Novo trabalho
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {CARDS_DATA.map(({ title, profile, progress, status, time }, i) => (
          <div key={i} className="rounded-xl border p-5 group relative hover:shadow-md transition-all cursor-pointer"
            style={{ backgroundColor: "var(--color-cream)", borderColor: "var(--color-sand)" }}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: "#fff" }}>
                  <FileText size={16} style={{ color: "var(--color-green)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight" style={{ color: "var(--color-forest)" }}>{title}</p>
                  <p className="text-[10px] mt-0.5 font-bold uppercase tracking-wide" style={{ color: "var(--color-green)" }}>{profile}</p>
                </div>
              </div>
              <div className="relative">
                <button onClick={() => setMenu(menu === i ? null : i)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white">
                  <MoreHorizontal size={14} style={{ color: "var(--color-neutral)" }} />
                </button>
                {menu === i && (
                  <div className="absolute right-0 top-7 z-10 rounded-xl border shadow-lg overflow-hidden"
                    style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)", minWidth: 130 }}>
                    {[
                      { label: "Editar",   Icon: Edit2    },
                      { label: "Duplicar", Icon: FileText  },
                      { label: "Baixar",   Icon: Download  },
                      { label: "Excluir",  Icon: Trash2, danger: true },
                    ].map(({ label, Icon, danger }) => (
                      <button key={label} onClick={() => setMenu(null)}
                        className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-gray-50 transition-colors"
                        style={{ color: danger ? "var(--color-error)" : "var(--color-forest)" }}>
                        <Icon size={12} /> {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="h-1.5 rounded-full mb-3" style={{ backgroundColor: "var(--color-sand)" }}>
              <div className="h-full rounded-full transition-all"
                style={{ width: `${progress}%`, backgroundColor: "var(--color-green)" }} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: status.bg, color: status.text }}>{status.label}</span>
              <span className="text-[10px]" style={{ color: "var(--color-neutral)" }}>{time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   6. FEEDBACK E VALIDAÇÃO
══════════════════════════════════════════════════════ */
function FeedbackValidacao() {
  const [dismissed, setDismissed] = useState<number[]>([]);
  const FEEDBACKS = [
    { pngIcon: "/icons/OK.png",          title: "Seu trabalho está quase pronto!", desc: "Revise os últimos detalhes e gere seu DOCX.",    bg: "#E3EDE6", border: "rgba(74,124,89,0.3)",  text: "#2D5940" },
    { pngIcon: "/icons/ATENTION.png",    title: "Falta apenas informar a cidade.", desc: "Esse dado é obrigatório para seguir em frente.", bg: "#FEF3C7", border: "rgba(192,122,26,0.3)", text: "#7A4800" },
    { pngIcon: "/icons/INFORMATION.png", title: "Dica: mantenha a coesão.",        desc: "Use conectivos para fortalecer suas ideias.",    bg: "#E8F0FB", border: "rgba(58,110,168,0.3)", text: "#1E3A5F" },
    { pngIcon: "/icons/warning.png",     title: "Alguns pontos precisam ajuste.",  desc: "Veja as sugestões na revisão automática.",       bg: "#FAE5E5", border: "rgba(176,48,48,0.25)", text: "#7A2020" },
  ];
  return (
    <div className="rounded-2xl border p-6" style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-gold)" }}>6. Feedback e Validação</p>
      <div className="grid grid-cols-4 gap-3">
        {FEEDBACKS.map((f, i) => dismissed.includes(i) ? (
          <button key={i} onClick={() => setDismissed(p => p.filter(d => d !== i))}
            className="rounded-xl border-2 border-dashed flex items-center justify-center h-[120px] text-xs gap-1 hover:border-green-300 hover:bg-green-50 transition-all"
            style={{ borderColor: "var(--color-sand)", color: "var(--color-neutral)" }}>
            <Plus size={13} /> mostrar
          </button>
        ) : (
          <div key={i} className="rounded-xl p-4 relative" style={{ backgroundColor: f.bg, border: `1px solid ${f.border}` }}>
            <div className="flex items-start gap-2 mb-1.5">
              <Image src={f.pngIcon} alt="" width={20} height={20} className="flex-shrink-0 mt-0.5" />
              <p className="text-xs font-semibold leading-tight pr-4" style={{ color: f.text }}>{f.title}</p>
            </div>
            <p className="text-[10px] leading-relaxed pl-7" style={{ color: f.text, opacity: 0.85 }}>{f.desc}</p>
            <button onClick={() => setDismissed(p => [...p, i])}
              className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center hover:opacity-100 transition-opacity"
              style={{ backgroundColor: "rgba(0,0,0,0.08)", opacity: 0.4 }}>
              <X size={10} style={{ color: f.text }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   7. NAVEGAÇÃO LATERAL
══════════════════════════════════════════════════════ */
const NAV_STEPS = [
  { label: "Perfil",             sub: "ABNT UNIP",       done: true,  warn: false },
  { label: "Identificação",      sub: "Todos os campos", done: true,  warn: false },
  { label: "Capa",               sub: "Falta a cidade",  done: false, warn: true  },
  { label: "Folha de Rosto",     sub: "Todos os campos", done: true,  warn: false },
  { label: "Elementos Iniciais", sub: "3 selecionados",  done: true,  warn: false },
  { label: "Conteúdo",           sub: "Em andamento",    done: false, warn: false },
  { label: "Referências",        sub: "2 adicionadas",   done: false, warn: false },
  { label: "Revisão",            sub: "Pendente",        done: false, warn: false },
  { label: "DOCX",               sub: "Aguardando",      done: false, warn: false },
];

function NavegacaoLateral() {
  const [activeIdx, setActiveIdx] = useState(5);
  return (
    <div className="rounded-2xl border p-6 h-full" style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)" }}>7. Navegação Lateral</p>
      <p className="text-[9px] uppercase tracking-widest mb-4 font-semibold" style={{ color: "var(--color-neutral)" }}>Etapas do Trabalho</p>
      <div className="flex flex-col">
        {NAV_STEPS.map(({ label, sub, done, warn }, i) => {
          const isActive = i === activeIdx;
          return (
            <button key={label} onClick={() => setActiveIdx(i)}
              className="flex items-start gap-3 text-left rounded-xl px-2 py-1.5 -mx-2 transition-all hover:bg-gray-50"
              style={{ backgroundColor: isActive ? "#E3EDE6" : "transparent" }}>
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: done ? "var(--color-green)" : isActive ? "var(--color-forest)" : "transparent",
                    border: done || isActive ? "none" : `1.5px solid ${warn ? "var(--color-warning)" : "var(--color-sand)"}`,
                  }}>
                  {done
                    ? <Check size={11} color="#fff" />
                    : warn
                      ? <AlertCircle size={11} style={{ color: "var(--color-warning)" }} />
                      : <span className="text-[9px] font-bold" style={{ color: isActive ? "#fff" : "var(--color-neutral)" }}>{i + 1}</span>}
                </div>
                {i < NAV_STEPS.length - 1 && (
                  <div className="w-px my-0.5" style={{ height: 14, backgroundColor: done ? "var(--color-green)" : "var(--color-sand)" }} />
                )}
              </div>
              <div className="pb-2">
                <p className="text-xs font-semibold leading-none"
                  style={{ color: isActive ? "var(--color-green)" : done ? "var(--color-forest)" : "var(--color-neutral)" }}>
                  {label}
                </p>
                <p className="text-[9px] mt-0.5" style={{ color: warn ? "var(--color-warning)" : "var(--color-neutral)" }}>{sub}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   8. MODAIS E APOIO — inline 2×2, fiéis ao Frame-1
══════════════════════════════════════════════════════ */
function ModaisApoio() {
  return (
    <div className="rounded-2xl border p-6 h-full" style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--color-gold)" }}>8. Modais e Apoio</p>
      <div className="grid grid-cols-2 gap-4 h-[calc(100%-36px)]">

        {/* Modal: gerar DOCX */}
        <div className="rounded-2xl border p-5 flex flex-col"
          style={{ borderColor: "var(--color-sand)", backgroundColor: "var(--color-cream)" }}>
          {/* header do modal com linha decorativa dourada */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "var(--color-gold)", boxShadow: "0 2px 10px rgba(184,149,74,0.3)" }}>
              <FileCheck size={18} color="#fff" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: "var(--color-gold)" }}>DOCX</p>
              <p className="text-sm font-bold leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>Gerar agora?</p>
            </div>
          </div>
          <p className="text-[10px] leading-relaxed mb-auto" style={{ color: "var(--color-neutral)" }}>
            Seu documento será finalizado com base nas configurações atuais.
          </p>
          <div className="flex gap-2 mt-4">
            <button className="flex-1 py-2 rounded-xl border text-xs font-medium"
              style={{ borderColor: "var(--color-sand)", color: "var(--color-neutral)", backgroundColor: "#fff" }}>Cancelar</button>
            <button className="flex-1 py-2 rounded-xl text-xs font-semibold text-white"
              style={{ backgroundColor: "var(--color-gold)", boxShadow: "0 2px 8px rgba(184,149,74,0.35)" }}>Gerar DOCX</button>
          </div>
        </div>

        {/* Modal: salvar progresso */}
        <div className="rounded-2xl border p-5 flex flex-col"
          style={{ borderColor: "var(--color-sand)", backgroundColor: "var(--color-cream)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "var(--color-green)", boxShadow: "0 2px 10px rgba(74,124,89,0.3)" }}>
              <Save size={18} color="#fff" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: "var(--color-green)" }}>Rascunho</p>
              <p className="text-sm font-bold leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>Salvar progresso?</p>
            </div>
          </div>
          <p className="text-[10px] leading-relaxed mb-auto" style={{ color: "var(--color-neutral)" }}>
            Suas alterações serão mantidas para continuar depois.
          </p>
          <div className="flex gap-2 mt-4">
            <button className="flex-1 py-2 rounded-xl border text-xs font-medium"
              style={{ borderColor: "var(--color-sand)", color: "var(--color-neutral)", backgroundColor: "#fff" }}>Agora não</button>
            <button className="flex-1 py-2 rounded-xl text-xs font-semibold text-white"
              style={{ backgroundColor: "var(--color-green)" }}>Salvar</button>
          </div>
        </div>

        {/* Empty state */}
        <div className="rounded-2xl border border-dashed p-5 flex flex-col items-center justify-center text-center"
          style={{ borderColor: "var(--color-sand)", backgroundColor: "var(--color-cream)" }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
            style={{ backgroundColor: "rgba(255,255,255,0.8)", border: "1.5px dashed var(--color-sand)" }}>
            <BookOpen size={20} style={{ color: "var(--color-neutral)", opacity: 0.5 }} />
          </div>
          <p className="text-xs font-semibold mb-1" style={{ color: "var(--color-forest)" }}>Ainda não há seções aqui.</p>
          <p className="text-[10px] mb-3" style={{ color: "var(--color-neutral)" }}>Comece adicionando o primeiro capítulo.</p>
          <button className="px-4 py-1.5 rounded-xl border-2 text-xs font-semibold"
            style={{ borderColor: "var(--color-green)", color: "var(--color-green)" }}>
            + Adicionar seção
          </button>
        </div>

        {/* Upload drop zone */}
        <label className="rounded-2xl border-2 border-dashed p-5 flex flex-col items-center justify-center cursor-pointer transition-all hover:border-green-400 hover:bg-green-50"
          style={{ borderColor: "var(--color-sand)", backgroundColor: "var(--color-cream)" }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2"
            style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
            <Cloud size={22} style={{ color: "var(--color-neutral)", opacity: 0.5 }} />
          </div>
          <p className="text-xs font-medium text-center" style={{ color: "var(--color-neutral)" }}>
            Arraste arquivos aqui<br />ou clique para enviar
          </p>
          <p className="text-[9px] mt-1 text-center" style={{ color: "var(--color-neutral)", opacity: 0.6 }}>
            PDF, DOCX, JPG ou PNG até 20MB
          </p>
          <input type="file" className="hidden" />
        </label>

      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   9. PRÉVIA DO DOCUMENTO — A4 grande à esq, checklist à dir
══════════════════════════════════════════════════════ */
function PreviaDocumento() {
  const [page, setPage] = useState(0);
  const PAGES = [
    { label: "Capa", num: 1 },
    { label: "Folha de Rosto", num: 2 },
    { label: "Resumo", num: 3 },
  ];
  const CHECKLIST = [
    { label: "Instituição", ok: true  },
    { label: "Curso",       ok: true  },
    { label: "Autores",     ok: true  },
    { label: "Título",      ok: true  },
    { label: "Cidade",      ok: false },
    { label: "Ano",         ok: true  },
  ];

  return (
    <div className="rounded-2xl border p-6" style={{ backgroundColor: "#fff", borderColor: "var(--color-sand)" }}>
      <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--color-gold)" }}>
        9. Prévia do Documento
      </p>
      {/* layout: A4 grande ocupa ~metade, checklist+actions a outra metade */}
      <div className="flex gap-8 items-start">

        {/* ── Coluna A4 ── */}
        <div className="flex flex-col items-center gap-3" style={{ flexShrink: 0 }}>
          {/* nav acima da folha — pequena */}
          <div className="flex items-center gap-3">
            <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}
              className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-colors">
              <ArrowLeft size={12} />
            </button>
            <span className="text-[10px] font-medium" style={{ color: "var(--color-forest)" }}>
              {PAGES[page].label} · p. {PAGES[page].num}
            </span>
            <button onClick={() => setPage(p => Math.min(PAGES.length - 1, p + 1))} disabled={page === PAGES.length - 1}
              className="w-6 h-6 rounded-md flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-colors">
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Folha A4 — 240×340 (proporção A4 1:√2) */}
          <div className="relative rounded-sm overflow-hidden"
            style={{
              width: 240, height: 339,
              backgroundColor: "#fff",
              boxShadow: "5px 5px 0 var(--color-sand), 0 14px 48px rgba(0,0,0,0.16)",
              border: "1px solid var(--color-sand)",
            }}>

            {page === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-between py-10 px-6 text-center">
                <div className="space-y-1">
                  <p className="text-[8px] font-bold uppercase tracking-wider" style={{ color: "var(--color-forest)" }}>
                    UNIVERSIDADE PAULISTA — UNIP
                  </p>
                  <p className="text-[7px]" style={{ color: "#666" }}>Análise e Desenvolvimento de Sistemas</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] font-bold uppercase leading-snug" style={{ color: "var(--color-forest)" }}>
                    MARKETING DIGITAL: ESTRATÉGIAS PARA PEQUENAS EMPRESAS
                  </p>
                  <p className="text-[7px]" style={{ color: "#888" }}>Um estudo de caso no setor varejista</p>
                </div>
                <p className="text-[8px]" style={{ color: "var(--color-forest)" }}>João Silva, Maria Santos</p>
                <p className="text-[8px]" style={{ color: "var(--color-forest)" }}>Limeira · 2026</p>
              </div>
            )}

            {page === 1 && (
              <div className="absolute inset-0 flex flex-col justify-between py-10 px-6">
                <p className="text-[8px] font-bold uppercase text-center" style={{ color: "var(--color-forest)" }}>
                  João Silva, Maria Santos
                </p>
                <div className="text-center">
                  <p className="text-[8.5px] font-bold uppercase leading-snug" style={{ color: "var(--color-forest)" }}>
                    MARKETING DIGITAL: ESTRATÉGIAS PARA PEQUENAS EMPRESAS
                  </p>
                  <div className="mt-4 p-3 rounded text-left" style={{ backgroundColor: "#f5f5f5" }}>
                    <p className="text-[6.5px] leading-relaxed" style={{ color: "#555" }}>
                      Trabalho de Conclusão de Curso apresentado como requisito parcial para obtenção do grau de Bacharel em Análise e Desenvolvimento de Sistemas.
                      <br /><br />
                      Orientador: Prof. Dr. Carlos Mendes
                    </p>
                  </div>
                </div>
                <p className="text-[8px] text-center" style={{ color: "var(--color-forest)" }}>Limeira · 2026</p>
              </div>
            )}

            {page === 2 && (
              <div className="absolute inset-0 py-8 px-6 space-y-2">
                <p className="text-[8px] font-bold uppercase text-center tracking-widest mb-4" style={{ color: "var(--color-forest)" }}>
                  RESUMO
                </p>
                {[90,84,88,76,86,78,70,82,86,74,62,78,86,72].map((w, i) => (
                  <div key={i} className="h-[3px] rounded" style={{ width: `${w}%`, backgroundColor: i === 0 ? "var(--color-forest)" : "#ddd" }} />
                ))}
                <p className="text-[6.5px] font-bold pt-2" style={{ color: "var(--color-forest)" }}>Palavras-chave:</p>
                <div className="h-[3px] rounded w-3/4" style={{ backgroundColor: "#ddd" }} />
              </div>
            )}

            <p className="absolute bottom-2 w-full text-center text-[7px]" style={{ color: "var(--color-neutral)" }}>
              {PAGES[page].num}
            </p>
          </div>

          <p className="text-[9px] text-center" style={{ color: "var(--color-neutral)" }}>
            {PAGES[page].num} de 24 páginas estimadas
          </p>
        </div>

        {/* ── Coluna checklist + actions ── */}
        <div className="flex-1 min-w-0">
          <p className="text-[9px] uppercase tracking-widest mb-3 font-bold" style={{ color: "var(--color-neutral)" }}>
            Checklist da {PAGES[page].label}
          </p>
          <div className="space-y-2 mb-5">
            {CHECKLIST.map(({ label, ok }) => (
              <div key={label} className="flex items-center gap-2.5">
                {ok
                  ? <CheckCircle2 size={14} style={{ color: "var(--color-green)", flexShrink: 0 }} />
                  : <AlertCircle  size={14} style={{ color: "var(--color-warning)", flexShrink: 0 }} />}
                <span className="text-xs" style={{ color: ok ? "var(--color-forest)" : "var(--color-warning)", fontWeight: ok ? 400 : 600 }}>
                  {label}{!ok && " — faltando"}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-3 mb-3" style={{ backgroundColor: "#FEF3C7", border: "1px solid rgba(192,122,26,0.2)" }}>
            <div className="flex items-start gap-2">
              <Image src="/icons/ATENTION.png" alt="" width={14} height={14} className="flex-shrink-0 mt-0.5" />
              <p className="text-[10px] leading-relaxed" style={{ color: "#7A4800" }}>
                A capa será calculada automaticamente para manter cidade e ano no final da página.
              </p>
            </div>
          </div>

          <div className="rounded-xl p-3 mb-5" style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-sand)" }}>
            <div className="flex items-start gap-2">
              <Leaf size={12} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-green)" }} />
              <p className="text-[10px] leading-relaxed" style={{ color: "var(--color-forest)" }}>
                <strong>Dica:</strong> Preencha aos poucos. Você pode salvar e continuar depois.
              </p>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white hover:brightness-110 transition-all"
            style={{ backgroundColor: "var(--color-gold)", boxShadow: "0 3px 12px rgba(184,149,74,0.35)" }}>
            <Download size={15} /> Preparar meu DOCX
          </button>
        </div>

      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════ */
export function ComponentesSection() {
  return (
    <SectionShell id="componentes" label="Componentes" pill="UI Kit · Frame 1">
      <div className="mb-5 px-4 py-2.5 rounded-xl text-[10px] flex items-center gap-2"
        style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-sand)", color: "var(--color-neutral)" }}>
        <Info size={11} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
        <span>
          Ícones funcionais de UI: <strong style={{ color: "var(--color-forest)" }}>Lucide React</strong> ·
          Ícones de status (OK, ATENTION, INFORMATION, warning): <strong style={{ color: "var(--color-forest)" }}>PNGs customizados</strong>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-5 items-stretch">
        <AcoesPrincipais />
        <SelecaoFiltros />
      </div>
      <div className="mb-5"><CamposFormulario /></div>
      <div className="mb-5"><FluxoGuiado /></div>
      <div className="mb-5"><WorkCards /></div>
      <div className="mb-5"><FeedbackValidacao /></div>
      <div className="grid grid-cols-2 gap-5 mb-5 items-stretch">
        <NavegacaoLateral />
        <ModaisApoio />
      </div>
      <PreviaDocumento />
    </SectionShell>
  );
}
