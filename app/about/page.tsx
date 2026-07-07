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
