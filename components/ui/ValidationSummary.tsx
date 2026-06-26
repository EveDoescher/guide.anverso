import { AlertTriangle, Check, Circle, XCircle } from "lucide-react";

type ValidationStatus = "done" | "warning" | "error" | "neutral";

type ValidationItem = {
  label: string;
  description?: string;
  status: ValidationStatus;
};

type ValidationSummaryProps = {
  title: string;
  description?: string;
  items: ValidationItem[];
  className?: string;
};

const statusStyles: Record<
  ValidationStatus,
  {
    icon: typeof Check;
    iconClass: string;
    bgClass: string;
  }
> = {
  done: {
    icon: Check,
    iconClass: "text-white",
    bgClass: "bg-[var(--color-green)]",
  },
  warning: {
    icon: AlertTriangle,
    iconClass: "text-[var(--color-warning)]",
    bgClass: "bg-[rgba(145,88,24,0.12)]",
  },
  error: {
    icon: XCircle,
    iconClass: "text-[var(--color-error)]",
    bgClass: "bg-[rgba(132,69,55,0.12)]",
  },
  neutral: {
    icon: Circle,
    iconClass: "text-[var(--color-neutral)]",
    bgClass: "bg-[rgba(47,44,45,0.06)]",
  },
};

export function ValidationSummary({
  title,
  description,
  items,
  className = "",
}: ValidationSummaryProps) {
  return (
    <article
      className={[
        "rounded-[14px] border border-[var(--color-border)] bg-[var(--color-paper-soft)] p-4",
        className,
      ].join(" ")}
    >
      <p className="font-serif text-[17px] font-bold text-[var(--color-forest)]">
        {title}
      </p>

      {description ? (
        <p className="mt-1 text-[12px] leading-relaxed text-[var(--color-neutral)]">
          {description}
        </p>
      ) : null}

      <div className="mt-4 space-y-3">
        {items.map((item) => {
          const styles = statusStyles[item.status];
          const Icon = styles.icon;

          return (
            <div key={item.label} className="flex gap-3">
              <span
                className={[
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  styles.bgClass,
                ].join(" ")}
              >
                <Icon size={12} strokeWidth={2.6} className={styles.iconClass} />
              </span>

              <div className="min-w-0">
                <p className="text-[12px] font-bold text-[var(--color-text)]">
                  {item.label}
                </p>

                {item.description ? (
                  <p className="mt-0.5 text-[11px] md:text-[10px] leading-snug text-[var(--color-neutral)]">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}