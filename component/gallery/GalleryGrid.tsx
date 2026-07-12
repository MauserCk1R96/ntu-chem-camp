import Image from "next/image";
import type { GalleryCategory } from "@/app/gallery/gallery-data";
import {
  getGalleryImageAlt,
  getGalleryImagePath,
} from "@/app/gallery/gallery-data";

type GalleryGridProps = {
  category: GalleryCategory;
};

export default function GalleryGrid({ category }: GalleryGridProps) {
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
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {category.images.map((imageName, index) => (
        <figure
          key={imageName}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
            <Image
              src={getGalleryImagePath(category, imageName)}
              alt={getGalleryImageAlt(category, index)}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <figcaption className="px-4 py-3 text-sm text-slate-300">
            {getGalleryImageAlt(category, index)}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
