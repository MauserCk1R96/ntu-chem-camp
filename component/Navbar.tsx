"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "關於營隊" },
  { href: "/program", label: "活動內容" },
  { href: "/gallery", label: "活動照片" },
  { href: "/registration", label: "報名資訊" },
  { href: "/faq", label: "常見問題" },
  { href: "/contact", label: "聯絡資訊" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex min-h-16 max-w-6xl flex-col items-start justify-between gap-3 px-6 py-3 text-white lg:flex-row lg:items-center">
        <div className="flex shrink-0 items-center gap-4">
          <Link href="/" className="whitespace-nowrap font-bold tracking-wide text-cyan-300">
            台大化學營
          </Link>
          <Link
            href="/admission-list"
            aria-current={pathname === "/admission-list" ? "page" : undefined}
            className="whitespace-nowrap rounded-lg border border-cyan-300/60 bg-cyan-300/15 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/25 hover:shadow-[0_0_18px_rgba(34,211,238,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            錄取名單
          </Link>
        </div>

        <div className="flex w-full min-w-0 items-center gap-x-5 overflow-x-auto whitespace-nowrap text-sm text-slate-200 lg:w-auto lg:justify-end">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "border-b-2 border-cyan-300 pb-1 font-semibold text-cyan-300 transition"
                    : "border-b-2 border-transparent pb-1 transition hover:text-cyan-300"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
