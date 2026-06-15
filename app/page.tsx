import { Sidebar } from "@/components/ui/Sidebar";
import { MarcaSection } from "@/components/sections/MarcaSection";
import { CoresSection } from "@/components/sections/CoresSection";
import { TipografiaSection } from "@/components/sections/TipografiaSection";
import { ComponentesSection } from "@/components/sections/ComponentesSection";
import { IconesSection } from "@/components/sections/IconesSection";
import { VozSection } from "@/components/sections/VozSection";

export default function DesignGuidePage() {
  return (
    <>
      <Sidebar />

      <main
        className="min-h-screen pb-8"
        style={{ marginLeft: "var(--sidebar-width)" }}
      >
        <MarcaSection />
        <CoresSection />
        <TipografiaSection />
        <ComponentesSection />
        <IconesSection />
        <VozSection />

        <footer
          className="guide-container mt-2 flex items-center justify-between border-t px-2 py-7"
          style={{ borderColor: "var(--color-sand)" }}
        >
          <p
            className="text-xs italic"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-forest)",
            }}
          >
            Anverso Design Guide
          </p>

          <p className="text-[10px]" style={{ color: "var(--color-neutral)" }}>
            Calma - Clareza - Confianca
          </p>
        </footer>
      </main>
    </>
  );
}
