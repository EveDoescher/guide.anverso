import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

type AdvisorNoteCardProps = {
  title: string;
  note: string;
  author: string;
  onViewAll?: () => void;
  className?: string;
};

export function AdvisorNoteCard({
  title,
  note,
  author,
  onViewAll,
  className = "",
}: AdvisorNoteCardProps) {
  return (
    <Card
      variant="interactive"
      className={[
        "relative h-full min-h-[176px] overflow-hidden border-[rgba(198, 125, 41, 0.685)] p-4",
        className,
      ].join(" ")}
      style={{ backgroundColor: "#f8f1e6" }}
    >
      <div className="flex h-full flex-col">
        <p className="text-[13px] font-bold leading-snug text-[var(--color-text)]">
          {title}
        </p>

        <div className="mt-3 flex gap-2.5">
          <span className="-mt-1 font-serif text-[31px] font-bold leading-none text-[var(--color-gold)] opacity-75">
            “
          </span>

          <div>
            <p className="text-[12px] leading-relaxed text-[var(--color-text)]">
              {note}
            </p>

            <p className="mt-2 text-[10.5px] font-bold text-[var(--color-gold)]">
              - {author}
            </p>
          </div>
        </div>

        <div className="absolute bottom-5 left-4 right-4 border-t border-[rgba(145,88,24,0.22)] pt-3 text-right">
          <button
            type="button"
            onClick={onViewAll}
            className="anverso-focus inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[var(--color-gold)] hover:underline"
          >
            Ver todas
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </Card>
  );
}