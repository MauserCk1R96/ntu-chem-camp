import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 text-white">
        <Link href="/" className="font-bold tracking-wide text-cyan-300">
          NTU Chem Camp
        </Link>

        <div className="flex items-center gap-6 text-sm text-slate-200">
          <Link href="/about" className="transition hover:text-cyan-300">
            關於營隊
          </Link>
          <Link href="/program" className="transition hover:text-cyan-300">
            課程內容
          </Link>
          <Link href="/gallery" className="transition hover:text-cyan-300">
            活動照片
          </Link>
          <Link href="/faq" className="transition hover:text-cyan-300">
            常見問題
          </Link>
        </div>
      </nav>
    </header>
  );
}
