"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { GalleryCategory } from "@/app/gallery/gallery-data";
import {
  getGalleryImageAlt,
  getGalleryImagePath,
} from "@/app/gallery/gallery-data";

type GalleryGridProps = {
  category: GalleryCategory;
};

export default function GalleryGrid({ category }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }

    return category.images[activeIndex] ?? null;
  }, [activeIndex, category.images]);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === 0 ? category.images.length - 1 : current - 1;
    });
  }, [category.images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === category.images.length - 1 ? 0 : current + 1;
    });
  }, [category.images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  if (category.images.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-cyan-300/30 bg-cyan-300/5 p-8 text-center">
        <p className="text-lg font-semibold text-cyan-100">
          照片準備中，敬請期待。
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          之後只要把照片放進 public/gallery/{category.folder}/，並在
          gallery-data.ts 加入檔名，就會顯示在這個分類下。
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {category.images.map((imageName, index) => (
          <figure
            key={imageName}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 hover:border-cyan-300/60 hover:shadow-[0_0_28px_rgba(34,211,238,0.16)]"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="block w-full text-left"
              aria-label={`放大查看${getGalleryImageAlt(category, index)}`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-slate-900">
                <Image
                  src={getGalleryImagePath(category, imageName)}
                  alt={getGalleryImageAlt(category, index)}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 92vw"
                  className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              </span>
            </button>
          </figure>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-4 py-6 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label={`${category.title}照片檢視`}
          onClick={closeLightbox}
        >
          <div
            className="relative flex max-h-full w-full max-w-6xl flex-col gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold tracking-[0.24em] text-cyan-300">
                  {category.title}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  {(activeIndex ?? 0) + 1} / {category.images.length}
                </p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
                aria-label="關閉照片檢視"
              >
                關閉
              </button>
            </div>

            <div className="relative h-[72vh] overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.16)]">
              <Image
                src={getGalleryImagePath(category, activeImage)}
                alt={getGalleryImageAlt(category, activeIndex ?? 0)}
                fill
                sizes="92vw"
                className="object-contain"
                priority
              />
            </div>

            {category.images.length > 1 ? (
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
                  aria-label="查看上一張照片"
                >
                  上一張
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
                  aria-label="查看下一張照片"
                >
                  下一張
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
