import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { focusAreas, getFocusArea } from "@/app/about/focus-data";

type FocusAreaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return focusAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: FocusAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getFocusArea(slug);

  if (!area) {
    return {};
  }

  return {
    title: `${area.title}｜關於營隊`,
    description: area.description,
    alternates: {
      canonical: `/about/${area.slug}`,
    },
  };
}

export default async function FocusAreaPage({ params }: FocusAreaPageProps) {
  const { slug } = await params;
  const area = getFocusArea(slug);

  if (!area) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <Link
          href="/about"
          className="mb-8 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200"
        >
          返回關於營隊
        </Link>

        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          ABOUT
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          {area.title}
        </h1>

        <p className="max-w-3xl text-2xl font-semibold leading-9 text-cyan-100">
          {area.subtitle}
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {area.description}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {area.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
            >
              <h2 className="mb-4 text-2xl font-bold text-cyan-200">
                {section.heading}
              </h2>
              <p className="leading-8 text-slate-300">{section.body}</p>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-8">
          <h2 className="mb-5 text-2xl font-bold text-white">
            你可以帶走什麼？
          </h2>
          <ul className="grid gap-3 md:grid-cols-3">
            {area.takeaways.map((takeaway) => (
              <li
                key={takeaway}
                className="rounded-2xl border border-cyan-200/20 bg-slate-950/40 px-5 py-4 text-center font-semibold text-cyan-100"
              >
                {takeaway}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
