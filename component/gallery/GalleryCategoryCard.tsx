import Image from "next/image";
import type { GalleryCategory } from "@/app/gallery/gallery-data";
import { getGalleryImagePath } from "@/app/gallery/gallery-data";

type GalleryCategoryCardProps = {
  category: GalleryCategory;
};

export default function GalleryCategoryCard({
  category,
}: GalleryCategoryCardProps) {
  const coverImage = category.coverImage ?? category.images[0];
  const coverSrc = coverImage
    ? getGalleryImagePath(category, coverImage)
    : undefined;

  return (
    <a
      href={`#${category.id}`}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_0_34px_rgba(34,211,238,0.2)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
        {coverSrc ? (
          <>
            <Image
              src={coverSrc}
              alt={`台大化學營${category.title}分類封面`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
              className="object-cover brightness-90 transition duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),linear-gradient(135deg,rgba(15,23,42,1),rgba(30,41,59,1))] px-6 text-center">
            <span className="text-sm font-semibold tracking-[0.2em] text-cyan-200">
              照片準備中，敬請期待。
            </span>
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan-300/40 bg-slate-950/75 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur">
            {category.images.length} 張照片
          </span>
          <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
            {category.images.length > 0 ? "瀏覽照片" : "即將公開"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold text-white">
          {category.title}
        </h2>
        <p className="min-h-12 text-sm leading-6 text-slate-300">
          {category.shortDescription}
        </p>
      </div>
    </a>
  );
}
