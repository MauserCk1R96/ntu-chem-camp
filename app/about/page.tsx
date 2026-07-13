import type { Metadata } from "next";
import Link from "next/link";
import { focusAreas } from "@/app/about/focus-data";

export const metadata: Metadata = {
  title: "關於營隊",
  description:
    "認識台大化學營的活動理念、籌辦單位與適合高中生參加的化學探索內容。",
  alternates: {
    canonical: "/about",
  },
};

const aboutParagraphs = [
  "台大化學營是由國立臺灣大學化學系學生籌辦，專為高中生設計的暑期營隊。我們希望透過實驗課程、專題討論、團隊活動與學長姐交流，帶領學員走進大學化學系的真實樣貌，重新認識化學不只是課本上的公式與反應式，而是一門能連結生活、研究、材料、能源與未來科技的學問。",
  "在營隊中，學員將不只是坐在教室裡聽課，而是親自參與多元的活動設計。從大實驗、紀念品實驗到示範實驗，學員能近距離觀察專業的實驗操作，也能在安全的環境中動手體驗化學現象背後的原理；透過書報討論，學員將練習閱讀、整理與表達科學內容，學習如何用自己的方式理解一個化學議題。",
  "除了學術與實驗內容，台大化學營也重視團隊合作與營隊回憶的建立。大地遊戲、密室夜解謎、RPG、籌碼競賽與晚會等活動，讓來自不同學校的高中生在小隊中一起思考、合作、挑戰任務，逐漸累積默契，也在過程中認識志同道合的朋友。",
  "我們希望每位參與者都能在這幾天裡，看見化學更立體的樣貌：它可以是嚴謹的實驗操作，也可以是充滿創意的問題解決；可以是安靜的閱讀與討論，也可以是熱鬧的團隊挑戰。無論你已經對化學充滿興趣，或只是正在探索未來的方向，台大化學營都希望成為你接近科學、認識大學生活，並發現自己可能性的起點。",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          ABOUT
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          關於台大化學營
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          走進化學系，從實驗、討論、團隊任務與校園生活中，探索自我。
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/about/${area.slug}`}
              className="group rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-5 text-center font-semibold text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-cyan-300/15 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              <span className="block text-lg">{area.title}</span>
              <span className="mt-2 block text-sm font-medium leading-6 text-slate-300 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                查看介紹
              </span>
            </Link>
          ))}
        </div>

        <article className="mt-12 space-y-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_35px_rgba(15,23,42,0.4)] md:p-10">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-9 text-slate-300">
              {paragraph}
            </p>
          ))}
        </article>
      </section>
    </main>
  );
}
