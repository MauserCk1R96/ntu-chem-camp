import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 text-white">
        <Link href="/" className="font-bold tracking-wide text-cyan-300">
          台大化學營
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-slate-200">
          <Link href="/about" className="transition hover:text-cyan-300">
            關於營隊
          </Link>
          <Link href="/program" className="transition hover:text-cyan-300">
            課程內容
          </Link>
          <Link href="/gallery" className="transition hover:text-cyan-300">
            活動照片
          </Link>
          <Link href="/registration" className="transition hover:text-cyan-300">
            報名資訊
          </Link>
          <Link href="/faq" className="transition hover:text-cyan-300">
            常見問題
          </Link>
          <Link href="/contact" className="transition hover:text-cyan-300">
            聯絡資訊
          </Link>
        </div>
      </nav>
    </header>
  );
}
