import type { Metadata } from "next";
import { connection } from "next/server";
import { admissionRecords, type PaymentStatus } from "@/app/admission-list/admission-data";
import { isAdmissionListOpen } from "@/app/admission-list/release";

export const metadata: Metadata = {
  title: "正取名單與繳費狀態",
  description: "查詢 2027 台大化學營正取名單與繳費狀態。",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const paymentStatusClass: Record<PaymentStatus, string> = {
  已繳費: "border-emerald-300/40 bg-emerald-300/10 text-emerald-100",
  未繳費: "border-amber-300/40 bg-amber-300/10 text-amber-100",
  待確認: "border-slate-300/30 bg-white/5 text-slate-300",
};

export default async function AdmissionListPage() {
  await connection();

  if (!isAdmissionListOpen()) {
    return (
      <main className="relative z-10 min-h-screen bg-slate-950/80 px-6 pb-24 pt-32 text-white">
        <section className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
            ADMISSION
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">正取名單</h1>
          <p className="max-w-3xl text-lg leading-9 text-slate-300">
            名單將於 2026 年 11 月 6 日 12:00（台灣時間）開放查詢。
          </p>
        </section>
      </main>
    );
  }

  const paidCount = admissionRecords.filter(
    (record) => record.paymentStatus === "已繳費",
  ).length;
  const pendingCount = admissionRecords.filter(
    (record) => (record.paymentStatus ?? "待確認") === "待確認",
  ).length;
  const summaryItems = [
    { label: "正取人數", value: admissionRecords.length },
    { label: "已登記繳費", value: paidCount },
    { label: "繳費待確認", value: pendingCount },
  ];

  return (
    <main className="relative z-10 min-h-screen bg-slate-950/80 px-6 pb-24 pt-32 text-white backdrop-blur-[1px]">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-300">
          ADMISSION
        </p>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          正取名單與繳費狀態
        </h1>
        <p className="max-w-3xl text-lg leading-9 text-slate-300">
          以下為 2027 台大化學營正取名單。為保障個人隱私，姓名第二個字以 O
          取代。繳費狀態將於工作團隊核對後更新，請以錄取通知信件為準。
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3" aria-label="名單摘要">
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
        <div className="mb-6">
          <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-cyan-300">
            ACCEPTED STUDENTS
          </p>
          <h2 className="text-2xl font-bold text-cyan-100">正取名單</h2>
        </div>

        <div className="grid gap-3">
          <div className="hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 md:grid md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <span>高中名稱</span>
            <span>姓名</span>
            <span>錄取狀態</span>
            <span>繳費狀態</span>
          </div>

          {admissionRecords.map((record) => {
            const paymentStatus = record.paymentStatus ?? "待確認";

            return (
              <article
                key={`${record.highSchool}-${record.maskedName}`}
                className="grid gap-4 rounded-2xl bg-white/5 p-5 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:items-center"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-cyan-300 md:hidden">
                    高中名稱
                  </p>
                  <p className="font-semibold text-white">{record.highSchool}</p>
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
                  <span className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-100">
                    正取
                  </span>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold tracking-[0.16em] text-cyan-300 md:hidden">
                    繳費狀態
                  </p>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${paymentStatusClass[paymentStatus]}`}
                  >
                    {paymentStatus}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
