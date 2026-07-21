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
  "台大化學營是由國立臺灣大學化學系學生籌辦，專為高中生設計的暑期營隊。我們希望透過實驗課程、專題討論、團隊活動與學長姐交流，帶領學員走進大學化學系的真實樣貌，重新認識化學不只是課本上的公式與反應式，而是一門能連結生活、研究、材料、能源與未來科技的學問。",
  "在營隊中，學員將不只是坐在教室裡聽課，而是親自參與多元的活動設計。從大實驗、紀念品實驗到示範實驗，學員能近距離觀察專業的實驗操作，也能在安全的環境中動手體驗化學現象背後的原理；透過書報討論，學員將練習閱讀、整理與表達科學內容，學習如何用自己的方式理解一個化學議題。",
  "除了學術與實驗內容，台大化學營也重視團隊合作與營隊回憶的建立。大地遊戲、密室夜解謎、RPG、籌碼競賽與晚會等活動，讓來自不同學校的高中生在小隊中一起思考、合作、挑戰任務，逐漸累積默契，也在過程中認識志同道合的朋友。",
  "我們希望每位參與者都能在這幾天裡，看見化學更立體的樣貌：它可以是嚴謹的實驗操作，也可以是充滿創意的問題解決；可以是安靜的閱讀與討論，也可以是熱鬧的團隊挑戰。無論你已經對化學充滿興趣，或只是正在探索未來的方向，台大化學營都希望成為你接近科學、認識大學生活，並發現自己可能性的起點。",
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
              className="group flex h-28 flex-col items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 text-center font-semibold text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-cyan-300/15 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              <span className="block text-lg transition-transform duration-300 group-hover:-translate-y-3 group-focus-visible:-translate-y-3">
                {area.title}
              </span>
              <span className="mt-2 block translate-y-2 text-sm font-medium leading-6 text-slate-300 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
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
