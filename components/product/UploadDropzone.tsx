import Image from "next/image";

type UploadDropzoneProps = {
  title: string;
  description: string;
  iconSrc?: string;
  iconAlt?: string;
  onClick?: () => void;
  className?: string;
};

export function UploadDropzone({
  title,
  description,
  iconSrc = "/icons/cloud-computing.png",
  iconAlt = "",
  onClick,
  className = "",
}: UploadDropzoneProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "anverso-focus w-full rounded-[14px] border border-dashed border-[var(--color-border)] bg-[var(--color-paper-soft)] px-5 py-5 text-center",
        "transition-all hover:border-[var(--color-green)] hover:bg-[var(--color-paper)]",
        className,
      ].join(" ")}
    >
      <div className="mb-3 flex justify-center">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={58}
          height={58}
          className="object-contain opacity-75"
          unoptimized
        />
      </div>

      <p className="mx-auto max-w-[230px] text-[16px] font-bold leading-tight text-[var(--color-text)]">
        {title}
      </p>

      <p className="mx-auto mt-2 max-w-[260px] text-[12px] leading-relaxed text-[var(--color-neutral)]">
        {description}
      </p>
    </button>
  );
}