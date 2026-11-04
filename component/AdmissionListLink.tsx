"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  admissionListOpensAt,
  isAdmissionListOpen,
} from "@/app/admission-list/release";

export default function AdmissionListLink() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateOpenState = () => setIsOpen(isAdmissionListOpen());
    const timer = window.setTimeout(
      updateOpenState,
      Math.max(0, admissionListOpensAt - Date.now()),
    );

    document.addEventListener("visibilitychange", updateOpenState);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", updateOpenState);
    };
  }, []);

  return (
    <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-white">正取名單查詢</h3>
        <p className="mt-1 text-sm leading-6 text-slate-300">
          {isOpen
            ? "名單已開放查詢，繳費狀態將於核對後更新。"
            : "2026/11/6 12:00（台灣時間）開放查詢。"}
        </p>
      </div>
      {isOpen ? (
        <Link
          href="/admission-list"
          className="inline-flex shrink-0 justify-center rounded-full bg-cyan-400 px-6 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          查看正取名單
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex shrink-0 justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2 font-semibold text-slate-400"
        >
          尚未開放查詢
        </span>
      )}
    </div>
  );
}
