import Image from "next/image";
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

      {/* Decorações fixas de fundo (Mesa do Botânico) */}

      {/* Ramo grande — canto superior esquerdo */}
      <Image
        src="/icons/leaves.png"
        alt=""
        width={500}
        height={500}
        className="pointer-events-none fixed -left-[100px] -top-[50px] z-0 hidden opacity-[0.25] md:block mix-blend-color-burn"
        unoptimized
      />

      {/* Ramo médio — canto inferior direito */}
      <Image
        src="/icons/leaves.png"
        alt=""
        width={400}
        height={400}
        className="pointer-events-none fixed -bottom-[80px] -right-[60px] z-0 hidden rotate-[135deg] opacity-[0.35] lg:block mix-blend-color-burn"
        unoptimized
      />



      <main
        className="min-h-screen"
        style={{ marginLeft: "var(--sidebar-width)", paddingBottom: "var(--bottom-nav-height, 0px)" }}
      >
        <MarcaSection />
        <CoresSection />
        <TipografiaSection />
        <ComponentesSection />
        <IconesSection />
        <VozSection />

        <footer
          className="guide-container mt-0 flex flex-wrap items-center justify-between gap-4 px-2 py-10"
          style={{ borderTop: "1px solid var(--color-border-soft)" }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/icons/xicara.png"
              alt=""
              width={22}
              height={22}
              className="opacity-60"
              unoptimized
            />
            <p
              className="font-serif text-[13px] italic"
              style={{ color: "var(--color-forest)" }}
            >
              Anverso Design Guide
            </p>
          </div>

          <p
            className="text-[11px] md:text-[9px] font-bold uppercase"
            style={{
              letterSpacing: "0.28em",
              color: "var(--color-gold)",
            }}
          >
            Papel · Planta · Café
          </p>
        </footer>
      </main>
    </>
  );
}
