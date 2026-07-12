import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於營隊",
  description:
    "認識台大化學營的活動理念、籌辦單位與適合高中生參加的化學探索內容。",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          ABOUT
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          關於台大化學營
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          台大化學營希望帶領高中職學生走進化學系，透過實驗課程、教授講座、
          學長姐交流與校園探索，認識化學在研究、產業與日常生活中的各種可能。
        </p>
      </section>
    </main>
  );
}
