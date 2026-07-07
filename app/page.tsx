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
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm tracking-[0.3em] text-cyan-300">
          NTU CHEMISTRY CAMP
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          台大化學營
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
          這個夏天，讓化學不只存在課本裡。
          走進台大化學系，探索分子世界的無限可能。
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
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
          活動日期：2026 年 X 月 X 日至 X 月 X 日<br />
          活動地點：國立臺灣大學化學系<br />
          招生對象：全國高中職學生<br />
          報名費用：NT$ XXXX
        </p>

        <a
          href="https://forms.gle/你的表單連結"
          target="_blank"
          className="inline-block rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          前往報名表單
        </a>
      </section>
    </main>
  );
}
