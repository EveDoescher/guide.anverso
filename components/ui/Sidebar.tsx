"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CircleDot,
  Home,
  MessageCircle,
  Palette,
  Shapes,
  Star,
  Type,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "marca", number: "01", label: "Marca", Icon: Home },
  { id: "cores", number: "02", label: "Cores", Icon: Palette },
  { id: "tipografia", number: "03", label: "Tipografia", Icon: Type },
  { id: "componentes", number: "04", label: "Componentes", Icon: Shapes },
  { id: "icones", number: "05", label: "Icones", Icon: Star },
  { id: "voz", number: "06", label: "Tom de Voz", Icon: MessageCircle },
];

export function Sidebar() {
  const [active, setActive] = useState("marca");

  const activeIndex = useMemo(() => {
    const index = NAV_ITEMS.findIndex((item) => item.id === active);
    return index >= 0 ? index : 0;
  }, [active]);

  useEffect(() => {
    let ticking = false;

    function updateActiveSection() {
      ticking = false;

      const marker = window.innerHeight * 0.34;
      let currentId = NAV_ITEMS[0].id;

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= marker && rect.bottom >= marker) {
          setActive(item.id);
          return;
        }

        if (rect.top <= marker) currentId = item.id;
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      setActive(isAtBottom ? NAV_ITEMS[NAV_ITEMS.length - 1].id : currentId);
    }

    function handleScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveSection);
      }
    }

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  function scrollTo(id: string) {
    const section = document.getElementById(id);
    if (!section) return;

    setActive(id);
    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - 12,
      behavior: "smooth",
    });
  }

  return (
    <aside className="fixed left-0 top-0 z-[1000] hidden h-dvh w-[var(--sidebar-width)] border-r border-[var(--color-border)] bg-[rgba(255,251,246,0.78)] backdrop-blur-md md:block">
      <div className="flex h-full flex-col items-center px-4 py-7">
        <button
          type="button"
          onClick={() => scrollTo("marca")}
          className="anverso-focus group relative flex h-14 w-14 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-[rgba(255,251,246,0.62)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-forest)]"
          aria-label="Voltar para o inicio do guia"
        >
          <Image
            src="/icons/Anverso-logo.png"
            alt=""
            width={46}
            height={26}
            className="object-contain"
            unoptimized
          />
        </button>

        <nav className="mt-8 flex flex-1 flex-col items-center gap-3">
          {NAV_ITEMS.map((item, index) => {
            const isActive = item.id === active;
            const isPast = index < activeIndex;
            const Icon = item.Icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                aria-current={isActive ? "page" : undefined}
                aria-label={`${item.number} ${item.label}`}
                title={`${item.number} ${item.label}`}
                className={[
                  "anverso-focus group relative flex h-14 w-14 items-center justify-center rounded-[8px] border transition-all",
                  isActive
                    ? "border-[var(--color-forest)] bg-[rgba(63,91,74,0.13)] text-[var(--color-forest)] shadow-[0_8px_22px_rgba(63,91,74,0.12)]"
                    : "border-[var(--color-border)] bg-[rgba(255,251,246,0.58)] text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[var(--color-forest)] hover:text-[var(--color-forest)]",
                ].join(" ")}
              >
                <Icon size={22} strokeWidth={1.8} />
                <span
                  className={[
                    "absolute -right-1 top-1 h-2 w-2 rounded-full",
                    isActive || isPast ? "bg-[var(--color-gold)]" : "bg-transparent",
                  ].join(" ")}
                />

                <span className="pointer-events-none absolute left-[64px] z-20 hidden whitespace-nowrap rounded-[8px] border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2 text-[11px] font-bold text-[var(--color-forest)] shadow-[var(--shadow-soft)] group-hover:block">
                  {item.number} - {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-2 border-t border-[var(--color-border)] pt-5">
          <CircleDot size={14} className="text-[var(--color-gold)]" />
          <BookOpen size={18} className="text-[var(--color-forest)]" />
        </div>
      </div>
    </aside>
  );
}
