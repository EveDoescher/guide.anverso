import type { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label
      className={[
        "flex cursor-pointer items-center gap-3 text-[13px] font-medium text-[var(--color-text)]",
        className,
      ].join(" ")}
    >
      <input type="checkbox" className="peer sr-only" {...props} />

      <span
        className={[
          "flex h-[17px] w-[17px] items-center justify-center rounded-[4px] border transition-all",
          "border-[var(--color-border)] bg-[var(--color-paper-soft)] text-white",
          "peer-checked:border-[var(--color-green)] peer-checked:bg-[var(--color-green)]",
          "peer-focus-visible:shadow-[0_0_0_3px_rgba(63,91,74,0.18)]",
          "peer-checked:[&>span]:opacity-100",
        ].join(" ")}
      >
        <span className="text-[12px] leading-none opacity-0 transition-opacity">✓</span>
      </span>

      <span>{label}</span>
    </label>
  );
}