import type { ButtonHTMLAttributes, ComponentType } from "react";

type IconButtonVariant = "cream" | "paper" | "forest" | "gold" | "ghost";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  variant?: IconButtonVariant;
};

const variantClasses: Record<IconButtonVariant, string> = {
  cream:
    "bg-[var(--color-cream-soft)] border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-paper)]",
  paper:
    "bg-[var(--color-paper-soft)] border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-paper)]",
  forest:
    "bg-[var(--color-forest)] border-transparent text-white hover:brightness-110",
  gold:
    "bg-[var(--color-gold)] border-transparent text-white hover:brightness-110",
  ghost:
    "bg-transparent border-transparent text-[var(--color-neutral)] hover:bg-[rgba(47,44,45,0.06)]",
};

export function IconButton({
  icon: Icon,
  label,
  variant = "cream",
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
      <button
          type={type}
          aria-label={label}
          title={label}
          className={[
              "anverso-focus group relative flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border transition-all",
              "hover:-translate-y-0.5 active:scale-95 disabled:pointer-events-none disabled:opacity-45",
              variantClasses[variant],
              className,
          ].join(" ")}
          {...props}
      >
      <Icon size={17} />

      <span className="pointer-events-none absolute -top-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[var(--color-forest)] px-2 py-0.5 text-[9px] text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </button>
  );
}