import type { ReactNode } from "react";

type ModalCardProps = {
  title: string;
  description?: string;
  visual?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function ModalCard({
  title,
  description,
  visual,
  children,
  className = "",
}: ModalCardProps) {
  return (
    <article
      className={[
        "rounded-[14px] border border-[var(--color-border)] bg-[var(--color-paper-soft)] px-5 py-4 text-center",
        "shadow-none",
        className,
      ].join(" ")}
    >
      {visual ? <div className="mb-3 flex justify-center">{visual}</div> : null}

      <p className="mx-auto max-w-[230px] text-[18px] font-bold leading-tight text-[var(--color-text)]">
        {title}
      </p>

      {description ? (
        <p className="mx-auto mt-2 max-w-[260px] text-[12px] leading-relaxed text-[var(--color-neutral)]">
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}