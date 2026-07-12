import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "活動內容",
  description:
    "台大化學營活動內容包含化學實驗課程、教授講座、學長姐交流與台大校園生活體驗。",
  alternates: {
    canonical: "/program",
  },
};

const programs = [
  {
    title: "實驗課程",
    description: "進入實驗室親手操作，觀察反應、顏色變化與材料性質。",
  },
  {
    title: "教授講座",
    description: "從研究與產業案例理解化學如何連結能源、材料與生命科學。",
  },
  {
    title: "學長姐交流",
    description: "和台大化學系學生聊課程、社團、研究與大學生活。",
  },
];

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          PROGRAM
        </p>

        <h1 className="mb-12 text-4xl font-bold md:text-6xl">
          活動內容
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="mb-4 text-xl font-bold text-cyan-300">
                {program.title}
              </h2>
              <p className="leading-7 text-slate-300">
                {program.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
