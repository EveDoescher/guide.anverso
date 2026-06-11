"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "marca",       label: "Marca"     },
  { id: "cores",       label: "Cores"     },
  { id: "tipografia",  label: "Tipografia"},
  { id: "componentes", label: "Componentes"},
  { id: "icones",      label: "Ícones"    },
  { id: "voz",         label: "Tom de Voz"},
];

export function Sidebar() {
  const [active, setActive] = useState("marca");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <aside className="fixed left-0 top-0 h-screen z-50 flex flex-col items-center py-6 gap-1"
      style={{ width: 108, backgroundColor: "var(--color-forest)" }}>

      {/* Logo */}
      <button onClick={() => scrollTo("marca")} className="mb-4 px-3 group">
        <Image src="/icons/Anverso-logo.png" alt="Anverso" width={84} height={42}
          className="object-contain transition-all group-hover:opacity-100"
          style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }} />
      </button>

      <div className="w-12 h-px mb-2" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />

      {NAV_ITEMS.map(({ id, label }) => (
        <button key={id} onClick={() => scrollTo(id)}
          className="w-[88px] px-2 py-2 rounded-xl flex flex-col items-center gap-0.5 transition-all duration-200 relative"
          style={{ backgroundColor: active === id ? "var(--color-green)" : "transparent" }}>
          {active === id && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 rounded-r-full"
              style={{ backgroundColor: "var(--color-gold)" }} />
          )}
          <span className="text-[9px] font-semibold leading-tight text-center transition-colors"
            style={{ color: active === id ? "#fff" : "rgba(255,255,255,0.4)" }}>
            {label}
          </span>
        </button>
      ))}

      <div className="mt-auto opacity-20">
        <Image src="/icons/leaves-3.png" alt="" width={40} height={40} />
      </div>
    </aside>
  );
}
