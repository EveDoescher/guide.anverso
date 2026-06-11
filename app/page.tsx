import { Sidebar } from "@/components/ui/Sidebar";
import { MarcaSection } from "@/components/sections/MarcaSection";
import { CoresSection } from "@/components/sections/CoresSection";
import { TipografiaSection } from "@/components/sections/TipografiaSection";
import { ComponentesSection } from "@/components/sections/ComponentesSection";
import { IconesSection } from "@/components/sections/IconesSection";
import { VozSection } from "@/components/sections/VozSection";

export default function DesignGuidePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1" style={{ marginLeft: 108 }}>
        <MarcaSection />
        <CoresSection />
        <TipografiaSection />
        <ComponentesSection />
        <IconesSection />
        <VozSection />

        {/* Footer */}
        <footer className="px-10 py-8 border-t flex items-center justify-between"
                style={{ borderColor: "var(--color-sand)" }}>
          <p className="text-xs" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)", fontStyle: "italic" }}>
            Anverso Design Guide
          </p>
          <p className="text-[10px]" style={{ color: "var(--color-neutral)" }}>
            Calma · Clareza · Confiança
          </p>
        </footer>
      </main>
    </div>
  );
}
