"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { homeHero } from "@/app/home-data";

export default function SiteBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-slate-950">
      <Image
        src={homeHero.keyVisual.src}
        alt=""
        fill
        priority={isHome}
        sizes="100vw"
        className={`object-cover object-center transition duration-700 ${
          isHome
            ? "scale-100 opacity-75 blur-0"
            : "scale-110 opacity-45 blur-md"
        }`}
      />
      <div
        className={`absolute inset-0 transition duration-700 ${
          isHome
            ? "bg-gradient-to-r from-slate-950 via-slate-950/72 to-slate-950/35"
            : "bg-slate-950/82"
        }`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_32%)]" />
    </div>
  );
}
