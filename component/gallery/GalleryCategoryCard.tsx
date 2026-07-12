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
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
        {coverSrc ? (
          <Image
            src={coverSrc}
            alt={`台大化學營${category.title}分類封面`}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 90vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),linear-gradient(135deg,rgba(15,23,42,1),rgba(30,41,59,1))] px-6 text-center">
            <span className="text-sm font-semibold tracking-[0.2em] text-cyan-200">
              PHOTO COMING SOON
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-white">{category.title}</h2>
          <span className="rounded-full border border-cyan-300/40 px-3 py-1 text-xs text-cyan-200">
            {category.images.length} 張
          </span>
        </div>
        <p className="line-clamp-3 text-sm leading-6 text-slate-300">
          {category.description}
        </p>
      </div>
    </a>
  );
}
