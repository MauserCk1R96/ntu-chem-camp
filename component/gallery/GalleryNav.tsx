"use client";

import { useEffect, useState } from "react";
import type { GalleryCategory } from "@/app/gallery/gallery-data";

type GalleryNavProps = {
  categories: GalleryCategory[];
};

export default function GalleryNav({ categories }: GalleryNavProps) {
  const [activeId, setActiveId] = useState("all");

  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(category.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [categories]);

  const baseClass =
    "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition duration-300";
  const activeClass =
    "border-cyan-200 bg-cyan-300 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)]";
  const idleClass =
    "border-white/15 bg-white/[0.04] text-slate-200 hover:border-cyan-300/70 hover:text-cyan-100 hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]";

  return (
    <nav
      aria-label="活動照片分類導覽"
      className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0"
    >
      <div className="flex min-w-max gap-3 md:min-w-0 md:flex-wrap">
        <a
          href="#gallery-categories"
          onClick={() => setActiveId("all")}
          className={`${baseClass} ${
            activeId === "all" ? activeClass : idleClass
          }`}
        >
          全部
        </a>
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className={`${baseClass} ${
              activeId === category.id ? activeClass : idleClass
            }`}
          >
            {category.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
