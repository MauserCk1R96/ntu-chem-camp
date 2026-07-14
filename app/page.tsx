import Image from "next/image";

const highlights = [
  {
    title: "實驗課程",
    description: "親手操作高中課本看不到的化學實驗，從顏色、光、反應中理解分子世界。",
  },
  {
    title: "教授講座",
    description: "認識化學在材料、能源、生命科學與產業中的應用。",
  },
  {
    title: "學長姐交流",
    description: "聽台大化學系學生分享課業、社團、研究與大學生活。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        <div className="text-center md:text-left">
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-300">
            NTU CHEMISTRY CAMP
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            台大化學營
          </h1>

          <p className="mb-5 max-w-2xl text-lg leading-8 text-slate-300">
            這個冬天，讓化學不只存在課本裡。
            走進台大化學系，探索分子世界的無限可能。
          </p>

          <p className="mb-8 max-w-2xl text-lg font-semibold leading-8 text-cyan-100">
            在霓虹與分子交錯的空間中，重新想像化學的可能。
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#register"
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
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-white/[0.04] shadow-[0_0_45px_rgba(34,211,238,0.18)]">
            <div className="relative aspect-[4/3] md:aspect-[5/4]">
              <Image
                src="/gallery/activity-location/cyber-molecule.jpg"
                alt="積學館內霓虹分子裝置，呈現台大化學營 Cyberpunk 主題氛圍"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 92vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-slate-950/25" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <p className="text-sm font-semibold tracking-[0.24em] text-cyan-200">
                CYBERPUNK CHEMISTRY
              </p>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                積學館中的霓虹分子裝置，讓化學從符號變成光影與空間的想像。
              </p>
            </div>
          </div>
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
          href="https://docs.google.com/forms/d/e/1FAIpQLSfR076Pp1ChtU1-3SQOgQ989M0kuM7ur9sgsv3Yysz5mksVUA/viewform?usp=sharing&ouid=103461614838581818619"
          target="_blank"
          className="inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          前往報名表單
        </a>
      </section>
    </main>
  );
}
