import type { ButtonHTMLAttributes } from "react";

type ToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  checked?: boolean;
  label: string;
  onCheckedChange?: (checked: boolean) => void;
};

export function Toggle({
  checked = false,
  label,
  onCheckedChange,
  className = "",
  type = "button",
  ...props
}: ToggleProps) {
  return (
    <button
      type={type}
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onCheckedChange?.(!checked)}
      className={[
        "anverso-focus inline-flex items-center gap-3 text-left text-[12px] font-medium text-[var(--color-text)]",
        className,
      ].join(" ")}
      {...props}
    >
      <span className="min-w-0 flex-1">{label}</span>

      <span
        className={[
          "relative h-[20px] w-[38px] rounded-full border transition-all",
          checked
            ? "border-[var(--color-green)] bg-[var(--color-green)]"
            : "border-[var(--color-border)] bg-[var(--color-surface-muted)]",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-1/2 h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-white shadow-sm transition-all",
            checked ? "left-[20px]" : "left-[3px]",
          ].join(" ")}
        />
      </span>
    </button>
  );
}