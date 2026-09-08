import type { Metadata } from "next";
import ProgramCard from "@/component/program/ProgramCard";
import { programItems, programTakeaways } from "@/app/program/program-data";

export const metadata: Metadata = {
  title: "活動內容｜台大化學營",
  description:
    "了解台大化學營的活動內容，包含化學實驗、書報討論、示範實驗、密室夜解謎、RPG、大地遊戲、籌碼競賽、晚會與大合照。",
  alternates: {
    canonical: "/program",
  },
};

export default function ProgramPage() {
  return (
    <main className="relative z-10 min-h-screen bg-slate-950/80 px-6 pb-24 pt-32 text-white backdrop-blur-[1px]">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          PROGRAM
        </p>

        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            活動內容
          </h1>
          <p className="mb-6 text-2xl font-semibold leading-9 text-cyan-100">
            五天四夜，從實驗、討論到團隊活動，一起看看營期間會做些什麼。
          </p>
          <p className="max-w-3xl text-lg leading-9 text-slate-300">
            台大化學營除了實驗課程，也安排書報討論、團隊競賽、劇情任務
            與晚會等活動。學員會以小隊形式參與不同任務，在五天的營期中
            實際操作、討論、合作，也從活動中認識大學化學的學習方式與校園生活。
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="mb-8">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-cyan-300">
              CAMP MOMENTS
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              營隊裡會有哪些活動？
            </h2>
          </div>
          <p className="mt-4 max-w-xl leading-8 text-slate-300">
            活動會穿插在營期間進行，包含實驗、討論、競賽與團隊任務。
          </p>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {programItems.map((item) => (
            <ProgramCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl">
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-cyan-300">
            TAKEAWAYS
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            你會在這裡收穫什麼？
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programTakeaways.map((takeaway, index) => (
            <article
              key={takeaway.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-cyan-300">
                0{index + 1}
              </p>
              <h3 className="mb-4 text-xl font-bold text-white">
                {takeaway.title}
              </h3>
              <p className="leading-8 text-slate-300">
                {takeaway.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
