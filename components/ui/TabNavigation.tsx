"use client";

export type TabNavigationItem = {
  id: string;
  label: string;
  count?: number;
};

type TabNavigationProps = {
  items: TabNavigationItem[];
  activeId: string;
  onChange?: (id: string) => void;
  className?: string;
};

export function TabNavigation({
  items,
  activeId,
  onChange,
  className = "",
}: TabNavigationProps) {
  return (
    <div
      className={[
        "inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-paper-soft)] p-1",
        className,
      ].join(" ")}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange?.(item.id)}
            className={[
              "anverso-focus flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-bold transition-all",
              isActive
                ? "bg-[var(--color-green)] text-white shadow-[var(--shadow-button)]"
                : "text-[var(--color-neutral)] hover:bg-[rgba(47,44,45,0.06)] hover:text-[var(--color-text)]",
            ].join(" ")}
          >
            {item.label}

            {item.count ? (
              <span
                className={[
                  "rounded-full px-1.5 text-[9px]",
                  isActive
                    ? "bg-white/18 text-white"
                    : "bg-[rgba(47,44,45,0.08)] text-[var(--color-neutral)]",
                ].join(" ")}
              >
                {item.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}