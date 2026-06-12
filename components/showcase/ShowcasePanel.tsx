import type { ReactNode } from "react";

type ShowcasePanelProps = {
  number?: number;
  title: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  overflow?: "hidden" | "visible";
};

export function ShowcasePanel({
  number,
  title,
  children,
  className = "",
  contentClassName = "",
  overflow = "hidden",
}: ShowcasePanelProps) {
  return (
    <section
      className={[
        "relative rounded-[18px] border border-[rgba(63,91,74,0.16)] bg-[rgba(255,251,247,0.58)] p-5",
        "shadow-[0_10px_28px_rgba(47,44,45,0.035)]",
        overflow === "visible" ? "overflow-visible" : "overflow-hidden",
        className,
      ].join(" ")}
    >
      <p className="mb-4 font-serif text-[15px] font-bold uppercase tracking-[0.04em] text-[var(--color-forest)]">
        {number ? `${number}. ` : ""}
        {title}
      </p>

      <div className={contentClassName}>{children}</div>
    </section>
  );
}
