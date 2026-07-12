import type { Metadata } from "next";
import { siteDescription, siteUrl } from "@/app/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const highlights = [
  {
    title: "化學實驗課程",
    description:
      "進入實驗室親手操作，觀察反應、顏色變化與材料性質，讓高中課本中的化學概念變得具體而有感。",
  },
  {
    title: "教授講座",
    description:
      "由國立臺灣大學化學系師長分享研究與產業案例，認識化學如何連結材料、能源、生命科學與日常生活。",
  },
  {
    title: "學長姐交流",
    description:
      "和台大化學系學生聊課程、社團、研究與大學生活，提前想像自己在大學探索自然科學的樣子。",
  },
];

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "台大化學營｜NTU Chemistry Camp",
  description: siteDescription,
  url: siteUrl,
  startDate: "2027-01-25",
  endDate: "2027-01-29",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "國立臺灣大學化學系",
  },
  organizer: {
    "@type": "Organization",
    name: "國立臺灣大學化學系學生",
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm tracking-[0.3em] text-cyan-300">
          NTU CHEMISTRY CAMP
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          台大化學營｜給高中生的化學探索營隊
        </h1>

        <p className="mb-5 max-w-3xl text-lg leading-8 text-slate-300">
          台大化學營由國立臺灣大學化學系學生籌辦，是為高中生設計的
          暑期化學營隊。活動結合化學實驗課程、教授講座、學長姐交流與
          台大校園生活體驗，帶你從課本走進真正的化學現場。
        </p>

        <p className="mb-8 max-w-3xl leading-8 text-slate-400">
          如果你對化學與自然科學有興趣，想親手做實驗、認識大學研究、
          聽見學長姐的真實經驗，也想在營隊中結交同樣熱愛探索的夥伴，
          這裡會是一段適合開始想像未來的暑期營隊旅程。
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/registration"
            className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            立即報名
          </a>

          <a
            href="#program"
            className="rounded-full border border-white/30 px-8 py-3 font-semibold transition hover:bg-white/10"
          >
            查看活動內容
          </a>
        </div>
      </section>

      <section id="program" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">
          活動亮點
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-xl font-bold text-cyan-300">
                {item.title}
              </h3>
              <p className="leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="register" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          報名資訊
        </h2>

        <p className="mb-8 leading-8 text-slate-300">
          活動日期：2027 年 1 月 25 日至 1 月 29 日<br />
          活動地點：國立臺灣大學化學系<br />
          招生對象：全國高中職學生<br />
          報名費用：NT$ 7500
        </p>

        <a
          href="/registration"
          className="inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          查看報名與退款須知
        </a>
      </section>
    </main>
  );
}
