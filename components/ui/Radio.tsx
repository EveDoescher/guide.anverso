import type { InputHTMLAttributes } from "react";

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

export function Radio({ label, className = "", ...props }: RadioProps) {
  return (
    <label
      className={[
        "flex cursor-pointer items-center gap-3 text-[13px] font-medium text-[var(--color-text)]",
        className,
      ].join(" ")}
    >
      <input type="radio" className="peer sr-only" {...props} />

      <span
        className={[
          "flex h-[17px] w-[17px] items-center justify-center rounded-full border transition-all",
          "border-[var(--color-border)] bg-[var(--color-paper-soft)]",
          "peer-checked:border-[var(--color-green)]",
          "peer-focus-visible:shadow-[0_0_0_3px_rgba(63,91,74,0.18)]",
          "peer-checked:[&>span]:scale-100",
        ].join(" ")}
      >
        <span className="h-[7px] w-[7px] scale-0 rounded-full bg-[var(--color-green)] transition-transform" />
      </span>

      <span>{label}</span>
    </label>
  );
}