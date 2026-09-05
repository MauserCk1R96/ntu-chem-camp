import type { ProgramItem } from "@/app/program/program-data";

type ProgramCardProps = {
  item: ProgramItem;
};

function ProgramIcon({ icon }: Readonly<{ icon: string }>) {
  const iconClass = "h-7 w-7";

  switch (icon) {
    case "FIELD":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "READ":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
          <path d="M8 7h8" />
          <path d="M8 11h7" />
        </svg>
      );
    case "DEMO":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M9 3h6" />
          <path d="M10 3v6l-5 8.5A2.3 2.3 0 0 0 7 21h10a2.3 2.3 0 0 0 2-3.5L14 9V3" />
          <path d="M8 16h8" />
        </svg>
      );
    case "LOCK":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect height="10" rx="2" width="16" x="4" y="11" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          <path d="M12 15v2" />
        </svg>
      );
    case "RPG":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M7 5h10l3 5-8 11-8-11 3-5Z" />
          <path d="M4 10h16" />
          <path d="m9 10 3 11 3-11" />
        </svg>
      );
    case "LAB":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M12 3v6" />
          <path d="M9 3h6" />
          <path d="M7 21h10" />
          <path d="M12 9 6.5 19a1.5 1.5 0 0 0 1.3 2h8.4a1.5 1.5 0 0 0 1.3-2L12 9Z" />
          <path d="M9 17h6" />
        </svg>
      );
    case "CHIP":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
        </svg>
      );
    case "MAKE":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M4 9h16v11H4z" />
          <path d="M12 9v11" />
          <path d="M4 13h16" />
          <path d="M8 9a2.5 2.5 0 1 1 4 0" />
          <path d="M16 9a2.5 2.5 0 1 0-4 0" />
        </svg>
      );
    case "SHOW":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M9 18V5l10-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="16" cy="16" r="3" />
        </svg>
      );
    case "ALL":
      return (
        <svg
          aria-hidden="true"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M6 8h2l1.5-2h5L16 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" />
          <circle cx="12" cy="14" r="3" />
        </svg>
      );
    default:
      return <span className="text-xs font-bold">{icon}</span>;
  }
}

export default function ProgramCard({ item }: ProgramCardProps) {
  const cardClass = item.featured
    ? "border-cyan-200/50 bg-cyan-300/[0.08] shadow-[0_0_32px_rgba(34,211,238,0.16)]"
    : "border-white/10 bg-white/[0.04] shadow-[0_0_35px_rgba(15,23,42,0.35)]";

  return (
    <article className={`flex h-full min-h-[25rem] flex-col rounded-3xl border p-6 ${cardClass}`}>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <p
              className={`text-sm font-semibold tracking-[0.2em] ${
                item.featured ? "text-cyan-100" : "text-cyan-300"
              }`}
            >
              {item.icon}
            </p>
            {item.featured ? (
              <span className="rounded-full border border-cyan-200/50 bg-cyan-200/10 px-2.5 py-0.5 text-xs font-bold tracking-[0.16em] text-cyan-100">
                CORE
              </span>
            ) : null}
          </div>
          <h2 className="text-2xl font-bold text-white">{item.title}</h2>
          <p className="mt-2 text-sm font-medium text-slate-400">
            {item.category}
          </p>
        </div>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-cyan-200 ${
            item.featured
              ? "border-cyan-200/60 bg-cyan-300/15 shadow-[0_0_24px_rgba(34,211,238,0.22)]"
              : "border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_20px_rgba(34,211,238,0.12)]"
          }`}
        >
          <ProgramIcon icon={item.icon} />
        </span>
      </div>

      <p className="mb-4 text-lg font-bold leading-8 text-cyan-100">
        {item.tagline}
      </p>

      <p className="grow leading-8 text-slate-200/90">{item.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="whitespace-nowrap rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-sm text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
