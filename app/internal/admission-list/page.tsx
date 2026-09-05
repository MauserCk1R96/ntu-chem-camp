import type { Metadata } from "next";
import { admissionRecords } from "@/app/internal/admission-list/admission-data";

export const metadata: Metadata = {
  title: "錄取與繳費名單｜台大化學營",
  description:
    "台大化學營錄取名單與繳費狀態內部確認頁，正式公開前請確認資料遮蔽與行政資訊正確。",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const summaryItems = [
  {
    label: "名單筆數",
    value: admissionRecords.length,
  },
  {
    label: "已繳費",
    value: admissionRecords.filter((record) => record.paymentStatus === "已繳費")
      .length,
  },
  {
    label: "尚未繳費",
    value: admissionRecords.filter((record) => record.paymentStatus === "未繳費")
      .length,
  },
];

const paymentStatusClass = {
  已繳費: "border-emerald-300/40 bg-emerald-300/10 text-emerald-100",
  未繳費: "border-amber-300/40 bg-amber-300/10 text-amber-100",
  尚未開放: "border-slate-300/30 bg-white/5 text-slate-300",
};

const admissionStatusClass = {
  正取: "border-cyan-300/40 bg-cyan-300/10 text-cyan-100",
  備取: "border-indigo-300/40 bg-indigo-300/10 text-indigo-100",
  未錄取: "border-slate-300/30 bg-white/5 text-slate-300",
};

export default function AdmissionListPage() {
  return (
    <main className="relative z-10 min-h-screen bg-slate-950/80 px-6 pb-24 pt-32 text-white backdrop-blur-[1px]">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          INTERNAL LIST
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          錄取與繳費名單
        </h1>

        <p className="max-w-3xl text-lg leading-9 text-slate-300">
          此頁目前未放入網站導覽列與 sitemap，並已設定 noindex，供工作團隊
          先確認錄取名單與繳費狀態的呈現方式。正式公開前，請再次確認姓名
          已完成遮蔽。
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
        {summaryItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5"
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
              {item.label}
            </p>
            <p className="mt-3 text-3xl font-bold text-cyan-100">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-8 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_35px_rgba(15,23,42,0.35)] md:p-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-cyan-300">
              ADMISSION
            </p>
            <h2 className="text-2xl font-bold text-cyan-100">
              名單資料
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            欄位包含高中名稱、遮蔽姓名、錄取狀態與繳費狀態。
          </p>
        </div>

        {admissionRecords.length > 0 ? (
          <div className="grid gap-3">
            <div className="hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold tracking-[0.08em] text-cyan-100 md:grid md:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <span>高中名稱</span>
              <span>姓名</span>
              <span>錄取狀態</span>
              <span>繳費狀態</span>
            </div>

            {admissionRecords.map((record) => (
              <article
                key={`${record.highSchool}-${record.maskedName}-${record.admissionStatus}`}
                className="grid gap-4 rounded-2xl bg-white/5 p-5 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:items-center"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-cyan-300 md:hidden">
                    高中名稱
                  </p>
                  <p className="font-semibold text-white">
                    {record.highSchool}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-cyan-300 md:hidden">
                    姓名
                  </p>
                  <p className="text-slate-200">{record.maskedName}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-cyan-300 md:hidden">
                    錄取狀態
                  </p>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${admissionStatusClass[record.admissionStatus]}`}
                  >
                    {record.admissionStatus}
                  </span>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-cyan-300 md:hidden">
                    繳費狀態
                  </p>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${paymentStatusClass[record.paymentStatus]}`}
                  >
                    {record.paymentStatus}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6">
            <p className="text-xl font-bold text-cyan-100">
              名單資料準備中
            </p>
            <p className="mt-3 leading-8 text-slate-300">
              目前尚未放入錄取名單。之後可在 admission-data.ts 新增高中名稱、
              已遮蔽姓名、錄取狀態與繳費狀態。
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
