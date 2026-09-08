import type { Metadata } from "next";
import Image from "next/image";
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
  "台大化學營是由國立臺灣大學化學系學生籌辦、專為高中生設計的寒期營隊。我們期望帶領學員跳脫課本上的公式與反應式，走進大學化學系的真實樣貌，重新認識這門能廣泛連結生活、材料、能源與未來科技的實用學問。",
  "在營隊中，學員將不只是坐在教室裡聽課，而是親自參與多元的活動。透過大實驗、紀念品實作與專業的示範實驗，學員能在安全的環境下動手操作，近距離觀察化學現象背後的原理。此外，我們也安排了「書報討論」環節，引導學員閱讀並整理科學文獻，練習以自己的邏輯詮釋化學議題。",
  "除了紮實的學術內容，台大化學營同樣重視團隊合作的體驗。透過大地遊戲、密室夜解謎、RPG、籌碼競賽與晚會等豐富活動，讓來自各地的高中生在小隊中共同思考、挑戰任務，不僅能培養默契，更能結交志同道合的朋友。",
  "我們期盼每位參與者都能在營隊期間，看見化學更多元的面向。無論是已經對科學抱有濃厚興趣，或是正在探索未來志向，希望台大化學營能成為你接近科學、認識大學生活，並發現自己可能性的起點。",
];

const venueHighlights = [
  {
    title: "台大化學系館：積學館",
    label: "DEPARTMENT",
    image: "/gallery/activity-location/department.jpg",
    alt: "台大化學營活動地點與系館照片",
    description: [
      "積學館位於台大校園腹地中心，鄰近醉月湖與小福樓，生活機能便利。",
      "一、二樓主要為學生活動空間、教室、討論室、辦公室及講堂；三樓至七樓為各教授研究室、實驗室；地下一樓為貴重儀器室。",
      "化學營活動範圍以一、二樓為主，有充足的活動空間及完善的安全設施，能支援營隊課程、討論與團隊活動需求。",
    ],
  },
  {
    title: "化學實驗室：思亮館",
    label: "LABORATORY",
    image: "/gallery/laboratory/Laboratorty.jpg",
    alt: "台大化學營實驗室環境照片",
    description: [
      "思亮館為紀念 1951 至 1960 年台大校長錢思亮而命名。錢校長為理化專家，因此以校長之名命名理學院大樓紀念。",
      "自民國 73 年落成至今，思亮館為所有自然科學相關學系學生學習基礎化學實驗的地方，其中一、二、三樓分別為基礎化學實驗課程中的普通、分析、有機化學實驗室。",
      "每間實驗室均設有完善的實驗設施及安全器材，讓學員能在合適的環境中認識化學實驗的操作方式與學習氛圍。",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="relative z-10 min-h-screen bg-slate-950/80 px-6 pb-24 pt-32 text-white backdrop-blur-[1px]">
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
              className="group relative flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 text-center font-semibold text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-cyan-300/15 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              <span className="absolute inset-0 flex items-center justify-center px-5 text-center text-lg transition-transform duration-300 group-hover:-translate-y-3 group-focus-visible:-translate-y-3">
                {area.title}
              </span>
              <span className="absolute inset-x-0 bottom-5 block translate-y-2 px-5 text-center text-sm font-medium leading-6 text-slate-300 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
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

        <section className="mt-16">
          <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-cyan-300">
            CAMP SPACES
          </p>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            活動場域
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
            從系館到實驗室，學員會在真實的大學化學系環境中認識課程、
            實驗與校園生活。
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {venueHighlights.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <div className="relative aspect-[4/3] bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-cyan-300">
                    {item.label}
                  </p>
                  <h3 className="mb-4 text-2xl font-bold text-cyan-100">
                    {item.title}
                  </h3>
                  <div className="space-y-3 leading-8 text-slate-300">
                    {item.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
