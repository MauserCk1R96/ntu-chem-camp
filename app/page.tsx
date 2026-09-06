import Image from "next/image";
import Link from "next/link";
import {
  campPackage,
  homeHero,
  homeHighlights,
  registrationSummary,
} from "@/app/home-data";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen text-white">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div className="text-center md:text-left">
          <p className="mb-4 text-sm tracking-[0.3em] text-cyan-300">
            {homeHero.eyebrow}
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            {homeHero.campName}
          </h1>

          {homeHero.themeSlogan ? (
            <p className="mt-4 max-w-2xl text-2xl font-semibold leading-9 text-cyan-100">
              {homeHero.themeSlogan}
            </p>
          ) : null}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            {homeHero.description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href={homeHero.primaryCta.href}
              className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {homeHero.primaryCta.label}
            </a>

            <Link
              href={homeHero.secondaryCta.href}
              className="rounded-full border border-white/30 px-8 py-3 font-semibold transition hover:bg-white/10"
            >
              {homeHero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-4 rounded-[2rem] bg-cyan-300/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-white/[0.04] shadow-[0_0_45px_rgba(34,211,238,0.18)]">
            <div className="relative aspect-[3/2] bg-slate-900">
              <Image
                src={homeHero.atmosphereImage.src}
                alt={homeHero.atmosphereImage.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 92vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-slate-950/20" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <p className="text-sm font-semibold tracking-[0.24em] text-cyan-200">
                {homeHero.atmosphereImage.caption}
              </p>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                在霓虹與分子交錯的空間中，探索化學的另一種想像。
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
          {homeHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/35 bg-white/[0.10] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_18px_60px_rgba(2,6,23,0.38),0_0_28px_rgba(34,211,238,0.16)] backdrop-blur-2xl backdrop-saturate-150"
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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 rounded-3xl border border-cyan-100/45 bg-cyan-100/[0.10] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_20px_70px_rgba(2,6,23,0.4),0_0_36px_rgba(34,211,238,0.2)] backdrop-blur-2xl backdrop-saturate-150 md:grid-cols-[0.85fr_1.15fr] md:p-10">
          <div className="relative min-h-56 overflow-hidden rounded-3xl border border-dashed border-cyan-100/45 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_0_24px_rgba(34,211,238,0.14)] backdrop-blur-2xl backdrop-saturate-150">
            {campPackage.image ? (
              <Image
                src={campPackage.image}
                alt={campPackage.imageAlt}
                fill
                sizes="(min-width: 768px) 35vw, 92vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full min-h-56 items-center justify-center px-6 text-center">
                <div>
                  <p className="text-sm font-semibold tracking-[0.24em] text-cyan-300">
                    {campPackage.statusLabel}
                  </p>
                  <p className="mt-3 text-lg font-bold text-cyan-100">
                    營包圖片準備中
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-cyan-300">
              CAMP KIT
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {campPackage.title}
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              {campPackage.description}
            </p>
          </div>
        </div>
      </section>

      <section id="register" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          報名資訊
        </h2>

        <p className="mb-8 leading-8 text-slate-300">
          活動日期：{registrationSummary.date}<br />
          活動地點：{registrationSummary.location}<br />
          招生對象：{registrationSummary.audience}<br />
          報名費用：{registrationSummary.fee}
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={registrationSummary.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            前往報名表單
          </a>
          <Link
            href="/about"
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            關於營隊
          </Link>
        </div>
      </section>
    </main>
  );
}
