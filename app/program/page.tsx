import type { Metadata } from "next";
import ProgramCard from "@/component/program/ProgramCard";
import { programItems, programTakeaways } from "@/app/program/program-data";

export const metadata: Metadata = {
  title: "活動內容｜台大化學營",
  description:
    "了解台大化學營的活動內容，包含化學實驗、書報討論、示範實驗、密室夜解謎、RPG、大地遊戲、籌碼競賽、晚會與大合照，體驗專為高中生設計的化學營隊。",
  alternates: {
    canonical: "/program",
  },
};

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          PROGRAM
        </p>

        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            活動內容
          </h1>
          <p className="mb-6 text-2xl font-semibold leading-9 text-cyan-100">
            從化學實驗到沉浸式任務，探索台大化學營的每一個精彩片段。
          </p>
          <p className="text-lg leading-8 text-slate-300">
            台大化學營的活動內容不只包含實驗課程，也結合書報討論、示範實驗、團隊競賽、劇情解謎與晚會活動。這是一場為高中生
            設計的化學營隊，學員將在五天的營隊中，從觀察、操作、
            討論到合作挑戰，完整體驗化學實驗、團隊活動與大學生活
            交織出的營隊日常。
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-cyan-300">
              CAMP MOMENTS
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              十個活動分類，串起營隊的每一天
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-400">
            每個活動都承接不同的學習目標：有科學探索，也有團隊合作；
            有腦力激盪，也有體能競賽。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programItems.map((item) => (
            <ProgramCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-10">
        <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-cyan-200">
          JOURNEY
        </p>
        <h2 className="mb-5 text-3xl font-bold md:text-4xl">
          不只是活動清單，而是一段完整的營隊旅程
        </h2>
        <p className="text-lg leading-9 text-slate-200">
          從大地遊戲的破冰開始，到書報討論與實驗課程中的科學探索，
          再到 RPG、密室夜解謎與籌碼競賽中的團隊挑戰，台大化學營希望
          讓學員在不同活動中逐步累積知識、默契與回憶。最後透過晚會與
          大合照，將幾天的共同經歷收束成一段真正屬於營隊的故事。
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
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
              <p className="leading-7 text-slate-300">
                {takeaway.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
