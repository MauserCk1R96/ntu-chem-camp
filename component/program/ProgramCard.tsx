import type { ProgramItem } from "@/app/program/program-data";

type ProgramCardProps = {
  item: ProgramItem;
};

export default function ProgramCard({ item }: ProgramCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_35px_rgba(15,23,42,0.35)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-300">
            {item.icon}
          </p>
          <h2 className="text-2xl font-bold text-white">{item.title}</h2>
        </div>
        <span className="h-12 w-12 shrink-0 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_20px_rgba(34,211,238,0.12)]" />
      </div>

      <p className="mb-4 text-lg font-semibold leading-7 text-cyan-100">
        {item.tagline}
      </p>

      <p className="grow leading-8 text-slate-300">{item.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-sm text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
