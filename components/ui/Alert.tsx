import {
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  X,
} from "lucide-react";
import type { ComponentType, ReactNode, SVGProps } from "react";

type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & {
    size?: number;
  }
>;

type AlertTone = "success" | "warning" | "info" | "error";

type AlertProps = {
  tone?: AlertTone;
  title: string;
  description?: string;
  icon?: IconComponent;
  action?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
};

const toneStyles: Record<
  AlertTone,
  {
    card: string;
    title: string;
    icon: string;
    defaultIcon: IconComponent;
  }
> = {
  success: {
    card: "border-[var(--color-success-soft)] bg-[var(--color-success-bg)]",
    title: "text-[var(--color-success)]",
    icon: "text-[var(--color-success)]",
    defaultIcon: CheckCircle2,
  },
  warning: {
    card: "border-[var(--color-warning-soft)] bg-[var(--color-warning-bg)]",
    title: "text-[var(--color-warning)]",
    icon: "text-[var(--color-warning)]",
    defaultIcon: AlertTriangle,
  },
  info: {
    card: "border-[var(--color-info-soft)] bg-[var(--color-info-bg)]",
    title: "text-[var(--color-info)]",
    icon: "text-[var(--color-info)]",
    defaultIcon: Lightbulb,
  },
  error: {
    card: "border-[var(--color-error-soft)] bg-[var(--color-error-bg-soft)]",
    title: "text-[var(--color-error)]",
    icon: "text-[var(--color-error)]",
    defaultIcon: AlertTriangle,
  },
};

export function Alert({
  tone = "info",
  title,
  description,
  icon,
  action,
  dismissible = false,
  onDismiss,
  className = "",
}: AlertProps) {
  const styles = toneStyles[tone];
  const Icon = icon ?? styles.defaultIcon;

  return (
    <article
      className={[
        "relative rounded-[14px] border px-4 py-3.5",
        styles.card,
        className,
      ].join(" ")}
    >
      <div className="flex gap-3">
        <Icon
          size={22}
          strokeWidth={2.25}
          className={["mt-0.5 shrink-0", styles.icon].join(" ")}
        />

        <div className="min-w-0 flex-1">
          <p
            className={[
              "font-serif text-[17px] font-bold leading-tight",
              styles.title,
            ].join(" ")}
          >
            {title}
          </p>

          {description ? (
            <p className="mt-1 text-[12px] leading-relaxed text-[var(--color-neutral)]">
              {description}
            </p>
          ) : null}

          {action ? <div className="mt-3">{action}</div> : null}
        </div>

        {dismissible ? (
          <button
            type="button"
            onClick={onDismiss}
            className="anverso-focus -mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--color-neutral)] hover:bg-[rgba(47,44,45,0.06)]"
            aria-label="Fechar mensagem"
          >
            <X size={14} />
          </button>
        ) : null}
      </div>
    </article>
  );
}