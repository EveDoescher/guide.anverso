import Image from "next/image";
import { Button } from "@/components/ui/Button";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  onAction?: () => void;
  className?: string;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  imageSrc = "/icons/xicara.png",
  imageAlt = "",
  onAction,
  className = "",
}: EmptyStateProps) {
  return (
    <article
      className={[
        "rounded-[14px] border border-[var(--color-border)] bg-[var(--color-paper-soft)] px-5 py-4 text-center",
        className,
      ].join(" ")}
    >
      <div className="mb-3 flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={72}
          height={72}
          className="object-contain"
          unoptimized
        />
      </div>

      <p className="text-[16px] font-bold leading-tight text-[var(--color-text)]">
        {title}
      </p>

      <p className="mx-auto mt-1.5 max-w-[240px] text-[12px] leading-relaxed text-[var(--color-neutral)]">
        {description}
      </p>

      {actionLabel ? (
        <Button
          variant="primary"
          size="sm"
          onClick={onAction}
          className="mx-auto mt-4"
        >
          {actionLabel}
        </Button>
      ) : null}
    </article>
  );
}