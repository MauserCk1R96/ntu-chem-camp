import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "聯絡資訊",
  description:
    "化營工作團隊聯絡方式，包含官方 Email、Instagram、Facebook 與主辦單位資訊。",
  alternates: {
    canonical: "/contact",
  },
};

const contactMethods = [
  {
    label: "Email",
    value: "ntuchchemcamp@gmail.com",
    href: "mailto:ntuchchemcamp@gmail.com",
    description: "報名、繳費、活動內容與特殊需求相關問題，建議優先使用官方信箱聯繫。",
  },
  {
    label: "Instagram",
    value: "@2026_ntuch_camp",
    href: "https://www.instagram.com/2026_ntuch_camp/",
    description: "追蹤最新活動公告、照片與營隊資訊。",
  },
  {
    label: "Facebook",
    value: "化營Facebook 粉絲專頁",
    href: "https://www.facebook.com/profile.php?id=100064852116048",
    description: "可透過粉絲專頁私訊詢問一般活動問題。",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          CONTACT
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          聯絡資訊
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          若有報名、繳費、活動內容或特殊需求相關問題，歡迎透過以下方式
          聯繫台大化學營工作團隊。若問題涉及個人資料、錄取狀態或繳費確認，
          建議優先使用官方信箱，以利工作人員正式回覆與查詢。
        </p>

        <section className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-8">
          <p className="mb-2 text-sm font-semibold tracking-[0.24em] text-cyan-200">
            ORGANIZER
          </p>
          <h2 className="text-2xl font-bold">主辦單位：台大化學系系學會</h2>
        </section>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {contactMethods.map((method) => (
            <article
              key={method.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_35px_rgba(15,23,42,0.35)] transition hover:border-cyan-300/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-300">
                {method.label.toUpperCase()}
              </p>
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-xl font-bold text-white underline-offset-4 hover:text-cyan-200 hover:underline"
              >
                {method.value}
              </a>
              <p className="mt-4 leading-7 text-slate-300">
                {method.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
