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
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 text-white">
        <Link href="/" className="font-bold tracking-wide text-cyan-300">
          台大化學營
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-slate-200">
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
