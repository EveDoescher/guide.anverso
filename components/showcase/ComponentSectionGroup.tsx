import type { ReactNode } from "react";

type ComponentSectionGroupProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function ComponentSectionGroup({
  eyebrow,
  title,
  description,
  children,
}: ComponentSectionGroupProps) {
  return (
    <section className="relative">
      <div className="mb-4 flex items-end gap-5">
        <div className="max-w-[780px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold)]">
            {eyebrow}
          </p>

          <h3 className="mt-1 font-serif text-[25px] font-bold leading-tight text-[var(--color-forest)]">
            {title}
          </h3>

          <p className="mt-1.5 text-[12px] leading-relaxed text-[var(--color-neutral)]">
            {description}
          </p>
        </div>

        <div className="mb-2 hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(63,91,74,0.20),transparent)] lg:block" />
      </div>

      <div className="rounded-[26px] border border-[rgba(63,91,74,0.10)] bg-[rgba(255,251,247,0.22)] p-4 shadow-[0_14px_38px_rgba(47,44,45,0.025)]">
        {children}
      </div>
    </section>
  );
}
